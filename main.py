# %%
from gtts import gTTS
from image_creation import image_maker
from IPython.display import Audio
from nltk.tag import pos_tag
from transformers import BertTokenizer, BertForMaskedLM
from nltk.tokenize import word_tokenize
import torch
import string
import requests
import transformers
from torch.utils.data import DataLoader, Dataset
import torch
import json
from sklearn.model_selection import train_test_split
import nltk
import re
import sqlite3
import os
import torch
from torch.utils.tensorboard import SummaryWriter
writer = SummaryWriter()
import transformers
from torch.utils.data import DataLoader, Dataset
import torch
import json
from sklearn.model_selection import train_test_split
from transformers.data.data_collator import DataCollatorForLanguageModeling

nltk.download('punkt')
nltk.download('averaged_perceptron_tagger')

bert_tokenizer = BertTokenizer.from_pretrained('kykim/bert-kor-base')
bert_model = BertForMaskedLM.from_pretrained('kykim/bert-kor-base').eval()
with open('C:/intersentence.json',encoding='UTF-8') as f:
  inter = json.load(f)

inter_con = [e['context'] for e in inter]
sentence = []
for e in inter:
  sentence.append(e['context'])
  for s in e['sentences']:
    if s['gold_label'] == 'anti-stereotype':
      sentence.append(s['sentence'])

x_train, x_test = train_test_split(sentence, test_size=0.2, shuffle=True)
x_valid, x_test = train_test_split(x_test, test_size=0.5, shuffle=True)

train_encodings = bert_tokenizer(x_train, truncation=True, padding=True, max_length=None)
val_encodings = bert_tokenizer(x_valid, truncation=True, padding=True, max_length=None)
test_encodings = bert_tokenizer(x_test, truncation=True, padding=True, max_length=None)

#map-style dataset
class Dataset(Dataset):
    def __init__(self, encodings):
        self.encodings = encodings

    def __getitem__(self, idx):
        item = {key: torch.tensor(val[idx]) for key, val in self.encodings.items()}
        return item

    def __len__(self):
        return len(self.encodings)

train_dataset = Dataset(train_encodings)
val_dataset = Dataset(val_encodings)
test_dataset = Dataset(test_encodings)

collator = DataCollatorForLanguageModeling(bert_tokenizer)

#mini batch 생성
#길이가 변하는 input을 처리하기 위해 collator 함수 재정의
train_loader = DataLoader(train_dataset, batch_size=64, shuffle=True, collate_fn=collator)
val_loader = DataLoader(val_dataset, batch_size=32, shuffle=True, collate_fn=collator)

for batch in train_loader:
  bert_model(**batch)
  break

for batch in val_loader:
  bert_model(**batch)
  break

#위에랑 같음
batch = next(iter(train_loader))

bert_model(**batch)

from transformers import AdamW

optimizer = AdamW(bert_model.parameters(), lr=5e-5)

from transformers import get_scheduler

num_epochs = 1000
num_training_steps = num_epochs * len(train_loader)
lr_scheduler = get_scheduler(
    "linear",
    optimizer=optimizer,
    num_warmup_steps=0,
    num_training_steps=num_training_steps
)

import torch

device = torch.device("cuda") if torch.cuda.is_available() else torch.device("cpu")
bert_model.to(device)

from tqdm.auto import tqdm

progress_bar = tqdm(range(num_training_steps))

# 모델을 학습 모드로 변환

# bert_model.train() # 여기서 할 필요 없음

eval_step = 1
patience = 0  # 3이면 학습 종료
end_step = 100

best_loss = float('inf')  # 무한대로 설정

for epoch in range(num_epochs):
    # train loop
    bert_model.train()  # 이거 안붙이면 첫 번째 validation loop에서 eval()한 상태로 계속 진행됨
    for batch in train_loader:
        batch = {k: v.to(device) for k, v in batch.items()}
        outputs = bert_model(**batch)
        loss = outputs.loss
        writer.add_scalar("Loss/train", loss, epoch)  # 시각화
        loss.backward()  #

        optimizer.step()
        lr_scheduler.step()
        optimizer.zero_grad()
        progress_bar.update(1)

    if epoch % eval_step == 0:
        bert_model.eval()
        total_val_loss = 0
        for batch in val_loader:
            batch = {k: v.to(device) for k, v in batch.items()}
            with torch.no_grad():  # evaluation loop에서 이거 붙여야 빨라짐
                outputs = bert_model(**batch)
                total_val_loss += outputs.loss

        total_val_loss /= len(val_loader)
        writer.add_scalar("Loss/validation", total_val_loss, epoch)  # 시각화

        if (total_val_loss < best_loss):
            best_loss = total_val_loss
        else:
            patience += 1

        if (patience == end_step):
            break

writer.flush()  # 시각화

# #시각화 스트림 종료
writer.close()

transformers.logging.set_verbosity_error()

bert_model.eval()

def decode(tokenizer, pred_idx, top_clean):
    ignore_tokens = string.punctuation + '[PAD][UNK]<pad><unk> '
    tokens = []
    for w in pred_idx:
        token = ''.join(tokenizer.decode(w).split())
        if token not in ignore_tokens:
            tokens.append(token.replace('##', ''))
    return ' '.join(tokens[:top_clean])


def encode(tokenizer, text_sentence, add_special_tokens=True, mask_token='[MASK]', mask_token_id=4):
    text_sentence = text_sentence.replace('<mask>', tokenizer.mask_token)
    if mask_token == text_sentence.split()[-1]:
        text_sentence += ' .'

    input_ids = torch.tensor([tokenizer.encode(text_sentence, add_special_tokens=add_special_tokens)])
    mask_idx = torch.where(input_ids == mask_token_id)[1].tolist()[0]
    return input_ids, mask_idx


def get_all_predictions(text_sentence, top_k=30, top_clean=30):
    # ========================= BERT =================================
    print(text_sentence)
    input_ids, mask_idx = encode(bert_tokenizer, text_sentence)
    with torch.no_grad():
        predict = bert_model(input_ids)[0]
    bert = decode(bert_tokenizer, predict[0, mask_idx, :].topk(top_k).indices.tolist(), top_clean)

    if text_sentence[-1] not in ['.', '?', '!']:
        bert = re.sub('\S+다\s|\S+요\s', '', bert)

    bert = re.sub('등', '', bert)
    # 단일 자음 제외
    bert = re.sub(r'[ㄱ-ㅎ|ㅏ-ㅣ]', '', bert)
    # 숫자 제외
    bert = re.sub(r'[0-9]', '', bert)
    # 단일 알파벳 제외
    bert = re.sub(r'[a-z|A-Z]', '', bert)
    # 다중 공백 제거
    bert = re.sub(r'\s+', ' ', bert).strip()

    # 서버로 전달할 형식
    return {'bert': bert}


# 단일 단어에 대한 번역문
def get_translate(bert_result):
    '''
    #input : Bert 생성 모델 결과 리스트
    #output : 각 단어에 대한 번역문
    '''
    trans_result = []

    #--------------------------------------------#
    # 구동할 서버에서 api 아이디 받아야 함
    # 개인 클라이언트 아이디 반드시 입력할 것!
    client_id = 'mhmeQkNSVw4fOnZ0RuBB'
    client_secret = 'YrWPO3AGMR'
    # --------------------------------------------#


    url = "https://openapi.naver.com/v1/papago/n2mt"

    header = {"X-Naver-Client-Id": client_id,
              "X-Naver-Client-Secret": client_secret}

    for text in bert_result.split():
        data = {'text': text,
                'source': 'ko',
                'target': 'en'}

        response = requests.post(url, headers=header, data=data)
        rescode = response.status_code

        if (rescode == 200):
            send_data = response.json()

            trans_data = (send_data['message']['result']['translatedText'])
            trans_data = re.sub('\.', '', trans_data)
            # 소문자화
            trans_result.append(trans_data.lower())

        else:
            print("Error Code:", rescode)

    # verb_lemmatizer 함수 추가
    trans_result = verb_lemmatizer(trans_result)


    return trans_result


# 파파고 api 번역 결과를 집어넣어 문장에서 동사만 뽑아내는 함수
def verb_lemmatizer(word_list):
    
    #:param word_list: 파파고 api 번역 결과 리스트
    #:return: 문장으로 번역된 경우 동사만 뽑아낸 리스트
    
    for idx in range(len(word_list)):
        # 문장으로 번역된 경우 (주어 + 동사 + 목적어)
        if len(word_list[idx].split()) >= 2:
            verb = [t[0] for t in pos_tag(word_tokenize(word_list[idx])) if 'V' in t[1]]

            if len(verb) == 0:
                continue

            else:
                word_list[idx] = verb[0]

    return word_list


# 단일 단어에 대한 이미지 url json 함수 추가
def image_crawler(bert_result, trans_result):

    '''
    :param trans_result: 파파고 api를 거친 리스트
    :param bert_result : 버트 모델 예측 단어 (픽토그램 결과가 없는 단어를 뽑아낼 때 사용)
    :return: 1. image url이 담긴 딕셔너리
             2. 결과가 있는 단어의 인덱스 리스트
    '''

    con = sqlite3.connect('id_pic.db')
    cur = con.cursor()

    image_url = []

    for idx, word in enumerate(trans_result):
        if word != ' ':
            try:
                cur.execute('SELECT word_id FROM ID_word WHERE ID_word.word == ?', (word,))
                pic_id = cur.fetchone()[0]

                # 추출한 id를 토대로 이미지 불러오기
                img_url =  f'https://api.arasaac.org/api/pictograms/{pic_id}?download=false'
                image_url.append(img_url)


            except:
                # 결과가 없는 단어
                no_result_word = bert_result.split()[idx]
                img_path = f'static/img/word_image/{no_result_word}.jpg'

                # 단어를 확대한 이미지가 폴더에 없을 때 생성
                if not os.path.isdir(img_path):
                    image_maker(no_result_word)
                    image_url.append(img_path)

                else:
                    image_url.append(img_path)

    # 데이터베이스 접속 종료
    cur.close()
    
    # 예측 단어가 25개 미만일 경우 흰 이미지를 띄우게 함
    if len(image_url) < 25:
        for _ in range(25-len(image_url)):
            image_url.append(' ')

    return {'img_url': image_url}

# TTS 구현 함수 / 추가 X
# 구글 tts에서 완성된 문장을 mp3로 저장하여 차후 play 기능 구현
def play_tts(text):
    tts = gTTS(
        text=text,
        lang='ko', slow=False
    )
    tts.save(f'{text}.mp3')

    Audio(f'{text}.mp3', autoplay=True)


def init_word():
    return {'bert': '나는 저는 저의 제가 우리 너는 당신은 너의 여러분 누구 이 그 저 이제 혹시 오전에 오후에 만약 지금 내일 모래 어제 잠시후에'}

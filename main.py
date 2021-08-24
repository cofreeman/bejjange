# %%
import torch
import string
import requests
from transformers import BertTokenizer, BertForMaskedLM
from nltk.tokenize import word_tokenize
from nltk.tag import pos_tag
import nltk
import re
import sqlite3
from image_creation import image_maker
import os

nltk.download('punkt')
nltk.download('averaged_perceptron_tagger')

bert_tokenizer = BertTokenizer.from_pretrained('kykim/bert-kor-base')
bert_model = BertForMaskedLM.from_pretrained('kykim/bert-kor-base').eval()


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

    bert = re.sub('\S+다\s|\S+요\s', '', bert)
    bert = re.sub(r'[ㄱ-ㅎ|ㅏ-ㅣ]', '', bert)
    bert = re.sub(r'[0-9]', '', bert)
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

    if len(image_url) < 11:
        for _ in range(11-len(image_url)):
            image_url.append(' ')

    return {'img_url': image_url}

def init_word():
    return {'bert': '나는 저는 이제 우리 역시 그러면 너는 당신은 우리 제가 혹시 최정우 아 야 어 여 우 유 개 비 바 재 대'}

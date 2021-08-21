# %%
import torch
import string
import requests
from transformers import BertTokenizer, BertForMaskedLM
# --------------------------------------------
# 한국어 단일 단어 -> arasaac 픽토그램 검색을 위한 번역 과정에서 필요한 라이브러리
from nltk.tokenize import word_tokenize
from nltk.tag import pos_tag
# --------------------------------------------
import nltk

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

    # 서버로 전달할 형식
    return {'bert': bert}


# 단일 단어에 대한 번역문
def get_translate(bert_result):
    '''
    input : Bert 생성 모델 결과 리스트
    output : 각 단어에 대한 번역문
    '''
    trans_result = []

    #--------------------------------------------#
    # 구동할 서버에서 api 아이디 받아야 함
    # 개인 클라이언트 아이디 반드시 입력할 것!
    client_id = 'tm0CaFoNIeb6fEXUA23q'
    client_secret = '9m3vMuwDT2'
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

            # 소문자화
            trans_result.append(trans_data.lower())

        else:
            print("Error Code:", rescode)

    # ------------------------------------------------#
    # verb_lemmatizer 함수 추가
    trans_result = verb_lemmatizer(trans_result)
    # ------------------------------------------------#

    return trans_result


# 파파고 api 번역 결과를 집어넣어 문장에서 동사만 뽑아내는 함수
def verb_lemmatizer(word_list):
    '''
    :param word_list: 파파고 api 번역 결과 리스트
    :return: 문장으로 번역된 경우 동사만 뽑아낸 리스트
    '''
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
def image_crawler(trans_result):
    '''
    :param trans_result: 파파고 api를 거친 리스트
    :return: 1. image url이 담긴 딕셔너리
             2. 결과가 있는 단어의 인덱스 리스트
    '''

    word_list = []
    image_url = []

    for idx, word in enumerate(trans_result):
        res = requests.get(f'https://api.arasaac.org/api/pictograms/en/bestsearch/{word}')
        req_json = res.json()

        try:
            pic_id = req_json[0]['_id']

            # 추출한 id를 토대로 이미지 불러오기
            img_res = requests.get(
                f'https://api.arasaac.org/api/pictograms/{pic_id}?plural=false&color=true&resolution=500&skin=assian&hair=black&url=true&download=false')
            img_json = img_res.json()['image']
            image_url.append(img_json)

            # 결과가 있는 단어
            word_list.append(idx)

        except:
            print('해당되는 픽토그램 없음!', idx)

    image_url = image_url[:11]

    return {'img_url': image_url}, word_list


# ----------------------------------------------------------------#
def find_result_word(bert_result, idx_list):
    '''
    :param bert_result: bert가 반환한 예측 단어
    :param idx_list: 픽트그램 결과가 있는 단어의 인덱스
    :return: 실제 픽토그램 결과가 존재하는 예측 단어의 리스트를 띄어쓰기 단위로 합친 결과
    '''
    valid_result = []
    for idx in idx_list:
        valid_word = bert_result.split()[idx]
        valid_result.append(valid_word)

    # bert 결과로 다시 반환 -> 서버에 전달하여 프론트단에 단어 출력
    return ' '.join(valid_result)
# ----------------------------------------------------------------#


def init_word():
    return {'bert': '나는 저는 이제 우리 역시 그러면 너는 당신은 우리 제가 혹시 최정우 아 야 어 여 우 유 개 비 바 재 대'}

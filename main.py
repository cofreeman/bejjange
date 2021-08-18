# %%
import torch
import string
import requests
from transformers import BertTokenizer, BertForMaskedLM

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


def get_all_predictions(text_sentence, top_k=50, top_clean=50):
    # ========================= BERT =================================
    print(text_sentence)
    input_ids, mask_idx = encode(bert_tokenizer, text_sentence)
    with torch.no_grad():
        predict = bert_model(input_ids)[0]
    bert = decode(bert_tokenizer, predict[0, mask_idx, :].topk(top_k).indices.tolist(), top_clean)

    # 서버로 전달할 형식
    return {'bert': bert}


#-------------------------------------------------------------------------------------------------------#
# 단일 단어에 대한 번역문
def get_translate(bert_result):
    '''
    input : Bert 생성 모델 결과 리스트
    output : 각 단어에 대한 번역문
    '''
    trans_result = []

    # 구동할 서버에서 api 아이디 받아야 함
    client_id = '클라이언트 아이디'
    client_secret = '비밀번호'

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

    return trans_result

#-------------------------------------------------------------------------------------------------------#
# 단일 단어에 대한 이미지 url json 함수 추가

def image_crawler(trans_result):
    '''
    input : 번역 결과 단어 리스트
    output : 각 번역 단어에 대한 이미지 url을 담은 json 형식
    예시) {word : [word1, word2, word3...],
            img_url : ['https://static.arasaac.org/pictograms/2617/2617_hair-020100_skin-F4ECAD_500.png', ....]}
    '''
    word_list = []
    image_url = []

    for word in trans_result:
        res = requests.get(f'https://api.arasaac.org/api/pictograms/en/bestsearch/{word}')
        req_json = res.json()

        try:
            pic_id = req_json[0]['_id']

            # 추출한 id를 토대로 이미지 불러오기
            img_res = requests.get(
                f'https://api.arasaac.org/api/pictograms/{pic_id}?plural=false&color=true&resolution=500&skin=assian&hair=black&url=true&download=false')
            img_json = img_res.json()['image']
            image_url.append(img_json)
            word_list.append(word)

        except:
            print('해당되는 픽토그램 없음!')

    word_list = word_list[:11]
    image_url = image_url[:11]

    return {'word': word_list, 'img_url': image_url}
#-------------------------------------------------------------------------------------------------------#




def init_word():
    return {'bert': '나는 저는 이제 우리 역시 그러면 너는 당신은 우리 제가 혹시'}

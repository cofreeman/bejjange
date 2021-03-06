# BERT를 활용한 의사표현 보조 서비스 
>평소 의사소통에 어려움을 가지는 의사소통 약자들을 위해 단어 예측을 기반으로 픽토그램을 불러들여 더욱 빠르고 정확하게 의사소통을 할 수 있도록 보조합니다.

## 사용 모델
시중에 공개된 Bert-ko-base 모델을 사용하여 서비스를 제작했습니다.
공개된 모델을 fine-tune을 해서 제작했습니다

해당 모델은 다음 데이터를 사용하여 pre-trained되었습니다.
  - 국내 주요 커머스 리뷰 1억개 + 블로그 형 웹사이트 2000만개 (75GB)
  - 모두의 말뭉치 (18GB)
  - 위키피디아와 나무위키 (6GB)
 
## 개발 동기 및 목적
1) 딥러닝을 통한 단어 생성 모델을 활용해 의사 표현에 장애를 가진 사람들을 도울 수 있는 서비스
2) 개발목표 : 의사표현에 장애를 지닌 사람들을 위한 AI 서비스 개발

## 기능 설명
### [메인 화면]
1. 긴급 의사소통판 : 사용자가 위급 상황 시 사용할 수 있는 의사소통판

2. 상징으로 말하기
    - BERT 기반 생성 모델로 사용자의 입력 단어에 따라 다음 단어가 예측됨

### [상징으로 말하기]
1. 문장만들기
    - 예측을 위해 정해진 시작 단어를 사용자가 선택하여 문장 생성 시작

2. 장소
    - 장소 별로 사용할 수 있는 단어 모음
    - 카페, 편의점, 병원, 주민센터

3. 숫자
    - 사용자가 숫자, 서수를 선택할 수 있는 기능
    
4. 문장 부호 (.,!)
    - 사용자가 문장을 끝내고 싶을 때 문장 부호를 선택하면 부호에 맞는 종결 단어를 추천
    
5. 문장 크게 만들기
    - 지금까지 만든 문장을 확대하여 픽토그램과 같이 보여줌
    
6. 지우기 및 초기화
    - 지우기 : 잘못 선택한 단어를 취소하여 기존 상태로 되돌림
    - 초기화 : 문장 초기화 


##실행 화면
![image](https://user-images.githubusercontent.com/70828640/138577714-4555d5c1-40e2-4fb3-8d31-b8cfe45cf691.png)
![image](https://user-images.githubusercontent.com/70828640/138577726-bf165d59-06c1-435f-9f79-8910951ea255.png)
![image](https://user-images.githubusercontent.com/70828640/138577762-d83275bb-b0e4-44e0-86b4-58af8c7589e7.png)


## 디렉토리 구조
```bash
├── README.md
├── templates/
│   ├── index.html           - 상징(픽토그램)으로 말하기
│   ├── main.html            - 메인화면
│   ├── eboard.html          - 긴급의사소통판
│   ├── howtouse.html        - 이용방법
├── static/
│   ├── css/
│       ├── app.css
│       ├── style.css
│       ├── bootstrap.min.css
│       ├── bootstrap-suggest.css
│   ├── img/
│       ├── eboard/
│           ├── emergency.png
│       ├── cate/
│           ├── cate-cafe/
│       ├── dogu/
│       ├── about-bg.png
│       ├── favicon.png
│       ├── favicon-1.png
│       ├── apple-touch-icon.png
│       ├── apple-touch-icon-1.png
│       ├── contact-bg.png
│       ├── cta-bg.png
│       ├── hero-bg.png
│       ├── why-us.png
│   ├── js/
│       ├── app.js
│       ├── main.js
│       ├── bootstrap.min.js
│       ├── bootstrap-suggest.js
│       ├── jquery-3.4.1.min.js
│   ├── vendor/
│       ├── animate.css/
│       ├── aos/
│       ├── bootstrap/
│       ├── bootstrap-icons/
│       ├── boxicons/
│       ├── glightbox/
│       ├── isotope-layout/
│       ├── php-email-form/
│       ├── remixicon/
│       ├── swiper/
├── app.py
├── main.py
├── image_creation.py
├── requirements.txt
├── id_pic.db
└── word_image/
```

## 제작 언어
* Front-end : HTML, jQuery
* Back-end : Flask
* DB : sqlite3
* Model : pytorch, transformers
* 텍스트 전처리 : nltk, re
* 기타 기능 : python

## 실행 방법
실행 파일 : app.py

```bash
cd '폴더 이름'

python app.py
```
Open your browser <a href="http://localhost:8000">http://localhost:8000</a>

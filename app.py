import flask
from flask import Flask, request, render_template
import json
import main


app = Flask(__name__)


@app.route('/')
def index():
    return render_template('main.html')


@app.route('/mainpage')
def mainpage():
    return render_template('index.html')

@app.route('/eboard')
def eboard():
    return render_template('eboard.html')

@app.route('/howtouse')
def howtouse():
    return render_template('howtouse.html')


# 주어진 문장의 마지막으로 올만한 단어를 예측해준다.

@app.route('/get_end_predictions.html', methods=['post'])
def get_prediction_eos():
    try:
        input_text = ' '.join(request.json['input_text'].split())
        input_text += ' <mask> #'
        top_k = request.json['top_k']
        res = main.get_all_predictions(input_text, top_clean=int(top_k))

        trans_result = main.get_translate(res['bert'])  # list
        img_res = main.image_crawler(res['bert'], trans_result)

        res.update(img_res)

        return app.response_class(response=json.dumps(res), status=200, mimetype='application/json')
    except Exception as error:
        err = str(error)
        print(err)
        return app.response_class(response=json.dumps(err), status=500, mimetype='application/json')

# //주어진 문장을 .으로 끝내고 싶을때 마지막으로 올만한 단어를 예측해준다.
@app.route('/get_end_predictions_jum.html', methods=['post'])
def get_prediction_eos_jum():
    try:
        input_text = ' '.join(request.json['input_text'].split())
        input_text += ' <mask>.'
        top_k = request.json['top_k']
        res = main.get_all_predictions(input_text, top_clean=int(top_k))

        trans_result = main.get_translate(res['bert'])  # list
        img_res = main.image_crawler(res['bert'], trans_result)

        res.update(img_res)
        return app.response_class(response=json.dumps(res), status=200, mimetype='application/json')
    except Exception as error:
        err = str(error)
        print(err)
        return app.response_class(response=json.dumps(err), status=500, mimetype='application/json')

# //주어진 문장을 ?으로 끝내고 싶을때 마지막으로 올만한 단어를 예측해준다.

@app.route('/get_end_predictions_question.html', methods=['post'])
def get_prediction_eos_question():
    try:
        input_text = ' '.join(request.json['input_text'].split())
        input_text += ' <mask>?'
        top_k = request.json['top_k']
        res = main.get_all_predictions(input_text, top_clean=int(top_k))

        trans_result = main.get_translate(res['bert'])  # list
        img_res = main.image_crawler(res['bert'], trans_result)

        res.update(img_res)
        return app.response_class(response=json.dumps(res), status=200, mimetype='application/json')
    except Exception as error:
        err = str(error)
        print(err)
        return app.response_class(response=json.dumps(err), status=500, mimetype='application/json')

# //주어진 문장을 !으로 끝내고 싶을때 마지막으로 올만한 단어를 예측해준다.

@app.route('/get_end_predictions_nuggimpyo.html', methods=['post'])
def get_prediction_eos_nuggimpyo():
    try:
        input_text = ' '.join(request.json['input_text'].split())
        input_text += ' <mask>!'
        top_k = request.json['top_k']
        res = main.get_all_predictions(input_text, top_clean=int(top_k))

        trans_result = main.get_translate(res['bert'])  # list
        img_res = main.image_crawler(res['bert'], trans_result)

        res.update(img_res)
        return app.response_class(response=json.dumps(res), status=200, mimetype='application/json')
    except Exception as error:
        err = str(error)
        print(err)
        return app.response_class(response=json.dumps(err), status=500, mimetype='application/json')

# //문장의 첫단어가 될 만한 단어 가져온다.
@app.route('/get_end_predictions_init.html', methods=['post'])
def get_prediction_eos_init():
    try:
        res = main.init_word()
        return app.response_class(response=json.dumps(res), status=200, mimetype='application/json')
    except Exception as error:
        err = str(error)
        print(err)
        return app.response_class(response=json.dumps(err), status=500, mimetype='application/json')


if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True, port=8000, use_reloader=False)

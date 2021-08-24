from PIL import Image, ImageDraw, ImageFont
import textwrap

def image_maker(text):
    '''
    :param text: 픽토그램 결과가 없는 단어
    :return: 단어를 확대시킨 텍스트의 이미지
    '''
    # 사진의 가로 세로
    w = 300
    h = 300

    # 텍스트 이미지의 배경 색
    background = 'rgb(255, 255, 255)'

    font = ImageFont.truetype('malgun.ttf', size=80)
    font_col = 'rgb(0, 0, 0)'

    image = Image.new('RGB', (w, h), color=background)
    draw = ImageDraw.Draw(image)

    if len(text) == 1:
        lines = textwrap.wrap(text, width=len(text))
        x_text, y_text = 80, 70

    elif len(text) == 2:
        lines = textwrap.wrap(text, width=len(text))
        x_text, y_text = 70, 70

    elif len(text) == 3:
        lines = textwrap.wrap(text, width=len(text))
        x_text, y_text = 50, 70

    elif len(text) > 3:
        lines = textwrap.wrap(text, width=len(text))
        x_text, y_text = 50, 70
    
    for line in lines:
        width, height = font.getsize(line)
        draw.text((x_text, y_text), line, font=font, fill=font_col)
        y_text += height

    image.save(f'static/img/word_image/{text}.jpg')

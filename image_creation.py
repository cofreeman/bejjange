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

    lines = textwrap.wrap(text, width=2)

    x_text, y_text = 70, 50
    
    for line in lines:
        width, height = font.getsize(line)
        draw.text((x_text, y_text), line, font=font, fill=font_col)
        y_text += height

    image.save(f'word_image/{text}.png')

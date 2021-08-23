var data = []
var token = ""
//var imnum = 1;

jQuery(window).ready(function () {

    $('#btn-process-prediction').on('click', function () {
        $.ajax({
            url: '/get_end_predictions.html',
            type: "post",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify({
                "input_text": $('#input_text').val(),
                "top_k": '50',
            })
        }).done(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
            $('#predict1').val(jsondata['bert'].split(' ')[0])
            $('#predict2').val(jsondata['bert'].split(' ')[1])
            $('#predict3').val(jsondata['bert'].split(' ')[2])
            $('#predict4').val(jsondata['bert'].split(' ')[3])
            $('#predict5').val(jsondata['bert'].split(' ')[4])
            $('#predict6').val(jsondata['bert'].split(' ')[5])
            $('#predict7').val(jsondata['bert'].split(' ')[6])
            $('#predict8').val(jsondata['bert'].split(' ')[7])
            $('#predict9').val(jsondata['bert'].split(' ')[8])
            $('#predict10').val(jsondata['bert'].split(' ')[9])
            $('#predict11').val(jsondata['bert'].split(' ')[10])


            $('#image1').attr('src', jsondata['img_url'][0])
            $('#image2').attr('src', jsondata['img_url'][1])
            $('#image3').attr('src', jsondata['img_url'][2])
            $('#image4').attr('src', jsondata['img_url'][3])
            $('#image5').attr('src', jsondata['img_url'][4])
            $('#image6').attr('src', jsondata['img_url'][5])
            $('#image7').attr('src', jsondata['img_url'][6])
            $('#image8').attr('src', jsondata['img_url'][7])
            $('#image9').attr('src', jsondata['img_url'][8])
            $('#image10').attr('src', jsondata['img_url'][9])
            $('#image11').attr('src', jsondata['img_url'][10])
        }).fail(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
        });
    })
    $('#btn-process-jum').on('click', function () {
        $.ajax({
            url: '/get_end_predictions_jum.html',
            type: "post",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify({
                "input_text": $('#input_text').val(),
                "top_k": '50',
            })
        }).done(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
            $('#predict1').val(jsondata['bert'].split(' ')[0])
            $('#predict2').val(jsondata['bert'].split(' ')[1])
            $('#predict3').val(jsondata['bert'].split(' ')[2])
            $('#predict4').val(jsondata['bert'].split(' ')[3])
            $('#predict5').val(jsondata['bert'].split(' ')[4])
            $('#predict6').val(jsondata['bert'].split(' ')[5])
            $('#predict7').val(jsondata['bert'].split(' ')[6])
            $('#predict8').val(jsondata['bert'].split(' ')[7])
            $('#predict9').val(jsondata['bert'].split(' ')[8])
            $('#predict10').val(jsondata['bert'].split(' ')[9])
            $('#predict11').val(jsondata['bert'].split(' ')[10])

            $('#image1').attr('src', jsondata['img_url'][0])
            $('#image2').attr('src', jsondata['img_url'][1])
            $('#image3').attr('src', jsondata['img_url'][2])
            $('#image4').attr('src', jsondata['img_url'][3])
            $('#image5').attr('src', jsondata['img_url'][4])
            $('#image6').attr('src', jsondata['img_url'][5])
            $('#image7').attr('src', jsondata['img_url'][6])
            $('#image8').attr('src', jsondata['img_url'][7])
            $('#image9').attr('src', jsondata['img_url'][8])
            $('#image10').attr('src', jsondata['img_url'][9])
            $('#image11').attr('src', jsondata['img_url'][10])
        }).fail(function (jsondata, textStatus, jqXHR) {
            alert("")
            console.log(jsondata)
        });
    })
    $('#btn-process-question').on('click', function () {
        $.ajax({
            url: '/get_end_predictions_question.html',
            type: "post",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify({
                "input_text": $('#input_text').val(),
                "top_k": '50',
            })
        }).done(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
            $('#predict1').val(jsondata['bert'].split(' ')[0])
            $('#predict2').val(jsondata['bert'].split(' ')[1])
            $('#predict3').val(jsondata['bert'].split(' ')[2])
            $('#predict4').val(jsondata['bert'].split(' ')[3])
            $('#predict5').val(jsondata['bert'].split(' ')[4])
            $('#predict6').val(jsondata['bert'].split(' ')[5])
            $('#predict7').val(jsondata['bert'].split(' ')[6])
            $('#predict8').val(jsondata['bert'].split(' ')[7])
            $('#predict9').val(jsondata['bert'].split(' ')[8])
            $('#predict10').val(jsondata['bert'].split(' ')[9])
            $('#predict11').val(jsondata['bert'].split(' ')[10])

            $('#image1').attr('src', jsondata['img_url'][0])
            $('#image2').attr('src', jsondata['img_url'][1])
            $('#image3').attr('src', jsondata['img_url'][2])
            $('#image4').attr('src', jsondata['img_url'][3])
            $('#image5').attr('src', jsondata['img_url'][4])
            $('#image6').attr('src', jsondata['img_url'][5])
            $('#image7').attr('src', jsondata['img_url'][6])
            $('#image8').attr('src', jsondata['img_url'][7])
            $('#image9').attr('src', jsondata['img_url'][8])
            $('#image10').attr('src', jsondata['img_url'][9])
            $('#image11').attr('src', jsondata['img_url'][10])
        }).fail(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
        });
    })
    $('#btn-process-nuggimpyo').on('click', function () {
        $.ajax({
            url: '/get_end_predictions_nuggimpyo.html',
            type: "post",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify({
                "input_text": $('#input_text').val(),
                "top_k": '50',
            })
        }).done(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
            $('#predict1').val(jsondata['bert'].split(' ')[0])
            $('#predict2').val(jsondata['bert'].split(' ')[1])
            $('#predict3').val(jsondata['bert'].split(' ')[2])
            $('#predict4').val(jsondata['bert'].split(' ')[3])
            $('#predict5').val(jsondata['bert'].split(' ')[4])
            $('#predict6').val(jsondata['bert'].split(' ')[5])
            $('#predict7').val(jsondata['bert'].split(' ')[6])
            $('#predict8').val(jsondata['bert'].split(' ')[7])
            $('#predict9').val(jsondata['bert'].split(' ')[8])
            $('#predict10').val(jsondata['bert'].split(' ')[9])
            $('#predict11').val(jsondata['bert'].split(' ')[10])

            $('#image1').attr('src', jsondata['img_url'][0])
            $('#image2').attr('src', jsondata['img_url'][1])
            $('#image3').attr('src', jsondata['img_url'][2])
            $('#image4').attr('src', jsondata['img_url'][3])
            $('#image5').attr('src', jsondata['img_url'][4])
            $('#image6').attr('src', jsondata['img_url'][5])
            $('#image7').attr('src', jsondata['img_url'][6])
            $('#image8').attr('src', jsondata['img_url'][7])
            $('#image9').attr('src', jsondata['img_url'][8])
            $('#image10').attr('src', jsondata['img_url'][9])
            $('#image11').attr('src', jsondata['img_url'][10])
        }).fail(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
        });
    })
    $('#btn-process-init').on('click', function () {
        $.ajax({
            url: '/get_end_predictions_init.html',
            type: "post",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify({
                "input_text": $('#input_text').val(),
                "top_k": '50',
            })
        }).done(function (jsondata, textStatus, jqXHR) {
            $('#predict1').val(jsondata['bert'].split(' ')[0])
            $('#predict2').val(jsondata['bert'].split(' ')[1])
            $('#predict3').val(jsondata['bert'].split(' ')[2])
            $('#predict4').val(jsondata['bert'].split(' ')[3])
            $('#predict5').val(jsondata['bert'].split(' ')[4])
            $('#predict6').val(jsondata['bert'].split(' ')[5])
            $('#predict7').val(jsondata['bert'].split(' ')[6])
            $('#predict8').val(jsondata['bert'].split(' ')[7])
            $('#predict9').val(jsondata['bert'].split(' ')[8])
            $('#predict10').val(jsondata['bert'].split(' ')[9])
            $('#predict11').val(jsondata['bert'].split(' ')[10])

            $('#image1').attr('src', 'static/img/init/me.png')
            $('#image2').attr('src', 'static/img/init/me.png')
            $('#image3').attr('src', 'static/img/init/me.png')
            $('#image4').attr('src', 'static/img/init/me.png')
            $('#image5').attr('src', 'static/img/init/our.png')
            $('#image6').attr('src', 'static/img/init/you.png')
            $('#image7').attr('src', 'static/img/init/you.png')
            $('#image8').attr('src', 'static/img/init/your.png')
            $('#image9').attr('src', 'static/img/init/everybody.png')
            $('#image10').attr('src', 'static/img/init/who.png')
            $('#image11').attr('src', 'static/img/init/point.png')
        }).fail(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
        });
    })

    $('#delete').click(function(){
        var word = $('#input_text').val();
        if (word.slice(-1) == ' '){
            word = word.split(' ').slice(0,-2).join(' ');
        }else if(word.slice(0) == ''){
            alert('문장을 입력해주세요!')
            return
        }else {
            word = word.split(' ').slice(0,-1).join(' ');
        }
        console.log(word)
        $('#input_text').empty();
        $('#input_text').append(word+' ');
        $('#cloneimg1').children().last().remove();
        $('#cloneimg2').children().last().remove();
        $.ajax({
            url: '/get_end_predictions.html',
            type: "post",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify({
                "input_text": $('#input_text').val(),
                "top_k": '50',
            })
        }).done(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
            $('#predict1').val(jsondata['bert'].split(' ')[0])
            $('#predict2').val(jsondata['bert'].split(' ')[1])
            $('#predict3').val(jsondata['bert'].split(' ')[2])
            $('#predict4').val(jsondata['bert'].split(' ')[3])
            $('#predict5').val(jsondata['bert'].split(' ')[4])
            $('#predict6').val(jsondata['bert'].split(' ')[5])
            $('#predict7').val(jsondata['bert'].split(' ')[6])
            $('#predict8').val(jsondata['bert'].split(' ')[7])
            $('#predict9').val(jsondata['bert'].split(' ')[8])
            $('#predict10').val(jsondata['bert'].split(' ')[9])
            $('#predict11').val(jsondata['bert'].split(' ')[10])

            $('#image1').attr('src', jsondata['img_url'][0])
            $('#image2').attr('src', jsondata['img_url'][1])
            $('#image3').attr('src', jsondata['img_url'][2])
            $('#image4').attr('src', jsondata['img_url'][3])
            $('#image5').attr('src', jsondata['img_url'][4])
            $('#image6').attr('src', jsondata['img_url'][5])
            $('#image7').attr('src', jsondata['img_url'][6])
            $('#image8').attr('src', jsondata['img_url'][7])
            $('#image9').attr('src', jsondata['img_url'][8])
            $('#image10').attr('src', jsondata['img_url'][9])
            $('#image11').attr('src', jsondata['img_url'][10])
        }).fail(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
        });
    });
    $('#img-btn1').click(function(){
        var predict1 = $('#predict1').val();
        var im1 = $('#image1').attr('src');
        var img = $('<img />').attr({
            'class': 'col-md-2',
            'id': '',
            'src': '',
            'max-width' : '100%',
            'height' : 'auto',
        });
        (img).attr('src', im1);
        (img).appendTo('.clone-img');
        $('#input_text').append(predict1+ ' ');
        $.ajax({
            url: '/get_end_predictions.html',
            type: "post",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify({
                "input_text": $('#input_text').val(),
                "top_k": '50',
            })
        }).done(function (jsondata, textStatus, jqXHR,) {
            $('#predict1').val(jsondata['bert'].split(' ')[0])
            $('#predict2').val(jsondata['bert'].split(' ')[1])
            $('#predict3').val(jsondata['bert'].split(' ')[2])
            $('#predict4').val(jsondata['bert'].split(' ')[3])
            $('#predict5').val(jsondata['bert'].split(' ')[4])
            $('#predict6').val(jsondata['bert'].split(' ')[5])
            $('#predict7').val(jsondata['bert'].split(' ')[6])
            $('#predict8').val(jsondata['bert'].split(' ')[7])
            $('#predict9').val(jsondata['bert'].split(' ')[8])
            $('#predict10').val(jsondata['bert'].split(' ')[9])
            $('#predict11').val(jsondata['bert'].split(' ')[10])

            $('#image1').attr('src', jsondata['img_url'][0])
            $('#image2').attr('src', jsondata['img_url'][1])
            $('#image3').attr('src', jsondata['img_url'][2])
            $('#image4').attr('src', jsondata['img_url'][3])
            $('#image5').attr('src', jsondata['img_url'][4])
            $('#image6').attr('src', jsondata['img_url'][5])
            $('#image7').attr('src', jsondata['img_url'][6])
            $('#image8').attr('src', jsondata['img_url'][7])
            $('#image9').attr('src', jsondata['img_url'][8])
            $('#image10').attr('src', jsondata['img_url'][9])
            $('#image11').attr('src', jsondata['img_url'][10])
        });
    });
    $('#img-btn2').click(function(){
        var predict1 = $('#predict2').val();
        var im1 = $('#image2').attr('src');
        var img = $('<img />').attr({
            'class': 'col-md-2',
            'id': '',
            'src': '',
            'max-width' : '100%',
            'height' : 'auto'
        });
        (img).attr('src', im1);
        (img).appendTo('.clone-img');
        $('#input_text').append(predict1+ ' ');
        $.ajax({
            url: '/get_end_predictions.html',
            type: "post",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify({
                "input_text": $('#input_text').val(),
                "top_k": '50',
            })
        }).done(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
            $('#predict1').val(jsondata['bert'].split(' ')[0])
            $('#predict2').val(jsondata['bert'].split(' ')[1])
            $('#predict3').val(jsondata['bert'].split(' ')[2])
            $('#predict4').val(jsondata['bert'].split(' ')[3])
            $('#predict5').val(jsondata['bert'].split(' ')[4])
            $('#predict6').val(jsondata['bert'].split(' ')[5])
            $('#predict7').val(jsondata['bert'].split(' ')[6])
            $('#predict8').val(jsondata['bert'].split(' ')[7])
            $('#predict9').val(jsondata['bert'].split(' ')[8])
            $('#predict10').val(jsondata['bert'].split(' ')[9])
            $('#predict11').val(jsondata['bert'].split(' ')[10])

            $('#image1').attr('src', jsondata['img_url'][0])
            $('#image2').attr('src', jsondata['img_url'][1])
            $('#image3').attr('src', jsondata['img_url'][2])
            $('#image4').attr('src', jsondata['img_url'][3])
            $('#image5').attr('src', jsondata['img_url'][4])
            $('#image6').attr('src', jsondata['img_url'][5])
            $('#image7').attr('src', jsondata['img_url'][6])
            $('#image8').attr('src', jsondata['img_url'][7])
            $('#image9').attr('src', jsondata['img_url'][8])
            $('#image10').attr('src', jsondata['img_url'][9])
            $('#image11').attr('src', jsondata['img_url'][10])
        }).fail(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
        });
    });
    $('#img-btn3').click(function(){
        var predict1 = $('#predict3').val();
        var im1 = $('#image3').attr('src');
        var img = $('<img />').attr({
            'class': 'col-md-2',
            'id': '',
            'src': '',
            'max-width' : '100%',
            'height' : 'auto'
        });
        (img).attr('src', im1);
        (img).appendTo('.clone-img');
        $('#input_text').append(predict1+ ' ');
        $.ajax({
            url: '/get_end_predictions.html',
            type: "post",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify({
                "input_text": $('#input_text').val(),
                "top_k": '50',
            })
        }).done(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
            $('#predict1').val(jsondata['bert'].split(' ')[0])
            $('#predict2').val(jsondata['bert'].split(' ')[1])
            $('#predict3').val(jsondata['bert'].split(' ')[2])
            $('#predict4').val(jsondata['bert'].split(' ')[3])
            $('#predict5').val(jsondata['bert'].split(' ')[4])
            $('#predict6').val(jsondata['bert'].split(' ')[5])
            $('#predict7').val(jsondata['bert'].split(' ')[6])
            $('#predict8').val(jsondata['bert'].split(' ')[7])
            $('#predict9').val(jsondata['bert'].split(' ')[8])
            $('#predict10').val(jsondata['bert'].split(' ')[9])
            $('#predict11').val(jsondata['bert'].split(' ')[10])

            $('#image1').attr('src', jsondata['img_url'][0])
            $('#image2').attr('src', jsondata['img_url'][1])
            $('#image3').attr('src', jsondata['img_url'][2])
            $('#image4').attr('src', jsondata['img_url'][3])
            $('#image5').attr('src', jsondata['img_url'][4])
            $('#image6').attr('src', jsondata['img_url'][5])
            $('#image7').attr('src', jsondata['img_url'][6])
            $('#image8').attr('src', jsondata['img_url'][7])
            $('#image9').attr('src', jsondata['img_url'][8])
            $('#image10').attr('src', jsondata['img_url'][9])
            $('#image11').attr('src', jsondata['img_url'][10])
        }).fail(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
        });
    });
    $('#img-btn4').click(function(){
        var predict1 = $('#predict4').val();
        var im1 = $('#image4').attr('src');
        var img = $('<img />').attr({
            'class': 'col-md-2',
            'id': '',
            'src': '',
            'max-width' : '100%',
            'height' : 'auto'
        });
        (img).attr('src', im1);
        (img).appendTo('.clone-img');
        $('#input_text').append(predict1+ ' ');
        $.ajax({
            url: '/get_end_predictions.html',
            type: "post",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify({
                "input_text": $('#input_text').val(),
                "top_k": '50',
            })
        }).done(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
            $('#predict1').val(jsondata['bert'].split(' ')[0])
            $('#predict2').val(jsondata['bert'].split(' ')[1])
            $('#predict3').val(jsondata['bert'].split(' ')[2])
            $('#predict4').val(jsondata['bert'].split(' ')[3])
            $('#predict5').val(jsondata['bert'].split(' ')[4])
            $('#predict6').val(jsondata['bert'].split(' ')[5])
            $('#predict7').val(jsondata['bert'].split(' ')[6])
            $('#predict8').val(jsondata['bert'].split(' ')[7])
            $('#predict9').val(jsondata['bert'].split(' ')[8])
            $('#predict10').val(jsondata['bert'].split(' ')[9])
            $('#predict11').val(jsondata['bert'].split(' ')[10])

            $('#image1').attr('src', jsondata['img_url'][0])
            $('#image2').attr('src', jsondata['img_url'][1])
            $('#image3').attr('src', jsondata['img_url'][2])
            $('#image4').attr('src', jsondata['img_url'][3])
            $('#image5').attr('src', jsondata['img_url'][4])
            $('#image6').attr('src', jsondata['img_url'][5])
            $('#image7').attr('src', jsondata['img_url'][6])
            $('#image8').attr('src', jsondata['img_url'][7])
            $('#image9').attr('src', jsondata['img_url'][8])
            $('#image10').attr('src', jsondata['img_url'][9])
            $('#image11').attr('src', jsondata['img_url'][10])
        }).fail(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
        });
    });
    $('#img-btn5').click(function(){
        var predict1 = $('#predict5').val();
        var im1 = $('#image5').attr('src');
        var img = $('<img />').attr({
            'class': 'col-md-2',
            'id': '',
            'src': '',
            'max-width' : '100%',
            'height' : 'auto'
        });
        (img).attr('src', im1);
        (img).appendTo('.clone-img');
        $('#input_text').append(predict1+ ' ');
        $.ajax({
            url: '/get_end_predictions.html',
            type: "post",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify({
                "input_text": $('#input_text').val(),
                "top_k": '50',
            })
        }).done(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
            $('#predict1').val(jsondata['bert'].split(' ')[0])
            $('#predict2').val(jsondata['bert'].split(' ')[1])
            $('#predict3').val(jsondata['bert'].split(' ')[2])
            $('#predict4').val(jsondata['bert'].split(' ')[3])
            $('#predict5').val(jsondata['bert'].split(' ')[4])
            $('#predict6').val(jsondata['bert'].split(' ')[5])
            $('#predict7').val(jsondata['bert'].split(' ')[6])
            $('#predict8').val(jsondata['bert'].split(' ')[7])
            $('#predict9').val(jsondata['bert'].split(' ')[8])
            $('#predict10').val(jsondata['bert'].split(' ')[9])
            $('#predict11').val(jsondata['bert'].split(' ')[10])

            $('#image1').attr('src', jsondata['img_url'][0])
            $('#image2').attr('src', jsondata['img_url'][1])
            $('#image3').attr('src', jsondata['img_url'][2])
            $('#image4').attr('src', jsondata['img_url'][3])
            $('#image5').attr('src', jsondata['img_url'][4])
            $('#image6').attr('src', jsondata['img_url'][5])
            $('#image7').attr('src', jsondata['img_url'][6])
            $('#image8').attr('src', jsondata['img_url'][7])
            $('#image9').attr('src', jsondata['img_url'][8])
            $('#image10').attr('src', jsondata['img_url'][9])
            $('#image11').attr('src', jsondata['img_url'][10])
        }).fail(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
        });
    });
    $('#img-btn6').click(function(){
        var predict1 = $('#predict6').val();
        var im1 = $('#image6').attr('src');
        var img = $('<img />').attr({
            'class': 'col-md-2',
            'id': '',
            'src': '',
            'max-width' : '100%',
            'height' : 'auto'
        });
        (img).attr('src', im1);
        (img).appendTo('.clone-img');
        $('#input_text').append(predict1+ ' ');
        $.ajax({
            url: '/get_end_predictions.html',
            type: "post",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify({
                "input_text": $('#input_text').val(),
                "top_k": '50',
            })
        }).done(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
            $('#predict1').val(jsondata['bert'].split(' ')[0])
            $('#predict2').val(jsondata['bert'].split(' ')[1])
            $('#predict3').val(jsondata['bert'].split(' ')[2])
            $('#predict4').val(jsondata['bert'].split(' ')[3])
            $('#predict5').val(jsondata['bert'].split(' ')[4])
            $('#predict6').val(jsondata['bert'].split(' ')[5])
            $('#predict7').val(jsondata['bert'].split(' ')[6])
            $('#predict8').val(jsondata['bert'].split(' ')[7])
            $('#predict9').val(jsondata['bert'].split(' ')[8])
            $('#predict10').val(jsondata['bert'].split(' ')[9])
            $('#predict11').val(jsondata['bert'].split(' ')[10])

            $('#image1').attr('src', jsondata['img_url'][0])
            $('#image2').attr('src', jsondata['img_url'][1])
            $('#image3').attr('src', jsondata['img_url'][2])
            $('#image4').attr('src', jsondata['img_url'][3])
            $('#image5').attr('src', jsondata['img_url'][4])
            $('#image6').attr('src', jsondata['img_url'][5])
            $('#image7').attr('src', jsondata['img_url'][6])
            $('#image8').attr('src', jsondata['img_url'][7])
            $('#image9').attr('src', jsondata['img_url'][8])
            $('#image10').attr('src', jsondata['img_url'][9])
            $('#image11').attr('src', jsondata['img_url'][10])
        }).fail(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
        });
    });
    $('#img-btn7').click(function(){
        var predict1 = $('#predict7').val();
        var im1 = $('#image7').attr('src');
        var img = $('<img />').attr({
            'class': 'col-md-2',
            'id': '',
            'src': '',
            'max-width' : '100%',
            'height' : 'auto'
        });
        (img).attr('src', im1);
        (img).appendTo('.clone-img');
        $('#input_text').append(predict1+ ' ');
        $.ajax({
            url: '/get_end_predictions.html',
            type: "post",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify({
                "input_text": $('#input_text').val(),
                "top_k": '50',
            })
        }).done(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
            $('#predict1').val(jsondata['bert'].split(' ')[0])
            $('#predict2').val(jsondata['bert'].split(' ')[1])
            $('#predict3').val(jsondata['bert'].split(' ')[2])
            $('#predict4').val(jsondata['bert'].split(' ')[3])
            $('#predict5').val(jsondata['bert'].split(' ')[4])
            $('#predict6').val(jsondata['bert'].split(' ')[5])
            $('#predict7').val(jsondata['bert'].split(' ')[6])
            $('#predict8').val(jsondata['bert'].split(' ')[7])
            $('#predict9').val(jsondata['bert'].split(' ')[8])
            $('#predict10').val(jsondata['bert'].split(' ')[9])
            $('#predict11').val(jsondata['bert'].split(' ')[10])

            $('#image1').attr('src', jsondata['img_url'][0])
            $('#image2').attr('src', jsondata['img_url'][1])
            $('#image3').attr('src', jsondata['img_url'][2])
            $('#image4').attr('src', jsondata['img_url'][3])
            $('#image5').attr('src', jsondata['img_url'][4])
            $('#image6').attr('src', jsondata['img_url'][5])
            $('#image7').attr('src', jsondata['img_url'][6])
            $('#image8').attr('src', jsondata['img_url'][7])
            $('#image9').attr('src', jsondata['img_url'][8])
            $('#image10').attr('src', jsondata['img_url'][9])
            $('#image11').attr('src', jsondata['img_url'][10])
        }).fail(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
        });
    });
    $('#img-btn8').click(function(){
        var predict1 = $('#predict8').val();
        var im1 = $('#image8').attr('src');
        var img = $('<img />').attr({
            'class': 'col-md-2',
            'id': '',
            'src': '',
            'max-width' : '100%',
            'height' : 'auto'
        });
        (img).attr('src', im1);
        (img).appendTo('.clone-img');
        $('#input_text').append(predict1+ ' ');
        $.ajax({
            url: '/get_end_predictions.html',
            type: "post",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify({
                "input_text": $('#input_text').val(),
                "top_k": '50',
            })
        }).done(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
            $('#predict1').val(jsondata['bert'].split(' ')[0])
            $('#predict2').val(jsondata['bert'].split(' ')[1])
            $('#predict3').val(jsondata['bert'].split(' ')[2])
            $('#predict4').val(jsondata['bert'].split(' ')[3])
            $('#predict5').val(jsondata['bert'].split(' ')[4])
            $('#predict6').val(jsondata['bert'].split(' ')[5])
            $('#predict7').val(jsondata['bert'].split(' ')[6])
            $('#predict8').val(jsondata['bert'].split(' ')[7])
            $('#predict9').val(jsondata['bert'].split(' ')[8])
            $('#predict10').val(jsondata['bert'].split(' ')[9])
            $('#predict11').val(jsondata['bert'].split(' ')[10])

            $('#image1').attr('src', jsondata['img_url'][0])
            $('#image2').attr('src', jsondata['img_url'][1])
            $('#image3').attr('src', jsondata['img_url'][2])
            $('#image4').attr('src', jsondata['img_url'][3])
            $('#image5').attr('src', jsondata['img_url'][4])
            $('#image6').attr('src', jsondata['img_url'][5])
            $('#image7').attr('src', jsondata['img_url'][6])
            $('#image8').attr('src', jsondata['img_url'][7])
            $('#image9').attr('src', jsondata['img_url'][8])
            $('#image10').attr('src', jsondata['img_url'][9])
            $('#image11').attr('src', jsondata['img_url'][10])
        }).fail(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
        });
    });
    $('#img-btn9').click(function(){
        var predict1 = $('#predict9').val();
        var im1 = $('#image9').attr('src');
        var img = $('<img />').attr({
            'class': 'col-md-2',
            'id': '',
            'src': '',
            'max-width' : '100%',
            'height' : 'auto'
        });
        (img).attr('src', im1);
        (img).appendTo('.clone-img');
        $('#input_text').append(predict1+ ' ');
        $.ajax({
            url: '/get_end_predictions.html',
            type: "post",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify({
                "input_text": $('#input_text').val(),
                "top_k": '50',
            })
        }).done(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
            $('#predict1').val(jsondata['bert'].split(' ')[0])
            $('#predict2').val(jsondata['bert'].split(' ')[1])
            $('#predict3').val(jsondata['bert'].split(' ')[2])
            $('#predict4').val(jsondata['bert'].split(' ')[3])
            $('#predict5').val(jsondata['bert'].split(' ')[4])
            $('#predict6').val(jsondata['bert'].split(' ')[5])
            $('#predict7').val(jsondata['bert'].split(' ')[6])
            $('#predict8').val(jsondata['bert'].split(' ')[7])
            $('#predict9').val(jsondata['bert'].split(' ')[8])
            $('#predict10').val(jsondata['bert'].split(' ')[9])
            $('#predict11').val(jsondata['bert'].split(' ')[10])

            $('#image1').attr('src', jsondata['img_url'][0])
            $('#image2').attr('src', jsondata['img_url'][1])
            $('#image3').attr('src', jsondata['img_url'][2])
            $('#image4').attr('src', jsondata['img_url'][3])
            $('#image5').attr('src', jsondata['img_url'][4])
            $('#image6').attr('src', jsondata['img_url'][5])
            $('#image7').attr('src', jsondata['img_url'][6])
            $('#image8').attr('src', jsondata['img_url'][7])
            $('#image9').attr('src', jsondata['img_url'][8])
            $('#image10').attr('src', jsondata['img_url'][9])
            $('#image11').attr('src', jsondata['img_url'][10])
        }).fail(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
        });
    });
    $('#img-btn10').click(function(){
        var predict1 = $('#predict10').val();
        var im1 = $('#image10').attr('src');
        var img = $('<img />').attr({
            'class': 'col-md-2',
            'id': '',
            'src': '',
            'max-width' : '100%',
            'height' : 'auto'
        });
        (img).attr('src', im1);
        (img).appendTo('.clone-img');
        $('#input_text').append(predict1+ ' ');
        $.ajax({
            url: '/get_end_predictions.html',
            type: "post",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify({
                "input_text": $('#input_text').val(),
                "top_k": '50',
            })
        }).done(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
            $('#predict1').val(jsondata['bert'].split(' ')[0])
            $('#predict2').val(jsondata['bert'].split(' ')[1])
            $('#predict3').val(jsondata['bert'].split(' ')[2])
            $('#predict4').val(jsondata['bert'].split(' ')[3])
            $('#predict5').val(jsondata['bert'].split(' ')[4])
            $('#predict6').val(jsondata['bert'].split(' ')[5])
            $('#predict7').val(jsondata['bert'].split(' ')[6])
            $('#predict8').val(jsondata['bert'].split(' ')[7])
            $('#predict9').val(jsondata['bert'].split(' ')[8])
            $('#predict10').val(jsondata['bert'].split(' ')[9])
            $('#predict11').val(jsondata['bert'].split(' ')[10])

            $('#image1').attr('src', jsondata['img_url'][0])
            $('#image2').attr('src', jsondata['img_url'][1])
            $('#image3').attr('src', jsondata['img_url'][2])
            $('#image4').attr('src', jsondata['img_url'][3])
            $('#image5').attr('src', jsondata['img_url'][4])
            $('#image6').attr('src', jsondata['img_url'][5])
            $('#image7').attr('src', jsondata['img_url'][6])
            $('#image8').attr('src', jsondata['img_url'][7])
            $('#image9').attr('src', jsondata['img_url'][8])
            $('#image10').attr('src', jsondata['img_url'][9])
            $('#image11').attr('src', jsondata['img_url'][10])
        }).fail(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
        });
    });
    $('#img-btn11').click(function(){
        var predict1 = $('#predict11').val();
        var im1 = $('#image11').attr('src');
        var img = $('<img />').attr({
            'class': 'col-md-2',
            'id': '',
            'src': '',
            'max-width' : '100%',
            'height' : 'auto'
        });
        (img).attr('src', im1);
        (img).appendTo('.clone-img');
        $('#input_text').append(predict1+ ' ');
        $.ajax({
            url: '/get_end_predictions.html',
            type: "post",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify({
                "input_text": $('#input_text').val(),
                "top_k": '50',
            })
        }).done(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
            $('#predict1').val(jsondata['bert'].split(' ')[0])
            $('#predict2').val(jsondata['bert'].split(' ')[1])
            $('#predict3').val(jsondata['bert'].split(' ')[2])
            $('#predict4').val(jsondata['bert'].split(' ')[3])
            $('#predict5').val(jsondata['bert'].split(' ')[4])
            $('#predict6').val(jsondata['bert'].split(' ')[5])
            $('#predict7').val(jsondata['bert'].split(' ')[6])
            $('#predict8').val(jsondata['bert'].split(' ')[7])
            $('#predict9').val(jsondata['bert'].split(' ')[8])
            $('#predict10').val(jsondata['bert'].split(' ')[9])
            $('#predict11').val(jsondata['bert'].split(' ')[10])

            $('#image1').attr('src', jsondata['img_url'][0])
            $('#image2').attr('src', jsondata['img_url'][1])
            $('#image3').attr('src', jsondata['img_url'][2])
            $('#image4').attr('src', jsondata['img_url'][3])
            $('#image5').attr('src', jsondata['img_url'][4])
            $('#image6').attr('src', jsondata['img_url'][5])
            $('#image7').attr('src', jsondata['img_url'][6])
            $('#image8').attr('src', jsondata['img_url'][7])
            $('#image9').attr('src', jsondata['img_url'][8])
            $('#image10').attr('src', jsondata['img_url'][9])
            $('#image11').attr('src', jsondata['img_url'][10])
        }).fail(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
        });
    });
    $('#img-btn12').click(function(){
        var predict1 = $('#predict12').val();
        var im1 = $('#image12').attr('src');
        var img = $('<img />').attr({
            'class': 'col-md-2',
            'id': '',
            'src': '',
            'max-width' : '100%',
            'height' : 'auto'
        });
        (img).attr('src', im1);
        (img).appendTo('.clone-img');
        $('#input_text').append(predict1+ ' ');
        $.ajax({
            url: '/get_end_predictions.html',
            type: "post",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify({
                "input_text": $('#input_text').val(),
                "top_k": '50',
            })
        }).done(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
            $('#predict1').val(jsondata['bert'].split(' ')[0])
            $('#predict2').val(jsondata['bert'].split(' ')[1])
            $('#predict3').val(jsondata['bert'].split(' ')[2])
            $('#predict4').val(jsondata['bert'].split(' ')[3])
            $('#predict5').val(jsondata['bert'].split(' ')[4])
            $('#predict6').val(jsondata['bert'].split(' ')[5])
            $('#predict7').val(jsondata['bert'].split(' ')[6])
            $('#predict8').val(jsondata['bert'].split(' ')[7])
            $('#predict9').val(jsondata['bert'].split(' ')[8])
            $('#predict10').val(jsondata['bert'].split(' ')[9])
            $('#predict11').val(jsondata['bert'].split(' ')[10])

            $('#image1').attr('src', jsondata['img_url'][0])
            $('#image2').attr('src', jsondata['img_url'][1])
            $('#image3').attr('src', jsondata['img_url'][2])
            $('#image4').attr('src', jsondata['img_url'][3])
            $('#image5').attr('src', jsondata['img_url'][4])
            $('#image6').attr('src', jsondata['img_url'][5])
            $('#image7').attr('src', jsondata['img_url'][6])
            $('#image8').attr('src', jsondata['img_url'][7])
            $('#image9').attr('src', jsondata['img_url'][8])
            $('#image10').attr('src', jsondata['img_url'][9])
            $('#image11').attr('src', jsondata['img_url'][10])
        }).fail(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
        });
    });
    $('#img-btn13').click(function(){
        var predict1 = $('#predict13').val();
        var im1 = $('#image13').attr('src');
        var img = $('<img />').attr({
            'class': 'col-md-2',
            'id': '',
            'src': '',
            'max-width' : '100%',
            'height' : 'auto'
        });
        (img).attr('src', im1);
        (img).appendTo('.clone-img');
        $('#input_text').append(predict1+ ' ');
        $.ajax({
            url: '/get_end_predictions.html',
            type: "post",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify({
                "input_text": $('#input_text').val(),
                "top_k": '50',
            })
        }).done(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
            $('#predict1').val(jsondata['bert'].split(' ')[0])
            $('#predict2').val(jsondata['bert'].split(' ')[1])
            $('#predict3').val(jsondata['bert'].split(' ')[2])
            $('#predict4').val(jsondata['bert'].split(' ')[3])
            $('#predict5').val(jsondata['bert'].split(' ')[4])
            $('#predict6').val(jsondata['bert'].split(' ')[5])
            $('#predict7').val(jsondata['bert'].split(' ')[6])
            $('#predict8').val(jsondata['bert'].split(' ')[7])
            $('#predict9').val(jsondata['bert'].split(' ')[8])
            $('#predict10').val(jsondata['bert'].split(' ')[9])
            $('#predict11').val(jsondata['bert'].split(' ')[10])

            $('#image1').attr('src', jsondata['img_url'][0])
            $('#image2').attr('src', jsondata['img_url'][1])
            $('#image3').attr('src', jsondata['img_url'][2])
            $('#image4').attr('src', jsondata['img_url'][3])
            $('#image5').attr('src', jsondata['img_url'][4])
            $('#image6').attr('src', jsondata['img_url'][5])
            $('#image7').attr('src', jsondata['img_url'][6])
            $('#image8').attr('src', jsondata['img_url'][7])
            $('#image9').attr('src', jsondata['img_url'][8])
            $('#image10').attr('src', jsondata['img_url'][9])
            $('#image11').attr('src', jsondata['img_url'][10])
        }).fail(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
        });
    });
    $('#img-btn14').click(function(){
        var predict1 = $('#predict14').val();
        var im1 = $('#image14').attr('src');
        var img = $('<img />').attr({
            'class': 'col-md-2',
            'id': '',
            'src': '',
            'max-width' : '100%',
            'height' : 'auto'
        });
        (img).attr('src', im1);
        (img).appendTo('.clone-img');
        $('#input_text').append(predict1+ ' ');
        $.ajax({
            url: '/get_end_predictions.html',
            type: "post",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify({
                "input_text": $('#input_text').val(),
                "top_k": '50',
            })
        }).done(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
            $('#predict1').val(jsondata['bert'].split(' ')[0])
            $('#predict2').val(jsondata['bert'].split(' ')[1])
            $('#predict3').val(jsondata['bert'].split(' ')[2])
            $('#predict4').val(jsondata['bert'].split(' ')[3])
            $('#predict5').val(jsondata['bert'].split(' ')[4])
            $('#predict6').val(jsondata['bert'].split(' ')[5])
            $('#predict7').val(jsondata['bert'].split(' ')[6])
            $('#predict8').val(jsondata['bert'].split(' ')[7])
            $('#predict9').val(jsondata['bert'].split(' ')[8])
            $('#predict10').val(jsondata['bert'].split(' ')[9])
            $('#predict11').val(jsondata['bert'].split(' ')[10])

            $('#image1').attr('src', jsondata['img_url'][0])
            $('#image2').attr('src', jsondata['img_url'][1])
            $('#image3').attr('src', jsondata['img_url'][2])
            $('#image4').attr('src', jsondata['img_url'][3])
            $('#image5').attr('src', jsondata['img_url'][4])
            $('#image6').attr('src', jsondata['img_url'][5])
            $('#image7').attr('src', jsondata['img_url'][6])
            $('#image8').attr('src', jsondata['img_url'][7])
            $('#image9').attr('src', jsondata['img_url'][8])
            $('#image10').attr('src', jsondata['img_url'][9])
            $('#image11').attr('src', jsondata['img_url'][10])
        }).fail(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
        });
    });
    $('#img-btn15').click(function(){
        var predict1 = $('#predict15').val();
        var im1 = $('#image15').attr('src');
        var img = $('<img />').attr({
            'class': 'col-md-2',
            'id': '',
            'src': '',
            'max-width' : '100%',
            'height' : 'auto'
        });
        (img).attr('src', im1);
        (img).appendTo('.clone-img');
        $('#input_text').append(predict1+ ' ');
        $.ajax({
            url: '/get_end_predictions.html',
            type: "post",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify({
                "input_text": $('#input_text').val(),
                "top_k": '50',
            })
        }).done(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
            $('#predict1').val(jsondata['bert'].split(' ')[0])
            $('#predict2').val(jsondata['bert'].split(' ')[1])
            $('#predict3').val(jsondata['bert'].split(' ')[2])
            $('#predict4').val(jsondata['bert'].split(' ')[3])
            $('#predict5').val(jsondata['bert'].split(' ')[4])
            $('#predict6').val(jsondata['bert'].split(' ')[5])
            $('#predict7').val(jsondata['bert'].split(' ')[6])
            $('#predict8').val(jsondata['bert'].split(' ')[7])
            $('#predict9').val(jsondata['bert'].split(' ')[8])
            $('#predict10').val(jsondata['bert'].split(' ')[9])
            $('#predict11').val(jsondata['bert'].split(' ')[10])

            $('#image1').attr('src', jsondata['img_url'][0])
            $('#image2').attr('src', jsondata['img_url'][1])
            $('#image3').attr('src', jsondata['img_url'][2])
            $('#image4').attr('src', jsondata['img_url'][3])
            $('#image5').attr('src', jsondata['img_url'][4])
            $('#image6').attr('src', jsondata['img_url'][5])
            $('#image7').attr('src', jsondata['img_url'][6])
            $('#image8').attr('src', jsondata['img_url'][7])
            $('#image9').attr('src', jsondata['img_url'][8])
            $('#image10').attr('src', jsondata['img_url'][9])
            $('#image11').attr('src', jsondata['img_url'][10])
        }).fail(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
        });
    });
    $('#img-btn16').click(function(){
        var predict1 = $('#predict16').val();
        var im1 = $('#image16').attr('src');
        var img = $('<img />').attr({
            'class': 'col-md-2',
            'id': '',
            'src': '',
            'max-width' : '100%',
            'height' : 'auto'
        });
        (img).attr('src', im1);
        (img).appendTo('.clone-img');
        $('#input_text').append(predict1+ ' ');
        $.ajax({
            url: '/get_end_predictions.html',
            type: "post",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify({
                "input_text": $('#input_text').val(),
                "top_k": '50',
            })
        }).done(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
            $('#predict1').val(jsondata['bert'].split(' ')[0])
            $('#predict2').val(jsondata['bert'].split(' ')[1])
            $('#predict3').val(jsondata['bert'].split(' ')[2])
            $('#predict4').val(jsondata['bert'].split(' ')[3])
            $('#predict5').val(jsondata['bert'].split(' ')[4])
            $('#predict6').val(jsondata['bert'].split(' ')[5])
            $('#predict7').val(jsondata['bert'].split(' ')[6])
            $('#predict8').val(jsondata['bert'].split(' ')[7])
            $('#predict9').val(jsondata['bert'].split(' ')[8])
            $('#predict10').val(jsondata['bert'].split(' ')[9])
            $('#predict11').val(jsondata['bert'].split(' ')[10])

            $('#image1').attr('src', jsondata['img_url'][0])
            $('#image2').attr('src', jsondata['img_url'][1])
            $('#image3').attr('src', jsondata['img_url'][2])
            $('#image4').attr('src', jsondata['img_url'][3])
            $('#image5').attr('src', jsondata['img_url'][4])
            $('#image6').attr('src', jsondata['img_url'][5])
            $('#image7').attr('src', jsondata['img_url'][6])
            $('#image8').attr('src', jsondata['img_url'][7])
            $('#image9').attr('src', jsondata['img_url'][8])
            $('#image10').attr('src', jsondata['img_url'][9])
            $('#image11').attr('src', jsondata['img_url'][10])
        }).fail(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
        });
    });
    $('#img-btn17').click(function(){
        var predict1 = $('#predict17').val();
        var im1 = $('#image17').attr('src');
        var img = $('<img />').attr({
            'class': 'col-md-2',
            'id': '',
            'src': '',
            'max-width' : '100%',
            'height' : 'auto'
        });
        (img).attr('src', im1);
        (img).appendTo('.clone-img');
        $('#input_text').append(predict1+ ' ');
        $.ajax({
            url: '/get_end_predictions.html',
            type: "post",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify({
                "input_text": $('#input_text').val(),
                "top_k": '50',
            })
        }).done(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
            $('#predict1').val(jsondata['bert'].split(' ')[0])
            $('#predict2').val(jsondata['bert'].split(' ')[1])
            $('#predict3').val(jsondata['bert'].split(' ')[2])
            $('#predict4').val(jsondata['bert'].split(' ')[3])
            $('#predict5').val(jsondata['bert'].split(' ')[4])
            $('#predict6').val(jsondata['bert'].split(' ')[5])
            $('#predict7').val(jsondata['bert'].split(' ')[6])
            $('#predict8').val(jsondata['bert'].split(' ')[7])
            $('#predict9').val(jsondata['bert'].split(' ')[8])
            $('#predict10').val(jsondata['bert'].split(' ')[9])
            $('#predict11').val(jsondata['bert'].split(' ')[10])

            $('#image1').attr('src', jsondata['img_url'][0])
            $('#image2').attr('src', jsondata['img_url'][1])
            $('#image3').attr('src', jsondata['img_url'][2])
            $('#image4').attr('src', jsondata['img_url'][3])
            $('#image5').attr('src', jsondata['img_url'][4])
            $('#image6').attr('src', jsondata['img_url'][5])
            $('#image7').attr('src', jsondata['img_url'][6])
            $('#image8').attr('src', jsondata['img_url'][7])
            $('#image9').attr('src', jsondata['img_url'][8])
            $('#image10').attr('src', jsondata['img_url'][9])
            $('#image11').attr('src', jsondata['img_url'][10])
        }).fail(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
        });
    });
    $('#img-btn18').click(function(){
        var predict1 = $('#predict18').val();
        var im1 = $('#image18').attr('src');
        var img = $('<img />').attr({
            'class': 'col-md-2',
            'id': '',
            'src': '',
            'max-width' : '100%',
            'height' : 'auto'
        });
        (img).attr('src', im1);
        (img).appendTo('.clone-img');
        $('#input_text').append(predict1+ ' ');
        $.ajax({
            url: '/get_end_predictions.html',
            type: "post",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify({
                "input_text": $('#input_text').val(),
                "top_k": '50',
            })
        }).done(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
            $('#predict1').val(jsondata['bert'].split(' ')[0])
            $('#predict2').val(jsondata['bert'].split(' ')[1])
            $('#predict3').val(jsondata['bert'].split(' ')[2])
            $('#predict4').val(jsondata['bert'].split(' ')[3])
            $('#predict5').val(jsondata['bert'].split(' ')[4])
            $('#predict6').val(jsondata['bert'].split(' ')[5])
            $('#predict7').val(jsondata['bert'].split(' ')[6])
            $('#predict8').val(jsondata['bert'].split(' ')[7])
            $('#predict9').val(jsondata['bert'].split(' ')[8])
            $('#predict10').val(jsondata['bert'].split(' ')[9])
            $('#predict11').val(jsondata['bert'].split(' ')[10])

            $('#image1').attr('src', jsondata['img_url'][0])
            $('#image2').attr('src', jsondata['img_url'][1])
            $('#image3').attr('src', jsondata['img_url'][2])
            $('#image4').attr('src', jsondata['img_url'][3])
            $('#image5').attr('src', jsondata['img_url'][4])
            $('#image6').attr('src', jsondata['img_url'][5])
            $('#image7').attr('src', jsondata['img_url'][6])
            $('#image8').attr('src', jsondata['img_url'][7])
            $('#image9').attr('src', jsondata['img_url'][8])
            $('#image10').attr('src', jsondata['img_url'][9])
            $('#image11').attr('src', jsondata['img_url'][10])
        }).fail(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
        });
    });
    $('#img-btn19').click(function(){
        var predict1 = $('#predict19').val();
        var im1 = $('#image19').attr('src');
        var img = $('<img />').attr({
            'class': 'col-md-2',
            'id': '',
            'src': '',
            'max-width' : '100%',
            'height' : 'auto'
        });
        (img).attr('src', im1);
        (img).appendTo('.clone-img');
        $('#input_text').append(predict1+ ' ');
        $.ajax({
            url: '/get_end_predictions.html',
            type: "post",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify({
                "input_text": $('#input_text').val(),
                "top_k": '50',
            })
        }).done(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
            $('#predict1').val(jsondata['bert'].split(' ')[0])
            $('#predict2').val(jsondata['bert'].split(' ')[1])
            $('#predict3').val(jsondata['bert'].split(' ')[2])
            $('#predict4').val(jsondata['bert'].split(' ')[3])
            $('#predict5').val(jsondata['bert'].split(' ')[4])
            $('#predict6').val(jsondata['bert'].split(' ')[5])
            $('#predict7').val(jsondata['bert'].split(' ')[6])
            $('#predict8').val(jsondata['bert'].split(' ')[7])
            $('#predict9').val(jsondata['bert'].split(' ')[8])
            $('#predict10').val(jsondata['bert'].split(' ')[9])
            $('#predict11').val(jsondata['bert'].split(' ')[10])

            $('#image1').attr('src', jsondata['img_url'][0])
            $('#image2').attr('src', jsondata['img_url'][1])
            $('#image3').attr('src', jsondata['img_url'][2])
            $('#image4').attr('src', jsondata['img_url'][3])
            $('#image5').attr('src', jsondata['img_url'][4])
            $('#image6').attr('src', jsondata['img_url'][5])
            $('#image7').attr('src', jsondata['img_url'][6])
            $('#image8').attr('src', jsondata['img_url'][7])
            $('#image9').attr('src', jsondata['img_url'][8])
            $('#image10').attr('src', jsondata['img_url'][9])
            $('#image11').attr('src', jsondata['img_url'][10])
        }).fail(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
        });
    });
    $('#img-btn20').click(function(){
        var predict1 = $('#predict20').val();
        var im1 = $('#image20').attr('src');
        var img = $('<img />').attr({
            'class': 'col-md-2',
            'id': '',
            'src': '',
            'max-width' : '100%',
            'height' : 'auto'
        });
        (img).attr('src', im1);
        (img).appendTo('.clone-img');
        $('#input_text').append(predict1+ ' ');
        $.ajax({
            url: '/get_end_predictions.html',
            type: "post",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify({
                "input_text": $('#input_text').val(),
                "top_k": '50',
            })
        }).done(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
            $('#predict1').val(jsondata['bert'].split(' ')[0])
            $('#predict2').val(jsondata['bert'].split(' ')[1])
            $('#predict3').val(jsondata['bert'].split(' ')[2])
            $('#predict4').val(jsondata['bert'].split(' ')[3])
            $('#predict5').val(jsondata['bert'].split(' ')[4])
            $('#predict6').val(jsondata['bert'].split(' ')[5])
            $('#predict7').val(jsondata['bert'].split(' ')[6])
            $('#predict8').val(jsondata['bert'].split(' ')[7])
            $('#predict9').val(jsondata['bert'].split(' ')[8])
            $('#predict10').val(jsondata['bert'].split(' ')[9])
            $('#predict11').val(jsondata['bert'].split(' ')[10])

            $('#image1').attr('src', jsondata['img_url'][0])
            $('#image2').attr('src', jsondata['img_url'][1])
            $('#image3').attr('src', jsondata['img_url'][2])
            $('#image4').attr('src', jsondata['img_url'][3])
            $('#image5').attr('src', jsondata['img_url'][4])
            $('#image6').attr('src', jsondata['img_url'][5])
            $('#image7').attr('src', jsondata['img_url'][6])
            $('#image8').attr('src', jsondata['img_url'][7])
            $('#image9').attr('src', jsondata['img_url'][8])
            $('#image10').attr('src', jsondata['img_url'][9])
            $('#image11').attr('src', jsondata['img_url'][10])
        }).fail(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
        });
    });
    $('#img-btn21').click(function(){
        var predict1 = $('#predict21').val();
        var im1 = $('#image21').attr('src');
        var img = $('<img />').attr({
            'class': 'col-md-2',
            'id': '',
            'src': '',
            'max-width' : '100%',
            'height' : 'auto'
        });
        (img).attr('src', im1);
        (img).appendTo('.clone-img');
        $('#input_text').append(predict1+ ' ');
        $.ajax({
            url: '/get_end_predictions.html',
            type: "post",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify({
                "input_text": $('#input_text').val(),
                "top_k": '50',
            })
        }).done(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
            $('#predict1').val(jsondata['bert'].split(' ')[0])
            $('#predict2').val(jsondata['bert'].split(' ')[1])
            $('#predict3').val(jsondata['bert'].split(' ')[2])
            $('#predict4').val(jsondata['bert'].split(' ')[3])
            $('#predict5').val(jsondata['bert'].split(' ')[4])
            $('#predict6').val(jsondata['bert'].split(' ')[5])
            $('#predict7').val(jsondata['bert'].split(' ')[6])
            $('#predict8').val(jsondata['bert'].split(' ')[7])
            $('#predict9').val(jsondata['bert'].split(' ')[8])
            $('#predict10').val(jsondata['bert'].split(' ')[9])
            $('#predict11').val(jsondata['bert'].split(' ')[10])

            $('#image1').attr('src', jsondata['img_url'][0])
            $('#image2').attr('src', jsondata['img_url'][1])
            $('#image3').attr('src', jsondata['img_url'][2])
            $('#image4').attr('src', jsondata['img_url'][3])
            $('#image5').attr('src', jsondata['img_url'][4])
            $('#image6').attr('src', jsondata['img_url'][5])
            $('#image7').attr('src', jsondata['img_url'][6])
            $('#image8').attr('src', jsondata['img_url'][7])
            $('#image9').attr('src', jsondata['img_url'][8])
            $('#image10').attr('src', jsondata['img_url'][9])
            $('#image11').attr('src', jsondata['img_url'][10])
        }).fail(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
        });
    });
    $('#img-btn22').click(function(){
        var predict1 = $('#predict22').val();
        var im1 = $('#image22').attr('src');
        var img = $('<img />').attr({
            'class': 'col-md-2',
            'id': '',
            'src': '',
            'max-width' : '100%',
            'height' : 'auto'
        });
        (img).attr('src', im1);
        (img).appendTo('.clone-img');
        $('#input_text').append(predict1+ ' ');
        $.ajax({
            url: '/get_end_predictions.html',
            type: "post",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify({
                "input_text": $('#input_text').val(),
                "top_k": '50',
            })
        }).done(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
            $('#predict1').val(jsondata['bert'].split(' ')[0])
            $('#predict2').val(jsondata['bert'].split(' ')[1])
            $('#predict3').val(jsondata['bert'].split(' ')[2])
            $('#predict4').val(jsondata['bert'].split(' ')[3])
            $('#predict5').val(jsondata['bert'].split(' ')[4])
            $('#predict6').val(jsondata['bert'].split(' ')[5])
            $('#predict7').val(jsondata['bert'].split(' ')[6])
            $('#predict8').val(jsondata['bert'].split(' ')[7])
            $('#predict9').val(jsondata['bert'].split(' ')[8])
            $('#predict10').val(jsondata['bert'].split(' ')[9])
            $('#predict11').val(jsondata['bert'].split(' ')[10])

            $('#image1').attr('src', jsondata['img_url'][0])
            $('#image2').attr('src', jsondata['img_url'][1])
            $('#image3').attr('src', jsondata['img_url'][2])
            $('#image4').attr('src', jsondata['img_url'][3])
            $('#image5').attr('src', jsondata['img_url'][4])
            $('#image6').attr('src', jsondata['img_url'][5])
            $('#image7').attr('src', jsondata['img_url'][6])
            $('#image8').attr('src', jsondata['img_url'][7])
            $('#image9').attr('src', jsondata['img_url'][8])
            $('#image10').attr('src', jsondata['img_url'][9])
            $('#image11').attr('src', jsondata['img_url'][10])
        }).fail(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
        });
    });
    $('#img-btn23').click(function(){
        var predict1 = $('#predict23').val();
        var im1 = $('#image23').attr('src');
        var img = $('<img />').attr({
            'class': 'col-md-2',
            'id': '',
            'src': '',
            'max-width' : '100%',
            'height' : 'auto'
        });
        (img).attr('src', im1);
        (img).appendTo('.clone-img');
        $('#input_text').append(predict1+ ' ');
        $.ajax({
            url: '/get_end_predictions.html',
            type: "post",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify({
                "input_text": $('#input_text').val(),
                "top_k": '50',
            })
        }).done(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
            $('#predict1').val(jsondata['bert'].split(' ')[0])
            $('#predict2').val(jsondata['bert'].split(' ')[1])
            $('#predict3').val(jsondata['bert'].split(' ')[2])
            $('#predict4').val(jsondata['bert'].split(' ')[3])
            $('#predict5').val(jsondata['bert'].split(' ')[4])
            $('#predict6').val(jsondata['bert'].split(' ')[5])
            $('#predict7').val(jsondata['bert'].split(' ')[6])
            $('#predict8').val(jsondata['bert'].split(' ')[7])
            $('#predict9').val(jsondata['bert'].split(' ')[8])
            $('#predict10').val(jsondata['bert'].split(' ')[9])
            $('#predict11').val(jsondata['bert'].split(' ')[10])

            $('#image1').attr('src', jsondata['img_url'][0])
            $('#image2').attr('src', jsondata['img_url'][1])
            $('#image3').attr('src', jsondata['img_url'][2])
            $('#image4').attr('src', jsondata['img_url'][3])
            $('#image5').attr('src', jsondata['img_url'][4])
            $('#image6').attr('src', jsondata['img_url'][5])
            $('#image7').attr('src', jsondata['img_url'][6])
            $('#image8').attr('src', jsondata['img_url'][7])
            $('#image9').attr('src', jsondata['img_url'][8])
            $('#image10').attr('src', jsondata['img_url'][9])
            $('#image11').attr('src', jsondata['img_url'][10])
        }).fail(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
        });
    });
    $('#img-btn-cafe1').click(function(){
        var predict1 = $('#cate-cafe-text1').val();
        var im1 = $('#image-btn-cafe1').attr('src');
        var img = $('<img />').attr({
            'class': 'col-md-2',
            'id': '',
            'src': '',
            'max-width' : '100%',
            'height' : 'auto'
        });
        (img).attr('src', im1);
        (img).appendTo('.clone-img');
        $('#input_text').append(predict1+ ' ');
        $.ajax({
            url: '/get_end_predictions.html',
            type: "post",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify({
                "input_text": $('#input_text').val(),
                "top_k": '50',
            })
        }).done(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
            $('#predict1').val(jsondata['bert'].split(' ')[0])
            $('#predict2').val(jsondata['bert'].split(' ')[1])
            $('#predict3').val(jsondata['bert'].split(' ')[2])
            $('#predict4').val(jsondata['bert'].split(' ')[3])
            $('#predict5').val(jsondata['bert'].split(' ')[4])
            $('#predict6').val(jsondata['bert'].split(' ')[5])
            $('#predict7').val(jsondata['bert'].split(' ')[6])
            $('#predict8').val(jsondata['bert'].split(' ')[7])
            $('#predict9').val(jsondata['bert'].split(' ')[8])
            $('#predict10').val(jsondata['bert'].split(' ')[9])
            $('#predict11').val(jsondata['bert'].split(' ')[10])

            $('#image1').attr('src', jsondata['img_url'][0])
            $('#image2').attr('src', jsondata['img_url'][1])
            $('#image3').attr('src', jsondata['img_url'][2])
            $('#image4').attr('src', jsondata['img_url'][3])
            $('#image5').attr('src', jsondata['img_url'][4])
            $('#image6').attr('src', jsondata['img_url'][5])
            $('#image7').attr('src', jsondata['img_url'][6])
            $('#image8').attr('src', jsondata['img_url'][7])
            $('#image9').attr('src', jsondata['img_url'][8])
            $('#image10').attr('src', jsondata['img_url'][9])
            $('#image11').attr('src', jsondata['img_url'][10])
        }).fail(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
        });
    });
    $('#img-btn-cafe2').click(function(){
        var predict1 = $('#cate-cafe-text2').val();
        var im1 = $('#image-btn-cafe2').attr('src');
        var img = $('<img />').attr({
            'class': 'col-md-2',
            'id': '',
            'src': '',
            'max-width' : '100%',
            'height' : 'auto'
        });
        (img).attr('src', im1);
        (img).appendTo('.clone-img');
        $('#input_text').append(predict1+ ' ');
        $.ajax({
            url: '/get_end_predictions.html',
            type: "post",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify({
                "input_text": $('#input_text').val(),
                "top_k": '50',
            })
        }).done(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
            $('#predict1').val(jsondata['bert'].split(' ')[0])
            $('#predict2').val(jsondata['bert'].split(' ')[1])
            $('#predict3').val(jsondata['bert'].split(' ')[2])
            $('#predict4').val(jsondata['bert'].split(' ')[3])
            $('#predict5').val(jsondata['bert'].split(' ')[4])
            $('#predict6').val(jsondata['bert'].split(' ')[5])
            $('#predict7').val(jsondata['bert'].split(' ')[6])
            $('#predict8').val(jsondata['bert'].split(' ')[7])
            $('#predict9').val(jsondata['bert'].split(' ')[8])
            $('#predict10').val(jsondata['bert'].split(' ')[9])
            $('#predict11').val(jsondata['bert'].split(' ')[10])

            $('#image1').attr('src', jsondata['img_url'][0])
            $('#image2').attr('src', jsondata['img_url'][1])
            $('#image3').attr('src', jsondata['img_url'][2])
            $('#image4').attr('src', jsondata['img_url'][3])
            $('#image5').attr('src', jsondata['img_url'][4])
            $('#image6').attr('src', jsondata['img_url'][5])
            $('#image7').attr('src', jsondata['img_url'][6])
            $('#image8').attr('src', jsondata['img_url'][7])
            $('#image9').attr('src', jsondata['img_url'][8])
            $('#image10').attr('src', jsondata['img_url'][9])
            $('#image11').attr('src', jsondata['img_url'][10])
        }).fail(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
        });
    });
    $('#img-btn-cafe3').click(function(){
        var predict1 = $('#cate-cafe-text3').val();
        var im1 = $('#image-btn-cafe3').attr('src');
        var img = $('<img />').attr({
            'class': 'col-md-2',
            'id': '',
            'src': '',
            'max-width' : '100%',
            'height' : 'auto'
        });
        (img).attr('src', im1);
        (img).appendTo('.clone-img');
        $('#input_text').append(predict1+ ' ');
        $.ajax({
            url: '/get_end_predictions.html',
            type: "post",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify({
                "input_text": $('#input_text').val(),
                "top_k": '50',
            })
        }).done(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
            $('#predict1').val(jsondata['bert'].split(' ')[0])
            $('#predict2').val(jsondata['bert'].split(' ')[1])
            $('#predict3').val(jsondata['bert'].split(' ')[2])
            $('#predict4').val(jsondata['bert'].split(' ')[3])
            $('#predict5').val(jsondata['bert'].split(' ')[4])
            $('#predict6').val(jsondata['bert'].split(' ')[5])
            $('#predict7').val(jsondata['bert'].split(' ')[6])
            $('#predict8').val(jsondata['bert'].split(' ')[7])
            $('#predict9').val(jsondata['bert'].split(' ')[8])
            $('#predict10').val(jsondata['bert'].split(' ')[9])
            $('#predict11').val(jsondata['bert'].split(' ')[10])

            $('#image1').attr('src', jsondata['img_url'][0])
            $('#image2').attr('src', jsondata['img_url'][1])
            $('#image3').attr('src', jsondata['img_url'][2])
            $('#image4').attr('src', jsondata['img_url'][3])
            $('#image5').attr('src', jsondata['img_url'][4])
            $('#image6').attr('src', jsondata['img_url'][5])
            $('#image7').attr('src', jsondata['img_url'][6])
            $('#image8').attr('src', jsondata['img_url'][7])
            $('#image9').attr('src', jsondata['img_url'][8])
            $('#image10').attr('src', jsondata['img_url'][9])
            $('#image11').attr('src', jsondata['img_url'][10])
        }).fail(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
        });
    });
    $('#img-btn-cafe4').click(function(){
        var predict1 = $('#cate-cafe-text4').val();
        var im1 = $('#image-btn-cafe4').attr('src');
        var img = $('<img />').attr({
            'class': 'col-md-2',
            'id': '',
            'src': '',
            'max-width' : '100%',
            'height' : 'auto'
        });
        (img).attr('src', im1);
        (img).appendTo('.clone-img');
        $('#input_text').append(predict1+ ' ');
        $.ajax({
            url: '/get_end_predictions.html',
            type: "post",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify({
                "input_text": $('#input_text').val(),
                "top_k": '50',
            })
        }).done(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
            $('#predict1').val(jsondata['bert'].split(' ')[0])
            $('#predict2').val(jsondata['bert'].split(' ')[1])
            $('#predict3').val(jsondata['bert'].split(' ')[2])
            $('#predict4').val(jsondata['bert'].split(' ')[3])
            $('#predict5').val(jsondata['bert'].split(' ')[4])
            $('#predict6').val(jsondata['bert'].split(' ')[5])
            $('#predict7').val(jsondata['bert'].split(' ')[6])
            $('#predict8').val(jsondata['bert'].split(' ')[7])
            $('#predict9').val(jsondata['bert'].split(' ')[8])
            $('#predict10').val(jsondata['bert'].split(' ')[9])
            $('#predict11').val(jsondata['bert'].split(' ')[10])

            $('#image1').attr('src', jsondata['img_url'][0])
            $('#image2').attr('src', jsondata['img_url'][1])
            $('#image3').attr('src', jsondata['img_url'][2])
            $('#image4').attr('src', jsondata['img_url'][3])
            $('#image5').attr('src', jsondata['img_url'][4])
            $('#image6').attr('src', jsondata['img_url'][5])
            $('#image7').attr('src', jsondata['img_url'][6])
            $('#image8').attr('src', jsondata['img_url'][7])
            $('#image9').attr('src', jsondata['img_url'][8])
            $('#image10').attr('src', jsondata['img_url'][9])
            $('#image11').attr('src', jsondata['img_url'][10])
        }).fail(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
        });
    });
    $('#img-btn-cafe5').click(function(){
        var predict1 = $('#cate-cafe-text5').val();
        var im1 = $('#image-btn-cafe5').attr('src');
        var img = $('<img />').attr({
            'class': 'col-md-2',
            'id': '',
            'src': '',
            'max-width' : '100%',
            'height' : 'auto'
        });
        (img).attr('src', im1);
        (img).appendTo('.clone-img');
        $('#input_text').append(predict1+ ' ');
        $.ajax({
            url: '/get_end_predictions.html',
            type: "post",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify({
                "input_text": $('#input_text').val(),
                "top_k": '50',
            })
        }).done(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
            $('#predict1').val(jsondata['bert'].split(' ')[0])
            $('#predict2').val(jsondata['bert'].split(' ')[1])
            $('#predict3').val(jsondata['bert'].split(' ')[2])
            $('#predict4').val(jsondata['bert'].split(' ')[3])
            $('#predict5').val(jsondata['bert'].split(' ')[4])
            $('#predict6').val(jsondata['bert'].split(' ')[5])
            $('#predict7').val(jsondata['bert'].split(' ')[6])
            $('#predict8').val(jsondata['bert'].split(' ')[7])
            $('#predict9').val(jsondata['bert'].split(' ')[8])
            $('#predict10').val(jsondata['bert'].split(' ')[9])
            $('#predict11').val(jsondata['bert'].split(' ')[10])

            $('#image1').attr('src', jsondata['img_url'][0])
            $('#image2').attr('src', jsondata['img_url'][1])
            $('#image3').attr('src', jsondata['img_url'][2])
            $('#image4').attr('src', jsondata['img_url'][3])
            $('#image5').attr('src', jsondata['img_url'][4])
            $('#image6').attr('src', jsondata['img_url'][5])
            $('#image7').attr('src', jsondata['img_url'][6])
            $('#image8').attr('src', jsondata['img_url'][7])
            $('#image9').attr('src', jsondata['img_url'][8])
            $('#image10').attr('src', jsondata['img_url'][9])
            $('#image11').attr('src', jsondata['img_url'][10])
        }).fail(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
        });
    });
    $('#img-btn-cafe6').click(function(){
        var predict1 = $('#cate-cafe-text6').val();
        var im1 = $('#image-btn-cafe6').attr('src');
        var img = $('<img />').attr({
            'class': 'col-md-2',
            'id': '',
            'src': '',
            'max-width' : '100%',
            'height' : 'auto'
        });
        (img).attr('src', im1);
        (img).appendTo('.clone-img');
        $('#input_text').append(predict1+ ' ');
        $.ajax({
            url: '/get_end_predictions.html',
            type: "post",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify({
                "input_text": $('#input_text').val(),
                "top_k": '50',
            })
        }).done(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
            $('#predict1').val(jsondata['bert'].split(' ')[0])
            $('#predict2').val(jsondata['bert'].split(' ')[1])
            $('#predict3').val(jsondata['bert'].split(' ')[2])
            $('#predict4').val(jsondata['bert'].split(' ')[3])
            $('#predict5').val(jsondata['bert'].split(' ')[4])
            $('#predict6').val(jsondata['bert'].split(' ')[5])
            $('#predict7').val(jsondata['bert'].split(' ')[6])
            $('#predict8').val(jsondata['bert'].split(' ')[7])
            $('#predict9').val(jsondata['bert'].split(' ')[8])
            $('#predict10').val(jsondata['bert'].split(' ')[9])
            $('#predict11').val(jsondata['bert'].split(' ')[10])

            $('#image1').attr('src', jsondata['img_url'][0])
            $('#image2').attr('src', jsondata['img_url'][1])
            $('#image3').attr('src', jsondata['img_url'][2])
            $('#image4').attr('src', jsondata['img_url'][3])
            $('#image5').attr('src', jsondata['img_url'][4])
            $('#image6').attr('src', jsondata['img_url'][5])
            $('#image7').attr('src', jsondata['img_url'][6])
            $('#image8').attr('src', jsondata['img_url'][7])
            $('#image9').attr('src', jsondata['img_url'][8])
            $('#image10').attr('src', jsondata['img_url'][9])
            $('#image11').attr('src', jsondata['img_url'][10])
        }).fail(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
        });
    });
    $('#img-btn-cafe7').click(function(){
        var predict1 = $('#cate-cafe-text7').val();
        var im1 = $('#image-btn-cafe7').attr('src');
        var img = $('<img />').attr({
            'class': 'col-md-2',
            'id': '',
            'src': '',
            'max-width' : '100%',
            'height' : 'auto'
        });
        (img).attr('src', im1);
        (img).appendTo('.clone-img');
        $('#input_text').append(predict1+ ' ');
        $.ajax({
            url: '/get_end_predictions.html',
            type: "post",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify({
                "input_text": $('#input_text').val(),
                "top_k": '50',
            })
        }).done(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
            $('#predict1').val(jsondata['bert'].split(' ')[0])
            $('#predict2').val(jsondata['bert'].split(' ')[1])
            $('#predict3').val(jsondata['bert'].split(' ')[2])
            $('#predict4').val(jsondata['bert'].split(' ')[3])
            $('#predict5').val(jsondata['bert'].split(' ')[4])
            $('#predict6').val(jsondata['bert'].split(' ')[5])
            $('#predict7').val(jsondata['bert'].split(' ')[6])
            $('#predict8').val(jsondata['bert'].split(' ')[7])
            $('#predict9').val(jsondata['bert'].split(' ')[8])
            $('#predict10').val(jsondata['bert'].split(' ')[9])
            $('#predict11').val(jsondata['bert'].split(' ')[10])

            $('#image1').attr('src', jsondata['img_url'][0])
            $('#image2').attr('src', jsondata['img_url'][1])
            $('#image3').attr('src', jsondata['img_url'][2])
            $('#image4').attr('src', jsondata['img_url'][3])
            $('#image5').attr('src', jsondata['img_url'][4])
            $('#image6').attr('src', jsondata['img_url'][5])
            $('#image7').attr('src', jsondata['img_url'][6])
            $('#image8').attr('src', jsondata['img_url'][7])
            $('#image9').attr('src', jsondata['img_url'][8])
            $('#image10').attr('src', jsondata['img_url'][9])
            $('#image11').attr('src', jsondata['img_url'][10])
        }).fail(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
        });
    });
    $('#img-btn-cafe8').click(function(){
        var predict1 = $('#cate-cafe-text8').val();
        var im1 = $('#image-btn-cafe8').attr('src');
        var img = $('<img />').attr({
            'class': 'col-md-2',
            'id': '',
            'src': '',
            'max-width' : '100%',
            'height' : 'auto'
        });
        (img).attr('src', im1);
        (img).appendTo('.clone-img');
        $('#input_text').append(predict1+ ' ');
        $.ajax({
            url: '/get_end_predictions.html',
            type: "post",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify({
                "input_text": $('#input_text').val(),
                "top_k": '50',
            })
        }).done(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
            $('#predict1').val(jsondata['bert'].split(' ')[0])
            $('#predict2').val(jsondata['bert'].split(' ')[1])
            $('#predict3').val(jsondata['bert'].split(' ')[2])
            $('#predict4').val(jsondata['bert'].split(' ')[3])
            $('#predict5').val(jsondata['bert'].split(' ')[4])
            $('#predict6').val(jsondata['bert'].split(' ')[5])
            $('#predict7').val(jsondata['bert'].split(' ')[6])
            $('#predict8').val(jsondata['bert'].split(' ')[7])
            $('#predict9').val(jsondata['bert'].split(' ')[8])
            $('#predict10').val(jsondata['bert'].split(' ')[9])
            $('#predict11').val(jsondata['bert'].split(' ')[10])

            $('#image1').attr('src', jsondata['img_url'][0])
            $('#image2').attr('src', jsondata['img_url'][1])
            $('#image3').attr('src', jsondata['img_url'][2])
            $('#image4').attr('src', jsondata['img_url'][3])
            $('#image5').attr('src', jsondata['img_url'][4])
            $('#image6').attr('src', jsondata['img_url'][5])
            $('#image7').attr('src', jsondata['img_url'][6])
            $('#image8').attr('src', jsondata['img_url'][7])
            $('#image9').attr('src', jsondata['img_url'][8])
            $('#image10').attr('src', jsondata['img_url'][9])
            $('#image11').attr('src', jsondata['img_url'][10])
        }).fail(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
        });
    });
    $('#img-btn-cafe9').click(function(){
        var predict1 = $('#cate-cafe-text9').val();
        var im1 = $('#image-btn-cafe9').attr('src');
        var img = $('<img />').attr({
            'class': 'col-md-2',
            'id': '',
            'src': '',
            'max-width' : '100%',
            'height' : 'auto'
        });
        (img).attr('src', im1);
        (img).appendTo('.clone-img');
        $('#input_text').append(predict1+ ' ');
        $.ajax({
            url: '/get_end_predictions.html',
            type: "post",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify({
                "input_text": $('#input_text').val(),
                "top_k": '50',
            })
        }).done(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
            $('#predict1').val(jsondata['bert'].split(' ')[0])
            $('#predict2').val(jsondata['bert'].split(' ')[1])
            $('#predict3').val(jsondata['bert'].split(' ')[2])
            $('#predict4').val(jsondata['bert'].split(' ')[3])
            $('#predict5').val(jsondata['bert'].split(' ')[4])
            $('#predict6').val(jsondata['bert'].split(' ')[5])
            $('#predict7').val(jsondata['bert'].split(' ')[6])
            $('#predict8').val(jsondata['bert'].split(' ')[7])
            $('#predict9').val(jsondata['bert'].split(' ')[8])
            $('#predict10').val(jsondata['bert'].split(' ')[9])
            $('#predict11').val(jsondata['bert'].split(' ')[10])

            $('#image1').attr('src', jsondata['img_url'][0])
            $('#image2').attr('src', jsondata['img_url'][1])
            $('#image3').attr('src', jsondata['img_url'][2])
            $('#image4').attr('src', jsondata['img_url'][3])
            $('#image5').attr('src', jsondata['img_url'][4])
            $('#image6').attr('src', jsondata['img_url'][5])
            $('#image7').attr('src', jsondata['img_url'][6])
            $('#image8').attr('src', jsondata['img_url'][7])
            $('#image9').attr('src', jsondata['img_url'][8])
            $('#image10').attr('src', jsondata['img_url'][9])
            $('#image11').attr('src', jsondata['img_url'][10])
        }).fail(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
        });
    });
    $('#img-btn-cafe10').click(function(){
        var predict1 = $('#cate-cafe-text10').val();
        var im1 = $('#image-btn-cafe10').attr('src');
        var img = $('<img />').attr({
            'class': 'col-md-2',
            'id': '',
            'src': '',
            'max-width' : '100%',
            'height' : 'auto'
        });
        (img).attr('src', im1);
        (img).appendTo('.clone-img');
        $('#input_text').append(predict1+ ' ');
        $.ajax({
            url: '/get_end_predictions.html',
            type: "post",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify({
                "input_text": $('#input_text').val(),
                "top_k": '50',
            })
        }).done(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
            $('#predict1').val(jsondata['bert'].split(' ')[0])
            $('#predict2').val(jsondata['bert'].split(' ')[1])
            $('#predict3').val(jsondata['bert'].split(' ')[2])
            $('#predict4').val(jsondata['bert'].split(' ')[3])
            $('#predict5').val(jsondata['bert'].split(' ')[4])
            $('#predict6').val(jsondata['bert'].split(' ')[5])
            $('#predict7').val(jsondata['bert'].split(' ')[6])
            $('#predict8').val(jsondata['bert'].split(' ')[7])
            $('#predict9').val(jsondata['bert'].split(' ')[8])
            $('#predict10').val(jsondata['bert'].split(' ')[9])
            $('#predict11').val(jsondata['bert'].split(' ')[10])

            $('#image1').attr('src', jsondata['img_url'][0])
            $('#image2').attr('src', jsondata['img_url'][1])
            $('#image3').attr('src', jsondata['img_url'][2])
            $('#image4').attr('src', jsondata['img_url'][3])
            $('#image5').attr('src', jsondata['img_url'][4])
            $('#image6').attr('src', jsondata['img_url'][5])
            $('#image7').attr('src', jsondata['img_url'][6])
            $('#image8').attr('src', jsondata['img_url'][7])
            $('#image9').attr('src', jsondata['img_url'][8])
            $('#image10').attr('src', jsondata['img_url'][9])
            $('#image11').attr('src', jsondata['img_url'][10])
        }).fail(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
        });
    });
    $('#img-btn-cafe11').click(function(){
        var predict1 = $('#cate-cafe-text11').val();
        var im1 = $('#image-btn-cafe11').attr('src');
        var img = $('<img />').attr({
            'class': 'col-md-2',
            'id': '',
            'src': '',
            'max-width' : '100%',
            'height' : 'auto'
        });
        (img).attr('src', im1);
        (img).appendTo('.clone-img');
        $('#input_text').append(predict1+ ' ');
        $.ajax({
            url: '/get_end_predictions.html',
            type: "post",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify({
                "input_text": $('#input_text').val(),
                "top_k": '50',
            })
        }).done(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
            $('#predict1').val(jsondata['bert'].split(' ')[0])
            $('#predict2').val(jsondata['bert'].split(' ')[1])
            $('#predict3').val(jsondata['bert'].split(' ')[2])
            $('#predict4').val(jsondata['bert'].split(' ')[3])
            $('#predict5').val(jsondata['bert'].split(' ')[4])
            $('#predict6').val(jsondata['bert'].split(' ')[5])
            $('#predict7').val(jsondata['bert'].split(' ')[6])
            $('#predict8').val(jsondata['bert'].split(' ')[7])
            $('#predict9').val(jsondata['bert'].split(' ')[8])
            $('#predict10').val(jsondata['bert'].split(' ')[9])
            $('#predict11').val(jsondata['bert'].split(' ')[10])

            $('#image1').attr('src', jsondata['img_url'][0])
            $('#image2').attr('src', jsondata['img_url'][1])
            $('#image3').attr('src', jsondata['img_url'][2])
            $('#image4').attr('src', jsondata['img_url'][3])
            $('#image5').attr('src', jsondata['img_url'][4])
            $('#image6').attr('src', jsondata['img_url'][5])
            $('#image7').attr('src', jsondata['img_url'][6])
            $('#image8').attr('src', jsondata['img_url'][7])
            $('#image9').attr('src', jsondata['img_url'][8])
            $('#image10').attr('src', jsondata['img_url'][9])
            $('#image11').attr('src', jsondata['img_url'][10])
        }).fail(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
        });
    });
    $('#img-btn-cafe12').click(function(){
        var predict1 = $('#cate-cafe-text12').val();
        var im1 = $('#image-btn-cafe12').attr('src');
        var img = $('<img />').attr({
            'class': 'col-md-2',
            'id': '',
            'src': '',
            'max-width' : '100%',
            'height' : 'auto'
        });
        (img).attr('src', im1);
        (img).appendTo('.clone-img');
        $('#input_text').append(predict1+ ' ');
        $.ajax({
            url: '/get_end_predictions.html',
            type: "post",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify({
                "input_text": $('#input_text').val(),
                "top_k": '50',
            })
        }).done(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
            $('#predict1').val(jsondata['bert'].split(' ')[0])
            $('#predict2').val(jsondata['bert'].split(' ')[1])
            $('#predict3').val(jsondata['bert'].split(' ')[2])
            $('#predict4').val(jsondata['bert'].split(' ')[3])
            $('#predict5').val(jsondata['bert'].split(' ')[4])
            $('#predict6').val(jsondata['bert'].split(' ')[5])
            $('#predict7').val(jsondata['bert'].split(' ')[6])
            $('#predict8').val(jsondata['bert'].split(' ')[7])
            $('#predict9').val(jsondata['bert'].split(' ')[8])
            $('#predict10').val(jsondata['bert'].split(' ')[9])
            $('#predict11').val(jsondata['bert'].split(' ')[10])

            $('#image1').attr('src', jsondata['img_url'][0])
            $('#image2').attr('src', jsondata['img_url'][1])
            $('#image3').attr('src', jsondata['img_url'][2])
            $('#image4').attr('src', jsondata['img_url'][3])
            $('#image5').attr('src', jsondata['img_url'][4])
            $('#image6').attr('src', jsondata['img_url'][5])
            $('#image7').attr('src', jsondata['img_url'][6])
            $('#image8').attr('src', jsondata['img_url'][7])
            $('#image9').attr('src', jsondata['img_url'][8])
            $('#image10').attr('src', jsondata['img_url'][9])
            $('#image11').attr('src', jsondata['img_url'][10])
        }).fail(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
        });
    });


    $('#img-btn-conve1').click(function(){
        var predict1 = $('#cate-conve-text1').val();
        var im1 = $('#image-btn-conve1').attr('src');
        var img = $('<img />').attr({
            'class': 'col-md-2',
            'id': '',
            'src': '',
            'max-width' : '100%',
            'height' : 'auto'
        });
        (img).attr('src', im1);
        (img).appendTo('.clone-img');
        $('#input_text').append(predict1+ ' ');
        $.ajax({
            url: '/get_end_predictions.html',
            type: "post",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify({
                "input_text": $('#input_text').val(),
                "top_k": '50',
            })
        }).done(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
            $('#predict1').val(jsondata['bert'].split(' ')[0])
            $('#predict2').val(jsondata['bert'].split(' ')[1])
            $('#predict3').val(jsondata['bert'].split(' ')[2])
            $('#predict4').val(jsondata['bert'].split(' ')[3])
            $('#predict5').val(jsondata['bert'].split(' ')[4])
            $('#predict6').val(jsondata['bert'].split(' ')[5])
            $('#predict7').val(jsondata['bert'].split(' ')[6])
            $('#predict8').val(jsondata['bert'].split(' ')[7])
            $('#predict9').val(jsondata['bert'].split(' ')[8])
            $('#predict10').val(jsondata['bert'].split(' ')[9])
            $('#predict11').val(jsondata['bert'].split(' ')[10])

            $('#image1').attr('src', jsondata['img_url'][0])
            $('#image2').attr('src', jsondata['img_url'][1])
            $('#image3').attr('src', jsondata['img_url'][2])
            $('#image4').attr('src', jsondata['img_url'][3])
            $('#image5').attr('src', jsondata['img_url'][4])
            $('#image6').attr('src', jsondata['img_url'][5])
            $('#image7').attr('src', jsondata['img_url'][6])
            $('#image8').attr('src', jsondata['img_url'][7])
            $('#image9').attr('src', jsondata['img_url'][8])
            $('#image10').attr('src', jsondata['img_url'][9])
            $('#image11').attr('src', jsondata['img_url'][10])
        }).fail(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
        });
    });
    $('#img-btn-conve2').click(function(){
        var predict1 = $('#cate-conve-text2').val();
        var im1 = $('#image-btn-conve2').attr('src');
        var img = $('<img />').attr({
            'class': 'col-md-2',
            'id': '',
            'src': '',
            'max-width' : '100%',
            'height' : 'auto'
        });
        (img).attr('src', im1);
        (img).appendTo('.clone-img');
        $('#input_text').append(predict1+ ' ');
        $.ajax({
            url: '/get_end_predictions.html',
            type: "post",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify({
                "input_text": $('#input_text').val(),
                "top_k": '50',
            })
        }).done(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
            $('#predict1').val(jsondata['bert'].split(' ')[0])
            $('#predict2').val(jsondata['bert'].split(' ')[1])
            $('#predict3').val(jsondata['bert'].split(' ')[2])
            $('#predict4').val(jsondata['bert'].split(' ')[3])
            $('#predict5').val(jsondata['bert'].split(' ')[4])
            $('#predict6').val(jsondata['bert'].split(' ')[5])
            $('#predict7').val(jsondata['bert'].split(' ')[6])
            $('#predict8').val(jsondata['bert'].split(' ')[7])
            $('#predict9').val(jsondata['bert'].split(' ')[8])
            $('#predict10').val(jsondata['bert'].split(' ')[9])
            $('#predict11').val(jsondata['bert'].split(' ')[10])

            $('#image1').attr('src', jsondata['img_url'][0])
            $('#image2').attr('src', jsondata['img_url'][1])
            $('#image3').attr('src', jsondata['img_url'][2])
            $('#image4').attr('src', jsondata['img_url'][3])
            $('#image5').attr('src', jsondata['img_url'][4])
            $('#image6').attr('src', jsondata['img_url'][5])
            $('#image7').attr('src', jsondata['img_url'][6])
            $('#image8').attr('src', jsondata['img_url'][7])
            $('#image9').attr('src', jsondata['img_url'][8])
            $('#image10').attr('src', jsondata['img_url'][9])
            $('#image11').attr('src', jsondata['img_url'][10])
        }).fail(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
        });
    });
    $('#img-btn-conve3').click(function(){
        var predict1 = $('#cate-conve-text3').val();
        var im1 = $('#image-btn-conve3').attr('src');
        var img = $('<img />').attr({
            'class': 'col-md-2',
            'id': '',
            'src': '',
            'max-width' : '100%',
            'height' : 'auto'
        });
        (img).attr('src', im1);
        (img).appendTo('.clone-img');
        $('#input_text').append(predict1+ ' ');
        $.ajax({
            url: '/get_end_predictions.html',
            type: "post",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify({
                "input_text": $('#input_text').val(),
                "top_k": '50',
            })
        }).done(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
            $('#predict1').val(jsondata['bert'].split(' ')[0])
            $('#predict2').val(jsondata['bert'].split(' ')[1])
            $('#predict3').val(jsondata['bert'].split(' ')[2])
            $('#predict4').val(jsondata['bert'].split(' ')[3])
            $('#predict5').val(jsondata['bert'].split(' ')[4])
            $('#predict6').val(jsondata['bert'].split(' ')[5])
            $('#predict7').val(jsondata['bert'].split(' ')[6])
            $('#predict8').val(jsondata['bert'].split(' ')[7])
            $('#predict9').val(jsondata['bert'].split(' ')[8])
            $('#predict10').val(jsondata['bert'].split(' ')[9])
            $('#predict11').val(jsondata['bert'].split(' ')[10])

            $('#image1').attr('src', jsondata['img_url'][0])
            $('#image2').attr('src', jsondata['img_url'][1])
            $('#image3').attr('src', jsondata['img_url'][2])
            $('#image4').attr('src', jsondata['img_url'][3])
            $('#image5').attr('src', jsondata['img_url'][4])
            $('#image6').attr('src', jsondata['img_url'][5])
            $('#image7').attr('src', jsondata['img_url'][6])
            $('#image8').attr('src', jsondata['img_url'][7])
            $('#image9').attr('src', jsondata['img_url'][8])
            $('#image10').attr('src', jsondata['img_url'][9])
            $('#image11').attr('src', jsondata['img_url'][10])
        }).fail(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
        });
    });
    $('#img-btn-conve4').click(function(){
        var predict1 = $('#cate-conve-text4').val();
        var im1 = $('#image-btn-conve4').attr('src');
        var img = $('<img />').attr({
            'class': 'col-md-2',
            'id': '',
            'src': '',
            'max-width' : '100%',
            'height' : 'auto'
        });
        (img).attr('src', im1);
        (img).appendTo('.clone-img');
        $('#input_text').append(predict1+ ' ');
        $.ajax({
            url: '/get_end_predictions.html',
            type: "post",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify({
                "input_text": $('#input_text').val(),
                "top_k": '50',
            })
        }).done(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
            $('#predict1').val(jsondata['bert'].split(' ')[0])
            $('#predict2').val(jsondata['bert'].split(' ')[1])
            $('#predict3').val(jsondata['bert'].split(' ')[2])
            $('#predict4').val(jsondata['bert'].split(' ')[3])
            $('#predict5').val(jsondata['bert'].split(' ')[4])
            $('#predict6').val(jsondata['bert'].split(' ')[5])
            $('#predict7').val(jsondata['bert'].split(' ')[6])
            $('#predict8').val(jsondata['bert'].split(' ')[7])
            $('#predict9').val(jsondata['bert'].split(' ')[8])
            $('#predict10').val(jsondata['bert'].split(' ')[9])
            $('#predict11').val(jsondata['bert'].split(' ')[10])

            $('#image1').attr('src', jsondata['img_url'][0])
            $('#image2').attr('src', jsondata['img_url'][1])
            $('#image3').attr('src', jsondata['img_url'][2])
            $('#image4').attr('src', jsondata['img_url'][3])
            $('#image5').attr('src', jsondata['img_url'][4])
            $('#image6').attr('src', jsondata['img_url'][5])
            $('#image7').attr('src', jsondata['img_url'][6])
            $('#image8').attr('src', jsondata['img_url'][7])
            $('#image9').attr('src', jsondata['img_url'][8])
            $('#image10').attr('src', jsondata['img_url'][9])
            $('#image11').attr('src', jsondata['img_url'][10])
        }).fail(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
        });
    });
    $('#img-btn-conve5').click(function(){
        var predict1 = $('#cate-conve-text5').val();
        var im1 = $('#image-btn-conve5').attr('src');
        var img = $('<img />').attr({
            'class': 'col-md-2',
            'id': '',
            'src': '',
            'max-width' : '100%',
            'height' : 'auto'
        });
        (img).attr('src', im1);
        (img).appendTo('.clone-img');
        $('#input_text').append(predict1+ ' ');
        $.ajax({
            url: '/get_end_predictions.html',
            type: "post",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify({
                "input_text": $('#input_text').val(),
                "top_k": '50',
            })
        }).done(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
            $('#predict1').val(jsondata['bert'].split(' ')[0])
            $('#predict2').val(jsondata['bert'].split(' ')[1])
            $('#predict3').val(jsondata['bert'].split(' ')[2])
            $('#predict4').val(jsondata['bert'].split(' ')[3])
            $('#predict5').val(jsondata['bert'].split(' ')[4])
            $('#predict6').val(jsondata['bert'].split(' ')[5])
            $('#predict7').val(jsondata['bert'].split(' ')[6])
            $('#predict8').val(jsondata['bert'].split(' ')[7])
            $('#predict9').val(jsondata['bert'].split(' ')[8])
            $('#predict10').val(jsondata['bert'].split(' ')[9])
            $('#predict11').val(jsondata['bert'].split(' ')[10])

            $('#image1').attr('src', jsondata['img_url'][0])
            $('#image2').attr('src', jsondata['img_url'][1])
            $('#image3').attr('src', jsondata['img_url'][2])
            $('#image4').attr('src', jsondata['img_url'][3])
            $('#image5').attr('src', jsondata['img_url'][4])
            $('#image6').attr('src', jsondata['img_url'][5])
            $('#image7').attr('src', jsondata['img_url'][6])
            $('#image8').attr('src', jsondata['img_url'][7])
            $('#image9').attr('src', jsondata['img_url'][8])
            $('#image10').attr('src', jsondata['img_url'][9])
            $('#image11').attr('src', jsondata['img_url'][10])
        }).fail(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
        });
    });
    $('#img-btn-conve6').click(function(){
        var predict1 = $('#cate-conve-text6').val();
        var im1 = $('#image-btn-conve6').attr('src');
        var img = $('<img />').attr({
            'class': 'col-md-2',
            'id': '',
            'src': '',
            'max-width' : '100%',
            'height' : 'auto'
        });
        (img).attr('src', im1);
        (img).appendTo('.clone-img');
        $('#input_text').append(predict1+ ' ');
        $.ajax({
            url: '/get_end_predictions.html',
            type: "post",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify({
                "input_text": $('#input_text').val(),
                "top_k": '50',
            })
        }).done(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
            $('#predict1').val(jsondata['bert'].split(' ')[0])
            $('#predict2').val(jsondata['bert'].split(' ')[1])
            $('#predict3').val(jsondata['bert'].split(' ')[2])
            $('#predict4').val(jsondata['bert'].split(' ')[3])
            $('#predict5').val(jsondata['bert'].split(' ')[4])
            $('#predict6').val(jsondata['bert'].split(' ')[5])
            $('#predict7').val(jsondata['bert'].split(' ')[6])
            $('#predict8').val(jsondata['bert'].split(' ')[7])
            $('#predict9').val(jsondata['bert'].split(' ')[8])
            $('#predict10').val(jsondata['bert'].split(' ')[9])
            $('#predict11').val(jsondata['bert'].split(' ')[10])

            $('#image1').attr('src', jsondata['img_url'][0])
            $('#image2').attr('src', jsondata['img_url'][1])
            $('#image3').attr('src', jsondata['img_url'][2])
            $('#image4').attr('src', jsondata['img_url'][3])
            $('#image5').attr('src', jsondata['img_url'][4])
            $('#image6').attr('src', jsondata['img_url'][5])
            $('#image7').attr('src', jsondata['img_url'][6])
            $('#image8').attr('src', jsondata['img_url'][7])
            $('#image9').attr('src', jsondata['img_url'][8])
            $('#image10').attr('src', jsondata['img_url'][9])
            $('#image11').attr('src', jsondata['img_url'][10])
        }).fail(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
        });
    });
    $('#img-btn-conve7').click(function(){
        var predict1 = $('#cate-conve-text7').val();
        var im1 = $('#image-btn-conve7').attr('src');
        var img = $('<img />').attr({
            'class': 'col-md-2',
            'id': '',
            'src': '',
            'max-width' : '100%',
            'height' : 'auto'
        });
        (img).attr('src', im1);
        (img).appendTo('.clone-img');
        $('#input_text').append(predict1+ ' ');
        $.ajax({
            url: '/get_end_predictions.html',
            type: "post",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify({
                "input_text": $('#input_text').val(),
                "top_k": '50',
            })
        }).done(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
            $('#predict1').val(jsondata['bert'].split(' ')[0])
            $('#predict2').val(jsondata['bert'].split(' ')[1])
            $('#predict3').val(jsondata['bert'].split(' ')[2])
            $('#predict4').val(jsondata['bert'].split(' ')[3])
            $('#predict5').val(jsondata['bert'].split(' ')[4])
            $('#predict6').val(jsondata['bert'].split(' ')[5])
            $('#predict7').val(jsondata['bert'].split(' ')[6])
            $('#predict8').val(jsondata['bert'].split(' ')[7])
            $('#predict9').val(jsondata['bert'].split(' ')[8])
            $('#predict10').val(jsondata['bert'].split(' ')[9])
            $('#predict11').val(jsondata['bert'].split(' ')[10])

            $('#image1').attr('src', jsondata['img_url'][0])
            $('#image2').attr('src', jsondata['img_url'][1])
            $('#image3').attr('src', jsondata['img_url'][2])
            $('#image4').attr('src', jsondata['img_url'][3])
            $('#image5').attr('src', jsondata['img_url'][4])
            $('#image6').attr('src', jsondata['img_url'][5])
            $('#image7').attr('src', jsondata['img_url'][6])
            $('#image8').attr('src', jsondata['img_url'][7])
            $('#image9').attr('src', jsondata['img_url'][8])
            $('#image10').attr('src', jsondata['img_url'][9])
            $('#image11').attr('src', jsondata['img_url'][10])
        }).fail(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
        });
    });
    $('#img-btn-conve8').click(function(){
        var predict1 = $('#cate-conve-text8').val();
        var im1 = $('#image-btn-conve8').attr('src');
        var img = $('<img />').attr({
            'class': 'col-md-2',
            'id': '',
            'src': '',
            'max-width' : '100%',
            'height' : 'auto'
        });
        (img).attr('src', im1);
        (img).appendTo('.clone-img');
        $('#input_text').append(predict1+ ' ');
        $.ajax({
            url: '/get_end_predictions.html',
            type: "post",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify({
                "input_text": $('#input_text').val(),
                "top_k": '50',
            })
        }).done(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
            $('#predict1').val(jsondata['bert'].split(' ')[0])
            $('#predict2').val(jsondata['bert'].split(' ')[1])
            $('#predict3').val(jsondata['bert'].split(' ')[2])
            $('#predict4').val(jsondata['bert'].split(' ')[3])
            $('#predict5').val(jsondata['bert'].split(' ')[4])
            $('#predict6').val(jsondata['bert'].split(' ')[5])
            $('#predict7').val(jsondata['bert'].split(' ')[6])
            $('#predict8').val(jsondata['bert'].split(' ')[7])
            $('#predict9').val(jsondata['bert'].split(' ')[8])
            $('#predict10').val(jsondata['bert'].split(' ')[9])
            $('#predict11').val(jsondata['bert'].split(' ')[10])

            $('#image1').attr('src', jsondata['img_url'][0])
            $('#image2').attr('src', jsondata['img_url'][1])
            $('#image3').attr('src', jsondata['img_url'][2])
            $('#image4').attr('src', jsondata['img_url'][3])
            $('#image5').attr('src', jsondata['img_url'][4])
            $('#image6').attr('src', jsondata['img_url'][5])
            $('#image7').attr('src', jsondata['img_url'][6])
            $('#image8').attr('src', jsondata['img_url'][7])
            $('#image9').attr('src', jsondata['img_url'][8])
            $('#image10').attr('src', jsondata['img_url'][9])
            $('#image11').attr('src', jsondata['img_url'][10])
        }).fail(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
        });
    });
    $('#img-btn-conve9').click(function(){
        var predict1 = $('#cate-conve-text9').val();
        var im1 = $('#image-btn-conve9').attr('src');
        var img = $('<img />').attr({
            'class': 'col-md-2',
            'id': '',
            'src': '',
            'max-width' : '100%',
            'height' : 'auto'
        });
        (img).attr('src', im1);
        (img).appendTo('.clone-img');
        $('#input_text').append(predict1+ ' ');
        $.ajax({
            url: '/get_end_predictions.html',
            type: "post",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify({
                "input_text": $('#input_text').val(),
                "top_k": '50',
            })
        }).done(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
            $('#predict1').val(jsondata['bert'].split(' ')[0])
            $('#predict2').val(jsondata['bert'].split(' ')[1])
            $('#predict3').val(jsondata['bert'].split(' ')[2])
            $('#predict4').val(jsondata['bert'].split(' ')[3])
            $('#predict5').val(jsondata['bert'].split(' ')[4])
            $('#predict6').val(jsondata['bert'].split(' ')[5])
            $('#predict7').val(jsondata['bert'].split(' ')[6])
            $('#predict8').val(jsondata['bert'].split(' ')[7])
            $('#predict9').val(jsondata['bert'].split(' ')[8])
            $('#predict10').val(jsondata['bert'].split(' ')[9])
            $('#predict11').val(jsondata['bert'].split(' ')[10])

            $('#image1').attr('src', jsondata['img_url'][0])
            $('#image2').attr('src', jsondata['img_url'][1])
            $('#image3').attr('src', jsondata['img_url'][2])
            $('#image4').attr('src', jsondata['img_url'][3])
            $('#image5').attr('src', jsondata['img_url'][4])
            $('#image6').attr('src', jsondata['img_url'][5])
            $('#image7').attr('src', jsondata['img_url'][6])
            $('#image8').attr('src', jsondata['img_url'][7])
            $('#image9').attr('src', jsondata['img_url'][8])
            $('#image10').attr('src', jsondata['img_url'][9])
            $('#image11').attr('src', jsondata['img_url'][10])
        }).fail(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
        });
    });
    $('#img-btn-conve10').click(function(){
        var predict1 = $('#cate-conve-text10').val();
        var im1 = $('#image-btn-conve10').attr('src');
        var img = $('<img />').attr({
            'class': 'col-md-2',
            'id': '',
            'src': '',
            'max-width' : '100%',
            'height' : 'auto'
        });
        (img).attr('src', im1);
        (img).appendTo('.clone-img');
        $('#input_text').append(predict1+ ' ');
        $.ajax({
            url: '/get_end_predictions.html',
            type: "post",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify({
                "input_text": $('#input_text').val(),
                "top_k": '50',
            })
        }).done(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
            $('#predict1').val(jsondata['bert'].split(' ')[0])
            $('#predict2').val(jsondata['bert'].split(' ')[1])
            $('#predict3').val(jsondata['bert'].split(' ')[2])
            $('#predict4').val(jsondata['bert'].split(' ')[3])
            $('#predict5').val(jsondata['bert'].split(' ')[4])
            $('#predict6').val(jsondata['bert'].split(' ')[5])
            $('#predict7').val(jsondata['bert'].split(' ')[6])
            $('#predict8').val(jsondata['bert'].split(' ')[7])
            $('#predict9').val(jsondata['bert'].split(' ')[8])
            $('#predict10').val(jsondata['bert'].split(' ')[9])
            $('#predict11').val(jsondata['bert'].split(' ')[10])

            $('#image1').attr('src', jsondata['img_url'][0])
            $('#image2').attr('src', jsondata['img_url'][1])
            $('#image3').attr('src', jsondata['img_url'][2])
            $('#image4').attr('src', jsondata['img_url'][3])
            $('#image5').attr('src', jsondata['img_url'][4])
            $('#image6').attr('src', jsondata['img_url'][5])
            $('#image7').attr('src', jsondata['img_url'][6])
            $('#image8').attr('src', jsondata['img_url'][7])
            $('#image9').attr('src', jsondata['img_url'][8])
            $('#image10').attr('src', jsondata['img_url'][9])
            $('#image11').attr('src', jsondata['img_url'][10])
        }).fail(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
        });
    });
    $('#img-btn-conve11').click(function(){
        var predict1 = $('#cate-conve-text11').val();
        var im1 = $('#image-btn-conve11').attr('src');
        var img = $('<img />').attr({
            'class': 'col-md-2',
            'id': '',
            'src': '',
            'max-width' : '100%',
            'height' : 'auto'
        });
        (img).attr('src', im1);
        (img).appendTo('.clone-img');
        $('#input_text').append(predict1+ ' ');
        $.ajax({
            url: '/get_end_predictions.html',
            type: "post",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify({
                "input_text": $('#input_text').val(),
                "top_k": '50',
            })
        }).done(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
            $('#predict1').val(jsondata['bert'].split(' ')[0])
            $('#predict2').val(jsondata['bert'].split(' ')[1])
            $('#predict3').val(jsondata['bert'].split(' ')[2])
            $('#predict4').val(jsondata['bert'].split(' ')[3])
            $('#predict5').val(jsondata['bert'].split(' ')[4])
            $('#predict6').val(jsondata['bert'].split(' ')[5])
            $('#predict7').val(jsondata['bert'].split(' ')[6])
            $('#predict8').val(jsondata['bert'].split(' ')[7])
            $('#predict9').val(jsondata['bert'].split(' ')[8])
            $('#predict10').val(jsondata['bert'].split(' ')[9])
            $('#predict11').val(jsondata['bert'].split(' ')[10])

            $('#image1').attr('src', jsondata['img_url'][0])
            $('#image2').attr('src', jsondata['img_url'][1])
            $('#image3').attr('src', jsondata['img_url'][2])
            $('#image4').attr('src', jsondata['img_url'][3])
            $('#image5').attr('src', jsondata['img_url'][4])
            $('#image6').attr('src', jsondata['img_url'][5])
            $('#image7').attr('src', jsondata['img_url'][6])
            $('#image8').attr('src', jsondata['img_url'][7])
            $('#image9').attr('src', jsondata['img_url'][8])
            $('#image10').attr('src', jsondata['img_url'][9])
            $('#image11').attr('src', jsondata['img_url'][10])
        }).fail(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
        });
    });
    $('#img-btn-conve12').click(function(){
        var predict1 = $('#cate-conve-text12').val();
        var im1 = $('#image-btn-conve12').attr('src');
        var img = $('<img />').attr({
            'class': 'col-md-2',
            'id': '',
            'src': '',
            'max-width' : '100%',
            'height' : 'auto'
        });
        (img).attr('src', im1);
        (img).appendTo('.clone-img');
        $('#input_text').append(predict1+ ' ');
        $.ajax({
            url: '/get_end_predictions.html',
            type: "post",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify({
                "input_text": $('#input_text').val(),
                "top_k": '50',
            })
        }).done(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
            $('#predict1').val(jsondata['bert'].split(' ')[0])
            $('#predict2').val(jsondata['bert'].split(' ')[1])
            $('#predict3').val(jsondata['bert'].split(' ')[2])
            $('#predict4').val(jsondata['bert'].split(' ')[3])
            $('#predict5').val(jsondata['bert'].split(' ')[4])
            $('#predict6').val(jsondata['bert'].split(' ')[5])
            $('#predict7').val(jsondata['bert'].split(' ')[6])
            $('#predict8').val(jsondata['bert'].split(' ')[7])
            $('#predict9').val(jsondata['bert'].split(' ')[8])
            $('#predict10').val(jsondata['bert'].split(' ')[9])
            $('#predict11').val(jsondata['bert'].split(' ')[10])

            $('#image1').attr('src', jsondata['img_url'][0])
            $('#image2').attr('src', jsondata['img_url'][1])
            $('#image3').attr('src', jsondata['img_url'][2])
            $('#image4').attr('src', jsondata['img_url'][3])
            $('#image5').attr('src', jsondata['img_url'][4])
            $('#image6').attr('src', jsondata['img_url'][5])
            $('#image7').attr('src', jsondata['img_url'][6])
            $('#image8').attr('src', jsondata['img_url'][7])
            $('#image9').attr('src', jsondata['img_url'][8])
            $('#image10').attr('src', jsondata['img_url'][9])
            $('#image11').attr('src', jsondata['img_url'][10])
        }).fail(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
        });
    });


    $('#img-btn-hos1').click(function(){
        var predict1 = $('#cate-hos-text1').val();
        var im1 = $('#image-btn-hos1').attr('src');
        var img = $('<img />').attr({
            'class': 'col-md-2',
            'id': '',
            'src': '',
            'max-width' : '100%',
            'height' : 'auto'
        });
        (img).attr('src', im1);
        (img).appendTo('.clone-img');
        $('#input_text').append(predict1+ ' ');
        $.ajax({
            url: '/get_end_predictions.html',
            type: "post",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify({
                "input_text": $('#input_text').val(),
                "top_k": '50',
            })
        }).done(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
            $('#predict1').val(jsondata['bert'].split(' ')[0])
            $('#predict2').val(jsondata['bert'].split(' ')[1])
            $('#predict3').val(jsondata['bert'].split(' ')[2])
            $('#predict4').val(jsondata['bert'].split(' ')[3])
            $('#predict5').val(jsondata['bert'].split(' ')[4])
            $('#predict6').val(jsondata['bert'].split(' ')[5])
            $('#predict7').val(jsondata['bert'].split(' ')[6])
            $('#predict8').val(jsondata['bert'].split(' ')[7])
            $('#predict9').val(jsondata['bert'].split(' ')[8])
            $('#predict10').val(jsondata['bert'].split(' ')[9])
            $('#predict11').val(jsondata['bert'].split(' ')[10])

            $('#image1').attr('src', jsondata['img_url'][0])
            $('#image2').attr('src', jsondata['img_url'][1])
            $('#image3').attr('src', jsondata['img_url'][2])
            $('#image4').attr('src', jsondata['img_url'][3])
            $('#image5').attr('src', jsondata['img_url'][4])
            $('#image6').attr('src', jsondata['img_url'][5])
            $('#image7').attr('src', jsondata['img_url'][6])
            $('#image8').attr('src', jsondata['img_url'][7])
            $('#image9').attr('src', jsondata['img_url'][8])
            $('#image10').attr('src', jsondata['img_url'][9])
            $('#image11').attr('src', jsondata['img_url'][10])
        }).fail(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
        });
    });
    $('#img-btn-hos2').click(function(){
        var predict1 = $('#cate-hos-text2').val();
        var im1 = $('#image-btn-hos2').attr('src');
        var img = $('<img />').attr({
            'class': 'col-md-2',
            'id': '',
            'src': '',
            'max-width' : '100%',
            'height' : 'auto'
        });
        (img).attr('src', im1);
        (img).appendTo('.clone-img');
        $('#input_text').append(predict1+ ' ');
        $.ajax({
            url: '/get_end_predictions.html',
            type: "post",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify({
                "input_text": $('#input_text').val(),
                "top_k": '50',
            })
        }).done(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
            $('#predict1').val(jsondata['bert'].split(' ')[0])
            $('#predict2').val(jsondata['bert'].split(' ')[1])
            $('#predict3').val(jsondata['bert'].split(' ')[2])
            $('#predict4').val(jsondata['bert'].split(' ')[3])
            $('#predict5').val(jsondata['bert'].split(' ')[4])
            $('#predict6').val(jsondata['bert'].split(' ')[5])
            $('#predict7').val(jsondata['bert'].split(' ')[6])
            $('#predict8').val(jsondata['bert'].split(' ')[7])
            $('#predict9').val(jsondata['bert'].split(' ')[8])
            $('#predict10').val(jsondata['bert'].split(' ')[9])
            $('#predict11').val(jsondata['bert'].split(' ')[10])

            $('#image1').attr('src', jsondata['img_url'][0])
            $('#image2').attr('src', jsondata['img_url'][1])
            $('#image3').attr('src', jsondata['img_url'][2])
            $('#image4').attr('src', jsondata['img_url'][3])
            $('#image5').attr('src', jsondata['img_url'][4])
            $('#image6').attr('src', jsondata['img_url'][5])
            $('#image7').attr('src', jsondata['img_url'][6])
            $('#image8').attr('src', jsondata['img_url'][7])
            $('#image9').attr('src', jsondata['img_url'][8])
            $('#image10').attr('src', jsondata['img_url'][9])
            $('#image11').attr('src', jsondata['img_url'][10])
        }).fail(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
        });
    });
    $('#img-btn-hos3').click(function(){
        var predict1 = $('#cate-hos-text3').val();
        var im1 = $('#image-btn-hos3').attr('src');
        var img = $('<img />').attr({
            'class': 'col-md-2',
            'id': '',
            'src': '',
            'max-width' : '100%',
            'height' : 'auto'
        });
        (img).attr('src', im1);
        (img).appendTo('.clone-img');
        $('#input_text').append(predict1+ ' ');
        $.ajax({
            url: '/get_end_predictions.html',
            type: "post",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify({
                "input_text": $('#input_text').val(),
                "top_k": '50',
            })
        }).done(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
            $('#predict1').val(jsondata['bert'].split(' ')[0])
            $('#predict2').val(jsondata['bert'].split(' ')[1])
            $('#predict3').val(jsondata['bert'].split(' ')[2])
            $('#predict4').val(jsondata['bert'].split(' ')[3])
            $('#predict5').val(jsondata['bert'].split(' ')[4])
            $('#predict6').val(jsondata['bert'].split(' ')[5])
            $('#predict7').val(jsondata['bert'].split(' ')[6])
            $('#predict8').val(jsondata['bert'].split(' ')[7])
            $('#predict9').val(jsondata['bert'].split(' ')[8])
            $('#predict10').val(jsondata['bert'].split(' ')[9])
            $('#predict11').val(jsondata['bert'].split(' ')[10])

            $('#image1').attr('src', jsondata['img_url'][0])
            $('#image2').attr('src', jsondata['img_url'][1])
            $('#image3').attr('src', jsondata['img_url'][2])
            $('#image4').attr('src', jsondata['img_url'][3])
            $('#image5').attr('src', jsondata['img_url'][4])
            $('#image6').attr('src', jsondata['img_url'][5])
            $('#image7').attr('src', jsondata['img_url'][6])
            $('#image8').attr('src', jsondata['img_url'][7])
            $('#image9').attr('src', jsondata['img_url'][8])
            $('#image10').attr('src', jsondata['img_url'][9])
            $('#image11').attr('src', jsondata['img_url'][10])
        }).fail(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
        });
    });
    $('#img-btn-hos4').click(function(){
        var predict1 = $('#cate-hos-text4').val();
        var im1 = $('#image-btn-hos4').attr('src');
        var img = $('<img />').attr({
            'class': 'col-md-2',
            'id': '',
            'src': '',
            'max-width' : '100%',
            'height' : 'auto'
        });
        (img).attr('src', im1);
        (img).appendTo('.clone-img');
        $('#input_text').append(predict1+ ' ');
        $.ajax({
            url: '/get_end_predictions.html',
            type: "post",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify({
                "input_text": $('#input_text').val(),
                "top_k": '50',
            })
        }).done(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
            $('#predict1').val(jsondata['bert'].split(' ')[0])
            $('#predict2').val(jsondata['bert'].split(' ')[1])
            $('#predict3').val(jsondata['bert'].split(' ')[2])
            $('#predict4').val(jsondata['bert'].split(' ')[3])
            $('#predict5').val(jsondata['bert'].split(' ')[4])
            $('#predict6').val(jsondata['bert'].split(' ')[5])
            $('#predict7').val(jsondata['bert'].split(' ')[6])
            $('#predict8').val(jsondata['bert'].split(' ')[7])
            $('#predict9').val(jsondata['bert'].split(' ')[8])
            $('#predict10').val(jsondata['bert'].split(' ')[9])
            $('#predict11').val(jsondata['bert'].split(' ')[10])

            $('#image1').attr('src', jsondata['img_url'][0])
            $('#image2').attr('src', jsondata['img_url'][1])
            $('#image3').attr('src', jsondata['img_url'][2])
            $('#image4').attr('src', jsondata['img_url'][3])
            $('#image5').attr('src', jsondata['img_url'][4])
            $('#image6').attr('src', jsondata['img_url'][5])
            $('#image7').attr('src', jsondata['img_url'][6])
            $('#image8').attr('src', jsondata['img_url'][7])
            $('#image9').attr('src', jsondata['img_url'][8])
            $('#image10').attr('src', jsondata['img_url'][9])
            $('#image11').attr('src', jsondata['img_url'][10])
        }).fail(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
        });
    });
    $('#img-btn-hos5').click(function(){
        var predict1 = $('#cate-hos-text5').val();
        var im1 = $('#image-btn-hos5').attr('src');
        var img = $('<img />').attr({
            'class': 'col-md-2',
            'id': '',
            'src': '',
            'max-width' : '100%',
            'height' : 'auto'
        });
        (img).attr('src', im1);
        (img).appendTo('.clone-img');
        $('#input_text').append(predict1+ ' ');
        $.ajax({
            url: '/get_end_predictions.html',
            type: "post",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify({
                "input_text": $('#input_text').val(),
                "top_k": '50',
            })
        }).done(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
            $('#predict1').val(jsondata['bert'].split(' ')[0])
            $('#predict2').val(jsondata['bert'].split(' ')[1])
            $('#predict3').val(jsondata['bert'].split(' ')[2])
            $('#predict4').val(jsondata['bert'].split(' ')[3])
            $('#predict5').val(jsondata['bert'].split(' ')[4])
            $('#predict6').val(jsondata['bert'].split(' ')[5])
            $('#predict7').val(jsondata['bert'].split(' ')[6])
            $('#predict8').val(jsondata['bert'].split(' ')[7])
            $('#predict9').val(jsondata['bert'].split(' ')[8])
            $('#predict10').val(jsondata['bert'].split(' ')[9])
            $('#predict11').val(jsondata['bert'].split(' ')[10])

            $('#image1').attr('src', jsondata['img_url'][0])
            $('#image2').attr('src', jsondata['img_url'][1])
            $('#image3').attr('src', jsondata['img_url'][2])
            $('#image4').attr('src', jsondata['img_url'][3])
            $('#image5').attr('src', jsondata['img_url'][4])
            $('#image6').attr('src', jsondata['img_url'][5])
            $('#image7').attr('src', jsondata['img_url'][6])
            $('#image8').attr('src', jsondata['img_url'][7])
            $('#image9').attr('src', jsondata['img_url'][8])
            $('#image10').attr('src', jsondata['img_url'][9])
            $('#image11').attr('src', jsondata['img_url'][10])
        }).fail(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
        });
    });
    $('#img-btn-hos6').click(function(){
        var predict1 = $('#cate-hos-text6').val();
        var im1 = $('#image-btn-hos6').attr('src');
        var img = $('<img />').attr({
            'class': 'col-md-2',
            'id': '',
            'src': '',
            'max-width' : '100%',
            'height' : 'auto'
        });
        (img).attr('src', im1);
        (img).appendTo('.clone-img');
        $('#input_text').append(predict1+ ' ');
        $.ajax({
            url: '/get_end_predictions.html',
            type: "post",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify({
                "input_text": $('#input_text').val(),
                "top_k": '50',
            })
        }).done(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
            $('#predict1').val(jsondata['bert'].split(' ')[0])
            $('#predict2').val(jsondata['bert'].split(' ')[1])
            $('#predict3').val(jsondata['bert'].split(' ')[2])
            $('#predict4').val(jsondata['bert'].split(' ')[3])
            $('#predict5').val(jsondata['bert'].split(' ')[4])
            $('#predict6').val(jsondata['bert'].split(' ')[5])
            $('#predict7').val(jsondata['bert'].split(' ')[6])
            $('#predict8').val(jsondata['bert'].split(' ')[7])
            $('#predict9').val(jsondata['bert'].split(' ')[8])
            $('#predict10').val(jsondata['bert'].split(' ')[9])
            $('#predict11').val(jsondata['bert'].split(' ')[10])

            $('#image1').attr('src', jsondata['img_url'][0])
            $('#image2').attr('src', jsondata['img_url'][1])
            $('#image3').attr('src', jsondata['img_url'][2])
            $('#image4').attr('src', jsondata['img_url'][3])
            $('#image5').attr('src', jsondata['img_url'][4])
            $('#image6').attr('src', jsondata['img_url'][5])
            $('#image7').attr('src', jsondata['img_url'][6])
            $('#image8').attr('src', jsondata['img_url'][7])
            $('#image9').attr('src', jsondata['img_url'][8])
            $('#image10').attr('src', jsondata['img_url'][9])
            $('#image11').attr('src', jsondata['img_url'][10])
        }).fail(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
        });
    });
    $('#img-btn-hos7').click(function(){
        var predict1 = $('#cate-hos-text7').val();
        var im1 = $('#image-btn-hos7').attr('src');
        var img = $('<img />').attr({
            'class': 'col-md-2',
            'id': '',
            'src': '',
            'max-width' : '100%',
            'height' : 'auto'
        });
        (img).attr('src', im1);
        (img).appendTo('.clone-img');
        $('#input_text').append(predict1+ ' ');
        $.ajax({
            url: '/get_end_predictions.html',
            type: "post",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify({
                "input_text": $('#input_text').val(),
                "top_k": '50',
            })
        }).done(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
            $('#predict1').val(jsondata['bert'].split(' ')[0])
            $('#predict2').val(jsondata['bert'].split(' ')[1])
            $('#predict3').val(jsondata['bert'].split(' ')[2])
            $('#predict4').val(jsondata['bert'].split(' ')[3])
            $('#predict5').val(jsondata['bert'].split(' ')[4])
            $('#predict6').val(jsondata['bert'].split(' ')[5])
            $('#predict7').val(jsondata['bert'].split(' ')[6])
            $('#predict8').val(jsondata['bert'].split(' ')[7])
            $('#predict9').val(jsondata['bert'].split(' ')[8])
            $('#predict10').val(jsondata['bert'].split(' ')[9])
            $('#predict11').val(jsondata['bert'].split(' ')[10])

            $('#image1').attr('src', jsondata['img_url'][0])
            $('#image2').attr('src', jsondata['img_url'][1])
            $('#image3').attr('src', jsondata['img_url'][2])
            $('#image4').attr('src', jsondata['img_url'][3])
            $('#image5').attr('src', jsondata['img_url'][4])
            $('#image6').attr('src', jsondata['img_url'][5])
            $('#image7').attr('src', jsondata['img_url'][6])
            $('#image8').attr('src', jsondata['img_url'][7])
            $('#image9').attr('src', jsondata['img_url'][8])
            $('#image10').attr('src', jsondata['img_url'][9])
            $('#image11').attr('src', jsondata['img_url'][10])
        }).fail(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
        });
    });
    $('#img-btn-hos8').click(function(){
        var predict1 = $('#cate-hos-text8').val();
        var im1 = $('#image-btn-hos8').attr('src');
        var img = $('<img />').attr({
            'class': 'col-md-2',
            'id': '',
            'src': '',
            'max-width' : '100%',
            'height' : 'auto'
        });
        (img).attr('src', im1);
        (img).appendTo('.clone-img');
        $('#input_text').append(predict1+ ' ');
        $.ajax({
            url: '/get_end_predictions.html',
            type: "post",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify({
                "input_text": $('#input_text').val(),
                "top_k": '50',
            })
        }).done(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
            $('#predict1').val(jsondata['bert'].split(' ')[0])
            $('#predict2').val(jsondata['bert'].split(' ')[1])
            $('#predict3').val(jsondata['bert'].split(' ')[2])
            $('#predict4').val(jsondata['bert'].split(' ')[3])
            $('#predict5').val(jsondata['bert'].split(' ')[4])
            $('#predict6').val(jsondata['bert'].split(' ')[5])
            $('#predict7').val(jsondata['bert'].split(' ')[6])
            $('#predict8').val(jsondata['bert'].split(' ')[7])
            $('#predict9').val(jsondata['bert'].split(' ')[8])
            $('#predict10').val(jsondata['bert'].split(' ')[9])
            $('#predict11').val(jsondata['bert'].split(' ')[10])

            $('#image1').attr('src', jsondata['img_url'][0])
            $('#image2').attr('src', jsondata['img_url'][1])
            $('#image3').attr('src', jsondata['img_url'][2])
            $('#image4').attr('src', jsondata['img_url'][3])
            $('#image5').attr('src', jsondata['img_url'][4])
            $('#image6').attr('src', jsondata['img_url'][5])
            $('#image7').attr('src', jsondata['img_url'][6])
            $('#image8').attr('src', jsondata['img_url'][7])
            $('#image9').attr('src', jsondata['img_url'][8])
            $('#image10').attr('src', jsondata['img_url'][9])
            $('#image11').attr('src', jsondata['img_url'][10])
        }).fail(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
        });
    });
    $('#img-btn-hos9').click(function(){
        var predict1 = $('#cate-hos-text9').val();
        var im1 = $('#image-btn-hos9').attr('src');
        var img = $('<img />').attr({
            'class': 'col-md-2',
            'id': '',
            'src': '',
            'max-width' : '100%',
            'height' : 'auto'
        });
        (img).attr('src', im1);
        (img).appendTo('.clone-img');
        $('#input_text').append(predict1+ ' ');
        $.ajax({
            url: '/get_end_predictions.html',
            type: "post",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify({
                "input_text": $('#input_text').val(),
                "top_k": '50',
            })
        }).done(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
            $('#predict1').val(jsondata['bert'].split(' ')[0])
            $('#predict2').val(jsondata['bert'].split(' ')[1])
            $('#predict3').val(jsondata['bert'].split(' ')[2])
            $('#predict4').val(jsondata['bert'].split(' ')[3])
            $('#predict5').val(jsondata['bert'].split(' ')[4])
            $('#predict6').val(jsondata['bert'].split(' ')[5])
            $('#predict7').val(jsondata['bert'].split(' ')[6])
            $('#predict8').val(jsondata['bert'].split(' ')[7])
            $('#predict9').val(jsondata['bert'].split(' ')[8])
            $('#predict10').val(jsondata['bert'].split(' ')[9])
            $('#predict11').val(jsondata['bert'].split(' ')[10])

            $('#image1').attr('src', jsondata['img_url'][0])
            $('#image2').attr('src', jsondata['img_url'][1])
            $('#image3').attr('src', jsondata['img_url'][2])
            $('#image4').attr('src', jsondata['img_url'][3])
            $('#image5').attr('src', jsondata['img_url'][4])
            $('#image6').attr('src', jsondata['img_url'][5])
            $('#image7').attr('src', jsondata['img_url'][6])
            $('#image8').attr('src', jsondata['img_url'][7])
            $('#image9').attr('src', jsondata['img_url'][8])
            $('#image10').attr('src', jsondata['img_url'][9])
            $('#image11').attr('src', jsondata['img_url'][10])
        }).fail(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
        });
    });
    $('#img-btn-hos10').click(function(){
        var predict1 = $('#cate-hos-text10').val();
        var im1 = $('#image-btn-hos10').attr('src');
        var img = $('<img />').attr({
            'class': 'col-md-2',
            'id': '',
            'src': '',
            'max-width' : '100%',
            'height' : 'auto'
        });
        (img).attr('src', im1);
        (img).appendTo('.clone-img');
        $('#input_text').append(predict1+ ' ');
        $.ajax({
            url: '/get_end_predictions.html',
            type: "post",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify({
                "input_text": $('#input_text').val(),
                "top_k": '50',
            })
        }).done(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
            $('#predict1').val(jsondata['bert'].split(' ')[0])
            $('#predict2').val(jsondata['bert'].split(' ')[1])
            $('#predict3').val(jsondata['bert'].split(' ')[2])
            $('#predict4').val(jsondata['bert'].split(' ')[3])
            $('#predict5').val(jsondata['bert'].split(' ')[4])
            $('#predict6').val(jsondata['bert'].split(' ')[5])
            $('#predict7').val(jsondata['bert'].split(' ')[6])
            $('#predict8').val(jsondata['bert'].split(' ')[7])
            $('#predict9').val(jsondata['bert'].split(' ')[8])
            $('#predict10').val(jsondata['bert'].split(' ')[9])
            $('#predict11').val(jsondata['bert'].split(' ')[10])

            $('#image1').attr('src', jsondata['img_url'][0])
            $('#image2').attr('src', jsondata['img_url'][1])
            $('#image3').attr('src', jsondata['img_url'][2])
            $('#image4').attr('src', jsondata['img_url'][3])
            $('#image5').attr('src', jsondata['img_url'][4])
            $('#image6').attr('src', jsondata['img_url'][5])
            $('#image7').attr('src', jsondata['img_url'][6])
            $('#image8').attr('src', jsondata['img_url'][7])
            $('#image9').attr('src', jsondata['img_url'][8])
            $('#image10').attr('src', jsondata['img_url'][9])
            $('#image11').attr('src', jsondata['img_url'][10])
        }).fail(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
        });
    });
    $('#img-btn-hos11').click(function(){
        var predict1 = $('#cate-hos-text11').val();
        var im1 = $('#image-btn-hos11').attr('src');
        var img = $('<img />').attr({
            'class': 'col-md-2',
            'id': '',
            'src': '',
            'max-width' : '100%',
            'height' : 'auto'
        });
        (img).attr('src', im1);
        (img).appendTo('.clone-img');
        $('#input_text').append(predict1+ ' ');
        $.ajax({
            url: '/get_end_predictions.html',
            type: "post",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify({
                "input_text": $('#input_text').val(),
                "top_k": '50',
            })
        }).done(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
            $('#predict1').val(jsondata['bert'].split(' ')[0])
            $('#predict2').val(jsondata['bert'].split(' ')[1])
            $('#predict3').val(jsondata['bert'].split(' ')[2])
            $('#predict4').val(jsondata['bert'].split(' ')[3])
            $('#predict5').val(jsondata['bert'].split(' ')[4])
            $('#predict6').val(jsondata['bert'].split(' ')[5])
            $('#predict7').val(jsondata['bert'].split(' ')[6])
            $('#predict8').val(jsondata['bert'].split(' ')[7])
            $('#predict9').val(jsondata['bert'].split(' ')[8])
            $('#predict10').val(jsondata['bert'].split(' ')[9])
            $('#predict11').val(jsondata['bert'].split(' ')[10])

            $('#image1').attr('src', jsondata['img_url'][0])
            $('#image2').attr('src', jsondata['img_url'][1])
            $('#image3').attr('src', jsondata['img_url'][2])
            $('#image4').attr('src', jsondata['img_url'][3])
            $('#image5').attr('src', jsondata['img_url'][4])
            $('#image6').attr('src', jsondata['img_url'][5])
            $('#image7').attr('src', jsondata['img_url'][6])
            $('#image8').attr('src', jsondata['img_url'][7])
            $('#image9').attr('src', jsondata['img_url'][8])
            $('#image10').attr('src', jsondata['img_url'][9])
            $('#image11').attr('src', jsondata['img_url'][10])
        }).fail(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
        });
    });
    $('#img-btn-hos12').click(function(){
        var predict1 = $('#cate-hos-text12').val();
        var im1 = $('#image-btn-hos12').attr('src');
        var img = $('<img />').attr({
            'class': 'col-md-2',
            'id': '',
            'src': '',
            'max-width' : '100%',
            'height' : 'auto'
        });
        (img).attr('src', im1);
        (img).appendTo('.clone-img');
        $('#input_text').append(predict1+ ' ');
        $.ajax({
            url: '/get_end_predictions.html',
            type: "post",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify({
                "input_text": $('#input_text').val(),
                "top_k": '50',
            })
        }).done(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
            $('#predict1').val(jsondata['bert'].split(' ')[0])
            $('#predict2').val(jsondata['bert'].split(' ')[1])
            $('#predict3').val(jsondata['bert'].split(' ')[2])
            $('#predict4').val(jsondata['bert'].split(' ')[3])
            $('#predict5').val(jsondata['bert'].split(' ')[4])
            $('#predict6').val(jsondata['bert'].split(' ')[5])
            $('#predict7').val(jsondata['bert'].split(' ')[6])
            $('#predict8').val(jsondata['bert'].split(' ')[7])
            $('#predict9').val(jsondata['bert'].split(' ')[8])
            $('#predict10').val(jsondata['bert'].split(' ')[9])
            $('#predict11').val(jsondata['bert'].split(' ')[10])

            $('#image1').attr('src', jsondata['img_url'][0])
            $('#image2').attr('src', jsondata['img_url'][1])
            $('#image3').attr('src', jsondata['img_url'][2])
            $('#image4').attr('src', jsondata['img_url'][3])
            $('#image5').attr('src', jsondata['img_url'][4])
            $('#image6').attr('src', jsondata['img_url'][5])
            $('#image7').attr('src', jsondata['img_url'][6])
            $('#image8').attr('src', jsondata['img_url'][7])
            $('#image9').attr('src', jsondata['img_url'][8])
            $('#image10').attr('src', jsondata['img_url'][9])
            $('#image11').attr('src', jsondata['img_url'][10])
        }).fail(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
        });
    });


    $('#img-btn-jumin1').click(function(){
        var predict1 = $('#cate-jumin-text1').val();
        var im1 = $('#image-btn-jumin1').attr('src');
        var img = $('<img />').attr({
            'class': 'col-md-2',
            'id': '',
            'src': '',
            'max-width' : '100%',
            'height' : 'auto'
        });
        (img).attr('src', im1);
        (img).appendTo('.clone-img');
        $('#input_text').append(predict1+ ' ');
        $.ajax({
            url: '/get_end_predictions.html',
            type: "post",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify({
                "input_text": $('#input_text').val(),
                "top_k": '50',
            })
        }).done(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
            $('#predict1').val(jsondata['bert'].split(' ')[0])
            $('#predict2').val(jsondata['bert'].split(' ')[1])
            $('#predict3').val(jsondata['bert'].split(' ')[2])
            $('#predict4').val(jsondata['bert'].split(' ')[3])
            $('#predict5').val(jsondata['bert'].split(' ')[4])
            $('#predict6').val(jsondata['bert'].split(' ')[5])
            $('#predict7').val(jsondata['bert'].split(' ')[6])
            $('#predict8').val(jsondata['bert'].split(' ')[7])
            $('#predict9').val(jsondata['bert'].split(' ')[8])
            $('#predict10').val(jsondata['bert'].split(' ')[9])
            $('#predict11').val(jsondata['bert'].split(' ')[10])

            $('#image1').attr('src', jsondata['img_url'][0])
            $('#image2').attr('src', jsondata['img_url'][1])
            $('#image3').attr('src', jsondata['img_url'][2])
            $('#image4').attr('src', jsondata['img_url'][3])
            $('#image5').attr('src', jsondata['img_url'][4])
            $('#image6').attr('src', jsondata['img_url'][5])
            $('#image7').attr('src', jsondata['img_url'][6])
            $('#image8').attr('src', jsondata['img_url'][7])
            $('#image9').attr('src', jsondata['img_url'][8])
            $('#image10').attr('src', jsondata['img_url'][9])
            $('#image11').attr('src', jsondata['img_url'][10])
        }).fail(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
        });
    });
    $('#img-btn-jumin2').click(function(){
        var predict1 = $('#cate-jumin-text2').val();
        var im1 = $('#image-btn-jumin2').attr('src');
        var img = $('<img />').attr({
            'class': 'col-md-2',
            'id': '',
            'src': '',
            'max-width' : '100%',
            'height' : 'auto'
        });
        (img).attr('src', im1);
        (img).appendTo('.clone-img');
        $('#input_text').append(predict1+ ' ');
        $.ajax({
            url: '/get_end_predictions.html',
            type: "post",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify({
                "input_text": $('#input_text').val(),
                "top_k": '50',
            })
        }).done(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
            $('#predict1').val(jsondata['bert'].split(' ')[0])
            $('#predict2').val(jsondata['bert'].split(' ')[1])
            $('#predict3').val(jsondata['bert'].split(' ')[2])
            $('#predict4').val(jsondata['bert'].split(' ')[3])
            $('#predict5').val(jsondata['bert'].split(' ')[4])
            $('#predict6').val(jsondata['bert'].split(' ')[5])
            $('#predict7').val(jsondata['bert'].split(' ')[6])
            $('#predict8').val(jsondata['bert'].split(' ')[7])
            $('#predict9').val(jsondata['bert'].split(' ')[8])
            $('#predict10').val(jsondata['bert'].split(' ')[9])
            $('#predict11').val(jsondata['bert'].split(' ')[10])

            $('#image1').attr('src', jsondata['img_url'][0])
            $('#image2').attr('src', jsondata['img_url'][1])
            $('#image3').attr('src', jsondata['img_url'][2])
            $('#image4').attr('src', jsondata['img_url'][3])
            $('#image5').attr('src', jsondata['img_url'][4])
            $('#image6').attr('src', jsondata['img_url'][5])
            $('#image7').attr('src', jsondata['img_url'][6])
            $('#image8').attr('src', jsondata['img_url'][7])
            $('#image9').attr('src', jsondata['img_url'][8])
            $('#image10').attr('src', jsondata['img_url'][9])
            $('#image11').attr('src', jsondata['img_url'][10])
        }).fail(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
        });
    });
    $('#img-btn-jumin3').click(function(){
        var predict1 = $('#cate-jumin-text3').val();
        var im1 = $('#image-btn-jumin3').attr('src');
        var img = $('<img />').attr({
            'class': 'col-md-2',
            'id': '',
            'src': '',
            'max-width' : '100%',
            'height' : 'auto'
        });
        (img).attr('src', im1);
        (img).appendTo('.clone-img');
        $('#input_text').append(predict1+ ' ');
        $.ajax({
            url: '/get_end_predictions.html',
            type: "post",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify({
                "input_text": $('#input_text').val(),
                "top_k": '50',
            })
        }).done(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
            $('#predict1').val(jsondata['bert'].split(' ')[0])
            $('#predict2').val(jsondata['bert'].split(' ')[1])
            $('#predict3').val(jsondata['bert'].split(' ')[2])
            $('#predict4').val(jsondata['bert'].split(' ')[3])
            $('#predict5').val(jsondata['bert'].split(' ')[4])
            $('#predict6').val(jsondata['bert'].split(' ')[5])
            $('#predict7').val(jsondata['bert'].split(' ')[6])
            $('#predict8').val(jsondata['bert'].split(' ')[7])
            $('#predict9').val(jsondata['bert'].split(' ')[8])
            $('#predict10').val(jsondata['bert'].split(' ')[9])
            $('#predict11').val(jsondata['bert'].split(' ')[10])

            $('#image1').attr('src', jsondata['img_url'][0])
            $('#image2').attr('src', jsondata['img_url'][1])
            $('#image3').attr('src', jsondata['img_url'][2])
            $('#image4').attr('src', jsondata['img_url'][3])
            $('#image5').attr('src', jsondata['img_url'][4])
            $('#image6').attr('src', jsondata['img_url'][5])
            $('#image7').attr('src', jsondata['img_url'][6])
            $('#image8').attr('src', jsondata['img_url'][7])
            $('#image9').attr('src', jsondata['img_url'][8])
            $('#image10').attr('src', jsondata['img_url'][9])
            $('#image11').attr('src', jsondata['img_url'][10])
        }).fail(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
        });
    });
    $('#img-btn-jumin4').click(function(){
        var predict1 = $('#cate-jumin-text4').val();
        var im1 = $('#image-btn-jumin4').attr('src');
        var img = $('<img />').attr({
            'class': 'col-md-2',
            'id': '',
            'src': '',
            'max-width' : '100%',
            'height' : 'auto'
        });
        (img).attr('src', im1);
        (img).appendTo('.clone-img');
        $('#input_text').append(predict1+ ' ');
        $.ajax({
            url: '/get_end_predictions.html',
            type: "post",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify({
                "input_text": $('#input_text').val(),
                "top_k": '50',
            })
        }).done(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
            $('#predict1').val(jsondata['bert'].split(' ')[0])
            $('#predict2').val(jsondata['bert'].split(' ')[1])
            $('#predict3').val(jsondata['bert'].split(' ')[2])
            $('#predict4').val(jsondata['bert'].split(' ')[3])
            $('#predict5').val(jsondata['bert'].split(' ')[4])
            $('#predict6').val(jsondata['bert'].split(' ')[5])
            $('#predict7').val(jsondata['bert'].split(' ')[6])
            $('#predict8').val(jsondata['bert'].split(' ')[7])
            $('#predict9').val(jsondata['bert'].split(' ')[8])
            $('#predict10').val(jsondata['bert'].split(' ')[9])
            $('#predict11').val(jsondata['bert'].split(' ')[10])

            $('#image1').attr('src', jsondata['img_url'][0])
            $('#image2').attr('src', jsondata['img_url'][1])
            $('#image3').attr('src', jsondata['img_url'][2])
            $('#image4').attr('src', jsondata['img_url'][3])
            $('#image5').attr('src', jsondata['img_url'][4])
            $('#image6').attr('src', jsondata['img_url'][5])
            $('#image7').attr('src', jsondata['img_url'][6])
            $('#image8').attr('src', jsondata['img_url'][7])
            $('#image9').attr('src', jsondata['img_url'][8])
            $('#image10').attr('src', jsondata['img_url'][9])
            $('#image11').attr('src', jsondata['img_url'][10])
        }).fail(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
        });
    });
    $('#img-btn-jumin5').click(function(){
        var predict1 = $('#cate-jumin-text5').val();
        var im1 = $('#image-btn-jumin5').attr('src');
        var img = $('<img />').attr({
            'class': 'col-md-2',
            'id': '',
            'src': '',
            'max-width' : '100%',
            'height' : 'auto'
        });
        (img).attr('src', im1);
        (img).appendTo('.clone-img');
        $('#input_text').append(predict1+ ' ');
        $.ajax({
            url: '/get_end_predictions.html',
            type: "post",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify({
                "input_text": $('#input_text').val(),
                "top_k": '50',
            })
        }).done(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
            $('#predict1').val(jsondata['bert'].split(' ')[0])
            $('#predict2').val(jsondata['bert'].split(' ')[1])
            $('#predict3').val(jsondata['bert'].split(' ')[2])
            $('#predict4').val(jsondata['bert'].split(' ')[3])
            $('#predict5').val(jsondata['bert'].split(' ')[4])
            $('#predict6').val(jsondata['bert'].split(' ')[5])
            $('#predict7').val(jsondata['bert'].split(' ')[6])
            $('#predict8').val(jsondata['bert'].split(' ')[7])
            $('#predict9').val(jsondata['bert'].split(' ')[8])
            $('#predict10').val(jsondata['bert'].split(' ')[9])
            $('#predict11').val(jsondata['bert'].split(' ')[10])

            $('#image1').attr('src', jsondata['img_url'][0])
            $('#image2').attr('src', jsondata['img_url'][1])
            $('#image3').attr('src', jsondata['img_url'][2])
            $('#image4').attr('src', jsondata['img_url'][3])
            $('#image5').attr('src', jsondata['img_url'][4])
            $('#image6').attr('src', jsondata['img_url'][5])
            $('#image7').attr('src', jsondata['img_url'][6])
            $('#image8').attr('src', jsondata['img_url'][7])
            $('#image9').attr('src', jsondata['img_url'][8])
            $('#image10').attr('src', jsondata['img_url'][9])
            $('#image11').attr('src', jsondata['img_url'][10])
        }).fail(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
        });
    });
    $('#img-btn-jumin6').click(function(){
        var predict1 = $('#cate-jumin-text6').val();
        var im1 = $('#image-btn-jumin6').attr('src');
        var img = $('<img />').attr({
            'class': 'col-md-2',
            'id': '',
            'src': '',
            'max-width' : '100%',
            'height' : 'auto'
        });
        (img).attr('src', im1);
        (img).appendTo('.clone-img');
        $('#input_text').append(predict1+ ' ');
        $.ajax({
            url: '/get_end_predictions.html',
            type: "post",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify({
                "input_text": $('#input_text').val(),
                "top_k": '50',
            })
        }).done(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
            $('#predict1').val(jsondata['bert'].split(' ')[0])
            $('#predict2').val(jsondata['bert'].split(' ')[1])
            $('#predict3').val(jsondata['bert'].split(' ')[2])
            $('#predict4').val(jsondata['bert'].split(' ')[3])
            $('#predict5').val(jsondata['bert'].split(' ')[4])
            $('#predict6').val(jsondata['bert'].split(' ')[5])
            $('#predict7').val(jsondata['bert'].split(' ')[6])
            $('#predict8').val(jsondata['bert'].split(' ')[7])
            $('#predict9').val(jsondata['bert'].split(' ')[8])
            $('#predict10').val(jsondata['bert'].split(' ')[9])
            $('#predict11').val(jsondata['bert'].split(' ')[10])

            $('#image1').attr('src', jsondata['img_url'][0])
            $('#image2').attr('src', jsondata['img_url'][1])
            $('#image3').attr('src', jsondata['img_url'][2])
            $('#image4').attr('src', jsondata['img_url'][3])
            $('#image5').attr('src', jsondata['img_url'][4])
            $('#image6').attr('src', jsondata['img_url'][5])
            $('#image7').attr('src', jsondata['img_url'][6])
            $('#image8').attr('src', jsondata['img_url'][7])
            $('#image9').attr('src', jsondata['img_url'][8])
            $('#image10').attr('src', jsondata['img_url'][9])
            $('#image11').attr('src', jsondata['img_url'][10])
        }).fail(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
        });
    });
    $('#img-btn-jumin7').click(function(){
        var predict1 = $('#cate-jumin-text7').val();
        var im1 = $('#image-btn-jumin7').attr('src');
        var img = $('<img />').attr({
            'class': 'col-md-2',
            'id': '',
            'src': '',
            'max-width' : '100%',
            'height' : 'auto'
        });
        (img).attr('src', im1);
        (img).appendTo('.clone-img');
        $('#input_text').append(predict1+ ' ');
        $.ajax({
            url: '/get_end_predictions.html',
            type: "post",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify({
                "input_text": $('#input_text').val(),
                "top_k": '50',
            })
        }).done(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
            $('#predict1').val(jsondata['bert'].split(' ')[0])
            $('#predict2').val(jsondata['bert'].split(' ')[1])
            $('#predict3').val(jsondata['bert'].split(' ')[2])
            $('#predict4').val(jsondata['bert'].split(' ')[3])
            $('#predict5').val(jsondata['bert'].split(' ')[4])
            $('#predict6').val(jsondata['bert'].split(' ')[5])
            $('#predict7').val(jsondata['bert'].split(' ')[6])
            $('#predict8').val(jsondata['bert'].split(' ')[7])
            $('#predict9').val(jsondata['bert'].split(' ')[8])
            $('#predict10').val(jsondata['bert'].split(' ')[9])
            $('#predict11').val(jsondata['bert'].split(' ')[10])

            $('#image1').attr('src', jsondata['img_url'][0])
            $('#image2').attr('src', jsondata['img_url'][1])
            $('#image3').attr('src', jsondata['img_url'][2])
            $('#image4').attr('src', jsondata['img_url'][3])
            $('#image5').attr('src', jsondata['img_url'][4])
            $('#image6').attr('src', jsondata['img_url'][5])
            $('#image7').attr('src', jsondata['img_url'][6])
            $('#image8').attr('src', jsondata['img_url'][7])
            $('#image9').attr('src', jsondata['img_url'][8])
            $('#image10').attr('src', jsondata['img_url'][9])
            $('#image11').attr('src', jsondata['img_url'][10])
        }).fail(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
        });
    });
    $('#img-btn-jumin8').click(function(){
        var predict1 = $('#cate-jumin-text8').val();
        var im1 = $('#image-btn-jumin8').attr('src');
        var img = $('<img />').attr({
            'class': 'col-md-2',
            'id': '',
            'src': '',
            'max-width' : '100%',
            'height' : 'auto'
        });
        (img).attr('src', im1);
        (img).appendTo('.clone-img');
        $('#input_text').append(predict1+ ' ');
        $.ajax({
            url: '/get_end_predictions.html',
            type: "post",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify({
                "input_text": $('#input_text').val(),
                "top_k": '50',
            })
        }).done(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
            $('#predict1').val(jsondata['bert'].split(' ')[0])
            $('#predict2').val(jsondata['bert'].split(' ')[1])
            $('#predict3').val(jsondata['bert'].split(' ')[2])
            $('#predict4').val(jsondata['bert'].split(' ')[3])
            $('#predict5').val(jsondata['bert'].split(' ')[4])
            $('#predict6').val(jsondata['bert'].split(' ')[5])
            $('#predict7').val(jsondata['bert'].split(' ')[6])
            $('#predict8').val(jsondata['bert'].split(' ')[7])
            $('#predict9').val(jsondata['bert'].split(' ')[8])
            $('#predict10').val(jsondata['bert'].split(' ')[9])
            $('#predict11').val(jsondata['bert'].split(' ')[10])

            $('#image1').attr('src', jsondata['img_url'][0])
            $('#image2').attr('src', jsondata['img_url'][1])
            $('#image3').attr('src', jsondata['img_url'][2])
            $('#image4').attr('src', jsondata['img_url'][3])
            $('#image5').attr('src', jsondata['img_url'][4])
            $('#image6').attr('src', jsondata['img_url'][5])
            $('#image7').attr('src', jsondata['img_url'][6])
            $('#image8').attr('src', jsondata['img_url'][7])
            $('#image9').attr('src', jsondata['img_url'][8])
            $('#image10').attr('src', jsondata['img_url'][9])
            $('#image11').attr('src', jsondata['img_url'][10])
        }).fail(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
        });
    });
    $('#img-btn-jumin9').click(function(){
        var predict1 = $('#cate-jumin-text9').val();
        var im1 = $('#image-btn-jumin9').attr('src');
        var img = $('<img />').attr({
            'class': 'col-md-2',
            'id': '',
            'src': '',
            'max-width' : '100%',
            'height' : 'auto'
        });
        (img).attr('src', im1);
        (img).appendTo('.clone-img');
        $('#input_text').append(predict1+ ' ');
        $.ajax({
            url: '/get_end_predictions.html',
            type: "post",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify({
                "input_text": $('#input_text').val(),
                "top_k": '50',
            })
        }).done(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
            $('#predict1').val(jsondata['bert'].split(' ')[0])
            $('#predict2').val(jsondata['bert'].split(' ')[1])
            $('#predict3').val(jsondata['bert'].split(' ')[2])
            $('#predict4').val(jsondata['bert'].split(' ')[3])
            $('#predict5').val(jsondata['bert'].split(' ')[4])
            $('#predict6').val(jsondata['bert'].split(' ')[5])
            $('#predict7').val(jsondata['bert'].split(' ')[6])
            $('#predict8').val(jsondata['bert'].split(' ')[7])
            $('#predict9').val(jsondata['bert'].split(' ')[8])
            $('#predict10').val(jsondata['bert'].split(' ')[9])
            $('#predict11').val(jsondata['bert'].split(' ')[10])

            $('#image1').attr('src', jsondata['img_url'][0])
            $('#image2').attr('src', jsondata['img_url'][1])
            $('#image3').attr('src', jsondata['img_url'][2])
            $('#image4').attr('src', jsondata['img_url'][3])
            $('#image5').attr('src', jsondata['img_url'][4])
            $('#image6').attr('src', jsondata['img_url'][5])
            $('#image7').attr('src', jsondata['img_url'][6])
            $('#image8').attr('src', jsondata['img_url'][7])
            $('#image9').attr('src', jsondata['img_url'][8])
            $('#image10').attr('src', jsondata['img_url'][9])
            $('#image11').attr('src', jsondata['img_url'][10])
        }).fail(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
        });
    });
    $('#img-btn-jumin10').click(function(){
        var predict1 = $('#cate-jumin-text10').val();
        var im1 = $('#image-btn-jumin10').attr('src');
        var img = $('<img />').attr({
            'class': 'col-md-2',
            'id': '',
            'src': '',
            'max-width' : '100%',
            'height' : 'auto'
        });
        (img).attr('src', im1);
        (img).appendTo('.clone-img');
        $('#input_text').append(predict1+ ' ');
        $.ajax({
            url: '/get_end_predictions.html',
            type: "post",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify({
                "input_text": $('#input_text').val(),
                "top_k": '50',
            })
        }).done(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
            $('#predict1').val(jsondata['bert'].split(' ')[0])
            $('#predict2').val(jsondata['bert'].split(' ')[1])
            $('#predict3').val(jsondata['bert'].split(' ')[2])
            $('#predict4').val(jsondata['bert'].split(' ')[3])
            $('#predict5').val(jsondata['bert'].split(' ')[4])
            $('#predict6').val(jsondata['bert'].split(' ')[5])
            $('#predict7').val(jsondata['bert'].split(' ')[6])
            $('#predict8').val(jsondata['bert'].split(' ')[7])
            $('#predict9').val(jsondata['bert'].split(' ')[8])
            $('#predict10').val(jsondata['bert'].split(' ')[9])
            $('#predict11').val(jsondata['bert'].split(' ')[10])

            $('#image1').attr('src', jsondata['img_url'][0])
            $('#image2').attr('src', jsondata['img_url'][1])
            $('#image3').attr('src', jsondata['img_url'][2])
            $('#image4').attr('src', jsondata['img_url'][3])
            $('#image5').attr('src', jsondata['img_url'][4])
            $('#image6').attr('src', jsondata['img_url'][5])
            $('#image7').attr('src', jsondata['img_url'][6])
            $('#image8').attr('src', jsondata['img_url'][7])
            $('#image9').attr('src', jsondata['img_url'][8])
            $('#image10').attr('src', jsondata['img_url'][9])
            $('#image11').attr('src', jsondata['img_url'][10])
        }).fail(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
        });
    });
    $('#img-btn-jumin11').click(function(){
        var predict1 = $('#cate-jumin-text11').val();
        var im1 = $('#image-btn-jumin11').attr('src');
        var img = $('<img />').attr({
            'class': 'col-md-2',
            'id': '',
            'src': '',
            'max-width' : '100%',
            'height' : 'auto'
        });
        (img).attr('src', im1);
        (img).appendTo('.clone-img');
        $('#input_text').append(predict1+ ' ');
        $.ajax({
            url: '/get_end_predictions.html',
            type: "post",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify({
                "input_text": $('#input_text').val(),
                "top_k": '50',
            })
        }).done(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
            $('#predict1').val(jsondata['bert'].split(' ')[0])
            $('#predict2').val(jsondata['bert'].split(' ')[1])
            $('#predict3').val(jsondata['bert'].split(' ')[2])
            $('#predict4').val(jsondata['bert'].split(' ')[3])
            $('#predict5').val(jsondata['bert'].split(' ')[4])
            $('#predict6').val(jsondata['bert'].split(' ')[5])
            $('#predict7').val(jsondata['bert'].split(' ')[6])
            $('#predict8').val(jsondata['bert'].split(' ')[7])
            $('#predict9').val(jsondata['bert'].split(' ')[8])
            $('#predict10').val(jsondata['bert'].split(' ')[9])
            $('#predict11').val(jsondata['bert'].split(' ')[10])

            $('#image1').attr('src', jsondata['img_url'][0])
            $('#image2').attr('src', jsondata['img_url'][1])
            $('#image3').attr('src', jsondata['img_url'][2])
            $('#image4').attr('src', jsondata['img_url'][3])
            $('#image5').attr('src', jsondata['img_url'][4])
            $('#image6').attr('src', jsondata['img_url'][5])
            $('#image7').attr('src', jsondata['img_url'][6])
            $('#image8').attr('src', jsondata['img_url'][7])
            $('#image9').attr('src', jsondata['img_url'][8])
            $('#image10').attr('src', jsondata['img_url'][9])
            $('#image11').attr('src', jsondata['img_url'][10])
        }).fail(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
        });
    });
    $('#img-btn-jumin12').click(function(){
        var predict1 = $('#cate-jumin-text12').val();
        var im1 = $('#image-btn-jumin12').attr('src');
        var img = $('<img />').attr({
            'class': 'col-md-2',
            'id': '',
            'src': '',
            'max-width' : '100%',
            'height' : 'auto'
        });
        (img).attr('src', im1);
        (img).appendTo('.clone-img');
        $('#input_text').append(predict1+ ' ');
        $.ajax({
            url: '/get_end_predictions.html',
            type: "post",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify({
                "input_text": $('#input_text').val(),
                "top_k": '50',
            })
        }).done(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
            $('#predict1').val(jsondata['bert'].split(' ')[0])
            $('#predict2').val(jsondata['bert'].split(' ')[1])
            $('#predict3').val(jsondata['bert'].split(' ')[2])
            $('#predict4').val(jsondata['bert'].split(' ')[3])
            $('#predict5').val(jsondata['bert'].split(' ')[4])
            $('#predict6').val(jsondata['bert'].split(' ')[5])
            $('#predict7').val(jsondata['bert'].split(' ')[6])
            $('#predict8').val(jsondata['bert'].split(' ')[7])
            $('#predict9').val(jsondata['bert'].split(' ')[8])
            $('#predict10').val(jsondata['bert'].split(' ')[9])
            $('#predict11').val(jsondata['bert'].split(' ')[10])

            $('#image1').attr('src', jsondata['img_url'][0])
            $('#image2').attr('src', jsondata['img_url'][1])
            $('#image3').attr('src', jsondata['img_url'][2])
            $('#image4').attr('src', jsondata['img_url'][3])
            $('#image5').attr('src', jsondata['img_url'][4])
            $('#image6').attr('src', jsondata['img_url'][5])
            $('#image7').attr('src', jsondata['img_url'][6])
            $('#image8').attr('src', jsondata['img_url'][7])
            $('#image9').attr('src', jsondata['img_url'][8])
            $('#image10').attr('src', jsondata['img_url'][9])
            $('#image11').attr('src', jsondata['img_url'][10])
        }).fail(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
        });
    });


    $('#img-btn-num1').click(function(){
        var num = $('#num1').val();
        $('#input_num').append(num);
    });
    $('#img-btn-num2').click(function(){
        var num = $('#num2').val();
        $('#input_num').append(num);
    });
    $('#img-btn-num3').click(function(){
        var num = $('#num3').val();
        $('#input_num').append(num);
    });
    $('#img-btn-num4').click(function(){
        var num = $('#num4').val();
        $('#input_num').append(num);
    });
    $('#img-btn-num5').click(function(){
        var num = $('#num5').val();
        $('#input_num').append(num);
    });
    $('#img-btn-num6').click(function(){
        var num = $('#num6').val();
        $('#input_num').append(num);
    });
    $('#img-btn-num7').click(function(){
        var num = $('#num7').val();
        $('#input_num').append(num);
    });
    $('#img-btn-num8').click(function(){
        var num = $('#num8').val();
        $('#input_num').append(num);
    });
    $('#img-btn-num9').click(function(){
        var num = $('#num9').val();
        $('#input_num').append(num);
    });
    $('#img-btn-numhan').click(function(){
        var num = $('#numhan').val();
        $('#input_num').append(num);
    });
    $('#img-btn-numdu').click(function(){
        var num = $('#numdu').val();
        $('#input_num').append(num);
    });

    $('#btn-process-cate').click(function(){
        $('.dialog2').show();
        $('body').addClass('active');
    });
    $('#btn-process-num').click(function(){
        $('.dialog-num').show();
        $('body').addClass('active');
    });


    $('#img-btn-cafe').click(function(){
        $('.dialog-cafe').show();
        $('.dialog2').hide();
        $('body').addClass('active');
    });

    $('#btn-close-cate-cafe').click(function(){
        $('.dialog-cafe').hide();
        $('body').removeClass('active');
    });


    $('#img-btn-conve').click(function(){
        $('.dialog-conve').show();
        $('.dialog2').hide();
        $('body').addClass('active');
    });

    $('#btn-close-cate-conve').click(function(){
        $('.dialog-conve').hide();
        $('body').removeClass('active');
    });


    $('#img-btn-hos').click(function(){
        $('.dialog-hos').show();
        $('.dialog2').hide();
        $('body').addClass('active');
    });

    $('#btn-close-cate-hos').click(function(){
        $('.dialog-hos').hide();
        $('body').removeClass('active');
    });


    $('#img-btn-jumin').click(function(){
        $('.dialog-jumin').show();
        $('.dialog2').hide();
        $('body').addClass('active');
    });

    $('#btn-close-cate-jumin').click(function(){
        $('.dialog-jumin').hide();
        $('body').removeClass('active');
    });


    $('#btn-close-num').click(function(){
        $('.dialog-num').hide();
        $('body').removeClass('active');
        var word = $('#input_num').val();
        if (word.slice(0) == ''){
            return
        }else{
            var num = $('#input_num').val();
            $('#input_text').append(num+ ' ');
            $('#center-word').text(num)
            $('#no-pic').clone().removeClass('invisible').appendTo('.clone-img');
            $('#input_num').empty();
            $.ajax({
                url: '/get_end_predictions.html',
                type: "post",
                contentType: "application/json",
                dataType: "json",
                data: JSON.stringify({
                    "input_text": $('#input_text').val(),
                    "top_k": '50',
                })
            }).done(function (jsondata, textStatus, jqXHR) {
                console.log(jsondata)
                $('#predict1').val(jsondata['bert'].split(' ')[0])
                $('#predict2').val(jsondata['bert'].split(' ')[1])
                $('#predict3').val(jsondata['bert'].split(' ')[2])
                $('#predict4').val(jsondata['bert'].split(' ')[3])
                $('#predict5').val(jsondata['bert'].split(' ')[4])
                $('#predict6').val(jsondata['bert'].split(' ')[5])
                $('#predict7').val(jsondata['bert'].split(' ')[6])
                $('#predict8').val(jsondata['bert'].split(' ')[7])
                $('#predict9').val(jsondata['bert'].split(' ')[8])
                $('#predict10').val(jsondata['bert'].split(' ')[9])
                $('#predict11').val(jsondata['bert'].split(' ')[10])

                $('#image1').attr('src', jsondata['img_url'][0])
                $('#image2').attr('src', jsondata['img_url'][1])
                $('#image3').attr('src', jsondata['img_url'][2])
                $('#image4').attr('src', jsondata['img_url'][3])
                $('#image5').attr('src', jsondata['img_url'][4])
                $('#image6').attr('src', jsondata['img_url'][5])
                $('#image7').attr('src', jsondata['img_url'][6])
                $('#image8').attr('src', jsondata['img_url'][7])
                $('#image9').attr('src', jsondata['img_url'][8])
                $('#image10').attr('src', jsondata['img_url'][9])
                $('#image11').attr('src', jsondata['img_url'][10])
            }).fail(function (jsondata, textStatus, jqXHR) {
                console.log(jsondata)
            });
        }
    });


    $('#btn-process-big').click(function(){
        $('.dialogbig').show();
        $('body').addClass('active2');
        $('#big-text').val($('#input_text').val())
    });

    $('#btn-process-big-close').click(function(){
        $('.dialogbig').hide();
        $('body').removeClass('active2');
    });


    $('#btn-close-cate').click(function(){
        $('.dialog2').hide();
        $('body').removeClass('active');
    });


    $('#btn-close-more').click(function(){
        $('.dialog').hide();
        $('body').removeClass('active');
    });

//     더 보기버튼 클릭시 입력 내용없으면 init 단어 보여주기
    $('#img-more').click(function(){
        var word = $('#input_text').val();
        if (word.slice(0) == '' ){
            $.ajax({
                url: '/get_end_predictions_init.html',
                type: "post",
                contentType: "application/json",
                dataType: "json",
                data: JSON.stringify({
                    "input_text": $('#input_text').val(),
                    "top_k": '50',
                })
            }).done(function (jsondata, textStatus, jqXHR) {
                console.log(jsondata)
                $('#predict12').val(jsondata['bert'].split(' ')[11])
                $('#predict13').val(jsondata['bert'].split(' ')[12])
                $('#predict14').val(jsondata['bert'].split(' ')[13])
                $('#predict15').val(jsondata['bert'].split(' ')[14])
                $('#predict16').val(jsondata['bert'].split(' ')[15])
                $('#predict17').val(jsondata['bert'].split(' ')[16])
                $('#predict18').val(jsondata['bert'].split(' ')[17])
                $('#predict19').val(jsondata['bert'].split(' ')[18])
                $('#predict20').val(jsondata['bert'].split(' ')[19])
                $('#predict21').val(jsondata['bert'].split(' ')[20])
                $('#predict22').val(jsondata['bert'].split(' ')[21])
                $('#predict23').val(jsondata['bert'].split(' ')[22])

                $('#image12').attr('src', 'static/img/init/point.png')
                $('#image13').attr('src', 'static/img/init/point.png')
                $('#image14').attr('src', 'static/img/init/now.png')
                $('#image15').attr('src', 'static/img/init/man-thinking.png')
                $('#image16').attr('src', 'static/img/init/morning time.png')
                $('#image17').attr('src', 'static/img/init/afternoon.png')
                $('#image18').attr('src', 'static/img/init/question.png')
                $('#image19').attr('src', 'static/img/init/now.png')
                $('#image20').attr('src', 'static/img/init/tomorrow.png')
                $('#image21').attr('src', 'static/img/init/day-two-calendar.png')
                $('#image22').attr('src', 'static/img/init/yesterday.png')
                $('#image23').attr('src', 'static/img/init/time-go.png')
                $('.dialog').show();
                $('body').addClass('active');
            }).fail(function (jsondata, textStatus, jqXHR) {
                console.log(jsondata)
            });
        }else{
            $.ajax({
                url: '/get_end_predictions.html',
                type: "post",
                contentType: "application/json",
                dataType: "json",
                data: JSON.stringify({
                    "input_text": $('#input_text').val(),
                    "top_k": '50',
                })
            }).done(function (jsondata, textStatus, jqXHR) {
                console.log(jsondata)
                $('#predict12').val(jsondata['bert'].split(' ')[11])
                $('#predict13').val(jsondata['bert'].split(' ')[12])
                $('#predict14').val(jsondata['bert'].split(' ')[13])
                $('#predict15').val(jsondata['bert'].split(' ')[14])
                $('#predict16').val(jsondata['bert'].split(' ')[15])
                $('#predict17').val(jsondata['bert'].split(' ')[16])
                $('#predict18').val(jsondata['bert'].split(' ')[17])
                $('#predict19').val(jsondata['bert'].split(' ')[18])
                $('#predict20').val(jsondata['bert'].split(' ')[19])
                $('#predict21').val(jsondata['bert'].split(' ')[20])
                $('#predict22').val(jsondata['bert'].split(' ')[21])
                $('#predict23').val(jsondata['bert'].split(' ')[22])

                $('#image12').attr('src', jsondata['img_url'][11])
                $('#image13').attr('src', jsondata['img_url'][12])
                $('#image14').attr('src', jsondata['img_url'][13])
                $('#image15').attr('src', jsondata['img_url'][14])
                $('#image16').attr('src', jsondata['img_url'][15])
                $('#image17').attr('src', jsondata['img_url'][16])
                $('#image18').attr('src', jsondata['img_url'][17])
                $('#image19').attr('src', jsondata['img_url'][18])
                $('#image20').attr('src', jsondata['img_url'][19])
                $('#image21').attr('src', jsondata['img_url'][20])
                $('#image22').attr('src', jsondata['img_url'][21])
                $('#image23').attr('src', jsondata['img_url'][22])
                $('.dialog').show();
                $('body').addClass('active');
            }).fail(function (jsondata, textStatus, jqXHR) {
                console.log(jsondata)
            });
        }
    });

})
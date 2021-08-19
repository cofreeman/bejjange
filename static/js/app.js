var data = []
var token = ""
jQuery(document).ready(function () {

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
            $('#predict12').val(jsondata['bert'].split(' ')[11])
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
            $('#predict12').val(jsondata['bert'].split(' ')[11])
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
            $('#predict12').val(jsondata['bert'].split(' ')[11])
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
            $('#predict12').val(jsondata['bert'].split(' ')[11])
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
            $('#predict12').val(jsondata['bert'].split(' ')[11])

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
        $('#input_text').val(word);
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
            $('#predict12').val(jsondata['bert'].split(' ')[11])

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
        $(this).clone().appendTo('.clone-img');
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
            $('#predict12').val(jsondata['bert'].split(' ')[11])

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
    $('#img-btn2').click(function(){
        var predict1 = $('#predict2').val();
        $(this).clone().appendTo('.clone-img');
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
            $('#predict12').val(jsondata['bert'].split(' ')[11])

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
        $(this).clone().appendTo('.clone-img');
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
            $('#predict12').val(jsondata['bert'].split(' ')[11])

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
        $(this).clone().appendTo('.clone-img');
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
            $('#predict12').val(jsondata['bert'].split(' ')[11])

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
        $(this).clone().appendTo('.clone-img');
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
            $('#predict12').val(jsondata['bert'].split(' ')[11])

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
        $(this).clone().appendTo('.clone-img');
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
            $('#predict12').val(jsondata['bert'].split(' ')[11])

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
        $(this).clone().appendTo('.clone-img');
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
            $('#predict12').val(jsondata['bert'].split(' ')[11])

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
        $(this).clone().appendTo('.clone-img');
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
            $('#predict12').val(jsondata['bert'].split(' ')[11])

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
        $(this).clone().appendTo('.clone-img');
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
            $('#predict12').val(jsondata['bert'].split(' ')[11])

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
        $(this).clone().appendTo('.clone-img');
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
            $('#predict12').val(jsondata['bert'].split(' ')[11])

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
        $(this).clone().appendTo('.clone-img');
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
            $('#predict12').val(jsondata['bert'].split(' ')[11])

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
        var predict1 = $('#predict13').val();
        $(this).clone().appendTo('.clone-img');
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
            $('#predict12').val(jsondata['bert'].split(' ')[11])

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
        var predict1 = $('#predict14').val();
        $(this).clone().appendTo('.clone-img');
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
            $('#predict12').val(jsondata['bert'].split(' ')[11])

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
        var predict1 = $('#predict15').val();
        $(this).clone().appendTo('.clone-img');
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
            $('#predict12').val(jsondata['bert'].split(' ')[11])

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
        var predict1 = $('#predict16').val();
        $(this).clone().appendTo('.clone-img');
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
            $('#predict12').val(jsondata['bert'].split(' ')[11])

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
        var predict1 = $('#predict17').val();
        $(this).clone().appendTo('.clone-img');
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
            $('#predict12').val(jsondata['bert'].split(' ')[11])

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
        var predict1 = $('#predict18').val();
        $(this).clone().appendTo('.clone-img');
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
            $('#predict12').val(jsondata['bert'].split(' ')[11])

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
        var predict1 = $('#predict19').val();
        $(this).clone().appendTo('.clone-img');
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
            $('#predict12').val(jsondata['bert'].split(' ')[11])

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
        var predict1 = $('#predict20').val();
        $(this).clone().appendTo('.clone-img');
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
            $('#predict12').val(jsondata['bert'].split(' ')[11])

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
        var predict1 = $('#predict21').val();
        $(this).clone().appendTo('.clone-img');
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
            $('#predict12').val(jsondata['bert'].split(' ')[11])

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
        var predict1 = $('#predict22').val();
        $(this).clone().appendTo('.clone-img');
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
            $('#predict12').val(jsondata['bert'].split(' ')[11])

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
        var predict1 = $('#predict23').val();
        $(this).clone().appendTo('.clone-img');
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
            $('#predict12').val(jsondata['bert'].split(' ')[11])

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
        var predict1 = $('#predict24').val();
        $(this).clone().appendTo('.clone-img');
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
            $('#predict12').val(jsondata['bert'].split(' ')[11])

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
    $('#img-btn-cate1').click(function(){
        var predict1 = $('#cate-cafe-text1').val();
        $(this).clone().appendTo('.clone-img');
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
            $('#predict12').val(jsondata['bert'].split(' ')[11])

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
    $('#img-btn-cate2').click(function(){
        var predict1 = $('#cate-cafe-text2').val();
        $(this).clone().appendTo('.clone-img');
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
            $('#predict12').val(jsondata['bert'].split(' ')[11])

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
    $('#img-btn-cate3').click(function(){
        var predict1 = $('#cate-cafe-text3').val();
        $(this).clone().appendTo('.clone-img');
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
            $('#predict12').val(jsondata['bert'].split(' ')[11])

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
    $('#img-btn-cate4').click(function(){
        var predict1 = $('#cate-cafe-text4').val();
        $(this).clone().appendTo('.clone-img');
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
            $('#predict12').val(jsondata['bert'].split(' ')[11])

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
    $('#img-btn-cate5').click(function(){
        var predict1 = $('#cate-cafe-text5').val();
        $(this).clone().appendTo('.clone-img');
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
            $('#predict12').val(jsondata['bert'].split(' ')[11])

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
    $('#img-btn-cate6').click(function(){
        var predict1 = $('#cate-cafe-text6').val();
        $(this).clone().appendTo('.clone-img');
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
            $('#predict12').val(jsondata['bert'].split(' ')[11])

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
    $('#img-btn-cate7').click(function(){
        var predict1 = $('#cate-cafe-text7').val();
        $(this).clone().appendTo('.clone-img');
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
            $('#predict12').val(jsondata['bert'].split(' ')[11])

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
    $('#img-btn-cate8').click(function(){
        var predict1 = $('#cate-cafe-text8').val();
        $(this).clone().appendTo('.clone-img');
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
            $('#predict12').val(jsondata['bert'].split(' ')[11])

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
    $('#img-btn-cate9').click(function(){
        var predict1 = $('#cate-cafe-text9').val();
        $(this).clone().appendTo('.clone-img');
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
            $('#predict12').val(jsondata['bert'].split(' ')[11])

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
    $('#img-btn-cate10').click(function(){
        var predict1 = $('#cate-cafe-text10').val();
        $(this).clone().appendTo('.clone-img');
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
            $('#predict12').val(jsondata['bert'].split(' ')[11])

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
    $('#img-btn-cate11').click(function(){
        var predict1 = $('#cate-cafe-text11').val();
        $(this).clone().appendTo('.clone-img');
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
            $('#predict12').val(jsondata['bert'].split(' ')[11])

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
    $('#img-btn-cate12').click(function(){
        var predict1 = $('#cate-cafe-text12').val();
        $(this).clone().appendTo('.clone-img');
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
            $('#predict12').val(jsondata['bert'].split(' ')[11])

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

    $('#btn-close-cate-cate').click(function(){
        $('.dialog-cafe').hide();
        $('body').removeClass('active');
    });
    $('#btn-close-num').click(function(){
        $('.dialog-num').hide();
        $('body').removeClass('active');
        var num = $('#input_num').val();
//        $(this).clone().appendTo('.clone-img');
        $('#input_text').append(num+ ' ');
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
            $('#predict12').val(jsondata['bert'].split(' ')[11])
        }).fail(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
        });
    });

    $('#btn-close-cate').click(function(){
        $('.dialog2').hide();
        $('body').removeClass('active');
    });




    $('#btn-close-more').click(function(){
        $('.dialog').hide();
        $('body').removeClass('active');
    });
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
                $('#predict24').val(jsondata['bert'].split(' ')[23])
                $('#predict25').val(jsondata['bert'].split(' ')[24])
                $('#predict26').val(jsondata['bert'].split(' ')[25])
                $('#predict27').val(jsondata['bert'].split(' ')[26])
                $('#predict28').val(jsondata['bert'].split(' ')[27])
                $('#predict29').val(jsondata['bert'].split(' ')[28])
                $('#predict30').val(jsondata['bert'].split(' ')[29])
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
                $('#predict24').val(jsondata['bert'].split(' ')[23])
                $('#predict25').val(jsondata['bert'].split(' ')[24])
                $('#predict26').val(jsondata['bert'].split(' ')[25])
                $('#predict27').val(jsondata['bert'].split(' ')[26])
                $('#predict28').val(jsondata['bert'].split(' ')[27])
                $('#predict29').val(jsondata['bert'].split(' ')[28])
                $('#predict30').val(jsondata['bert'].split(' ')[29])
                $('.dialog').show();
                $('body').addClass('active');
            }).fail(function (jsondata, textStatus, jqXHR) {
                console.log(jsondata)
            });
        }
    });

})
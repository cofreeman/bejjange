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
        }).fail(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
        });
    })
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
        }).fail(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
        });
    });
    $('#img-btn12').click(function(){
        var predict1 = $('#predict12').val();
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
        }).fail(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
        });
    });
})
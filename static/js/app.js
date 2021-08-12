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
            $('#predict-more').val(jsondata['bert'].split(' ')[5])
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
            $('#predict-more').val(jsondata['bert'].split(' ')[5])
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
            $('#predict-more').val(jsondata['bert'].split(' ')[5])
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
            $('#predict-more').val(jsondata['bert'].split(' ')[5])
        }).fail(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
        });
    })
    $('#btn-process-init').on('click', function () {
        $.ajax({
            url: '/get_end_predictions-init.html',
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
            $('#predict-more').val(jsondata['bert'].split(' ')[5])
        }).fail(function (jsondata, textStatus, jqXHR) {
            console.log(jsondata)
        });
    })
})
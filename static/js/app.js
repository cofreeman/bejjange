var data = []
var token = ""

jQuery(document).ready(function () {

    $('#btn-process').on('click', function () {
        $.ajax({
            url: '/get_end_predictions',
            type: "post",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify({
                "input_text": $('#input_text').val(),
                "top_k": $('#max_words').val(),
            }),
            beforeSend: function () {
                $('.overlay').show()
            },
            complete: function () {
                $('.overlay').hide()
            }
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
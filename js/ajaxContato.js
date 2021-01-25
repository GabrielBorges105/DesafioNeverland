
$("#formContato").submit(function (e) {

    e.preventDefault();
    var form = $(this);
    $.ajax({
        type: "POST",
        url: 'https://clients.up.rocks/desafio/formContact',
        data: form.serialize(), // serializes the form's elements.
        success: function (data) {
            alert(data.message); // show response from the php script.
        }
    });


});
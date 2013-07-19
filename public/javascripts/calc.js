(function ($) {

    function calculate(e) {
        var first = $('#first').val(),
            second = $('#second').val(),
            operation = $('#operation').val();

        $.post('/calculate', { first: first, second: second, operation: operation }, function (res) {
            $('#result').html(res);
        });
    }

    $('#calculate').on('click', calculate);

}(jQuery));
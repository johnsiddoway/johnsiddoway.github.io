$(document).ready(function(){
    $('#star-value').text($('input[name="rating"]:checked').val());
    $('#star-ltr-value').text($('input[name="rating-ltr"]:checked').val());
    $('#star-single-value').text($('input[name="rating-single"]:checked').val());
    $('#star-final-value').text($('input[name="rating-final"]:checked').val());

    var ratings = document.getElementsByName("rating");
    for (var i = 0; i < ratings.length; i++) {
        ratings[i].onchange = function() {
            $('#star-value').text(this.value);
        };
    }
    $('input[name="rating-ltr"]').change(function(){
        $('#star-ltr-value').text(this.value);
    });
    $('input[name="rating-single"]').change(function(){
        $('#star-single-value').text(this.value);
    });
    $('input[name="rating-final"]').change(function(){
        $('#star-final-value').text(this.value);
    });
});
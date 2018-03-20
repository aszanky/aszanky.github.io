$(document).ready(function() {
    $(window).on('scroll', function() {
        if($(window).scrollTop()) {
            $('header').addClass('back');
        } else {
            $('header').removeClass('back');
        }
    })
})
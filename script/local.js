$(window).scroll(function() {
    if ($(window).scrollTop() > $('#check').offset().top) {
        $('#nav-main').addClass('fixed');
    } else {
        $('#nav-main').removeClass('fixed');
    }
});

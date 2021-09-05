$(function () {

    $('.slider__inner,.news__slider-item').slick({
        nextArrow: '<button type = "button" class = "slick__btn slick-next"></button>',
        prevArrow: '<button type = "button" class = " slick__btn slick-prev"></button>',
        infinite: false
    });

    $(function () {
        $('.icon__menu').click(function () {
            $('.menu ul').slideToggle();
        })
    });


});
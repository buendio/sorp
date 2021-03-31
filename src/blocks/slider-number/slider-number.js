let carouseljQuery = jQuery('.slider-number__carousel').owlCarousel({
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    autoplaySpeed: 700,
    loop: true,
    nav: false,
    center: true,
    dots: false,
    responsive: {
        0: {
            startPosition: 1,
            items: 1
        },
        576: {
            items: 3
        }
    }
});

carouseljQuery.on('translate.owl.carousel translated.owl.carousel', function () {
    $('.slider-number__box-logo').toggleClass('slider-number__box-logo_animated');
});


$('.slider-number__prev').click(function() {
    carouseljQuery.trigger('prev.owl.carousel');
});
$('.slider-number__next').click(function() {
    carouseljQuery.trigger('next.owl.carousel', [300]);
});
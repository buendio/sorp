var cDots = 'slider-departments__dots';

let owl = $('.slider-departments__owl').owlCarousel({
    loop: true,
    dots: true,
    dotsContainer: '.'+cDots+'.dots',
    dotClass: 'dots__item',
    responsive: {
        0: {
            items: 2
        },
        768: {
            items: 4
        }
    }
});

owl.on('changed.owl.carousel', function() {
    window.onScreen($(this).find('.lazy'), window.loadSrcOrBg);
});
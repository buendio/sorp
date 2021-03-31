if(window.getW() < window.sorpBP.mdMin) {
    let cDots = 'home-slider-mobile__dots';

    let owl = $('.home-slider-mobile__owl').owlCarousel({
        items: 1,
        nav: false,
        dots: true,
        loop: true,
        dotsContainer: '.' + cDots + '.dots',
        dotClass: 'dots__item',
    });
}
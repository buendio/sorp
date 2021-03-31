let carouseljQuery = jQuery('.about-company__content').owlCarousel({
    autoplay: false,
    loop: true,
    nav: false,
    dots: false,
    items: 1
});

$('.about-company__arrow_prev').click(function() {
    carouseljQuery.trigger('prev.owl.carousel');
});
$('.about-company__arrow_next').click(function() {
    carouseljQuery.trigger('next.owl.carousel', [300]);
});
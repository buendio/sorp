$(".slider-people").slick({ dots: true, dotsClass: ["dots", "dots_blue"], slidesToShow: 3, slidesToScroll: 3, infinite: false, arrows: false,
  responsive: [
    {
      breakpoint: 1000,
      settings: { slidesToShow: 2, slidesToScroll: 2 }
    },
    {
      breakpoint: 550,
      settings: { slidesToShow: 1, slidesToScroll: 1 }
    }
  ]
});
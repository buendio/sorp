$(".block43-slider").slick({ dots: true, dotsClass: ["dots", "dots_blue"], infinite: false, slidesToShow: 4, 
  responsive: [    
    {
      breakpoint: 1080,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 770,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});
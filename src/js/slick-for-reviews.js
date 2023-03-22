$(document).ready(function () {
  $('.reviews-customers-list').slick({
    arrows: true,
    dots: true,
    slidesToShow: 3,
    autoplay: false,
    speed: 1000,
    autoplaySpeed: 800,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});

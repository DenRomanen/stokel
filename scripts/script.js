$(document).ready(function() {
  $(".slick").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  });
  $(".shops__slick").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });
});

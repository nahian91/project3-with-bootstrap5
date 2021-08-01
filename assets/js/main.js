$(document).ready(function () {
  // Magnific Popup Active
  $(".project-popup").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  // Counter Active
  $(".counterup").counterUp();

  // Slick JS
  $('.testimonials').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    loop: true
  });
});

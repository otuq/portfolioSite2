$(function() {

  // loading
  $(window).load(function() {
    $('#loading').fadeOut(1000);
  });

  var scrollMove = $('.contents-wrapper').offset().top;

  $('.top-title p').click(function() {
    $('html, body').animate({
      scrollTop: scrollMove
    }, 500);
  });

});

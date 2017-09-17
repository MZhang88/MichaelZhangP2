$('.hero-btn').click(function() {
  $('.modal').removeClass('hidden');
});
$('.close-btn').click(function() {
  $('.modal').addClass('hidden');
});

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);

      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

      if (target.length) {

        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }

    }
  });
});

$(function() {
  $(window).scroll(function() {

    $('.fade-in').each(function(i) {

      var bottom_of_object = $(this).position().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      bottom_of_window = bottom_of_window + 400;

      if (bottom_of_window > bottom_of_object) {

        $(this).animate({
          'opacity': '1'
        }, 600);

      }
    });
  });
});

$(window).scroll(function() {

  if ($(this).scrollTop() > 500) {
    $('.scroll-top').removeClass('hidden');
  } else {
    $('.scroll-top').addClass('hidden');
  }
});

$('.scroll-top').click(function() {
  $('html, body').animate({
    scrollTop: 0
  }, 800);
  return false;
});


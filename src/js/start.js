'use strict';

require('../../node_modules/uswds/src/js/start.js');

// Begin SAM Web Design Standards
var Body = $(document);
var Header = $('.iae-secondary-navigation');
var Sidenav = $('.sidenav');

Body.on('scroll', function (e) {
  if ( Body.scrollTop() > 103 ) {
    Header.addClass('fixed');
    Sidenav.addClass('fixed');

  } else {
    Header.removeClass('fixed');
    Sidenav.removeClass('fixed');
  }
});

$(function () {
  $('a[href="#"]').click(function () {
    $('html, body').animate({
      scrollTop: 0,
    }, 300);
    return false;
  });
  
  $('a[href*="#"]').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 100,
        }, 300);
        return false;
      }
    }
  });
});

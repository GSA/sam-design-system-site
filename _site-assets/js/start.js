'use strict';

require('./vendor/prismjs/prism.js');
require('./vendor/uswds/start.js');

var $ = require('jquery');
var calculateAnchorPosition = require('./components/calculate-anchor-position');
var stickyNav = require('./components/sticky-nav');

$(function (){
  $('.menu-btn, .overlay, .sliding-panel-close').on('click touchstart', function (e) {
    $('.sidenav-mobile, .overlay').toggleClass('is-visible');
    $('body').toggleClass('mobile-sidenav-active');
    e.preventDefault();
  });
  require('./components/handle-disabled-lints');
  setTimeout(function () {
    require('./components/scroll-to-top-for-hash');
  }, 150);

});

//capture that the enter key was used to "click"
$('.sidenav').on('keydown', 'a', function (e) {
  var ENTER = 13;
  if (e.which === ENTER) {
    $(this).data('keypress', true);
  }
});

$('.sidenav').on('click', 'a', function (e) {
  var hashLocation  = $(this).attr('href').split('#')[ 1 ]; // long url splitting
  var scrollTopPos  = calculateAnchorPosition(hashLocation);

  //if anchor doesn't exist on the page, or calc fails
  //then exit gracefully
  if (scrollTopPos === 0) {
    return true;
  }

  e.preventDefault();

  /* Firefox needs html, others need body */
  $('body,html').animate({
    scrollTop: scrollTopPos,
  }, {
    duration: 200,
    start: function () {
      var newHash = '#' + hashLocation;

      //using pushState is easiest way to prevent double jumps
      if(history && history.pushState && window.location.hash !== newHash) {
        history.pushState(null, null, newHash);
      } else if (window.location.hash !== newHash) {
        window.location.hash = newHash;
      }
    },
    done: function () {
      //if keyboard was used, update keyboard focus to section
      var link    = $(e.target);
      var section = $('#' + hashLocation);

      if (link.data('keypress') === true) {
        link.removeData('keypress');
        section.attr('tabindex', '-1');
        section.focus();
      }
    },
  });
});

$('.preview-search-bar .usa-search').submit(function (event){
  event.preventDefault();
});

function resizeHandler (event) {
  stickyNav(event);
}

function scrollHandler (event) {
  stickyNav(event);
}

$(window).on('scroll', scrollHandler);
$(window).on('resize', resizeHandler);

stickyNav();

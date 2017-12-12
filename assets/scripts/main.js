$(document).ready(function() {
  // Scroll behavior to update the header layout
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 100) {
      $(".bg-scroll").css("background" , "white");
  		$('.logo').attr('src','/assets/images/logo/logo.svg');
      $(".nav-link").css("color", "#3064bc");
      $(".nav-signup").css("background", "#3064bc");
      $(".scroll").addClass('bb b--light-gray');
    } else {
      $(".bg-scroll").css("background" , "transparent");
    	$('.logo').attr('src','/assets/images/logo/logo-white.svg')
      $(".nav-link").css("color", "white");
      $(".nav-signup").css("background", "transparent");
      $(".scroll").removeClass('bb b--light-gray');
    }
  })
  
  // Initialize smooth scroll
  var scroll = new SmoothScroll('a[href*="#"]');

  // Typewriter library "Typed.js"
  var options = {
    strings: [
              'Fintech',
              'Medtech',
              'Ecommerce',
              'Robotic',
              'AI',
              'Edtech',
              'Gaming',
              'Esport',
              'Autonomous Driving',
              'Hardware',
              'B2B',
              'Fashion'
    ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    smartBackspace: true,
    loop: false,
    loopCount: Infinity,
    showCursor: false
  }
  var typed = new Typed(".typed", options);
  var typedMobile = new Typed(".typed-mobile", options);
  
})

$(window).scroll(function(){
  var distanceScrolled = $(window).scrollTop();
    if (distanceScrolled >= 30) {
       $('.nav-wrapper').addClass('shadow-header');
    }
    else {
       $('.nav-wrapper').removeClass('shadow-header');
    }
});

$('#toTop').on('click', function(){
   $("html, body").scrollTop({scrollTop: 0}, 800);
});

// when scroll to #about, .two .part2 and .graph will animated

$(window).scroll(function () {
  scrollAnimate();
});
$(window).on('resize', function () {
  scrollAnimate();
});

function scrollAnimate () {
  var distanceScrolled = $(window).scrollTop();
  var aboutSection = 480;
  var portfolio = 1300;
  var graph = 1500;
  var contact = 2230;
    if( distanceScrolled > aboutSection){
    $('.one').addClass('slide-right');
    $('.two').addClass('slideDown');
}
  if( distanceScrolled > graph){
  $('[class^="bar"]').addClass('animated');
  $('.graph').addClass('slide-left');
  $('.graph').offset().top - 300;
}
  if( distanceScrolled > portfolio){
    $('.gallery').css('opacity' , '1');
    $('.typo').addClass('type');
    $('.menuproject').addClass('menu');
    $('.CSSHTML').addClass('HTMLCSS');
    $('.photos').addClass('photoss');
  }
}


scrollAnimate();

// when click fa-arrow-up, scroll to Top
// about page is 545, portfolio is 1395, contact is 2263
$('.hamburger').on('click', function(event) {
  $('.side-nav').fadeIn(300);
});



var swiper = new Swiper('.swiper-container', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      observer: true,
      observeParents: true,
    });

$('#Typography').on('click', function() {
  $('.typography').fadeIn(1000);
  $('.modal-bg').fadeIn(300);
});

$('#MenuProj').on('click', function() {
  $('.MenuProj').fadeIn(1000);
  $('.modal-bg').fadeIn(300);
});

$('#HTML').on('click', function() {
  $('.CSS').fadeIn(1000);
  $('.modal-bg').fadeIn(300);
});

$('#Photography').on('click', function() {
  $('.Photography').fadeIn(1000);
  $('.modal-bg').fadeIn(300);
});

$('.close').on('click', function(e){
  e.preventDefault();
  $('.modal-popup').fadeOut(200);
  $('.modal-bg').fadeOut(1000);
});
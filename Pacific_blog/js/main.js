$('#reservations').on('click', function() {
  $('.modal').css("display", "flex").hide().fadeIn();
  $('.modal-bg').fadeIn(300);
});

$('.close-modal').on('click', function(e){
  e.preventDefault();
  console.log(e);
  $('.modal').fadeOut(200);
  $('.modal-bg').fadeOut(1000);
});

$('.menu-nav a').on('click', function(e) {
  e.preventDefault();
  $(this).css('opacity', '.5');
  var panelClicked = $(this).data('panel');
  $('#'+ panelClicked).fadeToggle(300).css('display', 'grid');
});

var swiper = new Swiper('.swiper-container', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

$(window).scroll(function() {

  var jQWindowScroll = $(this).scrollTop();

  $('.vader').css({'transform': 'rotate(-' + jQWindowScroll / 20 + 'deg)'});
  $('.left-branch').css({'transform': 'translate(0px, -' + jQWindowScroll / 20 + '%'});
  $('.right-branch').css({'transform': 'translate(0px, -' + jQWindowScroll / 40 + '%'});

});

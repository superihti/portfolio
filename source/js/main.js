$(document).ready(function(){
  $('.comments-slider').slick({
      dots: true,
      nextArrow: '<i class="fas fa-angle-right comments-fa__next"></i>',
      prevArrow: '<i class="fas fa-angle-left comments-fa__prev"></i>'
  });
});

// кнопка вверх

$(function() {
 
$(window).scroll(function() {
 
if($(this).scrollTop() != 0) {
 
$('#toTop').fadeIn();
 
} else {
 
$('#toTop').fadeOut();
 
}
 
});
 
$('#toTop').click(function() {
 
$('body,html').animate({scrollTop:0},800);
 
});
 
});
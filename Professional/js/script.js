$(document).ready(function(){
  $('.menu__link').click(function(e) {
        e.preventDefault();
        $('.tabs__menu .active').removeClass('active');
        $(this).addClass('active');
        var tab = $(this).attr('href');
        $('.tab').not(tab).css({'display':'none'});
        $(tab).fadeIn(400);
  });
  $(".btn-nav").on("click", function() {
    var target = $(this).data("target");
    $(target).toggleClass("nav-second--open");
  });
}); 
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
  showSlides(slideIndex += n);
}

function currentSlide(n){
  showSlides(slideIndex = n);
}

function showSlides(n){
  var i;
  var slides = document.getElementsByClassName("slides");
  
  if(n > slides.length){
    slideIndex = 1; 
  } 
  if(n < 1){
    slideIndex = slides.length;
  } 
  for(i=0; i < slides.length; i++){
    slides[i].style.display = "none";
  } 
  slides[slideIndex-1].style.display = "block";
}

function slideTime(n){
 n=1
 showSlides(slideIndex += n);
 }
 
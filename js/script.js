$(document).ready(function(){
  $('.bxslider').bxSlider({
    pager: true,
	controls: false,
  	auto: true,
  	pause: 4000,
  	autoHover: true,
  	slideWidth: 236,
	minSlides: 1,
  	maxSlides: 4,
	slideMargin: 1,
	responsive: true,
	moveSlides: 1
  });
  $(".btn-nav").on("click", function() {
  	var target = $(this).data("target");
  	$(target).toggleClass("nav-second--open");
  });
  $('body').append('<div id="toTop">^ Наверх</div>');
		$(window).scroll(function() {
			if($(this).scrollTop() > 200) {
				$('#toTop').fadeIn();	
			} else {
				$('#toTop').fadeOut();
			}
		});
	 
		$('#toTop').click(function() {
			$('body, html').animate({scrollTop: 0}, 400);
	});
});
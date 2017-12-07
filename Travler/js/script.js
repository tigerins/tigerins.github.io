$(document).ready(function(){
  $('.slick').slick({
	  dots: false,
	  arrows: false,
	  autoplay: true,
	  autoplaySpeed: 2000,
	  infinite: true,
	  draggable: true,
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  responsive: [
    {
      breakpoint: 930,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
	{
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
  ]
  });
  $(".btn-nav").on("click", function() {
  	var target = $(this).data("target");
  	$(target).toggleClass("nav-second--open");
  });
  $('body').append('<div id="toTop">^ Up</div>');
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

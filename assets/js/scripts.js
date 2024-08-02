$(document).ready(function(){
	// Mobile Menu
	$('.menu_icon').click(function(){
		$('.menu').slideToggle(200);

		return false
	});

	// Mobile Menu Icon
	$(document).ready(function(){
		$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
			$(this).toggleClass('open');
		});
	});


	// Banner Carousel
	$('.help_event_carousel').owlCarousel({
		items:3.1,
		loop:true,
		nav:true,
		dots:false,
		navText: ["<img src='assets/images/help/events/arrow_left.png'>","<img src='assets/images/help/events/arrow_right.png'>"],
		autoplay:true,
		responsive : {
		    0 : {
		        items:1,
		    },
		    480 : {
		        items:1,
		    },
		    768 : {
		        items:2,
		    },
		    992 : {
		        items:3.1,
		    }
		}
	});
	// $( ".owl-prev").html('<i class="fa fa-chevron-left"></i>');
	// $( ".owl-next").html('<i class="fa fa-chevron-right"></i>');



});

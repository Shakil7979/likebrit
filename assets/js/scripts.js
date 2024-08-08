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
		margin: 20,
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
		        items:2.1,
		    },
		    1200 : {
		        items:3.1,
		    }
		}
	});
	// Banner Carousel
	$('.sk_recent_post_carousel').owlCarousel({
		items:3,
		loop:true,
		margin: 20,
		nav:true,
		dots:false,
		navText: ["<img src='assets/images/post/left.png'>","<img src='assets/images/post/right.png'>"],
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
		        items:3,
		    }
		}
	});
	$('.sk_board_carousel').owlCarousel({
		items:5,
		loop:true,
		margin: 20,
		nav:true,
		dots:false,
		navText: ["<img src='assets/images/post/left.png'>","<img src='assets/images/post/right.png'>"],
		autoplay:true,
		responsive : {
		    0 : {
		        items:1,
		    },
		    480 : {
		        items:1,
		    },
		    768 : {
		        items:3,
		    },
		    992 : {
		        items:4,
		    },
		    1200 : {
		        items:5,
		    }
		}
	});
	$('.sk_meet_carousel').owlCarousel({
		items:3,
		loop:true,
		margin: 20,
		stagePadding: 50,
		nav:true,
		dots:false,
		navText: ["<img src='assets/images/about/meet/left.png'>","<img src='assets/images/about/meet/right.png'>"],
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
		        items:2,
				stagePadding: 150,
		    },
		    1200 : {
		        items:3,
				stagePadding: 150,
		    }
		}
	});
	// $( ".owl-prev").html('<i class="fa fa-chevron-left"></i>');
	// $( ".owl-next").html('<i class="fa fa-chevron-right"></i>');



});

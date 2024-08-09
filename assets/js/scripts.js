




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







const image = document.querySelector('.image');
const scrollbarThumb = document.querySelector('.scrollbar-thumb');
const scrollbar = document.querySelector('.custom-scrollbar');

// Update the thumb width based on content and container width ratio
const updateThumbWidth = () => {
    const imageWidth = image.scrollWidth;
    const containerWidth = image.clientWidth;
    const scrollbarWidth = scrollbar.clientWidth;
    const thumbWidth = Math.max((containerWidth / imageWidth) * scrollbarWidth, 20); // Ensure thumb has a minimum width
    scrollbarThumb.style.width = thumbWidth + 'px'; // Corrected line
};

// Update the thumb position based on the content scroll
const updateThumbPosition = () => {
    const maxScrollLeft = image.scrollWidth - image.clientWidth;
    const scrollPercentage = image.scrollLeft / maxScrollLeft;
    const maxThumbLeft = scrollbar.clientWidth - scrollbarThumb.clientWidth;
    scrollbarThumb.style.left = (scrollPercentage * maxThumbLeft) + 'px'; // Corrected line
};

// Allow dragging the scrollbar thumb
scrollbarThumb.addEventListener('mousedown', (e) => {
    const startX = e.pageX - scrollbarThumb.offsetLeft;
    document.onmousemove = (e) => {
        let newX = e.pageX - startX;
        const maxThumbLeft = scrollbar.clientWidth - scrollbarThumb.clientWidth;
        newX = Math.max(0, Math.min(maxThumbLeft, newX));
        scrollbarThumb.style.left = newX + 'px'; // Corrected line

        const scrollPercentage = newX / maxThumbLeft;
        image.scrollLeft = scrollPercentage * (image.scrollWidth - image.clientWidth);
    };
    document.onmouseup = () => {
        document.onmousemove = null;
    };
});

// Synchronize thumb with content scroll
image.addEventListener('scroll', updateThumbPosition);
window.addEventListener('resize', () => {
    updateThumbWidth();
    updateThumbPosition();
});

// Initialize scrollbar
updateThumbWidth();
updateThumbPosition();



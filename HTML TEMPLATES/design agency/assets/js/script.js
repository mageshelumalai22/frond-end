	// brands slider
	if ($('.brand-slider').length > 0) {
		$('.brand-slider').slick({
			 dots: false,
			 arrows:false,
			 autoplay: true,
			 infinite: true,
			 variableWidth: false,
			 slidesToShow: 4,
			 slidesToScroll: 1,
			 swipeToSlide: true,
			 responsive: [
				   {
					   breakpoint: 1024,
					   settings: {
						   slidesToShow: 3,
						   slidesToScroll: 1                        
					   }
				   },
				   {
					   breakpoint: 992,
					   settings: {
						   slidesToShow: 3,
						   slidesToScroll: 1
					   }
				   },
				   {
					   breakpoint: 768,
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
				   }
			   ]
		   });
	}

	
	// JQuery counterUp
		if($('.counter-up').length > 0) 
		{
		 $('.counter-up').counterUp({
			 delay: 15,
			 time: 1500
		 });
		 }
	 // JQuery counterUp

	 if($('.customer-slider').length > 0) {
		$('.customer-slider').owlCarousel({
			loop:true,
			margin:24,
			dots:true,
			nav:false ,
			smartSpeed: 1000,
			dotsSpeed: 500,
			dragEndSpeed: 1000,
			navText : ["<i class='fa-solid fa-arrow-left'></i>","<i class='fa-solid fa-arrow-right'></i>"],
			responsive:{
				0:{
					items:1,
					
				},
				320:{
					items:1,
					
				},
				500:{
					items:2,
					
				},
				768:{
					items:2,
					
				},
				1000:{
					items:2,
					
				},
				1300:{
					items:2,
					
				}
			}
		})	
	}		


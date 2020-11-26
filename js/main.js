// A $( document ).ready() block.
$(document).ready(function() {

	// smuth scroll JQuary start
	// Add smooth scrolling to all links
	$("a").on('click', function(event) {
	// Make sure this.hash has a value before overriding default behavior
	if (this.hash !== "") {
	  // Prevent default anchor click behavior
	  event.preventDefault();
	  // Store hash
	  var hash = this.hash;
	  // Using jQuery's animate() method to add smooth page scroll
	  // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
	  $('html, body').animate({
	    scrollTop: $(hash).offset().top
	  }, 800, function(){
	    // Add hash (#) to URL when done scrolling (default click behavior)
	    window.location.hash = hash;
	  });
	} // End if
	});
	// smuth scroll JQuary end

	// accordion start
   	$(function() {
		var Accordion = function(el, multiple) {
				this.el = el || {};
				this.multiple = multiple || false;

				var links = this.el.find('.article-title');
				links.on('click', {
						el: this.el,
						multiple: this.multiple
				}, this.dropdown)
		}

		Accordion.prototype.dropdown = function(e) {
				var $el = e.data.el;
				$this = $(this),
						$next = $this.next();

				$next.slideToggle();
				$this.parent().toggleClass('open');

				if (!e.data.multiple) {
						$el.find('.accordion-content').not($next).slideUp().parent().removeClass('open');
				};
		}
		var accordion = new Accordion($('.accordion-container'), false);
	});
    // accordion end


	//owl-carowsel custom js with hero-area 
	$('.hreo-slider').owlCarousel({
		items:1,
		loop:true,
		autoplay:false,
		autoplayHoverPause:false,
		autoplaySpeed:1500,
		nav:true,
		dots:false,
		navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']
	});

	// counter up js
	$('.counter').counterUp({
	    delay: 5,
	    time: 1500,
	});


	// owl-carowsel custom js with client-logo
	$('.client-logo-slider').owlCarousel({
		items:6,
		loop:true,
		autoplay:true,
		autoplaySpeed: 1000,
		nav:false,
		dots:false,
		responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	        },
	        581:{
	            items:2,
	        },
	        768:{
	            items:3,
	        },
	        991:{
	            items:4,
	        },
	        1199:{
	            items:6,
	        },
	    }
	});


	// slick nav start
	$(function(){
	       $('#menu').slicknav({prependTo:".header-menu-area"});
	   });
	// slick nav end

	// active class
	$('.menu-item ul li a').click(function(){
	    $('li a').removeClass("active");
	    $(this).addClass("active");
	});


	// preloder start
	$( window ).load(function() {
		$(".loading-area").fadeOut(2000)

	});


	// active class
	$('.blog-progress-bar li a').click(function(){
	    $('li a').removeClass("active");
	    $(this).addClass("active");
	});


	// owl-carowsel custom js with slide-bike start 
	$('.carousel-img').owlCarousel({
		items:1,
		loop:true,
		autoplay:true,
		autoplaySpeed:1000,
		autoplayHoverPause:true,
		dots:false,
		nav:true,
		navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
	});


	// display none class
	$('.gm-style').click(function(){
	    $("..place-card-large").addClass("active");
	});



	// =================================================
	// =================================================
	// =================================================
	// =================================================






    // magnificPopup custom js
	$('.play-btn').magnificPopup({type:'iframe'});


	// owl-carowsel custom js with testmonial-slider
	$('.testmonial-slider').owlCarousel({
		items:1,
		loop:true,
		autoplay:true,
		autoplaySpeed:1000,
		autoplayHoverPause:true,
		nav:true,
		dots:true,
		navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>']
	});





	// owl-carowsel custom js with client-logo
	$('.p-logo').owlCarousel({
		items:5,
		loop:true,
		autoplay:true,
		autoplaySpeed: 1000,
		nav:false,
		dots:false,
		responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	        },
	        581:{
	            items:2,
	        },
	        768:{
	            items:3,
	        },
	        991:{
	            items:5,
	        }
	    }
	});


	// sticky ja custom code
	$("#skicky").sticky({topSpacing:0});

	// ======================== end //






	//wow js advance start --------------------------//
	new WOW().init();
	//wow js advance end --------------------------//












	




	 

    



    
});















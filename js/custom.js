/*-----------------------------------------------------------------------------------*/
/*	DOCUMENT READY FUNCTIONS
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function($){
'use strict';
	
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		jQuery('body').addClass('mobile-device');
	}
	
	/**
	 * Homepage Full Size First Section
	 */
	var $window = jQuery(window),
		$header = jQuery('header#main');
	
	$window.resize(function(){
		jQuery('#home.full-height, #home.full-height .wrapper').css({ 'height' : $window.height() });
	});
	
	$window.trigger('resize');
	
	/**
	 * View More, and .Scroller Click
	 */
	jQuery('#view-more a, .scroller').click(function(){
		var url = $(this).attr('href');
		$("html, body").animate({ scrollTop: $(url).offset().top - $header.outerHeight() }, 500);
		return false;
	});
	
	/**
	 * Scroller click add/remove class
	 */
	$('.scroller').click(function(){
		$('.scroller').removeClass('active');
		$(this).addClass('active');
		return false;
	});
	
	/**
	 * Setup sticky header
	 */
	var $headerTop = $header.offset().top;
	
	$('.offset').height( $header.outerHeight() );
	
	/**
	 * Window Scroll Functions
	 */
	$(window).scroll(function(){
		( $(window).scrollTop() > $headerTop ) ? $('body').addClass('header-fixed')	: $('body').removeClass('header-fixed');
		
		$('.scroller').each(function(){
			var scrollHref = $(this).attr('href');
			if( $(window).scrollTop() > $(scrollHref).offset().top - 240 ) {
				$('.scroller').removeClass('active');
				$(this).addClass('active');
			}
		});
	});
	
	/**
	 * AJAX Portfolio
	 */
	jQuery('#container a').click(function(){
		
		$(this).attr('data-ajax-active', 'true');
		
		var url = $(this).attr('href');
		
		$('#loader').isotope( 'remove', $('.item') );
		
		$("html, body").animate({ scrollTop: $('#loader').offset().top - $header.outerHeight() }, 250);
		
		jQuery.get(url, function(data){
			var $data = jQuery(data);
			
			imagesLoaded( $data, function(){
				
				$data.find('.owl-carousel').owlCarousel({
					items: 1,
					autoHeight: true,
					lazyLoad: true
				});
				
				jQuery('#loader').prepend( $data ).isotope( 'prepended', $data );
				
				setTimeout(function(){
					jQuery('#loader').isotope('layout');
					$('#loader').css('min-height', '' );
					jQuery(window).trigger('resize');
				}, 600);
				
			});
			
		});
		
		return false;
	});
	
	/**
	 * Close Portfolio
	 */
	$('body').on('click', '#portfolio-close', function(){
		jQuery('#container a').attr('data-ajax-active', '');
		$('#loader').isotope( 'remove', $('.item') ).isotope('layout');
		setTimeout(function(){
			$("html, body").animate({ scrollTop: $('#loader').offset().top - $header.outerHeight() }, 250);
		}, 300);
		return false;
	});
	
	/**
	 * Prev Portfolio
	 */
	$('body').on('click', '#portfolio-prev', function(){
		
		$('#loader').css('min-height', $('#loader').height() );
		var $current = jQuery('#container a[data-ajax-active="true"]'),
			$prev = $current.parent().parent().prev().find('a');
		
		if( $prev.length ){
			$current.attr('data-ajax-active', '');
			$prev.trigger('click');
		} else {
			jQuery('#container a').last().trigger('click');
		}
		
		$('#loader').isotope( 'remove', $('.item') ).isotope('layout');

		return false;
		
	});
	
	/**
	 * Next Portfolio
	 */
	$('body').on('click', '#portfolio-next', function(){
		
		$('#loader').css('min-height', $('#loader').height() );
		var $current = jQuery('#container a[data-ajax-active="true"]'),
			$next = $current.parent().parent().next().find('a');
		
		if( $next.length ){
			$current.attr('data-ajax-active', '');
			$next.trigger('click');
		} else {
			jQuery('#container a').first().trigger('click');
		}
		
		$('#loader').isotope( 'remove', $('.item') ).isotope('layout');

		return false;
		
	});
	
	/**
	 * Burger Menu
	 */
	$('#burger').click(function(){
		$('#main .three_fourths').slideToggle();
	});

});

jQuery(window).load(function($) {
	
	/**
	 * Start Isotope
	 */
	var $container = jQuery('#container');
	$container.isotope({
		itemSelector: '.item'
	});
	
	/**
	 * Isotope Filter Buttons
	 */
	jQuery('#filters a').click(function () {
	
	    jQuery('#filters a').removeClass('active');
	    jQuery(this).addClass('active');
	
	    var selector = jQuery(this).attr('href');
	    jQuery('#container').isotope({
	        filter: selector
	    });
	
	    return false;
	});
	
	/**
	 * Start AJAX Loader Isotope
	 */
	var $container = jQuery('#loader');
	$container.isotope({
		itemSelector: '.item'
	});
	
	/**
	 * Homepage Titles Flexslider
	 */
	jQuery('#home .flexslider').flexslider({
		animation : "slide",
		direction : "vertical",
		controlNav: false,
		directionNav: false,
		slideshowSpeed: 3500,
		animationSpeed: 300,
	});
	
	/**
	 * Quotes Flexslider
	 */
	jQuery('.quotes').owlCarousel({
		items: 1
	});
	
	/**
	 * Remove Pace (Preloader)
	 */
	setTimeout(function(){
		jQuery('.pace').remove();
	}, 2200);
	
});
/*-----------------------------------------------------------------------------------*/
/*	CONTACT FORM
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function($){
'use strict';

	/**
	 * Contact Form
	 */
	$('#contactform').submit(function(){

		var action = $(this).attr('action');

		$("#message").slideUp(750,function() {
		$('#message').hide();

 		$('#submit').attr('disabled','disabled');

		$.post(action, {
			name: $('#name').val(),
			email: $('#email').val(),
			website: $('#website').val(),
			comments: $('#comments').val()
		},
			function(data){
				document.getElementById('message').innerHTML = data;
				$('#message').slideDown('slow');
				$('#submit').removeAttr('disabled');
				if(data.match('success') != null) $('#contactform').slideUp('slow');
				$(window).trigger('resize');
			}
		);

		});

		return false;

	});
	
});
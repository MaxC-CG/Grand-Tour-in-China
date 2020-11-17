/*------------------------------------------------------------------
	[Fucntion]
	* Google Map
	* Document Scroll
	* Document Ready
		- Scrolling Navigation
		- Responsive Caret
		- Expand Panel
		- Menu Search
		- Bookig Form :: DatePicker
		- Booking Form Select Option Img
		- Popular Destination Main Block
		- Popular Destination Map
		- BookNow
		- PhotoSlider2 Carousel
		- Feature Section
		- Team Section
		- Partner Section
		- Partner2 Section
		- Testimonial Section
		- Testimonial2 Section
		- Popular Destination 2
		- Destination Details
		- Gallery Section :: Magnific PopUp
		- Contact Map
		- Contact Form

	* Window Load
		- Site Loader
		- Gallery Section
------------------------------------------------------------------*/

(function($) {

	"use strict"
	
	
	/* * Google Map */
	function initialize(obj) {
		var lat = $('#'+obj).attr("data-lat");
        var lng = $('#'+obj).attr("data-lng");
		var contentString = $('#'+obj).attr("data-string");
		var myLatlng = new google.maps.LatLng(lat,lng);
		var map, marker, infowindow;
		var image = "images/marker.png";
		var zoomLevel = parseInt($('#'+obj).attr("data-zoom") ,10);
		var styles = [{"featureType":"landscape","stylers":[{"saturation":" "},{"lightness":" "},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":" "},{"lightness":" "},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":" "},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":" "},{"lightness":" "},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":" "},{"lightness":" "},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":" "},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":" "},{"saturation":" "}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":" "},{"saturation":" "}]}]
		var styledMap = new google.maps.StyledMapType(styles,{name: "Styled Map"});	
		var mapOptions = {
			zoom: zoomLevel,
			disableDefaultUI: true,
			center: myLatlng,
            scrollwheel: false,
			mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, "map_style"]
			}
		}
		map = new google.maps.Map(document.getElementById(obj), mapOptions);
		map.mapTypes.set("map_style", styledMap);
		map.setMapTypeId("map_style");
		
		infowindow = new google.maps.InfoWindow({
			content: contentString
		});      
	    
        marker = new google.maps.Marker({
			position: myLatlng,
			map: map,
			icon: image
		});
		google.maps.event.addListener(marker, "click", function() {
			infowindow.open(map,marker);
		});	
	}
	
	/* * Document Scroll - Window Scroll */
	$( document ).scroll(function()
	{
		var scroll	=	$(window).scrollTop();
		var height	=	$(window).height();

		/* - Set sticky menu */
		if( scroll >= height )
		{
			$(".menu-block").addClass("navbar-fixed-top animated fadeInDown").delay( 2000 ).fadeIn();
		}
		else if ( scroll <= height )
		{
			$(".menu-block").removeClass("navbar-fixed-top animated fadeInDown");
		}
		else
		{
			$(".menu-block").removeClass("navbar-fixed-top animated fadeInDown");
		} 

		if ($(this).scrollTop() >= 50)
		{	
			/* If page is scrolled more than 50px */
			$("#back-to-top").fadeIn(200); /* Fade in the arrow */
		}
		else
		{
			$("#back-to-top").fadeOut(200); /* Else fade out the arrow */
		}
	});
		
	/* * Document Ready - Handler for .ready() called */
	$(document).ready(function($) {
		
		/* - Scrolling Navigation */
		var scroll	=	$(window).scrollTop();
		var height	=	$(window).height();
		
		/* - Set sticky menu */
		if( scroll >= height -500 )
		{
			$(".menu-block").addClass("navbar-fixed-top").delay( 2000 ).fadeIn();
		}
		else if ( scroll <= height )
		{
			$(".menu-block").removeClass("navbar-fixed-top");
		}
		else
		{
			$(".menu-block").removeClass("navbar-fixed-top");
		} /* set sticky menu - end */

			
		/* - Responsive Caret */
		$(".ddl-switch").on("click", function() {

			var li = $(this).parent();
			if ( li.hasClass("ddl-active") || li.find(".ddl-active").length !== 0 || li.find(".dropdown-menu").is(":visible") ) {
				li.removeClass("ddl-active");
				li.children().find(".ddl-active").removeClass("ddl-active");
				li.children(".dropdown-menu").slideUp();
			}
			else {
				li.addClass("ddl-active");
				li.children(".dropdown-menu").slideDown();
			}
		});
		
		/* - Expand Panel */
		$("#slideit").on ("click", function() {
			$("#slidepanel").slideDown(1000);
			$("html").animate({ scrollTop: 0 }, 1000);
		});	

		/* - Collapse Panel */
		$("#closeit").on("click", function() {
			$("#slidepanel").slideUp("slow");
			$("html").animate({ scrollTop: 0 }, 1000);
		});	
		
		/* Switch buttons from "Log In | Register" to "Close Panel" on click */
		$("#toggle a").on("click", function() {
			$("#toggle a").toggle();
		});		
		
		/* - Menu Search */
		$(".menusearch .input-group-btn .btn").on("click", function(e) {
			
			$(".menusearch > input").toggleClass("search-show");
			$(".menusearch > input").focus();
			
			e.stopPropagation();
		});

		$("html, body").on("click", function(e) {

			var target = $( e.target );

			if( ! target.is(".search-show") && $(".menusearch > input").hasClass("search-show") ) {
				$(".menusearch > input").removeClass("search-show");
			}
			
		});

		/* - Bookig Form :: DatePicker */
		$(".datepicker").datetimepicker({
			pickTime: false
		});	
		
		/* - Booking Form Select Option Img */
		$("#demo-htmlselect").ddslick({
			onSelected: function(selectedData){
			}   
		});
		
		/* - Partner Section */
		if( $(".partner-carousel").length ) {
			$(".partner-carousel").owlCarousel({
				loop: true,
				margin: 30 ,
				nav: false,
				dots: false,
				smartSpeed: 200,
				autoplay: true,
				responsive:{
					0:{
						items: 1
					},
					360:{

						items: 2
					},
					480:{

						items: 3
					},
					680:{

						items: 4
					},
					992:{
						items: 5
					},
					1200: {
						items: 6
					}
				}
			});	
		}
		
		/* - Partner2 Section */
		if( $(".partner2-section").length ) {
			$(".partner2-carousel").owlCarousel({
				loop: true,
				margin: 30 ,
				nav: false,
				dots: false,
				smartSpeed: 200,
				autoplay: true,
				responsive:{
					0:{
						items: 1
					},
					360:{

						items: 2
					},
					480:{

						items: 3
					},
					680:{

						items: 4
					},
					992:{
						items: 5
					},
					1200: {
						items: 6
					}
				}
			});
		}
		
		/* - Testimonial Section */
		if( $(".testimonial-section").length ) {
			$(".testimonial-carousel").owlCarousel({
				loop: true,
				margin: 30 ,
				nav: false,
				dots: true,
				smartSpeed: 1500,
				autoplay: true,
				mouseDrag: false,
				responsive:{
					0:{
						items: 1
					},
					992: {
						items: 2
					}
				}
			});
		}
		
		/* - Testimonial2 Section */
		if( $(".testimonial2-section").length ) {
			$("#carousel").flexslider({
				animation: "slide",
				controlNav: false,
				animationLoop: false,
				slideshow: false,
				itemWidth: 256,
				itemMargin: 5,
				asNavFor: "#slider"
			});

			$("#slider").flexslider({
				animation: "slide",
				controlNav: false,
				animationLoop: false,
				slideshow: false,
				sync: "#carousel"
			});
		}
		
		/* - Popular Destination 2 */
		if( $(".popular-destination2-section").length ) {
			$("#popular-destination2-carousel").lightSlider({
				gallery:true,
				item:1,
				loop:false,
				easing: 'linear',
				auto: true,
				thumbItem:8,
				slideMargin:0,
				enableDrag: false,
				thumbMargin: 20,
				controls: false,
				speed: 2000,
				pause: 4000,
				responsive : [
					{
						breakpoint:1200,
						settings: {
							thumbItem: 5
						}
					},{
						breakpoint:991,
						settings: {
							thumbItem: 4
						}
					},{
						breakpoint:767,
						settings: {
							thumbItem: 3
						}
					},{
						breakpoint:480,
						settings: {
							thumbItem: 2
						}
					}
				]
			}); 
		}
		
		/* - Destination Details */
		if( $(".destination-details-section").length ) {
			$("#popular-destination2-carousel").lightSlider({
				gallery:true,
				item:1,
				loop:true,
				thumbItem:6,
				slideMargin:0,
				enableDrag: false,
				thumbMargin: 20,
				pager: true,
				controls: false,
				responsive : [
					{
						breakpoint:991,
						settings: {
							thumbItem: 4
						}
					},{
						breakpoint:767,
						settings: {
							thumbItem: 3
						}
					},{
						breakpoint:480,
						settings: {
							thumbItem: 2
						}
					}
				]
			});  
		}
		
		/* - Gallery Section :: Magnific PopUp */
		if( $(".gallery-section").length){
			var url;
			$(".gallery-section").magnificPopup({
				delegate: ".gallery-popup",
				type: "image",
				tLoading: "Loading image #%curr%...",
				mainClass: "mfp-img-mobile",
				gallery: {
					enabled: true,
					navigateByImgClick: false,
					preload: [0,1] // Will preload 0 - before current, and 1 after the current image
				},
				image: {
					tError: "<a href="%url%">The image #%curr%</a> could not be loaded.",
				}
			});
		}
		
		/* - Contact Map */
		if($("#map-canvas-contact").length==1){
			initialize("map-canvas-contact");
		}
		
		/* - Contact Form */
		$( "#btn_submit" ).on( "click", function(event) {
		  event.preventDefault();
		  var mydata = $("form").serialize();
			$.ajax({
				type: "POST",
				dataType: "json",
				url: "contact.php",
				data: mydata,
				success: function(data) {
					if( data["type"] == "error" ){
						$("#alert-msg").html(data["msg"]);
						$("#alert-msg").removeClass("alert-msg-success");
						$("#alert-msg").addClass("alert-msg-failure");
						$("#alert-msg").show();
					} else {
						$("#alert-msg").html(data["msg"]);
						$("#alert-msg").addClass("alert-msg-success");
						$("#alert-msg").removeClass("alert-msg-failure");
						$("#input_name").val("");
						$("#input_email").val("");
						$("#input_phone").val("");
						$("#textarea_message").val("");
						$("#alert-msg").show();
					}
				},
				error: function(xhr, textStatus, errorThrown) {
					alert(textStatus);
				}
			});
		});
		
	});	/* - Document Ready /- */
		
	/* * Window Load - Handler for .load() called */
	$(window).load(function() {	
		/* - Site Loader */
		if ( !$("html").is(".ie6, .ie7, .ie8") ) {
			$("#site-loader").delay(1000).fadeOut("slow");
		}
		else {
			$("#site-loader").css("display","none");
		}
		
		/* - Gallery Section */
		if( $(".gallery-section").length){
			var $container = $(".portfolio-list");
			$container.isotope({
			  itemSelector: ".portfolio-list > li",
			  gutter: 0,
			  transitionDuration: "0.5s"
			});
		}
	});

})(jQuery);
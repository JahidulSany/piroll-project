(function($) {
	'use strict';
	jQuery(document).on('ready', function(){

         // START MENU JS
         $(window).on('scroll', function() {
            if ($(this).scrollTop() > 100) {
                $('.navbar-light').addClass('menu-shrink');
            } else {
                $('.navbar-light').removeClass('menu-shrink');
            }
        });			
     
        $('.navbar-nav .nav-item .nav-link').on('click', function(e){
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 80
            }, 1500);
            e.preventDefault();
        });
       
        $(document).on('click','.navbar-collapse.show',function(e) {
            if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
                $(this).collapse('hide');
            }
        });	
        // END MENU JS

        // Home Slider JS
        $('.home-slider').owlCarousel({
            items:1,
            loop:true,
            margin:10,
            nav: true,
            dots: false,
            navText: [
                "<i class='fas fa-chevron-left'></i>",
                "<i class='fas fa-chevron-right'></i>"
            ],
        });

        // Counter Section counter-up 
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });

        // Inside Slider JS
        $('.testimonials-slider').owlCarousel({
            items:1,
            loop:true,
            margin:0,
            nav: false,
            dots: true,
            autoplay:true,  
            autoplayTimeout:2000,
            autoplayHoverPause: true,
        });

        // Logo Slider JS
        $('.logo-slider').owlCarousel({
            loop:true,
            margin:10,
            nav: false,
            dots: false,
            autoplay: true,
            autoplayTimeout:3000,
            autoplayHoverPause: true,
            responsive:{
                0:{
                    items:1,
                },
                600:{
                    items:3,
                },
                1000:{
                    items:5,
                }
            }
        });

        // Magnific Popup Image JS
        $('.popup-gallery').magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0,1] // Will preload 0 - before current, and 1 after the current image
            }
        });

        // Magnific Popup Videos
        $('.popup-youtube').magnificPopup({
            disableOn: 300,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });

         // Back to top 
         $('body').append('<div id="toTop" class="back-to-top-btn"><i class="fas fa-angle-double-up"></i></div>');
         $(window).scroll(function () {
             if ($(this).scrollTop() != 0) {
                 $('#toTop').fadeIn();
             } else {
                 $('#toTop').fadeOut();
             }
         }); 
         $('#toTop').click(function(){
             $("html, body").animate({ scrollTop: 0 }, 600);
             return false;
         });

         // PRELOADER
        jQuery(window).on('load',function(){
            jQuery(".loader").fadeOut(500);
        });

        // WOW JS
        new WOW().init();

    }); 	
})(jQuery);
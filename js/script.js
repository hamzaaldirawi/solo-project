/* Preloader */
$(window).on('load', function() {
    //Make sure whole website is fully loaded
    $('#preloader-holder').delay(350).fadeOut('slow');
});

/* Owl Carousel - Team */
var owlTeam = $('#team-members');

$(function() {
    owlTeam.owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive : {
            // breakpoint from 0 up
            0 : {
                items: 1
            },
            // breakpoint from 480 up
            991 : {
                items: 2
            }
        }
    });
});

$(function() {
    owlTeam.on('mousewheel', '.owl-stage', function (e) {
        if (e.deltaY>0) {
            owlTeam.trigger('next.owl');
        } else {
            owlTeam.trigger('prev.owl');
        }
        e.preventDefault();
    });
});

/* Animated Progress Bar - Team */
$(function () {
    $('#progress-elements').waypoint(function() {
        $('.progress-bar').each(function () {
            $(this).animate({
                width: $(this).attr('aria-valuenow') + '%'
            }, 1000);
        });
        this.destroy(); // To not repeat animation
    }, {
        offset: '75%'
    });
});

/* Responsive Tabs */
$(function () {
    $('#services-tabs').responsiveTabs({
        animation: 'slide'
    });
});

/* Isotope - Filter Portfolio */
$(window).on('load', function() {
    // Init Isotope
    $('#isotope-container').isotope({
        
    });

    // Filter Buttons 
    $('#isotope-filters').on('click', 'button', function() {
        var filterValue = $(this).attr('data-filter');

        // Filter Portfolio Items
        $('#isotope-container').isotope({
            filter: filterValue
        });

        // Active Button
        $('#isotope-filters').find('.active').removeClass('active');
        $(this).addClass('active');
    });
});

/* Zoom Magnific */
$(function() {
    $('#portfolio-wrapper').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery:{
            enabled:true
          }
      });
});

/* Owl Carousel - Testimonial */
var owlTestimonial = $('#testimonial-slider');

$(function() {
    owlTestimonial.owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});

$(function() {
    owlTestimonial.on('mousewheel', '.owl-stage', function (e) {
        if (e.deltaY>0) {
            owlTestimonial.trigger('next.owl');
        } else {
            owlTestimonial.trigger('prev.owl');
        }
        e.preventDefault();
    });
});

/* Counter */
$(function() {
    $('.counter').counterUp({
        delay: 20,
        time: 2000
    });
});

/* Clients */
var owlClients = $('#clients-list');

$(function() {
    owlClients.owlCarousel({
        items: 6,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive : {
            // breakpoint from 0 up
            0 : {
                items: 2
            },
            // breakpoint from 480 up
            768 : {
                items: 6
            }
        }
    });
});

$(function() {
    owlClients.on('mousewheel', '.owl-stage', function (e) {
        if (e.deltaY>0) {
            owlClients.trigger('next.owl');
        } else {
            owlClients.trigger('prev.owl');
        }
        e.preventDefault();
    });
});

/* Map */
$(function () {
    var mymap = L.map('map').setView([40.716881, -73.994019], 15);
    // Install Layer 
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mymap);
    // Marker 
    L.circleMarker([40.716881, -73.994019], 
        {radius: 15}).addTo(mymap);radius: 15
});

/* Nav Show and Hide White BG & Grey BG & Mobile Menu */
$(function () {

    $(window).scroll(function(){
        if ($(window).scrollTop() > 50) {
            // Show white bg
            $('nav').addClass('white-navbar');
            // change img
            $('.navbar-brand img').attr('src', 'img/logo/logo-dark.png');
            //back to top button
            $('#back-to-top').fadeIn();
            //remove grey-bg
            $('nav').removeClass('grey-bg');

        } else {
            $('nav').removeClass('white-navbar');
            $('.navbar-brand img').attr('src', 'img/logo/logo.png');
            $('#back-to-top').fadeOut();
            $('.navbar-collapse').removeClass('show');
            $('nav').removeClass('grey-bg');
        }
    });
});

/* Smooth Scrolling */
$(function () {

    $('.smooth').click(function (event){

        event.preventDefault();

        var section_id = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(section_id).offset().top - 64
        }, 1250, 'easeInOutExpo');
        // - 64 to offset before top of section not inside it
    });
});

/* Mobile Menu BG */
$(function () {
    $('.navbar-toggler').on('click', function (){
        if ($('nav').hasClass('grey-bg')) {
            $('nav').removeClass('grey-bg');
        } 
        else if ($(window).scrollTop() < 50) {
            $('nav').addClass('grey-bg');
        }
    });

    $('.nav-link').on('click', function () {
        $('.navbar-collapse').removeClass('show');
        if ($('nav').hasClass('grey-bg')) {
            $('nav').removeClass('grey-bg');
        } 
    });
    
});      


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
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
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
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
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

/* Google Map */
// Initialize and add the map
$(function initMap() {
    // The location of Uluru
    const mapCenter = { lat: 40.716881, lng: -73.994019 };
    // The map,
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: mapCenter,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: mapCenter,
      map: map,
    });
  });

  /* Nav Show and Hide White BG */
  $(function () {

    $(window).scroll(function(){
        if ($(window).scrollTop() > 50) {
            // Show white bg
            $('nav').addClass('white-navbar');
            // change img
            $('.navbar-brand img').attr('src', 'img/logo/logo-dark.png');
            //back to top button
            $('#back-to-top').fadeIn();

        } else {
            $('nav').removeClass('white-navbar');
            $('.navbar-brand img').attr('src', 'img/logo/logo.png');
            $('#back-to-top').fadeOut();
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
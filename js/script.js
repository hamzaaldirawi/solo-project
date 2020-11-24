/* Preloader */
$(window).on('load', function() {
    //Make sure whole website is fully loaded
    $('#preloader-holder').delay(350).fadeOut('slow');
});

/* Owl Carousel - Team */
var owl = $('#team-members');

$(function() {
    owl.owlCarousel({
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
    owl.on('mousewheel', '.owl-stage', function (e) {
        if (e.deltaY>0) {
            owl.trigger('next.owl');
        } else {
            owl.trigger('prev.owl');
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
        offset: 'bottom-in-view'
    });
});

/* Responsive Tabs */
$(function () {
    $('#services-tabs').responsiveTabs({
        animation: 'slide'
    });
});
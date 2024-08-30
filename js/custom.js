$(window).scroll(function() {
    var y = $(window).scrollTop();
    if (y > 0) {
    $("header.site_header").addClass('sticky');
    } else {
    $("header.site_header").removeClass('sticky');
    }
}); 

$(document).ready(function() {
$("button.navbar-toggler").click(function(event) {
    $("#main_menu").addClass('show');
    $(".nav_overlay").addClass('show');
    $('body').addClass('body_overflow');
});
$("button.close_nav").click(function(event) {
    $("#main_menu").removeClass('show');
    $(".nav_overlay").removeClass('show');
    $('body').removeClass('body_overflow');
});
});

jQuery('.baner_owl').owlCarousel({
    loop: true,
    margin: 0,
    items: 1,
    autoplay: true,
    dots: true,
    nav: true,
    mouseDrag: false,
    touchDrag: false,
    autoplayTimeout: 5000,
    smartSpeed: 3000,
    responsiveClass: true,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut'
});

jQuery('.placemnet_owl').owlCarousel({
    loop: false,
    margin: 20,
    autoplay: true,
    dots: true,
    nav: false,
    mouseDrag: false,
    touchDrag: false,
    autoplayTimeout: 3500,
    smartSpeed: 2000,
    responsiveClass: true,
    responsive: {
    0: {
      items: 1
    },
    480: {
      items: 1
    },
    768: {
      items: 2
    },
    992: {
      items: 3,
      margin: 60
    }
    }
});

jQuery('.partner_owl').owlCarousel({
    loop: false,
    margin: 20,
    autoplay: true,
    dots: true,
    nav: false,
    mouseDrag: false,
    touchDrag: false,
    autoplayTimeout: 3500,
    smartSpeed: 2000,
    responsiveClass: true,
    responsive: {
    0: {
      items: 2
    },
    480: {
      items: 3
    },
    768: {
      items: 4
    },
    992: {
      items: 5
    }
    }
});
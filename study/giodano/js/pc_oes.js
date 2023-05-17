$(function() {

    $("#p2rit ul").slick({
        autoplay: true,
        infinite: true,
        arrows: false,
        autoplaySpeed: 3000,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1
    })

    
    $("#p10sld ul").slick({
        autoplay: true,
        infinite: true,
        fade:true,
        arrows: false,
        autoplaySpeed: 3000,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1
    })

    $('.wp1').waypoint(function () {
        $('.wp1').addClass('animated fadeInLeft')
    }, {
        offset: "75%"
    });
    
    $('.wp2').waypoint(function () {
        $('.wp2').addClass('animated fadeInLeft')
    }, {
        offset: "75%"
    });

    $('.wp3').waypoint(function () {
        $('.wp3').addClass('animated fadeInUp')
    }, {
        offset: "75%"
    });

    $('.wp4').waypoint(function () {
        $('.wp4').addClass('animated fadeInUp delay-05s')
    }, {
        offset: "75%"
    });

    $('.wp5').waypoint(function () {
        $('.wp5').addClass('animated fadeInUp delay-1s')
    }, {
        offset: "75%"
    });
})
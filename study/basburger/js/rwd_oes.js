$(document).ready(function () {



    // 메인베너
    var $bnrNum = 0;
    $slideImg = $(".mainbnr").width();
    $slideTxt = $("#bnrcts").width();

    //윈도우 크기 변화 시 전환
    $(window).each(function () {
        $(window).on("resize", function () {
            $slideImg = $(".mainbnr").width();
            $slideTxt = $("#bnrcts").width();
        });
    });


    $(window).each(function () {
        $(window).on("resize", function () {
            $bnrNum = 0;
            $(".rollbtn li a").eq($bnrNum).trigger("click")
        });
    });


    //메인베너 next, prev 버튼
    $("#main .next").click(function () {
        if ($bnrNum >= 2) return false;
        $bnrNum++;
        $(".mainbnr .bnrimg").animate({ left: -$slideImg * $bnrNum }, 300,
            function () {
                $(".rollbtn li").attr("class", "navbtn");
                $(".rollbtn li").eq($bnrNum).removeClass().attr("class", "navbtn_over");
            });
        $("#bnrcts .bnrcts").animate({ left: -$slideTxt * $bnrNum }, 300,
            function () {
                $(".rollbtn li").attr("class", "navbtn");
                $(".rollbtn li").eq($bnrNum).removeClass().attr("class", "navbtn_over"); //left주려면 position:relative 가 있어야됨
            });
    });

    $("#main .prev").on("click", function () {
        if ($bnrNum <= 0) return false;
        $bnrNum--;
        $(".mainbnr .bnrimg").animate({ left: -$slideImg * $bnrNum }, 300,
            function () {
                $(".rollbtn li").attr("class", "navbtn");
                $(".rollbtn li").eq($bnrNum).removeClass().attr("class", "navbtn_over");
            });
        $("#bnrcts .bnrcts").animate({ left: -$slideTxt * $bnrNum }, 300,
            function () {
                $(".rollbtn li").attr("class", "navbtn");
                $(".rollbtn li").eq($bnrNum).removeClass().attr("class", "navbtn_over");
            });

    });

    //메인베너 롤버튼
    $(".rollbtn li a").click(function () {
        var strName = ($(this).parent().attr("id"));
        slideTarget(strName.substr(7, 1));
        return false;
    });

    function slideTarget(n) {
        var pos = Number(n) * -$slideImg;
        $(".mainbnr .bnrimg").stop().animate({ left: pos }, 600, function () {
            $(".rollbtn li").attr("class", "navbtn");
            $("#rollbtn" + n).removeClass().attr("class", "navbtn_over");
            $bnrNum = n;

        });

        var pos1 = Number(n) * -$slideTxt;
        $("#bnrcts .bnrcts").stop().animate({ left: pos1 }, 600, function () {
            $(".rollbtn li").attr("class", "navbtn");
            $("#rollbtn" + n).removeClass().attr("class", "navbtn_over");
            $bnrNum = n;
        });
    };

    //메인베너 자동 전환
    var SetI; //변수 정의를 함수 바깥에서 해야 함
    function SetInter() {
        SetI = setInterval(function () {
            $bnrNum++;
            if ($bnrNum > 2) $bnrNum = 0;
            $(".rollbtn li a").eq($bnrNum).stop().trigger("click");

        }, 6000);
    }

    SetInter(); //정의한 함수를 호출하기 위해 반드시 한번 작성

    $("#maindiv").on({
        mouseenter: function () {
            clearInterval(SetI);
        },
        focus: function () {
            clearInterval(SetI);
        },
        mouseleave: function () {
            SetInter();
        },
        blur: function () {
            SetInter();
        }
    })

    //scrollTo 플러그인

    $("#mainmenu a").click(function () {
        var hash = $(this).attr("href"),
            thishash = $(hash).offset().top - 100;
        $.scrollTo(thishash || 0, 1000);

    });

    //mainmenu 상단고정

    $("#mainmenudiv, #mainmenu").each(function () {
        var $window = $(window),
            $header = $(this),
            $menu = $("#menu"),
            menuOffsetTop = $menu.offset().top - 250;

        $window.on('scroll', function () {
            if ($window.scrollTop() > menuOffsetTop) {
                $header.addClass('sticky');
            } else {
                $header.removeClass('sticky');
            }
        })
    });




    $('.wp1').waypoint(function () {
        $('.wp1').addClass('animated fadeInLeft')
    }, {
        offset: "90%"
    });

    $('.wp2').waypoint(function () {
        $('.wp2').addClass("animated fadeInLeft")
    }, {
        offset: "90%"
    });

    $('.wp3').waypoint(function () {
        $('.wp3').addClass("animated fadeInLeft")
    }, {
        offset: "90%"
    });

    $('.wp4').waypoint(function () {
        $('.wp4').addClass("animated fadeInUp")
    }, {
        offset: "90%"
    });

    $('.wp5').waypoint(function () {
        $('.wp5').addClass("animated fadeInLeft")
    }, {
        offset: "90%"
    });

    $('.wp6').waypoint(function () {
        $('.wp6').addClass("animated fadeInUp")
    }, {
        offset: "90%"
    });

    $('.wp7').waypoint(function () {
        $('.wp7').addClass("animated fadeInRight")
    }, {
        offset: "90%"
    });

    $('.wp8').waypoint(function () {
        $('.wp8').addClass("animated fadeInUp")
    }, {
        offset: "90%"
    });

    $('.wp9').waypoint(function () {
        $('.wp9').addClass("animated fadeInUp")
    }, {
        offset: "90%"
    });


    $("#aboutbasbnr1, #aboutbasbnr2").slick({
        autoplay: true,
        infinite: true,
        fade: true,
        arrows: false,
        cssEase: 'linear',
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1
    });


    $(".swiper-wrapper").slick({
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 500,
        infinite: true,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 641,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });


    var filtered = false;
    var cartegory;
    var filter;

    $(".menubox div article a").on("click", function (e) {
        var sortmenu = $(this).attr('id');
        // sortmenu =="burger" ? filter = ":lt(10)" : sortmenu =="drinks" ? filter=":gt(9)" : sortmenu=="sides" ?  filter = ":gt(13)" : ":gt(0)" ;
        console.log(sortmenu);
        sortmenu == "burger" ? filter = $(".swiper-wrapper li").filter(".burger") : sortmenu == "drinks" ? filter = $(".swiper-wrapper li").filter(".drinks") : sortmenu == "sides" ? filter = $(".swiper-wrapper li").filter(".sides") : gt(0);

        if (filtered == false && cartegory !== sortmenu) {
            // $('.swiper-wrapper').slick('slickUnfilter');
            $('.swiper-wrapper').slick('slickFilter', filter);
            filtered = true;
            cartegory = sortmenu;

        } else if (filtered == true && cartegory == sortmenu) {
            $('.swiper-wrapper').slick('slickUnfilter');
            filtered = false;
            cartegory = sortmenu;

        } else if (filtered == true && cartegory !== sortmenu) {
            $('.swiper-wrapper').slick('slickUnfilter');
            sortmenu == "burger" ? filter = $(".swiper-wrapper li").filter(".burger") : sortmenu == "drinks" ? filter = $(".swiper-wrapper li").filter(".drinks") : sortmenu == "sides" ? filter = $(".swiper-wrapper li").filter(".sides") : gt(0);
            $('.swiper-wrapper').slick('slickFilter', filter);
            filtered = true;
            cartegory = sortmenu;

        } else {
            $('.swiper-wrapper').slick('slickFilter', filter);
            filtered = true;
            cartegory = sortmenu;
        };
        console.log(filtered)
        console.log(filter)
        console.log(cartegory)
        e.preventDefault()
    })






    $(".instaslick").slick({
        dots: false,
        // variableWidth: true,
        speed: 500,
        autoplaySpeed: 5000,
        arrows: true,
        infinite: true,
        autoplay: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1919,
                settings: {
                    autoplay: false,
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1600,
                settings: {
                    autoplay: false,
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1440,
                settings: {
                    autoplay: false,
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },

            {
                breakpoint: 1280,
                settings: {
                    centerMode: false,
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },

            {
                breakpoint: 920,
                settings: {
                    centerMode: true,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $(".locationslick").slick({
        autoplay: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        autoplaySpeed: 5000,
        speed: 500,
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },

            {
                breakpoint: 920,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]


    })

    var $locationcts;

    $(".locationslick li a").on("click", function (e) {

        $(".storepic img").attr("src", $(this).find("img").attr("src").replace("tmb.jpg", ".jpg"))
        $(".storepic img").attr("alt", $(this).find("img").attr("alt"))

        $locationcts = $(this).find("div.locationinfo").children().clone();
        $(".locationlft").html($locationcts);

        e.preventDefault();

    });




    $(".locationbtn li a").on("click", function (e) {


        if ($(this).parent().index() == 0) {

            $('.locationslick').slick('slickUnfilter');
            $(".locationbtn li").removeClass().addClass("lobtnoff");
            $(this).parent("li").removeClass().addClass("lobtnon");


        } else if ($(this).parent().index() == 1) {

            $('.locationslick').slick('slickUnfilter');
            $(".locationslick").slick("slickFilter", $(".locationslick li").filter(".gangnam"));
            $(".locationbtn li").removeClass().addClass("lobtnoff");
            $(this).parent("li").removeClass().addClass("lobtnon");


        } else if ($(this).parent().index() == 2) {
            $('.locationslick').slick('slickUnfilter');
            $(".locationslick").slick("slickFilter", $(".locationslick li").filter(".gangbuk"));
            $(".locationbtn li").removeClass().addClass("lobtnoff");
            $(this).parent("li").removeClass().addClass("lobtnon");


        } else {
            $('.locationslick').slick('slickUnfilter');
            $(".locationslick").slick("slickFilter", $(".locationslick li").filter(".gyeonggi"));
            $(".locationbtn li").removeClass().addClass("lobtnoff");
            $(this).parent("li").removeClass().addClass("lobtnon");

        }

        e.preventDefault();

    })


});
$(document).ready(function () {

    //메뉴nav

    $(".hamburger, .floathambtn").on("click", function () {
        $("nav").animate({ marginLeft: "100%" }, 300)
    });
    $(".cross").on("click", function () {
        $("nav").animate({ marginLeft: "-100%" }, 300);
    });


    $(".mainmenu li a, .floatbtn div:nth-child(2) a").click(function () {
        var hash = $(this).attr("href");
        thishash = $(hash).offset().top - 50;
        $.scrollTo(thishash || 0, 500);

    });



    //heart 버튼
    $("button.heart").on("click", function (e) {
        var $heart = $(this).children("img").attr("src")

        if ($heart == "image/heartmty.png") {

            $(this).children("img").attr("src", $(this).children("img").attr("src").replace("heartmty.png", "heart.png"));
        } else {
            $(this).children("img").attr("src", $(this).children("img").attr("src").replace("heart.png", "heartmty.png"));
        }
        e.preventDefault();
    })


    $("button.heart2").on("click", function (e) {
        var $heart2 = $(this).children("img").attr("src")

        if ($heart2 == "image/heartmty2.png") {

            $(this).children("img").attr("src", $(this).children("img").attr("src").replace("heartmty2.png", "heart.png"));
        } else {
            $(this).children("img").attr("src", $(this).children("img").attr("src").replace("heart.png", "heartmty2.png"));
        }
        e.preventDefault();
    })

    //상단 고정 menu
    $("#header .mainmenudiv").each(function () {
        var $window = $(window),
            $header = $(this),
            $main = $("#header"),
            mainOffsetTop = $main.offset().top;

        $window.on('scroll', function () {
            if ($window.scrollTop() > mainOffsetTop) {
                $header.addClass('sticker');
                $(".floatbtn").css("bottom", "2rem");
            } else {
                $header.removeClass('sticker');
                $(".floatbtn").css("bottom", "-3rem");
            };
        });
    });




    var heartcount = 0;

    $(".heart, .heart2").on("click", function () {

        var $hearton = $(this).children("img").attr("src");

        console.log($hearton == "image/heart.png");

        if ($hearton == "image/heart.png") {
            $(".floatmymenu").children("img").attr("src", $(".floatmymenu").children("img").attr("src").replace("image/mypage.png", "image/mypagehrt.png"));
            $(".mypagebtn").find("img").attr("src", $(".mypagebtn").find("img").attr("src").replace("image/mypage.png", "image/mypagehrt.png"));

            heartcount++;


        } else {

            heartcount--;
            if (heartcount == 0) {
                $(".floatmymenu").children("img").attr("src", $(".floatmymenu").children("img").attr("src").replace("image/mypagehrt.png", "image/mypage.png"));
                $(".mypagebtn").find("img").attr("src", $(".mypagebtn").find("img").attr("src").replace("image/mypagehrt.png", "image/mypage.png"));
            }

        };

        console.log(heartcount);


    });

    $("div#menu .mainmenu li").on("click", function () {

        $("#menu .cross").trigger("click");

    });


})
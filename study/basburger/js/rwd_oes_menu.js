$(document).ready(function () {



    //mainmenu 상단고정

    $("#mainmenudiv, #mainmenu").each(function () {
        var $window = $(window),
            $header = $(this),
            $menu = $("#menulistdiv"),
            menuOffsetTop = $menu.offset().top - 110;

        $window.on('scroll', function () {
            if ($window.scrollTop() > menuOffsetTop) {
                $header.addClass('sticky');
            } else {
                $header.removeClass('sticky');
            }
        })
    });


    //scrollTo 플러그인

    $(".menubox div article a").click(function () {
        var hash = $(this).attr("href");
        thishash = $(hash).offset().top - 110;
        $.scrollTo(thishash || 0, 1000);

    });


    $(".menulist ul li a").on("click", function (e) {
        e.preventDefault()

    })

});
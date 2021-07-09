$("#toggle").on("click", function() {
    $("#menu").toggleClass("fadein");
    if($("#menu").hasClass("fadein")) {
        $("#menu").removeClass("fadeout");
    } else {
        $("#menu").addClass("fadeout");
    }
});

/*작은 화면에서 햄버거 메뉴 닫아놓고 화면 키웠을 때 목록 사라짐 방지*/
$(window).resize(function() {
    var width = $(window).width();
    if(width > 1260) {
        if($("#menu").hasClass("fadeout")) {
            $("#menu").removeClass("fadeout");
            $("#menu").addClass("fadein");
        }
    }
});
//figure 선택시
$("figure").on("click", function() {
    //info_box 위치 초기화 (인덱스 번호에 포함되지 않게)
    $("#wrap").insertAfter("figure:last-child");
    var indexNum = $(this).index();
    var result_width = $("#result").width();
    var figure_width = $("figure").outerWidth()+50;
    var numPerRow = Math.floor(result_width/figure_width);

    console.log(result_width, figure_width, numPerRow, indexNum);
    if(numPerRow==4) {
        if(indexNum <= 3) {
            $("#wrap").insertAfter("figure:nth-child(4)");
        } else {
            $("#wrap").insertAfter("figure:last-child");
        }
    }
    if(numPerRow==3) {
        if(indexNum <=2) {
            $("#wrap").insertAfter("figure:nth-child(3)");
        }
        else if(2 < indexNum && indexNum <=5) {
            $("#wrap").insertAfter("figure:nth-child(6)");
        }
        else {
            $("#wrap").insertAfter("figure:last-child");
        }
    }
    if(numPerRow==2) {
        if(indexNum <=1) {
            $("#wrap").insertAfter("figure:nth-child(2)");
        }
        else if(1 < indexNum && indexNum <= 3) {
            $("#wrap").insertAfter("figure:nth-child(4)");
        }
        else if(3 < indexNum && indexNum <= 5) {
            $("#wrap").insertAfter("figure:nth-child(6)");
        }
        else {
            $("#wrap").insertAfter("figure:last-child");
        }
    }
    if(numPerRow==1) {
        $("#wrap").insertAfter($(this));
    }

    //info_box 출력 (다른 figure 눌러도 계속 출력중)
    if($("figure img").hasClass("choose_poster")) {
        $("#info_box").addClass("slide");
    } else {
        $("#info_box").toggleClass("slide");
    }

    //figure 클릭시 css 변경
    $(this).children('img').toggleClass("choose_poster");
    $(this).children('p').toggleClass("choose_title");

    //다른 figure 클릭시 css 사라짐
    if($("figure img").not($(this).children('img')).hasClass("choose_poster")) {
        $("figure img").not($(this).children('img')).removeClass("choose_poster");
        $("figure p").not($(this).children('p')).removeClass("choose_title");
    }

    //아무도 choose_poster를 안가졌을 때 info_box 사라짐
    if($("figure img").hasClass("choose_poster")) {
        $("#info_box").addClass("slide");
    } else {
        $("#info_box").removeClass("slide");
    }
});

//버튼 선택시 css 변경
$("button").on("click", function() {
    $(this).addClass("checked");
    if($("button").not($(this)).hasClass("checked")) {
        $("button").not($(this)).removeClass("checked");
    }
});

//info_box 위치 선정

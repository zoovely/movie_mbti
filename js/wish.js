var w_data=[];
function insert_figure() {
    figure = "<figure><img alt='포스터' src='";
    figure += w_data[i].poster;
    figure += "'><p>";
    figure += w_data[i].name;
    figure += "</p></figure>";
    $("#result").append(figure);
};

//영화 목록 받아오기
$(document).ready(function () {
    w_data = Object.values(JSON.parse(localStorage.getItem("m_data")));
    console.log(w_data);
    if(w_data.length>0) {
        for(i in w_data) {
            if(w_data[i].wish == true) {
                $("#result>p").remove();
                insert_figure();
            }
        }
    }
});

//figure 선택시
$(document).on("click", "figure", function() {
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

    //info_box 내용 변경
    for(i in w_data) {
        if(w_data[i].name==$(this).children('p').text()) {
            $("#m_title").text(w_data[i].name);
            $("#m_info").text(w_data[i].info);
            $("#m_plot").text(w_data[i].story);
        }
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

//사이즈 조절 시 infobox 위치 조정
$(window).resize(function() {
    $("#wrap").insertAfter("figure:last-child");
    var indexNum = $("img.choose_poster").parent().index();
    var result_width = $("#result").width();
    var figure_width = $("figure").outerWidth()+50;
    var numPerRow = Math.floor(result_width/figure_width);

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
        $("#wrap").insertAfter($("img.choose_poster").parent());
    }
});
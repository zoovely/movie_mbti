var w_data=[];

//중복 없이 난수 네개 뽑기
var random_num = [];
for(i=0; i<4; i++) {
    var a = Math.floor(Math.random()*16);
    if(random_num.indexOf(a)===-1) {
        random_num.push(a);
    }
    else {
        i--;
    }
}

//movie 페이지에서 영화 목록 받아오기
$(document).ready(function () {
    w_data = Object.values(JSON.parse(localStorage.getItem("m_data")));
    console.log(w_data);
    for(var val of random_num) {
        var figure = "<figure><img alt='포스터' src='";
        figure += w_data[val].poster;
        figure += "'><p>";
        figure += w_data[val].name;
        figure += "</p></figure>";
        $("#recommend").append(figure);
    }
});

//figure 선택시
$(document).on("click", "figure", function() {
    //info_box 위치 초기화 (인덱스 번호에 포함되지 않게)
    $("#wrap2").insertAfter("figure:last-child");
    var indexNum = $(this).index();
    var recommend_width = $("#recommend").width();
    var figure_width = $("figure").outerWidth()+50;
    var numPerRow = Math.floor(recommend_width/figure_width);

    console.log(recommend_width, figure_width, numPerRow, indexNum);
    if(numPerRow==4) {
        if(indexNum <= 3) {
            $("#wrap2").insertAfter("figure:nth-child(4)");
        } else {
            $("#wrap2").insertAfter("figure:last-child");
        }
    }
    if(numPerRow==3) {
        if(indexNum <=2) {
            $("#wrap2").insertAfter("figure:nth-child(3)");
        }
        else if(2 < indexNum && indexNum <=5) {
            $("#wrap2").insertAfter("figure:nth-child(6)");
        }
        else {
            $("#wrap2").insertAfter("figure:last-child");
        }
    }
    if(numPerRow==2) {
        if(indexNum <=1) {
            $("#wrap2").insertAfter("figure:nth-child(2)");
        }
        else if(1 < indexNum && indexNum <= 3) {
            $("#wrap2").insertAfter("figure:nth-child(4)");
        }
        else if(3 < indexNum && indexNum <= 5) {
            $("#wrap2").insertAfter("figure:nth-child(6)");
        }
        else {
            $("#wrap2").insertAfter("figure:last-child");
        }
    }
    if(numPerRow==1) {
        $("#wrap2").insertAfter($(this));
    }

    //info_box 내용 변경
    for(i in w_data) {
        if(w_data[i].name==$(this).children('p').text()) {
            $("#m_title").text(w_data[i].name);
            $("#m_mbti").text(w_data[i].mbti);
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
    $("#wrap2").insertAfter("figure:last-child");
    var indexNum = $("img.choose_poster").parent().index();
    var recommend_width = $("#recommend").width();
    var figure_width = $("figure").outerWidth()+50;
    var numPerRow = Math.floor(recommend_width/figure_width);

    if(numPerRow==4) {
        if(indexNum <= 3) {
            $("#wrap2").insertAfter("figure:nth-child(4)");
        } else {
            $("#wrap2").insertAfter("figure:last-child");
        }
    }
    if(numPerRow==3) {
        if(indexNum <=2) {
            $("#wrap2").insertAfter("figure:nth-child(3)");
        }
        else if(2 < indexNum && indexNum <=5) {
            $("#wrap2").insertAfter("figure:nth-child(6)");
        }
        else {
            $("#wrap2").insertAfter("figure:last-child");
        }
    }
    if(numPerRow==2) {
        if(indexNum <=1) {
            $("#wrap2").insertAfter("figure:nth-child(2)");
        }
        else if(1 < indexNum && indexNum <= 3) {
            $("#wrap2").insertAfter("figure:nth-child(4)");
        }
        else if(3 < indexNum && indexNum <= 5) {
            $("#wrap2").insertAfter("figure:nth-child(6)");
        }
        else {
            $("#wrap2").insertAfter("figure:last-child");
        }
    }
    if(numPerRow==1) {
        $("#wrap2").insertAfter($("img.choose_poster").parent());
    }
});

//검색 기능
$("#btn").on("click", function() {
    $("#title").css("display","none");
    $("figure").remove();
    var s_title = $("#search_bar input").val();
    var arr = [];
    for(i in w_data) {
        if(w_data[i].name.indexOf(s_title) != -1) {
            $("#info_box").removeClass("slide");
            $("#no_result").css("display","none");
            $("#recommend").css("display","flex");
            var figure = "<figure><img alt='포스터' src='";
            figure += w_data[i].poster;
            figure += "'><p>";
            figure += w_data[i].name;
            figure += "</p></figure>";
            $("#recommend").append(figure);
            arr.push(w_data[i].name);
        }
        if(arr.length == 0) {
            $("#recommend").css("display","none");
            $("#no_result").css("display","block");
            $("#no_result").text("해당 제목의 영화가 없습니다.");
        }
    }
});
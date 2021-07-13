//영화 불러오기
var m_data;
$.ajax({
    url:"../json/movie.json",
    dataType:"json",
    success: function(data) {
        m_data = data;
        for(i in m_data) { //초기 mbti = enfp
            if(m_data[i].mbti == $("#mbti_select option:checked").text()) {
                var figure = "<figure><img src='";
                figure += m_data[i].poster;
                figure += "'><p>";
                figure += m_data[i].name;
                figure += "</p></figure>";
                $("#result").append(figure);
            }
        }
    }
});

//mbti 선택시
$("#mbti_select").on("change", function() {
    $("figure").remove();
    for(i in m_data) {
        if(m_data[i].mbti == $("#mbti_select option:checked").text()) {
            var figure = "<figure><img src='";
            figure += m_data[i].poster;
            figure += "'><p>";
            figure += m_data[i].name;
            figure += "</p></figure>";
            $("#result").append(figure);
        }
    }

    $("button").removeClass("checked");
});

//figure 선택시 (ajax로 불러온 요소에 적용하기 위해 document사용)
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
    for(i in m_data) {
        if(m_data[i].name==$(this).children('p').text()) {
            $("#m_title").text(m_data[i].name);
            $("#m_info").text(m_data[i].info);
            $("#m_plot").text(m_data[i].story);
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

//버튼 선택시 css 변경
$("button").on("click", function() {
    //다른 장르 눌렀을 때 보던 인포박스 사라지게끔
    $("#info_box").removeClass("slide");

    $(this).toggleClass("checked");
    if($("button").not($(this)).hasClass("checked")) {
        $("button").not($(this)).removeClass("checked");
    }

    $("figure").remove();
    for(i in m_data) {
        if((m_data[i].mbti == $("#mbti_select option:checked").text()) && (m_data[i].genre == $(this).attr("id"))) {
            var figure = "<figure><img src='";
            figure += m_data[i].poster;
            figure += "'><p>";
            figure += m_data[i].name;
            figure += "</p></figure>";
            $("#result").append(figure);
        }
    }

    if(!($(this).hasClass("checked"))) {
        $("figure").remove();
        for(i in m_data) {
            if(m_data[i].mbti == $("#mbti_select option:checked").text()) {
                var figure = "<figure><img src='";
                figure += m_data[i].poster;
                figure += "'><p>";
                figure += m_data[i].name;
                figure += "</p></figure>";
                $("#result").append(figure);
            }
        }
    }
});


//전역 변수, 함수
var m_data;
function insert_figure() {
    figure = "<figure><img alt='포스터' src='";
    figure += m_data[i].poster;
    figure += "'><p>";
    figure += m_data[i].name;
    figure += "</p></figure>";
    $("#result").append(figure);
};

//json 파일 불러오기
$.ajax({
    url:"../json/movie.json",
    dataType:"json",
    success: function(data) {
        m_data = data;
        for(i in m_data) {
            //처음 페이지 들어왔을 때 크기에 맞춰 영화 선택
            if($(window).outerWidth() < 861) {
                if((m_data[i].mbti == $("#mbti_select option:checked").text()) && (m_data[i].genre == 'drama')) {
                    insert_figure();
                }
            } else {
                if(m_data[i].mbti == $("#mbti_select option:checked").text()) {
                    insert_figure();
                }
            }
        }
    }
});

//mbti 선택시
$("#mbti_select").on("change", function() {
    $("figure").remove();
    for(i in m_data) {
        //작은 화면에서 mbti를 바꾸면 select 값은 드라마로 초기화
        if($(window).outerWidth() < 861) {
            if((m_data[i].mbti == $("#mbti_select option:checked").text()) && (m_data[i].genre == 'drama')) {
                insert_figure();
            }
        } else {
            if(m_data[i].mbti == $("#mbti_select option:checked").text()) {
                insert_figure();
            }
        }
    }

    $("#small_select .drama").prop('selected','true');
    $("#choose_genre button").removeClass("checked");
    $("#info_box").removeClass("slide slide_m");
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
        if($(window).outerWidth() > 860) {
            $("#info_box").addClass("slide");
        } else {
            $("#info_box").addClass("slide_m");
        }
    } else {
        if($(window).outerWidth() > 860) {
            $("#info_box").toggleClass("slide");
        } else {
            $("#info_box").toggleClass("slide_m");
        }
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
        if($(window).outerWidth() > 860) {
            $("#info_box").addClass("slide");
        } else {
            $("#info_box").addClass("slide_m");
        }
    } else {
        if($(window).outerWidth() > 860) {
            $("#info_box").removeClass("slide");
        } else {
            $("#info_box").removeClass("slide_m");
        }
    }
});

//장르 선택시(버튼)
$("#choose_genre button").on("click", function() {
    //다른 장르 눌렀을 때 보던 인포박스 사라지게끔
    $("#info_box").removeClass("slide slide_m");

    //다른 버튼 누르면 css 제거
    $(this).toggleClass("checked");
    if($("#choose_genre button").not($(this)).hasClass("checked")) {
        $("#choose_genre button").not($(this)).removeClass("checked");
    }

    //선택한 mbti + 장르에 맞는 영화 출력
    $("figure").remove();
    for(i in m_data) {
        //checked 클래스를 가지고 있으므로 비교시 더해줘야함
        if((m_data[i].mbti == $("#mbti_select option:checked").text()) && (m_data[i].genre+' checked' == $(this).attr('class'))) {
            insert_figure();
        }
    }

    //아무 버튼도 안눌려 있을 때 선택된 mbti에 해당하는 모든 영화 출력
    if(!($(this).hasClass("checked"))) {
        $("figure").remove();
        for(i in m_data) {
            if(m_data[i].mbti == $("#mbti_select option:checked").text()) {
                insert_figure();
            }
        }
    }
});

// 장르 선택시(셀렉트)
$("#small_select").on("change", function() {
    $("#info_box").removeClass("slide slide_m");
    $("figure").remove();
    for(i in m_data) {
        if((m_data[i].mbti == $("#mbti_select option:checked").text()) && (m_data[i].genre == $("#small_select option:checked").attr('class'))) {
            insert_figure();
        }
    }
});

//사이즈 조절 시
$(window).resize(function() {
    //사이즈 조절 시 infobox 위치 조정
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

    //사이즈 조절 시 영화 목록 조정
    //info box 떠있는 채로 860보다 줄어들거나 늘어날 시 info box 숨기기 위하여 slide, slide_m으로 구분하여 적용 
    if($(window).outerWidth() <= 860 && !$("#info_box").hasClass("slide_m")) {
        $("#info_box.slide").removeClass("slide");
        $("#choose_genre button").removeClass("checked");
        $("figure").remove();
        for(i in m_data) {
            if(m_data[i].mbti == $("#mbti_select option:checked").text() && m_data[i].genre == $("#small_select option:checked").attr('class')) {
                insert_figure();
            }
        }
    }
    if($(window).outerWidth() > 860 && !$("#choose_genre button").hasClass("checked") && !$("#info_box").hasClass("slide")) {
        $("#info_box.slide_m").removeClass("slide_m");
        $("figure").remove();
        for(i in m_data) {
            if(m_data[i].mbti == $("#mbti_select option:checked").text()) {
                insert_figure();
            }
        }
    }

});

//wish 등록
$("#wish").on("click", function() {
    for(i in m_data) {
        if($(this).prev().text() == m_data[i].name) {
            m_data[i].wish = true;
            console.log(m_data[i]);
        }
    }
});

//다음페이지로 위시 추가한 영화목록 이동
$(".page").on("click", function() {
    localStorage.setItem("m_data", JSON.stringify(m_data));
})
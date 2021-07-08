$("document").ready(function() {
    var videos = ['5KsVamgPkOE', '8Re2g09BMKM','TZNWhwpBHSo', 'aPPxJluNW4o', '8toaz_9BHrY']
    var options = {
        videoId : videos[Math.floor(Math.random()*5)],
        start: 63,
        mute: true,
        repeat: true
    };
    $("#bg").tubular(options);
});

$("#toggle").on("click", function() {
    $("#menu").toggleClass("visible");
    $("content").toggleClass("hidden");
    $("aside").toggleClass("hidden");
});

$(window).resize(function() {
    var windowSize = $(window).width();
    if(windowSize > 1260) {
        $("content").removeClass("hidden");
        $("aside").removeClass("hidden");
    }
    else if((windowSize <= 1260) && ($("#menu").hasClass("visible"))) {
        $("content").addClass("hidden");
        $("aside").addClass("hidden");
    }
});


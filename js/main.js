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
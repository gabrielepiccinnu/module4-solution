(function(window) {
    var byeSpeaker = new Object();
    var speakWord = "Good bye";
    byeSpeaker.speak = function speak(name) {
        console.log(speakWord + " " + name);
    };
    window.byeSpeaker = byeSpeaker;
})(window);
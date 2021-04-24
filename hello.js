(function(window) {
    var helloSpeaker = new Object();
    var speakWord = "Ciao";
    helloSpeaker.speak = function(name) {
        console.log(speakWord + " " + name);
    };
    window.helloSpeaker = helloSpeaker;
})(window);
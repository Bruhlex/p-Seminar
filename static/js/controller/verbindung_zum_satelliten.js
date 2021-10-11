const TYPE = "verbindung_zum_satelliten"

var MUTEX = false

function playAudio() {
    if(MUTEX) return

    MUTEX = true
    const AUDIO = new Audio('../../assets/sounds/GesprachGPOHacker_2.mp3');
    AUDIO.play();
}
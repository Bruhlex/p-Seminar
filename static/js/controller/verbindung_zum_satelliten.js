const TYPE = "verbindung_zum_satelliten"
const AudioButton = document.querySelector("#audio_button")

var MUTEX = false

function playAudio() {
    if(MUTEX) return

    MUTEX = true
    const AUDIO = new Audio('../../assets/sounds/GesprachGPOHacker_2.mp3');
    AUDIO.play();
    toggleElement(backscreen)
    toggleElement(AudioButton)
}

window.onload = function () {
    toggleElement(backscreen)
    toggleElement()
}
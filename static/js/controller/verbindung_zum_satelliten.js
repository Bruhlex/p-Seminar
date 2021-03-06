const TYPE = "verbindung_zum_satelliten"
const AudioButton = document.querySelector("#audio_button")
const PlayAudio = document.querySelector("#play_audio")


var MUTEX = false

function playAudio() {
    if(MUTEX) return

    MUTEX = true
    const AUDIO = new Audio('../../assets/sounds/GesprachGPOHacker_2.mp3');
    // onClick of first interaction on page before I need the sounds
    // (This is a tiny MP3 file that is silent and extremely short - retrieved from https://bigsoundbank.com and then modified)

    // later on when you actually want to play a sound at any point without user interaction
    // const AUDIO = new Audio('../../assets/sounds/GesprachGPOHacker_2.mp3');
    AUDIO.play();
    toggleElement(backscreen)
    toggleElement(AudioButton)
}



window.onload = function () {
    toggleElement(backscreen)
    toggleElement()
}

function toggleElements() {
    toggleElement(backscreen)
    toggleElement(AudioButton)
}

//PlayAudio.addEventListener("click", playAudio)
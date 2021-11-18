const TYPE = "verbindung_zum_satelliten"
const AudioButton = document.querySelector("#audio_button")
const PlayAudio = document.querySelector("#play_audio")
const soundEffect = new Audio();
soundEffect.src = "data:audio/mpeg;base64,SUQzBAAAAAABEVRYWFgAAAAtAAADY29tbWVudABCaWdTb3VuZEJhbmsuY29tIC8gTGFTb25vdGhlcXVlLm9yZwBURU5DAAAAHQAAA1N3aXRjaCBQbHVzIMKpIE5DSCBTb2Z0d2FyZQBUSVQyAAAABgAAAzIyMzUAVFNTRQAAAA8AAANMYXZmNTcuODMuMTAwAAAAAAAAAAAAAAD/80DEAAAAA0gAAAAATEFNRTMuMTAwVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/zQsRbAAADSAAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/zQMSkAAADSAAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV";
soundEffect.src = '../../assets/sounds/GesprachGPOHacker_2.mp3';

var MUTEX = false

function playAudio() {
    if(MUTEX) return

    MUTEX = true
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

PlayAudio.addEventListener("click", function(){
    if(MUTEX) return

    MUTEX = true
    // onClick of first interaction on page before I need the sounds
    // (This is a tiny MP3 file that is silent and extremely short - retrieved from https://bigsoundbank.com and then modified)

    // later on when you actually want to play a sound at any point without user interaction
    // const AUDIO = new Audio('../../assets/sounds/GesprachGPOHacker_2.mp3');
    AUDIO.play();
    toggleElement(backscreen)
    toggleElement(AudioButton)
} )
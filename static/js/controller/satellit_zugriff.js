const POP_UP_BIG = document.querySelector(".pop_up-big")
const REMAINING_TIME = document.querySelector("#dashboard_timer")
const KILLSWITCH = document.querySelector("#dashboard_killswitch")
const TOINFECT = document.querySelector("#dashboard_toinfect")
const TYPE       = "satellit_zugriff"

let interval;
let state = localStorage.getItem("current")


localStorage.setItem("current", "c2F0ZWxsaXRfenVncmlmZg==")

function showAssignment() {
    toggleElement(POP_UP_BIG)
    toggleElement(backscreen)
}

function closeContent() {
    toggleElement(POP_UP_BIG)
    toggleElement(backscreen)
}

function startTimer(minutesLeft, secondsLeft) {
    REMAINING_TIME.innerText = `${minutesLeft}:${secondsLeft > 9 ? secondsLeft : "0" + secondsLeft}`

    interval = setInterval( function() {
        let infectedLeft = +TOINFECT.innerText

        if(secondsLeft === 0) {
            secondsLeft = 59
            minutesLeft--
        } else {
            secondsLeft--
        }

        if(0 >= secondsLeft && 0 >= minutesLeft) {
            localStorage.setItem("timer", (+new Date).toString())
            alert("Time is up - All Computers are infected")
        }

        REMAINING_TIME.innerText = `${minutesLeft}:${secondsLeft}`

        TOINFECT.innerText = Math.floor(infectedLeft * 0.99999999)
    } , 999)
}

function toggleKillSwitch() {
    KILLSWITCH.innerText = "Enabled"
    clearInterval(interval)
}

window.onload = function() {
    let data = localStorage.getItem("timer")
    if(state === "lmaofinished") return

    if(data) {
        data = parseInt(data)
    } else {
        data = (+new Date)
        localStorage.setItem("timer", data.toString())
    }

    let expiredTime = +new Date - data,
    allSecondsLeft = 1200 - (expiredTime/1000),
    minutesLeft = Math.floor(allSecondsLeft / 60),
    secondsLeft = Math.floor(allSecondsLeft % 60)
    
    startTimer(minutesLeft, secondsLeft)
}
const TYPE = "second_firewall"
const ANIMATION_BALLS = document.querySelector(".pos_round_bt-2")

const INPUTS = {
    1: document.querySelector("#I_1"),
    2: document.querySelector("#I_2"),
    3: document.querySelector("#I_3"),
    4: document.querySelector("#I_4"),
    5: document.querySelector("#I_5"),
}

const DATA = JSON.parse(localStorage.getItem("verify_firewalls"))
const BTNREDIRECT = document.querySelector("#btn-redirect")

let mutex = false

function getInput() {
    return Object.values(INPUTS).reduce((previousValue, currentValue) => previousValue + currentValue.value, "")
}

function getRandom(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function startAnimation() {
    if (mutex) return
    mutex = true
    let hits = [
        3, 
        7, 
        2, 
        3, 
        5 
    ],
    delay = getRandom(1000, 2000)
    for(let i = 0; 20 > i; i++) {
        ANIMATION_BALLS.style.animationDuration = `${delay/1000}s`
        let num = getRandom(4, 0)
        while(hits[num] === 0) {
            num = getRandom(4, 0)
        }
        console.log(num, hits)

        hits[num]--

        ANIMATION_BALLS.classList.add(`line_${num+1}`)
        await sleep(delay)
        ANIMATION_BALLS.classList.remove(`line_${num+1}`)
        await sleep(10)
    }
    mutex = false
}

function setAuth() {
    localStorage.setItem("current", "Zmlyc3RfZmlyZXdhbGw=")
}

if(DATA[0] === true) {
    BTNREDIRECT.style.display = "none"
}

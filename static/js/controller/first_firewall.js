const CONSOLE_LOG = document.querySelector("#console_output")

const PREFIX  = "C:\\Users\\0xZr0\\Scripts> " 
const TYPE    = "first_firewall"

const MESSAGES = [
    "launcher.exe --verbose --stealth --timeout=24 --passphrase=",
    "If the output ends with Successful, the attack went through",
    "Initialising...",
    "Ready to attack",
    "Bypassing IP Packet filtering [1/10]",
    "Bypassing IP Packet filtering [2/10]",
    "Bypassing IP Packet filtering [3/10]",
    "Bypassing IP Packet filtering [4/10]",
    "Bypassing IP Packet filtering [5/10]",
    "Bypassing IP Packet filtering [6/10]",
    "Bypassing IP Packet filtering [7/10]",
    "Bypassing IP Packet filtering [8/10]",
    "Bypassing IP Packet filtering [9/10]",
    "Bypassing IP Packet filtering [10/10]",
    "Applying passphrase",
]

const DATA = JSON.parse(localStorage.getItem("verify_firewalls"))
const BTNREDIRECT = document.querySelector("#btn-redirect")

const RESULT_MESSAGES = [
    "Failed (invalid passphrase)",
    "Successful",
]

const DELAYS = [
    1111,
    100,
    2000,
    1000,
    100,
    100,
    100,
    100,
    100,
    100,
    100,
    100,
    100,
    100,
    500,
    500,
    500,
    1000,
    1000,
]

const INPUTS = {
    B1: document.querySelector("#B1"),
    C3: document.querySelector("#C3"),
    A2: document.querySelector("#A2"),
    C2: document.querySelector("#C2"),
    A1: document.querySelector("#A1"),
    B3: document.querySelector("#B3"),
    A3: document.querySelector("#A3"),
    C1: document.querySelector("#C1"),
    B2: document.querySelector("#B2"),
}

function clearTerminal() {
    CONSOLE_LOG.innerText = PREFIX
}

function getInput() {
    return Object.values(INPUTS).reduce((previousValue, currentValue) => previousValue + currentValue.value, "")
}

async function showAnimation(input, valid) {
    clearTerminal()
    for(let i = 0; MESSAGES.length > i; i++) {
        let message = MESSAGES[i]
        if(i === 0) message += input

        CONSOLE_LOG.innerText += message + "\n"
        await sleep(DELAYS[i])
    }

    let message = RESULT_MESSAGES[0]
    if(valid) message = RESULT_MESSAGES[1]
    CONSOLE_LOG.innerText += message

    await sleep(200)
}

clearTerminal()



if(DATA[1] === true) {
    BTNREDIRECT.style.display = "none"
}

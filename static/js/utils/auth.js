const password_submit = document.querySelector("#submit_password")
const password_value = document.querySelector("#password")

const passwords = {
    start: "czggjrjmgy",
    first_firewall: 31051012152,
    second_firewall: "ALVHYAVHALOLALVHGMVH",
    satellit_zugriff: 1234871933,
    verbindung_zum_satelliten: "0,56*x+2,56",
}

function validatePassword() {
    let passphrase = localStorage?.getItem("current")?.replace(/\s/g, "")

    if(passphrase === "" || !passphrase || passphrase === "undefined") {
        passphrase = "c3RhcnQ="
    }
    console.log(passphrase)
    let auth_p = atob(passphrase)
    if(location.href.split("/").slice(-1)[0].includes(auth_p)) return
    document.location = `${auth_p}.html`
} 

function injectInnerHTML(element, text) {
    element.innerHTML = text
}

validatePassword()

async function verifyPassword(type) {
    let encoded_string;
    let input = password_value?.value
    let valid = false

    if(type === "first_firewall" || type === "second_firewall") {
        input = getInput()
    }
    
    if(!type) return alert("?")
    if (input.replace(/\s/g, "") == passwords[type]) valid = true
    
    if(type === "first_firewall") {
        await showAnimation(input, valid)
    }

    if (valid) {
        alert("Correct password")

        switch(localStorage.getItem("current")) {
            case "c3RhcnQ=":
                encoded_string = "dmVyYmluZHVuZ196dW1fc2F0ZWxpdGVu"
                break
            case "dmVyYmluZHVuZ196dW1fc2F0ZWxpdGVu":
                encoded_string = "Zmlyc3RfZmlyZXdhbGw="
                break
            case "Zmlyc3RfZmlyZXdhbGw=":
                encoded_string = "c2Vjb25kX2ZpcmV3YWxs"
                break
            case "c2Vjb25kX2ZpcmV3YWxs":
                encoded_string = "c2F0ZWxsaXRfc2NyZWVu"
                break
            case "c2F0ZWxsaXRfenVncmlmZg==":
                alert("The Killswitch has been enabled")
                encoded_string = "c3RhcnQ="
                break
            default:
                encoded_string = "c3RhcnQ="
                break
        }
        localStorage.setItem("current", encoded_string)
        window.location = `${atob(encoded_string)}.html`
    } else {
        alert("Wrong password")
    }

}

password_submit.addEventListener( "click", function () {
    verifyPassword(TYPE)
})


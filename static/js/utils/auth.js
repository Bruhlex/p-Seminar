const password_submit = document.querySelector("#submit_password")
const password_value = document.querySelector("#password")

const passwords = {
    start: "0,75",
    first_firewall: 31051012152,
    second_firewall: "ALVHYAVHALOLALVHGMVH",
    satellit_zugriff: 532570,
    verbindung_zum_satelliten: "0,56x+2,56",
}

function validatePassword() {
    let passphrase = localStorage?.getItem("current")?.replace(/\s/g, "")
    let firewalls = JSON.parse(localStorage.getItem("verify_firewalls"))

    if(passphrase === "" || !passphrase || passphrase === "undefined") {
        passphrase = "c3RhcnQ="
    }

    let auth_p = atob(passphrase)
    if(location.href.split("/").slice(-1)[0].includes(auth_p)) return
    if(auth_p !== "first_firewall" && auth_p !== "second_firewall") {
        document.location = `${auth_p}.html`
    } 

    // if(auth_p === "first_firewall" || auth_p === "second_firewall") {
    //     let data = JSON.parse(localStorage.getItem("verify_firewalls"))
    //     if(data[0] === true && data[1] === true) {
    //         encoded_string = "c2F0ZWxsaXRfc2NyZWVu"
    //         document.location = `satellit_screen.html`
    //     }
    // } 
} 

function injectInnerHTML(element, text) {
    element.innerHTML = text
}

validatePassword()

async function verifyPassword(type) {
    let encoded_string;
    let input = password_value?.value
    let valid = false

    if(!localStorage?.getItem("verify_firewalls")) {
        localStorage.setItem("verify_firewalls", JSON.stringify([ false, false ]))
    } 

    if(type === "first_firewall" || type === "second_firewall") {
        input = getInput()
    }
    
    if(!type) return alert("?")
    if (input.replace(/\s/g, "").replace("*","") == passwords[type] || input.replace(/7/g, "") == "1") valid = true
    
    if(type === "first_firewall") {
        await showAnimation(input, valid)
    }

    if (valid) {
        alert("Correct password")
        let data = JSON.parse(localStorage.getItem("verify_firewalls"))
        if(type === "first_firewall" || type === "second_firewall" ) {
            
            data[type === "first_firewall" ? 0 : 1] = true

            localStorage.setItem("verify_firewalls", JSON.stringify(data))
        } 

        switch(localStorage.getItem("current")) {
            case "c3RhcnQ=":
                encoded_string = "dmVyYmluZHVuZ196dW1fc2F0ZWxpdGVu"
                break
            case "dmVyYmluZHVuZ196dW1fc2F0ZWxpdGVu":
                encoded_string = "Zmlyc3RfZmlyZXdhbGw="
                break
            case "Zmlyc3RfZmlyZXdhbGw=":
                if(data[0] === true && data[1] === true) {
                    encoded_string = "c2F0ZWxsaXRfc2NyZWVu"
                } else {
                    encoded_string = "c2Vjb25kX2ZpcmV3YWxs"
                }

                break
            case "c2Vjb25kX2ZpcmV3YWxs":
                if(data[0] === true && data[1] === true) {
                    encoded_string = "c2F0ZWxsaXRfc2NyZWVu"
                }

                if(data[1] === true && data[0] === false) {
                    encoded_string = "Zmlyc3RfZmlyZXdhbGw="
                }

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
        alert(atob(encoded_string))
        window.location = `${atob(encoded_string)}.html`
    } else {
        alert("Wrong password")
    }

}

password_submit.addEventListener( "click", function () {
    verifyPassword(TYPE)
})


const password_submit = document.querySelector("#submit_password")
const password_value = document.querySelector("#password")

const passwords = {
    start: 12345,
    first_firewall: 23456,
    second_firewall: 34567
}

function validatePassword() {
    let passphrase = localStorage?.getItem("current")?.replace(/\s/g, "")

    if(passphrase === "" || !passphrase || passphrase === "undefined") {
        passphrase = "c3RhcnQ="
    }

    let auth_p = atob(passphrase)
    if(location.href.split("/").slice(-1)[0].includes(auth_p)) return
    document.location = `${auth_p}.html`
} 

function injectInnerHTML(element, text) {
    element.innerHTML = text
}

validatePassword()

function verifyPassword(type) {
    let encoded_string;
    if(!type) return alert("?")

    if (password_value?.value?.replace(/\s/g, "") == passwords[type] || password_value.value === undefined) {
        alert("Correct password")

        switch(localStorage.getItem("current")) {
            case "c3RhcnQ=":
                encoded_string = "Zmlyc3RfZmlyZXdhbGw="
                break
            case "Zmlyc3RfZmlyZXdhbGw=":
                encoded_string = "c2Vjb25kX2ZpcmV3YWxs"
                break
            case "c2Vjb25kX2ZpcmV3YWxs":
                encoded_string = "ZW5kYXVmZ2FiZQ=="
                break
            case "ZW5kYXVmZ2FiZQ==":
                encoded_string = "dmVyYmluZHVuZ196dW1fc2F0ZWxpdGVu"
                break
            case "dmVyYmluZHVuZ196dW1fc2F0ZWxpdGVu":
                encoded_string = "dmVyYmluZHVuZ196dW1faGFja2Vy"
                break
            case "dmVyYmluZHVuZ196dW1faGFja2Vy":
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
    verifyPassword("start")
})


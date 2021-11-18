const auth = "start"

const POP_UP_BIG        = document.querySelector(".pop_up-big")
const ASSIGNMENT_BOX    = document.querySelector("#start_assignments")
const TYPE              = "start"

var tip_type = ""
if(localStorage.getItem("current") === null) localStorage.setItem("current", "c3RhcnQ=")
else if(localStorage.getItem("current") !== "c3RhcnQ=" && localStorage.getItem("current") !== "" ) console.log("a")
else localStorage.setItem("current", "c3RhcnQ=")

localStorage.setItem("verify_firewalls", JSON.stringify([ false, false ]))


function closeContent() {
    toggleElement(POP_UP_BIG)
    closeTips()
}

function loadContent(type) {
    let string = ""
    toggleElement(POP_UP_BIG)
    switch(type) {
        case "start_b":
            tip_type = "1"
            string = `Auch der Wert dieser Variable befindet sich nicht hier... <br> Es ist jedoch bekannt, <br> dass der Hacker gerne mit Strecken zu bestimmten Orten rätselt. <br> Suche nach einer ganzen Strecke und nimm die Quersumme der gerundeten ganzen Zahl als "b". `
            break
        case "start_c":
            tip_type = "3"
            string = `&#945;`
            break
        case "start_a":
            tip_type = "2"
            string = `Dieser Wert befindet sich nicht hier.  <br> Jedoch hat die Variable etwas mit den momentan infizierten PC's zu tun. <br> Suche nach dieser Zahl und <br> nimm die Quersumme der gerundeten ganzen Zahl für "a". <br> Es wird nach einer ganzen Strecke zu dem Ort gesucht`
            break
        default:
    }
    injectInnerHTML(ASSIGNMENT_BOX, string)
}
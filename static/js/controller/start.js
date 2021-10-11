const auth = "start"

const POP_UP_BIG        = document.querySelector(".pop_up-big")
const ASSIGNMENT_BOX    = document.querySelector("#start_assignments")
const TYPE              = "start"

var tip_type = ""

if(localStorage.getItem("current") !== "c3RhcnQ=" && localStorage.getItem("current") !== "" ) console.log("a")
else localStorage.setItem("current", "c3RhcnQ=")


function closeContent() {
    toggleElement(POP_UP_BIG)
    closeTips()
}

function loadContent(type) {
    let string = ""
    toggleElement(POP_UP_BIG)
    switch(type) {
        case "start_a":
            tip_type = "1"
            string = `Der Wert dieser Variable befindet sich nicht hier... <br> Es ist jedoch bekannt, <br> dass der Hacker gerne mit Strecken zu bestimmten Orten rätselt.`
            break
        case "start_b":
            tip_type = "2"
            string = `&#945;`
            break
        case "start_c":
            tip_type = "1"
            string = `Auch dieser Wert befindet sich nicht hier.  <br> Jedoch hat die Variable etwas mit dem Ausbreitunsspektrum vom Virus zu tun.`
            break
        default:
    }
    injectInnerHTML(ASSIGNMENT_BOX, string)
}
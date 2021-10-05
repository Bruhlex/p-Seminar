const auth = "start"

const POP_UP_BIG        = document.querySelector(".pop_up-big")
const ASSIGNMENT_BOX    = document.querySelector("#start_assignments")

if(localStorage.getItem("current") !== "c3RhcnQ=" && localStorage.getItem("current") !== "" ) console.log("a")
else localStorage.setItem("current", "c3RhcnQ=")


function closeContent() {
    toggleElement(POP_UP_BIG)
}

function loadContent(type) {
    let string = ""
    toggleElement(POP_UP_BIG)
    switch(type) {
        case "start_a":
            string = `Der Wert dieser Variable befindet sich nicht hier... <br> Es ist jedoch bekannt, <br> dass der Hacker gerne mit Strecken zu bestimmten Orten rätselt.`
            break
        case "start_b":
            string = `Der Hacker hinterlies diese Nachricht hier.<br>[Graphik]<br> Ob sie eventuell hilfreich ist?`
            break
        case "start_c":
            string = `Auch dieser Wert befindet sich nicht hier.  <br> Jedoch hat die Variable etwas mit dem Ausbreitunsspektrum vom Virus zu tun.`
            break
        default:
    }
    console.log(type)
    injectInnerHTML(ASSIGNMENT_BOX, string)
}

function showTip() {

}
const POP_UP_BIG = document.querySelector(".pop_up-big")
const TYPE       = "satellit_zugriff"

localStorage.setItem("current", "c2F0ZWxsaXRfenVncmlmZg==")

function showAssignment() {
    toggleElement(POP_UP_BIG)
    toggleElement(backscreen)
}

function closeContent() {
    toggleElement(POP_UP_BIG)
    toggleElement(backscreen)
}
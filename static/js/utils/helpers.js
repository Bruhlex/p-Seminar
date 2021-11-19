const pop_up  = document.querySelector(".pop_up")
const help_me = document.querySelectorAll(".btn-toggle_pop")
const backscreen  = document.querySelector("#backscreen")
const button_expand = document.querySelector("#more-tips")
const TIPS = {
    "1": document.querySelector("#tip_1"),
    "2": document.querySelector("#tip_2"),
    "3": document.querySelector("#tip_3")
}

// !function() {
//      function detectDevTool(allow) {
//        if(isNaN(+allow)) allow = 100;
//        var start = +new Date(); // Validation of built-in Object tamper prevention.
//        debugger;
//        var end = +new Date(); // Validates too.
//        if(isNaN(start) || isNaN(end) || end - start > allow) {
//          alert("No cheating allowed")
//        }
//      }
//      if(window.attachEvent) {
//        if (document.readyState === "complete" || document.readyState === "interactive") {
//            detectDevTool();
//          window.attachEvent('onmousemove', detectDevTool);
//        } else {
//            setTimeout(argument.callee, 100);
//        }
//      } else {
//        window.addEventListener('load', detectDevTool);
//        window.addEventListener('mousemove', detectDevTool);
//      }
//    }();

function toggleElement(element) {
    if(!element) return
    let state = element.style.display
    if(state !== "none") element.style.display = "none" 
    else element.style.display = "block"
}

help_me.forEach( function (e) {
    e.addEventListener("click", function () {
        toggleElement(backscreen)
        toggleElement(pop_up)
    })
} )

function closeTips() {
    Object.values(TIPS).forEach( function(e) {
        e.style.display = "none"
    } )
}

function showTip() {
    closeTips()
    toggleElement(TIPS[tip_type])
}

button_expand && button_expand.addEventListener("click", function() {
    let tipSection = document.querySelector(".pop_up-tips").children
    console.log("asd")
    for(let tip of tipSection) {
        if(tip.style.display === "none") {
            tip.style.display = "block"
            return
        }
    }

    alert("Out of tips")
})

const sleep = t => new Promise(s => setTimeout(s, t));
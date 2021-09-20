const pop_up  = document.querySelector(".pop_up")
const help_me = document.querySelectorAll(".btn-toggle_pop")
const backscreen  = document.querySelector("#backscreen")

// !function() {
//     function detectDevTool(allow) {
//       if(isNaN(+allow)) allow = 100;
//       var start = +new Date(); // Validation of built-in Object tamper prevention.
//       debugger;
//       var end = +new Date(); // Validates too.
//       if(isNaN(start) || isNaN(end) || end - start > allow) {
//         alert("No cheating allowed")
//       }
//     }
//     if(window.attachEvent) {
//       if (document.readyState === "complete" || document.readyState === "interactive") {
//           detectDevTool();
//         window.attachEvent('onmousemove', detectDevTool);
//       } else {
//           setTimeout(argument.callee, 100);
//       }
//     } else {
//       window.addEventListener('load', detectDevTool);
//       window.addEventListener('mousemove', detectDevTool);
//     }
//   }();

function toggleElement(element) {
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
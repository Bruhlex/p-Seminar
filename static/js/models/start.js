const auth = "start"

if(localStorage.getItem("current") !== "c3RhcnQ=" && localStorage.getItem("current") !== "" ) console.log("a")
else localStorage.setItem("current", "c3RhcnQ=")
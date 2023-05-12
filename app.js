const navbar = document.getElementById("navbar")
const grund = document.getElementById("grund")
const rechtsform = document.getElementById("rechtsform")

var myScrollFunc = function() {
    var y = window.scrollY;
    if (y >= 200) {
        navbar.className = "navbar show"
    } else {
        navbar.className = "navbar hide"
    }
}

window.addEventListener("scroll", myScrollFunc)

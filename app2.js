const rechtsform = document.getElementById("rechtsform")

window.addEventListener("scroll", myScrollFunc2)

var myScrollFunc2 = function() {
    var y = window.scrollY;
    if (y >= 150) {
        navbar.className = "rechtsform show"
    } else {
        navbar.className = "rechtsform hide"
    }
}

window.addEventListener("scroll", myScrollFunc2)

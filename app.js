const navbar = document.getElementById("navbar")

var myScrollFunc = function() {
    var y = window.scrollY;
    if (y >= 200) {
        navbar.className = "navbar show"
    } else {
        navbar.className = "navbar hide"
    }
}

window.addEventListener("scroll", myScrollFunc)

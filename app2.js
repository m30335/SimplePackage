let text = document.getElementById("text")

var myScrollFunc = function() {
    var y = window.scrollY;
    if (y >= 20) {
        text.className = "text show"
    } else {
        text.className = "text hide"
    }
}

window.addEventListener("scroll", myScrollFunc)

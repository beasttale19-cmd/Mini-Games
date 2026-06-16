let bodyStyle = document.getElementById("body")
let darkMode = true;

document.getElementById("toggleClick").onclick = function () {

    if (darkMode) {
        bodyStyle.style.backgroundImage = "url('../img/bg-forWhite.png')";
        bodyStyle.style.backgroundColor = "white";
        bodyStyle.style.color = "black";
        darkMode = false;
    }

    else {
        bodyStyle.style.backgroundImage = "url('../img/bg2.png')";
        bodyStyle.style.backgroundColor = "black";
        bodyStyle.style.color = "white";
        darkMode = true;
    }
}
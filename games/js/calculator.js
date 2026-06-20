let display = document.getElementById("screen")

function press(value) {

    if (display.textContent === "0") {
        display.textContent = value;
    }

    else {
        display.textContent += value;
    }
}


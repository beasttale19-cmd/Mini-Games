let display = document.getElementById("screen")

function press(value) {

    if (display.textContent === "0") {
        display.textContent = value;
    }

    else if (display.textContent === "Error") {
        display.textContent = value;
        function calculate() {
            display.textContent = 0;
        }
    }

    else {
        display.textContent += value;
    }
}

function clearAll() {
    display.textContent = "0";
}

function calculate() {

    try {
        display.textContent = eval(display.textContent)
    }

    catch (error) {
        display.textContent = "Error"
    }


}
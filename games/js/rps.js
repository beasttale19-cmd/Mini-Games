let botRock = document.getElementById("bot-rock")
let botScissor = document.getElementById("bot-scissor")
let botPaper = document.getElementById("bot-paper")

let clickRock = document.getElementById("rock")
let clickScissor = document.getElementById("scissor")
let clickPaper = document.getElementById("paper")

let choose = document.getElementById("choose")
let botChoose = document.getElementById("botChoose")

let result = document.getElementById("result")

// alert(`${random} is random`)
clickRock.onclick = function () {

    let random = Math.floor(Math.random() * 3);

    choose.style.display = "none";
    botChoose.style.display = "flex";

    if (random === 0) {
        botRock.style.display = "flex";
        result.textContent = `Result: Tied, try again :D`
    }

    else if (random === 1) {
        botScissor.style.display = "flex";
        result.textContent = `Result: You WON!`
    }
    else if (random === 2) {
        botPaper.style.display = "flex";
        result.textContent = `Result: You lose, Better luck next time! :D`
    }
}

clickPaper.onclick = function () {

    let random = Math.floor(Math.random() * 3);

    choose.style.display = "none";
    botChoose.style.display = "flex";

    if (random === 0) {
        botRock.style.display = "flex";
        result.textContent = `Result: Tied, try again :D`
    }

    else if (random === 1) {
        botScissor.style.display = "flex";
        result.textContent = `Result: You Won!`
    }
    else if (random === 2) {
        botPaper.style.display = "flex";
        result.textContent = `Result: You Lose :), Beter Luck Next Time!`
    }
}

clickScissor.onclick = function () {

    let random = Math.floor(Math.random() * 3);

    choose.style.display = "none";
    botChoose.style.display = "flex";

    if (random === 0) {
        botRock.style.display = "flex";
    }

    else if (random === 1) {
        botScissor.style.display = "flex";
    }
    else if (random === 2) {
        botPaper.style.display = "flex";
    }
}

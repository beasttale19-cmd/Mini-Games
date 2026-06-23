let botRock = document.getElementById("bot-rock")
let botScissor = document.getElementById("bot-scissor")
let botPaper = document.getElementById("bot-paper")

let clickRock = document.getElementById("rock")
let clickScissor = document.getElementById("scissor")
let clickPaper = document.getElementById("paper")

let choose = document.getElementById("choose")
let botChoose = document.getElementById("botChoose")

let result = document.getElementById("result")

// music
let win = document.getElementById("win")
let tie = document.getElementById("tie")
let lose = document.getElementById("lose")
let bg = document.getElementById("bg")

bg.volume = 0.75;
// alert(`${random} is random`)
clickRock.onclick = function () {

    let random = Math.floor(Math.random() * 3);

    choose.style.display = "none";
    botChoose.style.display = "flex";

    if (random === 0) {
        botRock.style.display = "flex";
        result.textContent = `Result: Tied, try again :D`
        tie.currentTime = 0;
        tie.play();

        bg.pause()
        setTimeout(()=>{
            bg.play()
        },1200)
    }

    else if (random === 1) {
        botScissor.style.display = "flex";
        result.textContent = `Result: You WON!`
        win.currentTime = 0;
        win.play();

        bg.pause()
        setTimeout(()=>{
            bg.play()
        },7200)
    }
    else if (random === 2) {
        botPaper.style.display = "flex";
        result.textContent = `Result: You lose, Better luck next time! :D`
        lose.currentTime = 0;
        lose.play();

         
        bg.pause()
        setTimeout(()=>{
            bg.play()
        },2700)
    }
}

clickPaper.onclick = function () {

    let random = Math.floor(Math.random() * 3);

    choose.style.display = "none";
    botChoose.style.display = "flex";

    if (random === 0) {
        botRock.style.display = "flex";
        result.textContent = `Result: You Won!`
        win.currentTime = 0;
        win.play();
        
        bg.pause()
        setTimeout(()=>{
            bg.play()
        },7200)
    }
    
    else if (random === 1) {
        result.textContent = `Result: You Lose :), Beter Luck Next Time!`
        botScissor.style.display = "flex";
        lose.currentTime = 0;
        lose.play();
            
        bg.pause()
        setTimeout(()=>{
            bg.play()
        },2700)
    }
    else if (random === 2) {
        botPaper.style.display = "flex";
        result.textContent = `Result: Tied, try again :D`
        tie.currentTime = 0;
        tie.play();
        
        bg.pause()
        setTimeout(()=>{
            bg.play()
        },1200)
    }
}

clickScissor.onclick = function () {

    let random = Math.floor(Math.random() * 3);

    choose.style.display = "none";
    botChoose.style.display = "flex";

    if (random === 0) {
        botRock.style.display = "flex";
        result.textContent = `Result: You Lose :), Beter Luck Next Time!`
        lose.currentTime = 0;
        lose.play();
            
        bg.pause()
        setTimeout(()=>{
            bg.play()
        },2700)
    }

    else if (random === 1) {
        botScissor.style.display = "flex";
        result.textContent = `Result: Tied, try again :D`;
        tie.currentTime = 0;
        tie.play();

        bg.pause()
        setTimeout(()=>{
            bg.play()
        },1200)
    }
    else if (random === 2) {
        botPaper.style.display = "flex";
        result.textContent = `Result: You Won!`;
        win.currentTime = 0;
        win.play();
        
        bg.pause()
        setTimeout(()=>{
            bg.play()
        },7200)
    }
}

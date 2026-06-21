let turn = "O";

let turnTxt = document.getElementById("turn");
let t1 = document.getElementById("1");
let t2 = document.getElementById("2");
let t3 = document.getElementById("3");
let t4 = document.getElementById("4");
let t5 = document.getElementById("5");
let t6 = document.getElementById("6");
let t7 = document.getElementById("7");
let t8 = document.getElementById("8");
let t9 = document.getElementById("9");
let textError = document.getElementById("error");

// audio
let victoryMusic = document.getElementById("victory");
let correctMusic = document.getElementById("correct");
let errorMusic = document.getElementById("errorM");
let faahMusic = document.getElementById("faah");

function press(value) {
    
    const click = document.getElementById(value);
    if (click.textContent !== "") {
        textError.textContent = `ERRORS: THE PLACE IS TAKEN ALREADY!`
        errorMusic.currentTime = 0;
        errorMusic.play()
        setTimeout(() => {
            textError.textContent = `ERRORS:`
        }, 600)
        return;
    }
    

    click.textContent = `${turn}`;    
    turnTxt.textContent = `Turn: ${turn}`;

    if (click.textContent === "O") {
        turn = 'X'
        click.textContent = `${turn}`;
        click.style.color = "green";
    }

    else {
        turn = "O"
        click.textContent = `${turn}`;
        click.style.color = "rgb(7, 21, 82)";
    }    

    // ending1
    if (t1.textContent !== "" && t1.textContent === t2.textContent && t2.textContent === t3.textContent) {
        victoryMusic.play();

        setTimeout(() =>{
            alert(`${t1.textContent} Won the game. RESTARTING...`)
            window.location.reload();
        },100)
        return;
    }

    // ending2
    if (t1.textContent !== "" && t1.textContent === t5.textContent && t5.textContent === t9.textContent) {
        victoryMusic.play();

        setTimeout(() =>{
            alert(`${t1.textContent} Won the game. RESTARTING...`)
            window.location.reload();
        },100)
        return;
    }

    // ending3
    if (t3.textContent !== "" && t3.textContent === t5.textContent && t5.textContent === t7.textContent) {
        victoryMusic.play();

        setTimeout(() =>{
            alert(`${t3.textContent} Won the game. RESTARTING...`)
            window.location.reload();
        },100)
        return;
    }

    // ending4
    if (t4.textContent !== "" && t4.textContent === t5.textContent && t5.textContent === t6.textContent) {
        victoryMusic.play();

        setTimeout(() =>{
            alert(`${t4.textContent} Won the game. RESTARTING...`)
            window.location.reload();
        },100)
        return;
    }

    // ending5
    if (t7.textContent !== "" && t7.textContent === t8.textContent && t8.textContent === t9.textContent) {
        victoryMusic.play();

        setTimeout(() =>{
            alert(`${t7.textContent} Won the game. RESTARTING...`)
            window.location.reload();
        },100)
        return;
    }

    // ending6
    if (t1.textContent !== "" && t1.textContent === t4.textContent && t4.textContent === t7.textContent) {
        victoryMusic.play();

        setTimeout(() =>{
            alert(`${t1.textContent} Won the game. RESTARTING...`)
            window.location.reload();
        },100)
        return;
    }

    // ending7
    if (t3.textContent !== "" && t3.textContent === t6.textContent && t6.textContent === t9.textContent) {
        victoryMusic.play();

        setTimeout(() =>{
            alert(`${t3.textContent} Won the game. RESTARTING...`)
            window.location.reload();
        },100)
        return;
    }

    // ending8
    if (t2.textContent !== "" && t2.textContent === t5.textContent && t5.textContent === t8.textContent) {
        victoryMusic.play();

        setTimeout(() =>{
            alert(`${t2.textContent} Won the game. RESTARTING...`)
            window.location.reload();
        },100)
        return;
    }

    // draw
    if (
    t1.textContent !== "" &&
    t2.textContent !== "" &&
    t3.textContent !== "" &&
    t4.textContent !== "" &&
    t5.textContent !== "" &&
    t6.textContent !== "" &&
    t7.textContent !== "" &&
    t8.textContent !== "" &&
    t9.textContent !== ""
    ){
        correctMusic.currentTime = 0;
        faahMusic.play()

        setTimeout(() =>{
            alert(`The Game is Draw, Try Again!?`)
            window.location.reload();   
        },100);

        return;
    }

    correctMusic.currentTime = 0;
    correctMusic.play()

}

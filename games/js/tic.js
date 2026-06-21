let turn = "O";

let t1=document.getElementById("1");
let t2=document.getElementById("2");
let t3=document.getElementById("3");
let t4=document.getElementById("4");
let t5=document.getElementById("5");
let t6=document.getElementById("6");
let t7=document.getElementById("7");
let t8=document.getElementById("8");
let t9=document.getElementById("9");
let textError=document.getElementById("error")
let winTxt=document.getElementById("wonTxt")

function press(value) {
    const click = document.getElementById(value);
    if (click.textContent !==""){
        textError.textContent = `ERRORS: THE PLACE IS TAKEN ALREADY!`
    setTimeout(() =>{
        textError.textContent = `ERRORS:`
    },500)
    return;
    }

    click.textContent = `${turn}`;  
    
    if (click.textContent === "O") {
        turn = 'X'
    click.textContent = `${turn}`;
    }

    else {
        turn = "O"
        click.textContent = `${turn}`;
    }

    // ending1
    if (t1.textContent !== "" && t1.textContent === t2.textContent && t2.textContent === t3.textContent) {
        alert(`${t1.textContent} Won the game. RESTARTING...`)
        window.location.reload();
    }

    // ending2
    if (t1.textContent !== "" && t1.textContent === t5.textContent && t5.textContent === t9.textContent) {
        alert(`${t1.textContent} Won the game. RESTARTING...`)
        window.location.reload();
    }

    // ending3
    if (t3.textContent !== "" && t3.textContent === t5.textContent && t5.textContent === t7.textContent) {
        alert(`${t3.textContent} Won the game. RESTARTING...`)
        window.location.reload();
    }

    // ending4
    if (t4.textContent !== "" && t4.textContent === t5.textContent && t5.textContent === t6.textContent) {
        alert(`${t4.textContent} Won the game. RESTARTING...`)
        window.location.reload();
    }

    // ending5
    if (t7.textContent !== "" && t7.textContent === t8.textContent && t8.textContent === t9.textContent) {
        alert(`${t7.textContent} Won the game. RESTARTING...`)
        window.location.reload();
    }

    // ending6
    if (t1.textContent !== "" && t1.textContent === t4.textContent && t4.textContent === t7.textContent) {
        alert(`${t1.textContent} Won the game. RESTARTING...`)
        window.location.reload();
    }

    // ending7
    if (t3.textContent !== "" && t3.textContent === t6.textContent && t6.textContent === t9.textContent) {
        alert(`${t3.textContent} Won the game. RESTARTING...`)
        window.location.reload();
    }

    // ending8
    if (t2.textContent !== "" && t2.textContent === t5.textContent && t5.textContent === t8.textContent) {
        alert(`${t2.textContent} Won the game. RESTARTING...`)
        window.location.reload();
    }


  
}

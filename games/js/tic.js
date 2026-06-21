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

    if (t1.textContent !== "" && t1.textContent === t2.textContent && t2.textContent === t3.textContent) {
        alert(`${t1.textContent} Won the game.`)
    }

    if (t1.textContent !== "" && t1.textContent === t5.textContent && t5.textContent === t9.textContent) {
        alert(`${t1.textContent} Won the game.`)
    }
    
    if (t1.textContent !== "" && t1.textContent === t5.textContent && t5.textContent === t9.textContent) {
        alert(`${t1.textContent} Won the game.`)
    }
  
}

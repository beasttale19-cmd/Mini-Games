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

function press(value) {
    const click = document.getElementById(value);
    click.textContent = `${turn}`;

    if (click.textContent === "O") {
        turn = 'X'
    click.textContent = `${turn}`;
    }

    else {
        turn = "O"
        click.textContent = `${turn}`;
    }

    
}
if (click.textContent !==""){
        alert("the place is taken!!!!")
    }
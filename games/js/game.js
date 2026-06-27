const player = document.getElementById("player")

const idle = document.getElementById("idle")
const right = document.getElementById("right")
const left = document.getElementById("left")
const jump = document.getElementById("jump")

let playerX = 0;
let playerY = 0;

window.addEventListener('keydown', move);
window.addEventListener('keyup', dontMove);

let leftKey = "ArrowLeft"
let rightKey = "ArrowRight"
let aKey = "a"
let dKey = "d"
aKey = "leftKey"
rightKey = ""

function move(event) {
    if (event.key === 'ArrowRight' || event.key === 'd') {
        playerX = playerX + 5;

        idle.classList.add("none");
        right.classList.remove("none");
        idle.style.display = "none";
        right.style.display = "block";
    }

    if (event.key === ' ' || event.key === 'ArrowUp' || event.key === 'w') {
        playerY = playerY - 50;
        idle.classList.add("none");
        jump.classList.remove("none");
    }

    if (event.key === 'ArrowLeft' || event.key === 'a') {
        playerX = playerX - 5;

        idle.classList.add("none");
        left.classList.remove("none");
        idle.style.display = "none";
        left.style.display = "block";
    }

    // if (event.key === 'ArrowLeft' || event.key === 'a' && event.key === 'ArrowRight' || event.key === 'd') {
    //     left.classList.add("none");
    //     idle.classList.remove("none");
    //     left.style.display = "none";
    //     idle.style.display = "block";
    //     right.classList.add("none")
    //     // right.style.display("none")
    // }

    player.style.transform = `translateX(${playerX}px) translateY(${playerY}px)`;
}

function dontMove(event) {
    if (event.key === 'ArrowRight' || event.key === 'd') {
        right.classList.add("none");
        idle.classList.remove("none");
        right.style.display = "none";
        idle.style.display = "block";
    }

    if (event.key === 'ArrowLeft' || event.key === 'a') {
        left.classList.add("none");
        idle.classList.remove("none");
        left.style.display = "none";
        idle.style.display = "block";
    }

     if (event.key === ' ' || event.key === 'w') {
        playerY = playerY + 50;
        jump.classList.add("none");
        idle.classList.remove("none");
    }

    player.style.transform = `translateX(${playerX}px) translateY(${playerY}px)`;
}
const player = document.getElementById("player")

const idle = document.getElementById("idle")
const right = document.getElementById("right")
const left = document.getElementById("left")
const jump = document.getElementById("jump")

const enemyIdle = document.getElementById("enemyIdle")
const enemyAttack = document.getElementById("enemyAttack")
// const enemyRight = document.getElementById("right")
// const enemyLeft = document.getElementById("left")
// const enemyJump = document.getElementById("jump")

let playerX = 0;
let playerY = 0;
let enemyX = 300;

function checkDistance(){
    let distance = Math.abs(playerX - enemyX)

    if (distance < 60){
        enemyIdle.classList.add("none");
        player.classList.add("hurt")
        enemyAttack.classList.remove("none");
    }

    else {
        player.classList.remove("hurt")
        enemyAttack.classList.add("none");
        enemyIdle.classList.remove("none");
    }
}

const banner = document.getElementById("banner");

window.addEventListener('keydown', move);
window.addEventListener('keyup', dontMove);


function move(event) {

    banner.style.opacity = "0";
    banner.style.transition = "1s";

    if (event.key === 'ArrowRight' || event.key === 'd') {
        playerX = playerX + 5;

        if (jump.style.display !== "block") {
            if (left.style.display === "block") {
                left.style.display = "none";
                left.classList.add("none");
            }
            idle.classList.add("none");
            right.classList.remove("none");
            idle.style.display = "none";
            right.style.display = "block";
        }
    }

    if (event.key === ' ' || event.key === 'ArrowUp' || event.key === 'w') {

        if (jump.style.display !== "block") {
            playerY = playerY - 50;
            idle.classList.add("none");
            jump.classList.remove("none");
            idle.style.display = "none"
            jump.style.display = "block"

            right.style.display = "none"
            left.style.display = "none"
            right.classList.add("none")
            left.classList.add("none")

            setTimeout(() => {
                playerY = playerY + 50;
                jump.classList.add("none");
                idle.classList.remove("none");
                jump.style.display = "none"
                idle.style.display = "block"

                player.style.transform = `translateX(${playerX}px) translateY(${playerY}px)`
            }, 200);

            checkDistance()
        }
    }

    if (event.key === 'ArrowLeft' || event.key === 'a') {
        playerX = playerX - 5;

        if (jump.style.display !== "block") {
            idle.classList.add("none");
            left.classList.remove("none");
            idle.style.display = "none";
            left.style.display = "block";

            if (right.style.display === "block"){
                right.style.display = "none";
                right.classList.add("none");
            }
        }
    }

    checkDistance()
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

    player.style.transform = `translateX(${playerX}px) translateY(${playerY}px)`;
}
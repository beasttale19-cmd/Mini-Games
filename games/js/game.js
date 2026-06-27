const player = document.getElementById("player")

const idle = document.getElementById("idle")
const right = document.getElementById("right")

let playerX = 0;

window.addEventListener('keydown', move);

function move(event){
    if (event.key === 'ArrowRight'){
        playerX = playerX + 10;
        player.style.transform = `translateX(${playerX}px)`;

        idle.classList.add("none");
        right.classList.remove("none");
        idle.style.display = "none";
        right.style.display = "block";
    }

    if (event.key === 'ArrowLeft'){
        playerX = playerX - 10;
        player.style.transform = `translateX(${playerX}px)`;
    }
}
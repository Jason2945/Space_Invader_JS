// Draw the Canvas
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Create the lives left variable
let livesLeft = 3;
// Create the score variable
let score = 0;
// Create and upload spaceship image
const img = new Image();
// Locate the starting location of the spaceship
let startingX = 200;
let startingY = 700;

// Function that draws the score the user has
function drawScore(){
    ctx.font = "bold 20px Arial";
    ctx.fillStyle = "darkblue";
    ctx.fillText(`Score: ${score}`, 10, 25)
}

// Function that draws the amount of lives the user has left
function drawLives() {
    ctx.font = "bold 20px Arial";
    ctx.fillStyle = "darkblue";
    ctx.fillText(`Lives: ${livesLeft}`, 410, 25);
}

img.onload = function drawShip() {
    ctx.drawImage(img, startingX, startingY);
}

function drawAll(){
    drawScore();
    drawLives();
    drawShip();
}

img.src = "spaceship.png";

drawAll();


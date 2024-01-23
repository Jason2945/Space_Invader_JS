// Draw the Canvas
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Create the lives left variable
let livesLeft = 3;
// Create the score variable
let score = 0;
// Keep track of ammo left
let bulletNum = 75;
// Create and upload spaceship image
const img = new Image();
// Locate the starting location of the spaceship
let startingX = 200;
let startingY = 650;
// Sets key buttons as false
let leftPressed = false;
let rightPressed = false;
let spacePressed = false;
// Create game level
let GameLevel = 1;
// Bullet info
let bullets = [];
let bulletSpeed = 5;
// Enemy info
let enemySpawnCounter = 0;
let enemies = []
let enemyNum = GameLevel * 100
let enemySpeed = GameLevel;

// Draws the current score of the user on the canvas
function drawScore(){
    ctx.font = "bold 20px Arial";
    ctx.fillStyle = "darkblue";
    ctx.fillText(`Score: ${score}`, 10, 25)
}

// Draw the amount of bullet user has left
function drawBulletNum(){
    ctx.font = "bold 20px Arial";
    ctx.fillStyle = "darkblue";
    ctx.fillText(`Bullets: ${bulletNum}`, canvas.width - 120, 740);
}

// Draw the current level of the user on the canvas
function drawLevel(){
    ctx.font = "bold 20px Arial";
    ctx.fillStyle = "darkblue";
    ctx.fillText(`Level: ${GameLevel}`, 200, 25);
}

// Draw the current lives of the user on the canvas
function drawLives() {
    ctx.font = "bold 20px Arial";
    ctx.fillStyle = "darkblue";
    ctx.fillText(`Lives: ${livesLeft}`, 410, 25);
}

// Draw the spaceship on the canvas
function drawShip() {
    ctx.drawImage(img, startingX, startingY);
}

// Create bullets for the user !!! Does not draw it on the canvas
function shoot(){
    if (bulletNum > 0){
        let bullet = {};
        bullet.x = startingX + 46;
        bullet.y = startingY - 10;
        bullets.push(bullet);
        // Every bullet shot is one less ammo left until reloaded
        bulletNum --;
    } 
}

// Draw bullets on the canvas
function drawBullets() {
    bullets.map(bullet => {
        ctx.fillRect(bullet.x, bullet.y, 5, 10)
    })
}

// Create invaders for the user
function enemySpawn(){
    let enemy = {};
    enemy.x = Math.floor(Math.random() * 400) + 50;
    enemy.y = 100
    enemies.push(enemy); 
}

// Draw bullets on the canvas
function drawEnemies() {
    enemies.map(enemy => {
        ctx.fillRect(enemy.x, enemy.y, 25, 25)
    })
}

// Check to see if the bullet is out of the screen, when it is, add an ammo back to the user
function reloadUp(){
    bullets.map(bullet => {
        let index = bullets.indexOf(bullet)
        if (bullet.y < 10){
            bullets.splice(index, 1)
            bulletNum ++
        }
    })
}

// Allow movement of spaceship left and right when button is pressed
function keyDownHandler(inputButton) {
    if (inputButton.key === "Right" || inputButton.key === "ArrowRight") {
        rightPressed = true;
    } else if (inputButton.key === "Left" || inputButton.key === "ArrowLeft") {
        leftPressed = true;
    }
    if (inputButton.key === " "){
        spacePressed = true;
    }
}

// Stop spaceship movement and bullet when button is released
function keyUpHandler(inputButton) {
    if (inputButton.key === "Right" || inputButton.key === "ArrowRight") {
        rightPressed = false;
    } else if (inputButton.key === "Left" || inputButton.key === "ArrowLeft") {
        leftPressed = false;
    }
    if (inputButton.key === " "){
        spacePressed = false;
    }
}

function drawAll(){
    // This clears the screen for every new draw
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Put in the new values of score and lives and ship location
    drawScore();
    drawLives();
    drawShip();
    drawLevel();
    drawBulletNum();
    drawEnemies();

    
    enemySpawnCounter ++;
    enemies.map(enemy => enemy.y += enemySpeed)
    reloadUp();
    drawBullets();
    // Allow the bullet to move
    bullets.map(bullet => bullet.y -= bulletSpeed)
    // Allows the movement of the space ship left and right through key strokes
    // This also makes sure the space ship doesn't fall outside the border
    if (rightPressed) {
        startingX = Math.min(startingX + 5, canvas.width - 100);
    } else if (leftPressed) { 
        startingX = Math.max(startingX - 5, 0); 
    }
    // Allows the user to shoot out bullets
    if (spacePressed){
        shoot();
    }
    requestAnimationFrame(drawAll);
}

img.src = "spaceship.png";

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
drawAll();
// Enemy spawn speed is different than user speed
setInterval(enemySpawn, 1000)
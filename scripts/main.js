// Main JS file to call all functions

// Draw the Canvas
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Call the classes for each object
const bullet = new Bullet();
const info = new gameInfo();
const ship = new spaceship();
const enemy = new Enemies();

// Speed of enemy spawnrate
let time_ms = 1000;

// Main function that calls all the other functions
function drawAll(){
    // This clears the screen for every new draw
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    enemy.enemyLocation();
    info.checkLevel();
    info.drawScore();
    info.drawLives();
    info.drawLevel();

    ship.moveShip();
    ship.drawShip();

    bullet.drawBulletNum();
    bullet.shootBullet();
    bullet.drawBullets();
    bullet.moveBullet();

    enemy.moveEnemies();
    enemy.drawEnemies();

    if (!info.gameOver()){
        gameOn = requestAnimationFrame(drawAll);
    }else {
        cancelAnimationFrame(gameOn);
        info.displayGameOver();
    }
    
}
setInterval(() => {
    enemy.createEnemies();
}, time_ms);

// Event listeners to check user keyboard inputs
document.addEventListener("keyup", inputButton => ship.userReleased(inputButton));
document.addEventListener("keydown", inputButton => ship.userPressed(inputButton));
document.addEventListener("keyup", inputButton => bullet.spacebarUp(inputButton));
document.addEventListener("keydown", inputButton => bullet.spacebarDown(inputButton));

drawAll();
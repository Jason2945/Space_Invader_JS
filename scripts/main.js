// Main JS file to call all functions

// Draw the Canvas
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");



// Call the classes for each object
const bulletInfo = new Bullet();
const gameInfo = new Info();
const shipInfo = new spaceship();
const enemyInfo = new Enemies();
const backgroundInfo = new Background();

// Speed of enemy spawn rate
let time_ms = 1000;

// This function checks collision between the bullet and the enemies
function collisionDetection(bullets, enemies) {
    enemies.forEach(enemy => {
        let enemyIndex = enemies.indexOf(enemy);
        bullets.forEach(bullet =>{
            let bulletIndex = bullets.indexOf(bullet);
            if(bullet.x - 30 <= enemy.x && bullet.x + 30 >= enemy.x && bullet.y < enemy.y && bullet.y > enemy.y - 20){
                enemies.splice(enemyIndex, 1);
                bullets.splice(bulletIndex, 1);
                gameInfo.score ++;
            }
        })
    })
}

// Main function that calls all the other functions
function drawAll(){
    // This clears the screen for every new draw
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    enemyInfo.enemyLocation();

    gameInfo.checkLevel();
    gameInfo.drawScore();
    gameInfo.drawLives();
    gameInfo.drawLevel();

    backgroundInfo.createStars();
    backgroundInfo.drawStars();
    backgroundInfo.moveStars();
    backgroundInfo.deleteStars();

    shipInfo.moveShip();
    shipInfo.drawShip();

    bulletInfo.drawBulletNum();
    bulletInfo.drawBullets();
    bulletInfo.moveBullet();
    bulletInfo.removeBullets();

    enemyInfo.moveEnemies();
    enemyInfo.drawEnemies();
    collisionDetection(bulletInfo.bullets, enemyInfo.totalEnemies);

    if (!gameInfo.gameOver()){
        gameOn = requestAnimationFrame(drawAll);
    }else {
        cancelAnimationFrame(gameOn);
        gameInfo.displayGameOver();
    }
    
}
setInterval(() => {
    enemyInfo.createEnemies();
}, time_ms);

// Event listeners to check user keyboard inputs
document.addEventListener("keyup", inputButton => shipInfo.userReleased(inputButton));
document.addEventListener("keydown", inputButton => shipInfo.userPressed(inputButton));
document.addEventListener("keydown", inputButton => bulletInfo.spacebarDown(inputButton));

drawAll();
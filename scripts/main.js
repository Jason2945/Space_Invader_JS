// Main JS file to call all functions

// Draw the Canvas
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
// Get the value of the play and pause button
const playButton = document.getElementById("playButton")
const pauseButton = document.getElementById("pauseButton")

// Call the classes for each object
const bulletInfo = new Bullet();
const gameInfo = new Info();
const shipInfo = new spaceship();
const enemyInfo = new Enemies();
const backgroundInfo = new Background();

// Speed of enemy spawn rate
let time_ms = 1000;
let spawnEnemies;

// This function starts the game
function startGame(){
    if (playButton.textContent !== "Try Again" && gameInfo.playOn === false){
        gameInfo.playOn = true;
        if (!gameInfo.gameOn && !gameInfo.pauseOn){
            gameInfo.gameOn = true
            drawAll();
            gameInfo.playMusic();
        }  else if(gameInfo.pauseOn){
            requestAnimationFrame(drawAll);
            gameInfo.pauseGame = false;
            gameInfo.playMusic();
        }
        // This part of the code is to spawn enemies every 1 second
        if (!spawnEnemies){
            spawnEnemies = setInterval(() => {
                enemyInfo.createEnemies();
            }, time_ms);
        }
    }
    // Resets all the values and let the user play again
    if (playButton.textContent === "Try Again"){
        playButton.textContent = "Play";
        bulletInfo.resetValue();
        gameInfo.resetValues();
        shipInfo.resetValues();
        enemyInfo.resetValues();
        startGame();
    }
}

// This function pauses the game. This also makes sure to pause the enemy spawn from setInterval
function pauseGame(){
    gameInfo.playOn = false;
    cancelAnimationFrame(animateGame);
    gameInfo.pauseMusic();
    gameInfo.pauseOn = true;
    clearInterval(spawnEnemies);
    spawnEnemies = null;
}

// Main function that calls all the other functions
function drawAll(){
    // This clears the screen for every new draw
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    enemyInfo.enemyLocation();
    enemyInfo.moveEnemies();
    enemyInfo.drawEnemies();

    gameInfo.checkLevel();
    gameInfo.drawScore();
    gameInfo.drawLives();
    gameInfo.drawLevel();
    gameInfo.gameOver();

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

    bulletCollision(bulletInfo.bullets, enemyInfo.totalEnemies);
    shipCollision(shipInfo.shipX, shipInfo.shipY, enemyInfo.totalEnemies)

    if (gameInfo.gameOn){
        animateGame = requestAnimationFrame(drawAll);
    }else {
        cancelAnimationFrame(animateGame);
        gameInfo.displayGameOver();
    }
    
}

// Event listeners to check user keyboard inputs
document.addEventListener("keyup", inputButton => shipInfo.userReleased(inputButton));
document.addEventListener("keydown", inputButton => shipInfo.userPressed(inputButton));
document.addEventListener("keydown", inputButton => bulletInfo.spacebarDown(inputButton));
playButton.addEventListener("click", startGame);
pauseButton.addEventListener("click", pauseGame);
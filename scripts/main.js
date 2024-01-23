// Draw the Canvas
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Call the classes for each object
const bullet = new Bullet();
const info = new gameInfo();
const ship = new spaceship();

// Main function that calls all the other functions
function drawAll(){
    // This clears the screen for every new draw
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    info.drawScore();
    info.drawLives();
    info.drawLevel();

    ship.moveShip();
    ship.drawShip();

    bullet.drawBulletNum();
    bullet.shootBullet();
    bullet.drawBullets();
    bullet.moveBullet();

    requestAnimationFrame(drawAll);
}


// Event listeners to check user keyboard inputs
document.addEventListener("keyup", inputButton => ship.userReleased(inputButton));
document.addEventListener("keydown", inputButton => ship.userPressed(inputButton));
document.addEventListener("keyup", inputButton => bullet.spacebarUp(inputButton));
document.addEventListener("keydown", inputButton => bullet.spacebarDown(inputButton));
drawAll();
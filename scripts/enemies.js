// Enemies info

const asteroid_img = new Image();
asteroid_img.src = "asteroid.png";

// Enemy class
class Enemies{
    constructor(enemySpawnCounter, totalEnemies, enemyNum, enemySpeed){
        this.enemySpawnCounter = 0;
        this.totalEnemies = [];
        this.enemyNum = gameInfo.gameLevel * 100;
        this.enemySpeed = (gameInfo.gameLevel / 5);
    }

    // This method creates enemies
    createEnemies(){
        let enemy = {};
        enemy.x = Math.floor(Math.random() * 400) + 50;
        enemy.y = 0;
        this.totalEnemies.push(enemy);
        this.enemySpawnCounter ++;
    }

    // This method displays the enemies on the canvas
    drawEnemies(){
        this.totalEnemies.forEach(enemy => {
            ctx.drawImage(asteroid_img, enemy.x, enemy.y, 40, 40)
        })
    }

    // This method moves the enemies
    moveEnemies(){
        // This line checks to speed if gameLevel has been updated
        this.enemySpeed = gameInfo.gameLevel;
        this.totalEnemies.forEach(enemy =>{
            enemy.y += this.enemySpeed;
        })
    }

    // This method checks if enemies pass the spaceship
    enemyLocation(){
        this.totalEnemies.forEach(enemy =>{
            // Find the index of current enemy in total enemies
            let index = this.totalEnemies.indexOf(enemy);
            if (enemy.y > 750){
                gameInfo.livesLeft --;
                // Remove the current enemy after life is lost
                this.totalEnemies.splice(index, 1)
            }
        })
    }
}
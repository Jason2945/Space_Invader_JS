// Enemies info

// Enemy info
class Enemies{
    constructor(enemySpawnCounter, totalEnemies, enemyNum, enemySpeed){
        this.enemySpawnCounter = 0;
        this.totalEnemies = [];
        this.enemyNum = info.gameLevel * 100;
        this.enemySpeed = (info.gameLevel / 3);
    }

    // This method creates enemies
    createEnemies(){
        let enemy = {};
        enemy.x = Math.floor(Math.random() * 400) + 50;
        enemy.y = 100
        this.totalEnemies.push(enemy);
        this.enemySpawnCounter ++;
    }

    // This method displays the enemies on the canvas
    drawEnemies(){
        this.totalEnemies.map(enemy => {
            ctx.fillRect(enemy.x, enemy.y, 25, 25)
        })
    }

    // This method moves the enemies
    moveEnemies(){
        // This line checks to speed if gameLevel has been updated
        this.enemySpeed = info.gameLevel;
        this.totalEnemies.map(enemy =>{
            enemy.y += this.enemySpeed;
        })
    }

    // This method checks if enemies pass the spaceship
    enemyLocation(){
        this.totalEnemies.map(enemy =>{
            // Find the index of current enemy in total enemies
            let index = this.totalEnemies.indexOf(enemy);
            if (enemy.y > ship.shipY + 100){
                info.livesLeft --;
                // Remove the current enemy after life is lost
                this.totalEnemies.splice(index, 1)
            }
        })
    }
}
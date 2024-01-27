// This function checks collision between the bullet and the enemies
function bulletCollision(bullets, enemies) {
    enemies.forEach(enemy => {
        let enemyIndex = enemies.indexOf(enemy);
        bullets.forEach(bullet =>{
            let bulletIndex = bullets.indexOf(bullet);
            if(bullet.x <= enemy.x + 40 && bullet.x >= enemy.x && bullet.y < enemy.y && bullet.y > enemy.y - 20){
                enemies.splice(enemyIndex, 1);
                bullets.splice(bulletIndex, 1);
                gameInfo.score ++;
            }
        })
    })
}

// This function checks collision between the ship and the enemies
function shipCollision(shipX, shipY, enemies) {
    enemies.forEach(enemy => {
        let enemyIndex = enemies.indexOf(enemy);
        if(shipX - 30 <= enemy.x && shipX + 65 >= enemy.x && shipY < enemy.y && shipY > enemy.y - 40){
            enemies.splice(enemyIndex, 1);
            gameInfo.livesLeft --;
        }
    })
}



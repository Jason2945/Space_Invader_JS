// Enemy info
let enemySpawnCounter = 0;
let enemies = []
let enemyNum = gameData.GameLevel * 100
let enemySpeed = gameData.GameLevel;

// Create invaders for the user
function enemySpawn(){
    let enemy = {};
    enemy.x = Math.floor(Math.random() * 400) + 50;
    enemy.y = 100
    enemies.push(enemy); 
}

function drawEnemies() {
    enemies.map(enemy => {
        ctx.fillRect(enemy.x, enemy.y, 25, 25)
    })
}

// Enemy spawn speed is different than user speed
setInterval(enemySpawn, 1000)
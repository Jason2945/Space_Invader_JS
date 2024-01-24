//Canvas display info

// Create a class for the info displayed on canvas
class gameInfo{
    constructor(livesLeft, score, gameLevel){
        this.livesLeft = 3;
        this.score = 0;
        this.gameLevel = 1;
    }

    // This method displays the current user score
    drawScore(){
        ctx.font = "bold 20px Arial";
        ctx.fillStyle = "darkblue";
        ctx.fillText(`Score: ${this.score}`, 10, 25)
    }

    // This method checks the user's current level
    checkLevel(){
        this.gameLevel = Math.ceil(enemy.enemySpawnCounter / 100);
    }

    // This method displays the user's current level
    drawLevel(){
        ctx.font = "bold 20px Arial";
        ctx.fillStyle = "darkblue";
        ctx.fillText(`Level: ${this.gameLevel}`, 200, 25);
    }

    // This method displays the amount of lives the user currently has
    drawLives(){
        ctx.font = "bold 20px Arial";
        ctx.fillStyle = "darkblue";
        ctx.fillText(`Lives: ${this.livesLeft}`, 410, 25);
    }

    // This method displays the game over message
    displayGameOver(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.font = "bold 50px Arial";
        ctx.fillStyle = "darkblue";
        ctx.fillText('GAME OVER', 100, canvas.height/2);
        ctx.fillText(`Final Score : ${this.score}`, 10, 50)
    }

    // This method checks if it is game over
    gameOver(){
        if (this.livesLeft <= 0){
            return true;
        }
        return false;
    }
}
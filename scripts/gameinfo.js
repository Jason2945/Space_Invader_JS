//File for basic Canvas info

class gameInfo{
    constructor(livesLeft, score, gameLevel){
        this.livesLeft = 3;
        this.score = 0;
        this.gameLevel = 1;
    }

    drawScore(){
        ctx.font = "bold 20px Arial";
        ctx.fillStyle = "darkblue";
        ctx.fillText(`Score: ${this.score}`, 10, 25)
    }

    drawLevel(){
        ctx.font = "bold 20px Arial";
        ctx.fillStyle = "darkblue";
        ctx.fillText(`Level: ${this.gameLevel}`, 200, 25);
    }

    drawLives(){
        ctx.font = "bold 20px Arial";
        ctx.fillStyle = "darkblue";
        ctx.fillText(`Lives: ${this.livesLeft}`, 410, 25);
    }
}
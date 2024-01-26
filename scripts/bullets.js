// Bullets info

// Create a class Bullet
class Bullet{
    constructor(bulletSpeed, bulletNum){
        // This is the initial values of each bullet
        this.bullets = [];
        this.bulletSpeed = 5;
        this.bulletNum = 1000;
        this.spacePressed = false;
    }

    // This method displays the number of bullets the user has left
    drawBulletNum(){
        ctx.font = "bold 20px Arial";
        ctx.fillStyle = "red";
        ctx.fillText(`Bullets: ${this.bulletNum}`, canvas.width - 130, 740);
    }

    // This method checks if the user pressed spacebar
    spacebarDown(inputButton){
        if (inputButton.key === " "){
            this.createBullet();
        }
    }

    // This method creates a new bullet to be put in the array bullets when space is pressed
    createBullet(){
        if (this.bulletNum > 0){
            let bullet = {};
            bullet.x = shipInfo.shipX + 46;
            bullet.y = shipInfo.shipY - 10;
            this.bullets.push(bullet);
            // Every bullet shot is one less ammo left until reloaded
            this.bulletNum --;
        } 
    }

    // This method updates the bullets y position when ran
    moveBullet(){
        this.bullets.forEach(bullet => bullet.y -= this.bulletSpeed)
    }

    // This method draws the bullets on the canvas
    drawBullets() {
        this.bullets.forEach(bullet => {
        ctx.fillRect(bullet.x, bullet.y, 5, 10)
        })
    }

    // This method removes bullets off the screen and adds a new bullet to bullet num
    removeBullets(){
        this.bullets.forEach(bullet => {
            let bulletIndex = this.bullets.indexOf(bullet);
            if (bullet.y < 0){
                this.bullets.splice(bulletIndex, 1);
            }
        })
    }
}

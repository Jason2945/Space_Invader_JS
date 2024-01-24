// Spaceship info

// Create and upload spaceship image
const img = new Image();
img.src = "spaceship.png";

// Create a class spaceship
class spaceship{
    constructor(shipX, shipY){
        // Locate the starting location of the spaceship
        this.shipX = 200;
        this.shipY = 600;
        this.leftPressed = false;
        this.rightPressed = false;
    }

    // This function draws the spaceship on the canvas
    drawShip() {
        ctx.drawImage(img, this.shipX, this.shipY);
    }

    // This function moves the spaceship
    userPressed(inputButton){
        if (inputButton.key === "Right" || inputButton.key === "ArrowRight") {
            this.rightPressed = true;
        } else if (inputButton.key === "Left" || inputButton.key === "ArrowLeft") {
            this.leftPressed = true;
        }
    }

    // This function stops the spaceship
    userReleased(inputButton){
        if (inputButton.key === "Right" || inputButton.key === "ArrowRight") {
            this.rightPressed = false;
        } else if (inputButton.key === "Left" || inputButton.key === "ArrowLeft") {
            this.leftPressed = false;
        }
    }

    // This function moves the spaceship location
    moveShip(){
        if (ship.rightPressed) {
            ship.shipX = Math.min(ship.shipX + 5, canvas.width - 100);
        } else if (ship.leftPressed) { 
            ship.shipX = Math.max(ship.shipX - 5, 0); 
        }
    }
}
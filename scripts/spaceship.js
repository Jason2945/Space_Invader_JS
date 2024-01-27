// Spaceship info

// Create and upload spaceship image
const spaceship_img = new Image();
spaceship_img.src = "style/spaceship.png";

// Create a class spaceship
class spaceship{
    constructor(shipX, shipY){
        // Locate the starting location of the spaceship
        this.shipX = 200;
        this.shipY = 600;
        this.leftPressed = false;
        this.rightPressed = false;
        this.upPressed = false;
        this.downPressed = false;
    }

    // This method draws the spaceship on the canvas
    drawShip() {
        ctx.drawImage(spaceship_img, this.shipX, this.shipY);
    }

    // This method moves the spaceship
    userPressed(inputButton){
        if (inputButton.key === "Right" || inputButton.key === "ArrowRight") {
            this.rightPressed = true;
        } else if (inputButton.key === "Left" || inputButton.key === "ArrowLeft") {
            this.leftPressed = true;
        } else if (inputButton.key === "Up" || inputButton.key === "ArrowUp") {
            this.upPressed = true;
        } else if (inputButton.key === "Down" || inputButton.key === "ArrowDown") {
            this.downPressed = true;
        }
    }

    // This method stops the spaceship
    userReleased(inputButton){
        if (inputButton.key === "Right" || inputButton.key === "ArrowRight") {
            this.rightPressed = false;
        } else if (inputButton.key === "Left" || inputButton.key === "ArrowLeft") {
            this.leftPressed = false;
        } else if (inputButton.key === "Up" || inputButton.key === "ArrowUp") {
            this.upPressed = false;
        } else if (inputButton.key === "Down" || inputButton.key === "ArrowDown") {
            this.downPressed = false;
        }
    }

    // This method moves the spaceship location
    moveShip(){
        if (shipInfo.rightPressed) {
            shipInfo.shipX = Math.min(shipInfo.shipX + 5, canvas.width - 100);
        } else if (shipInfo.leftPressed) { 
            shipInfo.shipX = Math.max(shipInfo.shipX - 5, 0); 
        } else if (shipInfo.upPressed) { 
            shipInfo.shipY = Math.max(shipInfo.shipY - 5, 0); 
        } else if (shipInfo.downPressed) { 
            shipInfo.shipY = Math.min(shipInfo.shipY + 5, canvas.height - 100); 
        }
    }

    // This method resets the value of the class
    resetValues(){
        this.shipX = 200;
        this.shipY = 600;
        this.leftPressed = false;
        this.rightPressed = false;
        this.upPressed = false;
        this.downPressed = false;
    }
}
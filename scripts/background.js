// Background info

// Generate stars
const stars = [];

class Background{
    constructor(allStars){
        this.allStars = [];
    }

    // This method creates stars
    createStars(){
        let star = {};
        star.x = Math.floor(Math.random() * 500) + 0;
        star.y = 0
        this.allStars.push(star);
    }

    // This method draws stars
    drawStars(){
        this.allStars.forEach(star => {
            ctx.fillStyle = "white";
            ctx.fillRect(star.x, star.y, 5, 5);
        })
    }

    // This method moves the stars
    moveStars(){
        this.allStars.forEach(star => {
            star.y += 5;
        })
    }

    // This method removes stars off screen
    deleteStars(){
        this.allStars.forEach(star => {
            let starIndex = this.allStars.indexOf(star);
            if (star.y > 720){
                this.allStars.splice(starIndex, 1);
            }
        })
    }
}
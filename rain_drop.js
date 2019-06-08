class Raindrop {
    constructor() {
        this.x = random(width);                                 // Randomise x-coordinate of raindrop
        this.y = random(-1000, 0);                              // Randomise y-coordinate of raindrop (Bigger sky range)
        this.parallex = random(0, 15);                          // Used to simulate a parallex effect
        this.ySpeed = map(this.parallex, 0, 15, 5, 15);         // Randomise speed at which raindrop falls
        this.length = map(this.parallex, 0, 15, 5, 15);         // Randomise length of raindrop

        this.fall = function() {                                // Function to make raindrop fall
            this.y += this.ySpeed;

            if (this.y > height) {   
                this.x = random(width);                         // Randomise x-coordinate of raindrop
                this.y = random(-200, 0);                       // If raindrop leaves window, move it to the top (Smaller sky range)
                this.ySpeed = map(this.parallex, 0, 15, 1, 20); // Randomise speed at which raindrop falls 
            }
        };

        this.display = function() {                             // Function to display/render raindrop
            this.thick = map(this.parallex, 0, 15, 1, 3);
            strokeWeight(this.thick);                           // Make raindrop thicker
            stroke(121, 171, 252);                              // Light Blue
            line(this.x, this.y, this.x, this.y + this.length); // Creates a line with coordinates (x1, y1, x2, y2)
        };
    }
}

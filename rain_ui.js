//rain: rgb(121, 171, 252)
//bg: rgb(19, 46, 89)

var totalNoOfRaindrops = 1000;
var raindropList = [];

function setup() {
    createCanvas(1280, 720);

    for (var i = 0; i < totalNoOfRaindrops; i++) {
        raindropList[i] = new Raindrop;
    }
}

function draw() {
    background(19, 46, 89);

    for (var i = 0; i < raindropList.length; i++) {
        raindropList[i].fall();
        raindropList[i].display();
    }
}
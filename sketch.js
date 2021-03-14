var gamestate = 0;
var database;
var playercount = 0;
var form, game, player;
var allplayers;
var car1,car2,car3,car4,cars
var track
var car1Image, car2Image, car3Image, car4Image

function preload(){
    car1Image = loadImage("images/car1.png")
    car2Image = loadImage("images/car2.png")
    car3Image = loadImage("images/car3.png")
    car4Image = loadImage("images/car4.png")
    track = loadImage("images/track.jpg")
}

function setup(){
    createCanvas(displayWidth,displayHeight);
    database = firebase.database()
    game = new Game()
    game.getstate()
    game.start() 
}

function draw(){
    background("white");
    if (playercount === 4){
        game.update(1)
    }
    if(gamestate ===1){
        clear ()
        game.play()
    }
    if (gamestate === 2){
        game.end()
    }
}

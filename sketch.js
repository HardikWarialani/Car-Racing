var playerCount;
var gameState=0;
//objects of the classes
var form,game,player;
var allPlayers;//to fetch data about all the players from database
var db;
var car1,car2,car3,car4
var cars
var car1img,car2img,car3img,car4img,track
var cong

function preload (){
    track = loadImage("images/track.jpg")
    car1img = loadImage("images/car1.png")
    car2img = loadImage("images/car2.png")
    car3img = loadImage("images/car3.png")
    car4img = loadImage("images/car4.png")
    cong = loadImage("images/congralutions.png")
    
}

function setup(){
    createCanvas(displayWidth-30,displayHeight-180);

    db=firebase.database();
    
    game=new Game();
    game.getState();
    game.start()
  

}

function draw(){
    if(playerCount===2){
        game.update(1)
    }
    if(gameState===1){
        clear()
        game.play()
    }
   if(gameState===2){
       game.end()
   }
   
}

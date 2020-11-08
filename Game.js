class Game{
   
    constructor(){

    }

    //reading gamestate from database
    getState(){
        var gameref=db.ref('gameState')
        gameref.on("value", (data)=>{
            gameState=data.val()
        })
    }

    //writing (gamestate value) in database
    // in ref('/') it means refering to previously reffered node in database
   update(state){
       db.ref('/').update({
           gameState:state
       })
   }

//to start the form for the game and creates player in the database
    start(){
        if(gameState===0){

          player=new Player();
          player.getCount();

          form=new Form();
          form.display()

        }
        car1 = createSprite (100,300)
        car2 = createSprite (200,300)
        car3 = createSprite (300,300)
        car4 = createSprite (400,300)
        cars = [car1,car2,car3,car4]
        car1.addImage(car1img)
        car2.addImage(car2img)
        car3.addImage(car3img)
        car4.addImage(car4img)
    }
//play function to start the game
play(){
form.hideContent()
textSize(30)
text("Game Started",130,100)
Player.getplayerinfo()
player.getCarsAtEnd()
if(allPlayers!==undefined){
background("brown")
image(track,0,-displayHeight*4,displayWidth,displayHeight*5)
var index = 0
var x = 175
var y ;
    for(var p in allPlayers){
        index = index+1
        x = x+200
        y = displayHeight-allPlayers[p].distance
        cars[index-1].x=x
        cars[index-1].y=y
        fill ("white")
        text(allPlayers[p].name,x-30,y+80)
        if (index===player.index) {
            fill("yellow")
            ellipse(x,y,60,60)
            camera.position.x = displayWidth/2
            camera.position.y = cars[index-1].y
        }
    }
}
if(keyDown("up")&&player.index!=null&&player.distance<3550){
    player.distance+=50
    player.update()
}
if(player.distance>3500){
    gameState=2
    player.rank+=1
    this.update(2)
    form.status.html("Rank:"+player.rank) 
    form.status.position(10,10)
    Player.updateCarsAtEnd(player.rank)
}
drawSprites()
}
end(){
    if(player.rank<=2){
        imageMode(CENTER)
        image(cong,displayWidth/2,displayHeight/2)
    }
}

}
//design of an object contains functions and properties
//DOM P5 library (document object model)

class Form{
   
    constructor(){
      this.title=createElement('h1')
      this.input=createInput("")
      this.button=createButton("Play")
      this.greeting=createElement("h2")
      this.Reset=createButton("Reset")
      this.status=createElement("h1")

    }
    hideContent(){
      this.input.hide()
      this.greeting.hide()
      this.button.hide()
      this.title.hide()
    }
    
    display(){

      this.title.html("Car Racing Game")
      this.title.position(displayWidth/2-100,50)

     
     this.input.position(displayWidth/2,displayHeight/2-100)

     
       this.button.position(displayWidth/2,displayHeight/2-20)
      
      this.Reset.position(displayWidth-100,50)

      this.Reset.mousePressed( ()=>{
        game.update(0)
        player.updateCount(0)
        Player.updateCarsAtEnd(0)
      })
     this.button.mousePressed( ()=>{
      this.input.hide();
      this.button.hide();
        
       player.name =this.input.value()
       
        
        playerCount+=1
        player.index=playerCount
        player.update()
        player.updateCount(playerCount)

        this.greeting.html("Welcome "+ player.name + " !")
        this.greeting.position(displayWidth/2,displayHeight/2-100)

      } )
    }
    



 






}
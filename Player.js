class Player{
    
    constructor(){
       this.index=null;
       this.distance=0;
       this.name=null;  
       this.rank=null;
     }
   //reading data from database
    getCount(){
        var playerRef=db.ref("playerCount")
        playerRef.on("value",(data)=>{
            playerCount=data.val()
        })
    }
   //updates or write back in database
    updateCount(count){
        db.ref('/').update({
            playerCount:count
        })
    }
  //updates player's name and distance in the database
    update(){
        var index="players/player"+this.index
        db.ref(index).set({
            name:this.name,
            distance:this.distance
        })
    }
/* This function is fetching all the data about the players from database
   including their name and distance and storing in variable "allPlayers"
Example:
form.display() it means calling with object of class Form
Form.display() it means calling using class directly(it is possible
    only if function is static)

    STATIC FUNCTIONS: common functions which are called by class rather than their objects
form1.display()
form2.display()
Form.display()
*/
 static getplayerinfo(){
     db.ref("players").on("value",(data)=>{
         allPlayers=data.val()
     })
 }
getCarsAtEnd(){
    db.ref("carsAtEnd").on("value",(data)=>{
        this.rank=data.val()
    })
}
static updateCarsAtEnd(r){
    db.ref("/").update({
        carsAtEnd:r
    })
}
    
}

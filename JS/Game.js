class Game {
constructor (){



}
getstate() {
 var gamestateref = database.ref("gamestate")
 gamestateref.on ("value",function(data){
     gamestate = data.val()
 })

}
update(state) {
    database.ref('/').update({
       gamestate:state 
    })
}
start() {
if (gamestate === 0){
    player = new Player ()
    form = new Form ()
    player.getcount ()
    form.display()
}
car1 = createSprite (100,200)
car1.addImage(car1Image)
car2 = createSprite (300,200)
car2.addImage(car2Image)
car3 = createSprite (500,200)
car3.addImage(car3Image)
car4 = createSprite (700,200)
car4.addImage(car4Image)
cars = [car1, car2, car3, car4]
}
play() {
form.hide()
Player.getplayerinfo()
if (allplayers !== undefined){
    background("blue")
    image(track, 0,-displayHeight*4, displayWidth,displayHeight*5)
    //var displayposition = 
    var index = 0
    var x = 175
    var y
    for(var plr in allplayers){
        index = index+1
        x = x+200
        y = displayHeight - allplayers[plr].distance
        cars[index-1].x = x
        cars[index-1].y = y
        if(index === player.index){
        cars [index-1].shapeColor = "red"
        camera.position.x = displayWidth/2
        camera.position.y = cars[index-1].y
        }
        

    }
}
if (keyIsDown(UP_ARROW) && player.index !== null){
    player.distance += 50
    player.update()
    //console.log(player.distance)
}
if (player.distance>4200){
    gamestate === 2
}
drawSprites()
}
end(){
    console.log("Sometimes you win, sometimes you lose. This is just a trial of your life. Click on play again to win and if you've had a good time playing the game, you're a winner even if you lose.")
    console.log("end")
}
}
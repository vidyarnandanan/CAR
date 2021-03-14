class Form {
constructor() {
this.input = createInput ("Name")
this.button = createButton ("Come on")
this.greeting = createElement ("h3")
this.title = createElement("h2")
}
hide(){
this.greeting.hide() 
this.button.hide()
this.input.hide()
}
display(){
    this.title.html("Car Racing")
    this.title.position(displayWidth/2-50,0)
    //var input = createInput ("Your good name")
    this.input.position(displayWidth/2-40,displayHeight/2-80)
    //var button = createButton ("Ready")
    this.button.position(displayWidth/2+30,displayHeight/2)
    //var greeting = createElement ("h2")
    this.button.mousePressed (()=>{
     this.input.hide()
     this.button.hide()
     player.name = this.input.value()
     playercount+=1
     player.index = playercount
     player.update()
     player.updatecount(playercount)
     this.greeting.html("Bonjour "+player.name)
     this.greeting.position (displayWidth/2-70,displayHeight/4)
    })
}
}
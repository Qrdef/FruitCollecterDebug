class Form{

constructor()
{
this.title=createElement("h1")
this.reset=createButton("reset")
this.play=createButton("play")
this.nameInput=createInput("Enter Your Name Here")
this.greeting=createElement("h2")
}

hide()
{
this.title.hide()
this.play.hide()
this.nameInput.hide()
this.greeting.hide()

}

display()
{
this.title.html("FRUIT COLLECTOR")
this.title.position(350,50)
this.title.style("font-size","70px")
this.title.style("color","skyblue")
this.nameInput.position(550,400)
this.nameInput.style("width","200px")
this.nameInput.style("height","20px")
this.nameInput.style("background","lavender")
this.play.position(560,500)
this.play.style("width","200px")
this.play.style("height","40px")
this.play.style("background","lightpink")
this.reset.position(900,600)
this.reset.style("width","100px")
this.reset.style("height","30px")
this.reset.style("background","lightpink")
this.play.mousePressed(()=>{
this.nameInput.hide()
this.play.hide()
player.name=this.nameInput.value();
playerCount+=1
player.index=playerCount
player.update()
player.updateCount(playerCount)
this.greeting.html("Hello"+player.name)
this.greeting.position(400,250)
this.greeting.style("color","white")
this.greeting.style("font-size","100px")
})
this.reset.mousePressed(()=>{
player.updateCount(0)
game.update(0)
})
}




}
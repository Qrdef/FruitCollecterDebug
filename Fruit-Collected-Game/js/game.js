class Game{

constructor()
{}

getState()
{
var gameStateRef=database.ref("gameState")
gameStateRef.on("value",function(data){
gameState=data.val()
})

}

update(state)
{
database.ref("/").update({
gameState:state
})
}

async start()
{
if(gameState==0)
{
player = new Player()
var playerCountRef=await database.ref("playerCount").once("value")
//check if player exists
//.ref() to go to database
//.on() to read the value in database
//.val() to collect the value and come outside the database
if(playerCountRef.exists())
{
playerCount=playerCountRef.val()
player.getCount() 
}
form = new Form()
form.display()

}
 player1 = createSprite(200,500)
 player1.addImage("player1",player_img)
 player2 = createSprite(800,500)
 player2.addImage("player2",player_img)
players=[player1,player2]
}

play()
{
form.hide();
//static functions are called by class name
Player.getPlayerInfo();
image(bgImg,0,0,1000,800);
var x = 100;
var y = 200;
var index = 0;
drawSprites();
for(var plr in allPlayers)
{
index++
x=500-allPlayers[plr].distance
y=500
players[index-1].x=x
players[index-1].y=y
if(index==player.index)
{
fill("black")
textSize(25)
text(allPlayers[plr].name,x-25,y+25)
}
textSize(25)
fill("white")
text("player 1:"+allPlayers.player1.score,50,50)
text("player 2:"+allPlayers.player2.score,50,100)
}

//RIGHT ARROW
if(keyIsDown(RIGHT_ARROW) && player.index!==null)
{
player.distance-=10
player.update()
}

//LEFT ARROW
if(keyIsDown(LEFT_ARROW) && player.index!==null)
{
player.distance+=10
player.update() 
}

//FRUIT
if(frameCount%60==0)
{
fruits=createSprite(random(100,1000),0,100,100)
fruits.velocityY=6
var rand = Math.round(random(1,4))

switch(rand)
{
case 1:
 fruits.addImage("fruit1",fruit1Img)   
break;

case 2:
 fruits.addImage("fruit2",fruit2Img)   
break;

case 3:
 fruits.addImage("fruit3",fruit3Img)   
break;

case 4:
 fruits.addImage("fruit4",fruit4Img)   
break;

default:
break;
}
fruitGroup.add(fruits)

}
if(player.index!==null)
{
    //fruitGroups elements = .get()
for(var I=0;I<fruitGroup.length;I++)
{
if(fruitGroup.get(I).isTouching(players))
{
fruitGroup.get(I).destroy()
player.score+=1
player.update()
}
}
}
}

end()
{
console.log("GAME OVER")
}
}
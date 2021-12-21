class Player
{
constructor()
{
//player1,player2 where 1,2 is the idx
this.index=null;
this.name=null;
this.distance=0;
this.score=0;
           

}

getCount()
{
var playerCountRef=database.ref("playerCount")
playerCountRef.on("value",data=>{
playerCount=data.val()
})


}

updateCount(count)
{
database.ref("/").update({
playerCount:count
})

}
//"" of players node in database will be updated
//use + to do concatination
//.set to provide values to the node
update()
{
var playerIndex="players/player" + this.index
database.ref(playerIndex).set({
name:this.name,
distance:this.distance,
score:this.score
})


}

static getPlayerInfo()
{
var playerInfoRef=database.ref("players")
playerInfoRef.on("value",(data)=>{
allPlayers=data.val()
})
}

}


var canvas;
var bgImg;
var database;
var form, player, players;
var playerCount=0;
var gameState=0;
var allPlayers;
var player1,player2,player_img;
var fruit1Img , fruit2Img , fruit3Img , fruit4Img , fruits;
var fruitGroup; 
var score = 0;
var game;
var player1Score = 0;
var player2Score = 0;
function preload()
{
player_img=loadImage("assets/basket2.png")
fruit1Img=loadImage("assets/apple2.png")
fruit2Img=loadImage("assets/banana2.png")
fruit3Img=loadImage("assets/orange2.png")
fruit4Img=loadImage("assets/pineapple2.png")
bgImg=loadImage("assets/jungle.jpg")
}

function setup()
{
  canvas = createCanvas(1000,600)
  database = firebase.database();
  game = new Game()
  game.getState()
  game.start()
  fruitGroup=new Group()
}

function draw()
{
background(bgImg)

if(playerCount==2)
{
game.update(1)
}

if(gameState==1)
{
clear()
game.play()
}

if(gameState==2)
{
game.end()
}
}













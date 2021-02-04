var bg;
var gameState="Start";
var ship,simage;
var parrot,pimage;
var doctor,dimage;
var sea,seaimage;
var obstacle,o1,o2,o3,o4,obstacleGroup;
var message,mimage;
var life=5;
var score=0;
var score2=0;
var land;
var coconut,cimage,coconutGroup;
var basket,bimage;
var castle;
var queen,queenimage;
var sound,check,gameover,win;

function preload(){
bg=loadImage("bgimage.jpg")
simage=loadImage("ship.png")
pimage=loadImage("combined.png")
seaImage=loadImage("sea.jpg")
mimage=loadImage("message.jpg")
o1=loadImage("shark.png")
o2=loadImage("eship.png")
o3=loadImage("island1.png")
land=loadImage("jungle.jpg")
cimage=loadImage("images.png")
bimage=loadImage("basket2.png")
castle=loadImage("castle.jpg")
dimage=loadImage("doctor.png")
queenimage=loadImage("queen.png")
sound=loadSound("BG.wav")
check=loadSound("checkPoint.mp3")
gameover=loadSound("GAMEOVER.wav")
win=loadSound("win.wav")

}
function setup() {
  createCanvas(displayWidth,displayHeight);
  Form1=new Form()
  sea=createSprite(displayWidth/2,displayHeight/2-200,displayWidth,displayHeight)
  sea.visible=false;
  sea.addImage(seaImage)
  sea.scale=2;
  doctor=createSprite(100,displayHeight/2+150,30,100)
  doctor.visible=false;
  doctor.addImage(dimage)
  doctor.scale=1.5
  queen=createSprite(displayWidth-170,displayHeight/2+150,30,100)
  queen.visible=false;
  queen.addImage(queenimage)
  queen.scale=0.8;
  basket=createSprite(displayWidth/2,displayHeight/2+250,30,30)
  basket.addImage(bimage)
  basket.visible=false;
  ship=createSprite(displayWidth/2,doctor.y,50,30)
  ship.visible=false;
  ship.addImage(simage)
  parrot=createSprite(displayWidth/2,displayHeight/2,100,100)
  parrot.visible=false;
  parrot.addImage(pimage)
  parrot.scale=0.5;
  obstacleGroup=new Group()
  coconutGroup=new Group()
  sound.loop()
}

function draw() {
  background(bg);  

  if(gameState==="Start"){
    Form1.display()
  }


  if(gameState==="Intro"){
    clear()
    ship.visible=true;
    parrot.visible=true;
    sea.visible=true;
    drawSprites();
    fill("black")
    textSize(20)
    textStyle("Bold")
    textFont("Times New Roman")
    text("Hello! I am Polly.", displayWidth/2-100,displayHeight/2-70)
    text("Dr.Dunold is a animal doctor and is ", displayWidth/2-250,displayHeight/2-40)  
    text("helping the Queen of Gwenland. Help ", displayWidth/2-250,displayHeight/2-10)    
    text("him escape the obstacles and get the ", displayWidth/2-250,displayHeight/2+20)  
    text("cure of the Queen's illness...", displayWidth/2-150,displayHeight/2+50)
    textSize(26)
    text("PRESS ENTER TO START PLAYING", displayWidth/2-200,100)
  

     if(keyDown("Enter")){
       gameState="Play"
     }
  }
 
    if (gameState==="Play"){
      clear()
    sea.visible=true;
    parrot.visible=false;
    ship.visible=true;
    if(keyDown("LEFT_ARROW")){
      ship.x-=5;
    }
    if(keyDown("RIGHT_ARROW")){
      ship.x+=5;
    }
    drawSprites()
     sea.velocityY=7

     score=score+Math.round(getFrameRate()/60)

     if(sea.y>800){
       sea.y=displayHeight/2-200
     }

     if(score%100===0){
       check.play()
     }
     fill("Black")
     textSize(26)
     textFont("Times New Roman")
     textStyle("Bold")
     text("SCORE: "+score,50,80)
     text("LIFE LEFT: "+life,50,50)
     spawnObstacles()
     for(var i=0; i<obstacleGroup.length; i++){
     if(obstacleGroup.get(i).isTouching(ship)){
      obstacleGroup.get(i).destroy()
      life=life-1
  }

  }
     if(life!==0 && score>=1000){
       clear()
       gameState="Land"
     }

     if(life===0){
       gameState="End"
     }
  }
if(gameState==="Land"){
  background(land)
  sea.visible=false;
  parrot.visible=true;
  ship.visible=false;
  obstacleGroup.destroyEach()
  drawSprites()
  fill("black")
  textSize(20)
  textStyle("Bold")
  textFont("Times New Roman")
  text("Hey! Congrats.", displayWidth/2-100,displayHeight/2-70)
  text("You have crossed Level 1. Just a bit ", displayWidth/2-250,displayHeight/2-40)  
  text("more time and you will win the game ", displayWidth/2-250,displayHeight/2-10)    
  text("Remember! Obstacles can come from anywhere! ", displayWidth/2-250,displayHeight/2+20)  
  text("So be Ready ;-)", displayWidth/2-150,displayHeight/2+50)
  textSize(26)
  text("PRESS ENTER TO START PLAYING", displayWidth/2-200,50)
  if(keyDown("Enter")){
    gameState="Level2"
  }
  
}

if(gameState==="Level2"){
  background(land)
  sea.visible=false;
  parrot.visible=false;
  ship.visible=false;
  obstacleGroup.destroyEach()
  spawncoconuts()
  doctor.visible=false;
  basket.visible=true;
  drawSprites()
  fill("Black")
     textSize(26)
     textFont("Times New Roman")
     textStyle("Bold")
     text("SCORE: "+score2,50,80)
  if(keyDown("LEFT_ARROW")){
    basket.x-=10;
  }
  if(keyDown("RIGHT_ARROW")){
    basket.x+=10;
  }
  for (var i=0; i<coconutGroup.length; i++){
 if(coconutGroup.get(i).isTouching(basket)){
   coconutGroup.get(i).destroy()
   score2=score2+1
 }
 if(score2===10){
   gameState="WIN"
 }
}
 
}
if(gameState==="WIN"){
  clear()
  background(castle)
  win.play()
  sea.visible=false;
  parrot.visible=false;
  ship.visible=false;
  basket.visible=false;
  obstacleGroup.destroyEach()
  coconutGroup.destroyEach()
  doctor.visible=true;
  parrot.visible=true;
  queen.visible=true;
  drawSprites()
  
  fill("black")
  textSize(20)
  textStyle("Bold")
  textFont("Times New Roman")
  text("Congrats!", displayWidth/2-100,displayHeight/2-70)
  text("We knew you could make it to the end. ", displayWidth/2-250,displayHeight/2-40)  
  text("So we kept a trphy for you in advance ", displayWidth/2-250,displayHeight/2-10)    
  text("We are so grateful to you :-) ", displayWidth/2-250,displayHeight/2+20)  
  text("--The Queen,doctor and Polly!!", displayWidth/2-150,displayHeight/2+50)
}
  if(gameState==="End"){
    sea.visible=false;
    parrot.visible=false;
    ship.visible=false;
    background(0)
    gameover.play()
    fill("White")
     textSize(40)
     textFont("Times New Roman")
     textStyle("Bold")
    text("GAME OVER :-(",displayWidth/2-150,displayHeight/2)
    }

}

function spawnObstacles(){
  if(frameCount%100===0){
    obstacle=createSprite(random(50,displayWidth-50),-100,200,100)
    obstacle.velocityY=+(4+score/100)
    obstacle.lifetime=1000
    //obstacle.debug=true;
    var ran=Math.round(random(1,4))
    console.log(ran)
    switch(ran){
      case 1: obstacle.addImage(o1);
              obstacle.x=random(displayWidth-150,150);
              obstacle.setCollider("rectangle",0,0,50,200);
      break;
      case 2: obstacle.addImage(o2);
              obstacle.x=random(displayWidth-150,150);
              obstacle.setCollider("rectangle",0,0,50,100);
      break;
      case 3: obstacle.addImage(o3);
              obstacle.scale=1.9;
              obstacle.x=80;
              obstacle.setCollider("circle",0,0,100);
      break;
      case 4: obstacle.addImage(o3);
              obstacle.scale=1.9;
              obstacle.x=displayWidth-80;
              obstacle.setCollider("circle",0,0,100);
      break;
      default:break;
    }
    obstacleGroup.add(obstacle)

  }
}

function spawncoconuts(){
  if(frameCount%100===0){
    coconut=createSprite(random(50,displayWidth-50),0,200,100)
    coconut.addImage(cimage)
    coconut.scale=0.5;
    coconut.velocityY=random(2,8)
    coconut.lifetime=1000
    coconutGroup.add(coconut)

  }
}
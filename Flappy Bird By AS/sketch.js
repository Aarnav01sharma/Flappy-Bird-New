
var bgImg,bgSprite
var birdImg,birdSprite
var birdAnimation
var birdJumpingImg
var birdJumpingAnimation
var pipeUpImg1,pipeUpSprite
var pipeUpImg2
var pipeUpImg3
var pipeDownImg4,pipeDownSprite
var pipeDownImg5
var pipeDownImg6
var offSetX=0

function preload(){

bgImg= loadImage("Images/flappy-bird-background.jpg")
//birdImg= loadImage("Images/Flappybird.png")
birdAnimation= loadAnimation("Images/Flappybird.png")
//birdJumpingImg= loadImage("Images/FlappybirdJumping.png")
birdJumpingAnimation=loadAnimation("Images/Flappybird.png","Images/FlappyBirdJumping.png")
pipeUpImg1= loadImage("Images/FlappyBirdPipe1.png")
pipeUpImg2= loadImage("Images/FlappyBirdPipe2.png")
pipeUpImg3= loadImage("Images/FlappyBirdPipe3.png")
pipeDownImg4= loadImage("Images/FlappyBirdPipe4.png")
pipeDownImg5= loadImage("Images/FlappyBirdPipe5.png")
pipeDownImg6= loadImage("Images/FlappyBirdPipe6.png")

}

function setup(){

createCanvas(1080,600)
birdSprite= createSprite(100,300,20,20)
birdSprite.addAnimation("still",birdAnimation)
birdSprite.scale=0.5

}

function draw(){

image(bgImg,offSetX,0,width,height)
image(bgImg,offSetX+width,0,width,height)
offSetX=offSetX-1
if (offSetX <= -width) {
    
    offSetX=0

}

if (keyWentDown("SPACE")) {
    
    birdSprite.velocityY=-8
    birdSprite.changeAnimation("jumping",birdJumpingAnimation)

}

if (keyWentUp("SPACE")) {
 
    birdSprite.velocityY=+5

}

drawSprites()

}
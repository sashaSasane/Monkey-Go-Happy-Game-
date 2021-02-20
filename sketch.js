
var monkey, ground;
var bananaGroup,obstacleGroup;
var monkey_running,monkeyImage;
var banana, obstacleImage;
var bananaImage, obstacle; 
var FoodGroup;
var score;
var groundImage,invisibleGround;
var survivalTime=0;

function preload(){
monkey_running =   loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
bananaImage = loadImage("banana.png");
obstaceImage = loadImage("obstacle.png");
//monkeyImage = loadImage("monkey.png");
//groundImage = loadImage("ground.png");
}



function setup() {
createCanvas(600,500); 
background(150);
//create mokey
monkey=createSprite(80,315,20,20);
monkey.addAnimation("moving",monkey_running);
monkey.scale=0.1;

//creates ground 
ground=createSprite(400,350,900,10);
ground.velocityX=-4; 
ground.x=ground.width/2;
//create invisible ground for monkey to walk
invisibleGround = createSprite(200,190,400,10);
invisibleGround.visible = false;
  
  obstacleGroup = new Group();
  bananaGroup = new Group();

console.log(ground.x);
}


function draw() {
background("yellow");

  if(keyDown("space")&& monkey.y >= 100) {
    monkey.velocityY = -10;
  }
     
monkey.collide(invisibleGround); 
  //calling food,obstacles, and draw sprites functions 
Food();
obstacles();
drawSprites()
  
  //survival time
  stroke("white")
  textSize(20);
  fill("white")
  text("Score:"+ score,435,50)
  // survival time text 
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime= Math.ceil(frameCount/frameRate());
  text("Survival Time:"+survivalTime,8,50);

}
 
function Food() {
if (frameCount % 80 === 0) {
  banana = createSprite(600,100,40,10);
  banana.addImage(bananaImage)
  banana.y = Math.round(random(120,200))
  banana.scale = 0.3;
  banana.velocityX = -3;
  //(basically)total time banana appears 
  banana.lifetime = 134; 
  bananaGroup.add(banana);
}
}

function obstacles(){
if (frameCount % 300 === 0){
   var obstacle = createSprite(400,165,10,40);
   obstacle.velocityX = -6;
    obstacleGroup.add(obstacle);

}
}




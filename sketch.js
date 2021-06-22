var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImage;
var leaf,leafImage;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImage = loadImage("apple.png");
  leafImage = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x=mouseX;

  createApples();
  drawSprites();
}
function createApples(){
  
  if(frameCount%80===0){ 
  apple = createSprite(50,40,10,10);
  apple.addImage("APPLE",appleImage);
  apple.velocityY=2;
  apple.scale=0.2;
  apple.x=Math.round(random(50,350));
  }
  if(frameCount%80===0){ 
    leaf = createSprite(50,40,10,10);
    leaf.addImage("leaf",leafImage);
    leaf.velocityY=2;
    leaf.scale=0.2;
    leaf.x=Math.round(random(50,350));
    }
}
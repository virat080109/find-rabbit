var garden,rabbit,carrot,orangeLeaf,redImage;



function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png",);
}


function setup(){
  
  createCanvas(400,400);
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);


//creating boy running
rabbit = createSprite(160,340,20,20);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

function draw() {
  background(0);
  
   
  rabbit.x = World.mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  
   drawSprites();  
   spawnApples();
   spawnRedImage();



 var select_sprites = Math.random(random(2,3));

function spawnApples() {
  if(frameCount%60==0){
apple = createSprite(50,350,40,10)
apple.y=Math.round(random(10,60));
apple.addImage(appleImg);
apple.scale=0.07;
apple.velocityY = 3;
apple.lifetime = 100;
  
}
}
var  select_sprites = Math.random(random(1,3));

function spawnRedImage() {
  if(frameCount%60==0){
redL = createSprite(300,50,40,10);
redL.y=Math.round(random(10,60));
redL.addImage(redImg);
redL.scale=0.06;
redL.velocityY = 3;
redL.lifetime = 100;

  }
}

}

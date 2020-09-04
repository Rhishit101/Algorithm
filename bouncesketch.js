var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(200, 100, 30, 50);
  movingRect = createSprite(200, 600, 50, 30);
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
  fixedRect.velocityY= 3;
  movingRect.velocityY = -3;
}

function draw() {
  background(255,255,255);  

  if(fixedRect.x - movingRect.x < (movingRect.width/2 + fixedRect.width/2)
  && movingRect.x - fixedRect.x < (movingRect.width/2 + fixedRect.width/2)){
  
    fixedRect.velocityX = fixedRect.velocityX * -1;
    movingRect.velocityX = movingRect.velocityX * -1;
  
  }
  if(fixedRect.y - movingRect.y < (movingRect.height/2 + fixedRect.height/2)
  && movingRect.y - fixedRect.y < (movingRect.height/2 + fixedRect.height/2)){
  
    fixedRect.velocityY = fixedRect.velocityY * -1;
    movingRect.velocityY = movingRect.velocityY * -1;
  
  }


  



  drawSprites();
}
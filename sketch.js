var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 200, 30, 50);
  movingRect = createSprite(800, 200, 50, 30);
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
}

function draw() {
  background(255,255,255);  

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(fixedRect.x - movingRect.x < (movingRect.width/2 + fixedRect.width/2)
  && movingRect.x - fixedRect.x < (movingRect.width/2 + fixedRect.width/2) 
  && fixedRect.y - movingRect.y < (movingRect.height/2 + fixedRect.height/2) 
  && movingRect.y - fixedRect.y < (movingRect.height/2 + fixedRect.height/2)){

    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }


  drawSprites();
}
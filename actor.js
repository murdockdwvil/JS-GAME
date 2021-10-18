//actor's code
let xActor = 85;
let yActor =366;
let collision =false;

//Points' code
let myPoints = 0
let lifePoints = 5

function showActor(){
  image(actorImage,xActor,yActor,30,30);
}

function moveActor(){
   if (keyIsDown(UP_ARROW)){
    yActor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    yActor += 3;
}
}

function verifyCollision(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for(let i = 0; i < carsImage.length; i = i + 1){
    collision = collideRectCircle(xCars[i], yCars[i], carLength, carHeight, xActor, yActor, 15);
    if (collision && lifePoints > 0){
        returnPosition();
        lifePoints -= 1;
    }
  }
}

function collided(){
  yActor = 366;
}

function scoreBoard(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255,240,60))  
  text(myPoints,width/4,27);
  image(coinImage,95,9,20,20)
}

function pointCounter(){
  if(yActor < 15){
    myPoints += 1;
    returnPosition();
  }
}

function returnPosition(){
  yActor = 366;
}

function lifePlayer(){
  textSize(25);
  textAlign(CENTER);
  fill(color(0, 0, 0));
  text(lifePoints, width / 10, 27)
  image(heartImage,20,9,20,20)
}

function win(){
  if(myPoints > 9){
       textSize(30);
       fill(color(0,0,0));
       text("Well Done!!!\n You Win!!",width/2,height /2);
        textSize(15);
         fill(color(0,0,0));
         text("Press SPACEBAR to play again",width/2,height /1.5);
  if(keyIsDown(32)){
      restartGame();
    }
  }
}

function lose(){
  if(lifePoints < 1){
       textSize(30);
       fill(color(0,0,0));
       text("Try Again!",width/2,height /2);
        textSize(15);
         fill(color(0,0,0));
         text("Press SPACEBAR to play again",width/2,height /1.5);
  if(keyIsDown(32)){
      restartGame();
    }
  }
}

function restartGame(){
    myPoints = 0;
    lifePoints = 5;
    returnPosition();
}

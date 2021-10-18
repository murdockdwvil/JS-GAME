function setup(){
  createCanvas(500,400);
  console.log("\t\tMade by Beatriz Lúcia.");

}

function draw(){
  background(highwayImage);
  showActor();
  showCar();
  moveActor();
  moveCar();
  backInicialPosition();
  verifyCollision();
  scoreBoard();
  pointCounter();
  lifePlayer();
  win();
  lose();
}
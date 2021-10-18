// cars variable

let xCars = [600,600,600,600,600,600]
let yCars = [40,96,150,210,270,310] 
let carsSpeed = [2,3.2,2.5,5,3.3,2.3]
let carLength = 50;
let carHeight = 40;

function showCar(){
    for(let i = 0; i < carsImage.length; i = i + 1){
  image(carsImage[i], xCars[i], yCars[i], carLength, carHeight);
    }
}
function moveCar(){
  for (let i =0; i < carsImage.length; i = i + 1){
    xCars[i] -= carsSpeed[i];
  }
}

function backInicialPosition(){
  for (let i = 0; i < carsImage.length; i = i + 1){
    if (crossallthescreen(xCars[i])){
      xCars[i] = 600;
    }
  }
}

function crossallthescreen(xCars){
  return xCars < -50;
}
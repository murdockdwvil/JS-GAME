//game's images

let highwayImage;
let actorImage;
let carOneImage;
let carTwoImage;
let carThreeImage;

function preload(){
    highwayImage = loadImage("estrada.png")
    actorImage = loadImage("ator-1.png")
    carOneImage = loadImage("carro-1.png")
    carTwoImage = loadImage("carro-2.png")
    carThreeImage = loadImage("carro-3.png")
    carsImage = [carOneImage,carTwoImage,carThreeImage,carOneImage,carTwoImage,carThreeImage]
    heartImage = loadImage("heart.png")
    coinImage = loadImage("coin.png")
}

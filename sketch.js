
function preload(){
seaImg=loadImg("sea.png")
ship1Img=loadImg("ship-1.png")
ship2Img=loadImg("ship-2.png")
ship3Img=loadImg("ship-3.png")
ship4Img=loadImg("ship-4.png")

}

function setup(){
  createCanvas(400,400);
  sea=crearteSprite(200,200)
  sea.addImg(seaImg)
}

function draw() {
  background("blue");
  ship1Img.x = World.mouseX;
}


if(sea.x <0){
sea.x=sea.width/2  
}

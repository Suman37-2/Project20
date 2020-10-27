var car,wall;
var speed,weight;
var deformation;
var carquality="Wait for collision";

function setup() {
  createCanvas(1600,400);
 speed=random(55,90);
 weight=random(400,1500);
 car=createSprite(50,300,50,50);
 car.velocityX=speed;
 wall=createSprite(1500,200,60,height/2);
 wall.shapeColor=color("blue");
}

function draw() {
  background("lightblue");  
  if(wall.x-car.x<=(car.width+wall.width)/2){
    car.velocityX=0;
    deformation=0.5*weight*speed*speed/22509;
    if(deformation<100){
      car.shapeColor="green";
      carquality="Good";
    }
    if(deformation<180 && deformation>100){
      car.shapeColor="yellow";
      carquality="Average";
    }
    if(deformation>180){
      car.shapeColor="red";
      carquality="Bad";
    }
  }
  textSize(18);
  stroke("pink");
  fill("black");
  text("Car Reliability Testing Simulator",800,50);
  textSize(15);
  text("Car Quality : "+carquality,845,80);
  drawSprites();
}

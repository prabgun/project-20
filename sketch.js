var car, wall;
var speed, weight;
var deformation;
function setup() {
  createCanvas(1855, 400);
  car =  createSprite(20, 200, 20, 20);
  car.shapeColor = "white";
  wall = createSprite(1800, 200, 20, 100);
  speed = random(55, 90);
  weight = random(400, 1500)
}

function draw() {
  background(0, 0, 0);  
  car.velocityX = speed;
  deformation = 0.5 * speed ** 2 * weight / 22550
  if (car.collide(wall)) {
    car.velocityX = 0;
    if (deformation < 80) {
      car.shapeColor = "green";
    }
    if (deformation > 80 && deformation < 180) {
      car.shapeColor = "yellow";
    }
    if (deformation > 180) {
      car.shapeColor = "red";
    }
  }
  
  drawSprites();
}
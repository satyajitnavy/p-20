var car, wall;
var speed, weight;



function setup() {
  createCanvas(800, 400);

  speed = random(50, 90);
  weight = random(400, 1500);

  wall = createSprite(700, 200, 60, height / 2);
  wall.shapeColor = "grey";

  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;
  car.shapeColor = "white";
 
}

function draw() {
  background("black");

  if (wall.x - car.x < (car.width + wall.width) / 2) {
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed / 22509;
    if (deformation > 180) {
      car.shapeColor = "red";
    }

    if (deformation < 180 && deformation > 100) {
      car.shapeColor = "blue";
    }
    if (deformation < 100) {
      car.shapeColor = "green";
    }
  }


  drawSprites();
}
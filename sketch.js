var bullet, wall;
var speed, weight, thickness;

function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83)
  bullet = createSprite(50,200,50,10)
  bullet.velocityX = speed;
  wall=createSprite(1500,200,thickness,height/2)
}

function draw() {
  background(255,255,255);  
  if (hasCollided(bullet, wall)) {
         bullet.velocityX = 0;
         var damage = 0.5 * weight * speed * speed / thickness * thickness * thickness
         if(damage < 10) {
           wall.shapeColor = "green";
         }
         if(damage > 10) 
         {
           bullet.shapeColor = "red"
         
         }
    }
  drawSprites();
}

function hasCollided(bullet, wall) {
  if (wall.x - bullet.x < bullet.width/2 + wall.width/2) {
    return true 
  }
   else {
      return false
  }
}
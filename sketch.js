var bullet,wall;
var speed, weight,thickness;



function setup() {
  createCanvas(1600,400);

  speed=Math.round(random(55,90))
  weight=Math.round(random(400,1500))
  thickness=random(22,83)

  bullet=createSprite(50, 200, 50, 20);
  bullet.velocityX = speed;
  bullet.shapeColor="white";
  
  wall=createSprite(1200,200,thickness,height/2)
  wall.shapeColor=color(80,80,80);
  
}

function draw() {
  background("black");  

  if (wall.x-bullet.x < (bullet.width+wall.width)/2){ 
    bullet.velocityX=0;
    var deformation=0.5 * weight * speed* speed/22509;
    if(deformation>10) 
    {
      wall.shapeColor="green";
    }
   if(deformation<10)
   {
     wall.shapeColor=("red")
   }
  }
  

  
    
 

      

  drawSprites();
}
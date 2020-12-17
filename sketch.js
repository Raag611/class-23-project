var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var wall,wall2,wall3,wall3Body,wall2Body,wallBody;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	wall=createSprite(290,610,20,100);
	wall.shapeColor="red"
	wall2=createSprite(510,610,20,100);
	wall2.shapeColor="red"
	wall3=createSprite(400,650,200,20)
	wall3.shapeColor="red"

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
 
	wall3Body = Bodies.rectangle(400,650,200,20 , {isStatic:true} );
	 World.add(world, wall3Body);
	 
	wall2Body = Bodies.rectangle(510,610,20,100, {isStatic:true} );
 	World.add(world, wall2Body);
	
	 wallBody = Bodies.rectangle(290,610,20,100 , {isStatic:true} );
 	World.add(world, wallBody); 
	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  Engine.update(engine) 
  background(0);

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
 

}

function keyPressed() {
 	
 if (keyCode === DOWN_ARROW) {
    Body.setStatic(packageBody,false)
	
	
    
  }
}




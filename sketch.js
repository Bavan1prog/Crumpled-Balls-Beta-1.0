

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = new Ground(400,700,900,50);
	 Dust = new Dustbin(750,630,20,90);
   Dust2 = new Dustbin(650,630,20,90);
	Paper = new Paper(150,650);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  Paper.display();
  ground.display();
  Dust.display();
  Dust2.display();
  drawSprites();
 
}

function keyPressed(){
if(keyCode === UP_ARROW){
Matter.Body.applyForce(Paper.body,Paper.body.position,{x:80,y:-80})
}

}




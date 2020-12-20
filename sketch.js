
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Render= Matter.Render;


var ground1;
var side1,side2,side3;
var ball;

var bin,binImg;

function preload(){
	binImg=loadImage("dustbingreen.png");

}


function setup() {
	createCanvas(1100, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bin=createSprite(970,417,50,50);
	bin.addImage(binImg);
	bin.scale=0.45;

	ball=new Paper(40,40,40);
	side2=new Side(920,470,10,200);
	side1=new Side(970,486,120,10);
	side3=new Side(1020,470,10,200);
	
	ground1=new Ground(650,height,1500,20);
	

	/*var render=Render.create({
		element:document.body,engine:engine,
		options:{
			width:1200,
			height:700,
			wireframes:false
		}
	});*/


	Engine.run(engine);
	//Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  //Engine.update(engine);

  ball.display();
  drawSprites();
  side2.display();
  side3.display();
  ground1.display();
  
  side1.display();
  //keypressed();
  //console.log(ball.x)
 
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:345,y:-345})
	}
}

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var treeImage, skyImage, boyImage, score;

function preload()
{
	treeImage = loadImage("Plucking mangoes/tree.png");
	skyImage = loadImage("Plucking mangoes/download.jpg");
	boyImage = loadImage("Plucking mangoes/boy.png");
}

function setup() {
	createCanvas(1500, 700);
	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	mango1 = new mango(1200,150,40);
	mango2 = new mango(1100,250,40);
	mango3 = new mango(1400,270,40);
	mango4 = new mango(950,200,40);
	mango5 = new mango(1000,350,40);
	mango6 = new mango(1095,100,40);
	mango7 = new mango(1250,320,40);
	mango8 = new mango(850,320,40);

	stone = new Stone(200,410,40);

	sling = new Launcher(stone.body,{x:200,y:410});

	score = 0;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  
image (skyImage,0,0,1500,700);  
image (treeImage,700,0,800,800);
image (boyImage,150,300,300,450);

mango1.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();
mango6.display();
mango7.display();
mango8.display();
stone.display();
sling.display();

fill ("red");
text ("Score: "+score,100,100);
 
}

function detectCollision(lstone,lmango){
	mangoBodyPos = lmango.body.position;
	stoneBodyPos = lstone.body.position;

	var distance = dist(stoneBodyPos.x,stoneBodyPos.y,mangoBodyPos.x,mangoBodyPos.y);
	if (distance<=lmango.r + lstone.r){
		Matter.Body.setStatic(lmango.body,false);
		score += 1;
	}

}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body,{x:100,y:200});
		sling.attach(stone.body);
	}
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y: mouseY});
}

function mouseReleased(){
	sling.fly();
}




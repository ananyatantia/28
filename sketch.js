var tree,boy,mango1,mango2,mango3,mango4,stone,boyimg
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	boyimg= loadImage("boy.png")
}

function setup() {
	createCanvas(800, 700);

 
	engine = Engine.create();
world = engine.world;
mango1 = new Mango (20,10)
mango2 = new Mango (20,50)
mango3 = new Mango (50,10)
mango4 = new Mango (50,50)
stone = new Stone(50,50)

tree = new Tree (200,100)



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  boy = createSprite(200,200,20,20)
  boy.addImage("boyimg")
  background(0);
  tree.display()
  stone.display()
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  drawSprites();
 
}




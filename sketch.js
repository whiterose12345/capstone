
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var fire, fire2, fire3, fire4, fireimg;
var water, waterimg,waterimg2, waterball;
var tower, towerimg;
var waterarr = [];
var ballarr = [];
var angle;


function preload(){

  waterimg = loadImage('image-1.png.png');
  waterimg2 = loadImage('image-1.png (1).png');

  fireimg = loadImage('image.gif');
  towerimg = loadImage('t.png');
}

function setup() {
  createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;
  
  //tower = createSprite(200,200,500,20);
  
  fire = createImg('image.gif')
  fire.position(400,300)
  fire.size(60,60);
  fire.mouseClicked(fireRemove1)

  fire2 = createImg('image.gif')
  fire2.position(300,500,)
  fire2.size(60,60);
  fire2.mouseClicked(fireRemove2)

  fire3 = createImg('image.gif')
  fire3.position(450,400,)
  fire3.size(60,60);
  fire3.mouseClicked(fireRemove3)

  fire4 = createImg('image.gif')
  fire4.position(450,500,)
  fire4.size(60,60);
  fire4.mouseClicked(fireRemove4)

  
}


function draw() 
{
  background(51);
  Engine.update(engine);
  

  water = new Water(mouseX,mouseY,0,0,angle);


  //fire = new Fire(400,300,0,0);
 // fire2 = new Fire(300,600,0,0);
  //fire3 = new Fire(450,400,0,0);
  //fire4 = new Fire(450,500,0,0);

 
  
  waterarr.push(fire);
  var waterball = new Waterball(mouseX, mouseY,100,100);
 

  tower = new Tower(400,400,0,0);
  
  push()
  image(towerimg,tower.x,tower.y,500,500);
  pop()

    waterball.display();
  tower.display()
  water.show()
 // fire.show()
  //fire2.show()
  //fire3.show()
  //fire3.show()
  //hehe()

  
  //image(fireimg,fire.x,fire.y,60,60)
  //image(fireimg,fire2.x,fire2.y,60,60)
  //image(fireimg,fire3.x,fire3.y,60,60)
  //image(fireimg,fire4.x,fire4.y,60,60)
  
  push();
  image(waterimg2, mouseX - 10, mouseY + 40, water.x , water.y);
  pop();
  
  ellipseMode(RADIUS);
  imageMode(CENTER);
 
}

function collide(body,body){
  if(body!= null){
    var d = dist(body.x,body.y,body.x,body.y)
    if(d<=80){
      World.remove(engine.world,body)
      body = null
      return true
    }
    else{
      return false
    }
  }
}
//function hehe() {
//var colide = Matter.SAT.collides(fire.body, water.body)

//if(colide.collided){
//  Matter.World.remove(world,fire.body);
//}

//}

function keyReleased() {
  if (keyCode === DOWN_ARROW) {

   // waterarr[waterball.length - 1].shoot();
  }
}

function fireRemove1() {
  fire.remove()
}
function fireRemove2() {
  fire2.remove()
}
function fireRemove3() {
  fire3.remove()
}
function fireRemove4() {
  fire4.remove()
}
class Water 
{
  constructor(x, y, w,h,angle) 
  {
    
    this.pic = loadImage('image-1.png.png');
    this.body = Bodies.rectangle(x, y, w, h, );
    this.w = w;
    this.h = h;
    this.angle = angle;
    World.add(world, this.body);
  }

  show() {
    if (keyIsDown(RIGHT_ARROW) && this.angle<70  ) {
      this.angle += 1;
    }

    if (keyIsDown(LEFT_ARROW) && this.angle>-30 ) {
      this.angle -= 1;
    }
    
    let pos = this.body.position;
    push();
    rectMode(CENTER);
    noStroke();
    fill(148,127,146);
    rect(pos.x,pos.y, this.w, this.h);
    pop();
    
    push()
    imageMode(CENTER);
    rotate(this.angle);
    image(this.pic,this.x,this.y,this.w,this.h);
    pop()


  }

  remove(index) {
    this.isRemoved = true;
    Matter.World.remove(world, this.body);
    delete playerArrows[index];
    
  } 
}



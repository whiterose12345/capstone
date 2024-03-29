class Waterball {
    constructor(x, y,w,h) {
      var options = {
        isStatic: true
      };
      this.r = 30;
      this.speed = 0.05;
      this.body = Bodies.circle(x, y, this.r, options);
      this.w = w;
      this.h = h;
      this.animation = [this.image];
      this.trajectory = [];
      this.isSink = false;
      World.add(world, this.body);
    }
  
    animate() {
      this.speed += 0.05;
    }
  
    remove(index) {
      this.isSink = true;
      Matter.Body.setVelocity(this.body, { x: 0, y: 0 });
  
      this.animation = waterSplashAnimation;
      this.speed = 0.05;
      this.r = 150;
      setTimeout(() => {
        Matter.World.remove(world, this.body);
        delete balls[index];
      }, 1000);
    }
  
    shoot() {
      var newAngle = cannon.angle - 28;
      newAngle = newAngle *(3.14/180)
      var velocity = p5.Vector.fromAngle(newAngle);
      velocity.mult(0.5);
      Matter.Body.setStatic(this.body, false);
      Matter.Body.setVelocity(this.body, {
        x: velocity.x *(180/3.14), y: velocity.y * (180/3.14)});
    }
  
    display() {
      var angle = this.body.angle;
      var pos = this.body.position;
      var index = floor(this.speed % this.animation.length);
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      ellipse(this.x,this.y,60,60);
      pop();
  }
     
      shoot() {
        var newAngle = waterball.angle - 28;
        newAngle = newAngle *(3.14/180)
        var velocity = p5.Vector.fromAngle(newAngle);
        velocity.mult(0.5);
        Matter.Body.setStatic(this.body, false);
        Matter.Body.setVelocity(this.body, {
          x: velocity.x *(180/3.14), y: velocity.y * (180/3.14)});
      }
    
  
    }

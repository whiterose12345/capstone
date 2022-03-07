class Fire {
    constructor(x,y,w,h){
      
        var options = {
            isStatic: true
       };

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.pic = loadImage("image.gif")
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        World.add(world, this.body);
    }

    show() {
        let pos = this.body.position;
        push();
        rectMode(CENTER);
        noStroke();
        fill(148,127,146);
        rect(pos.x,pos.y, this.w, this.h);
        pop();
        
        push()
        imageMode(CENTER);
        image(this.pic,this.x,this.y,this.w,this.h);
        pop()
    
        image(this.pic,mouseX,mouseY,80,80)
      }
}
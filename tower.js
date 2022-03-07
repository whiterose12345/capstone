class Tower{
    constructor(x,y,w,h){
       
        
        this.body = Bodies.rectangle(x,y,w,h);
        this.w = w;
        this.h = h;
        this.x = x;
        this.y = y;

        World.add(world, this.body);
    }
    
    display(){
        var pos = this.body.position;


        push();

        rectMode(CENTER);
        strokeWeight(4);
        stroke("white");
        rect(this.x,this.y,this.w,this.h);
        rect(0,0,this.x, this.h);
        pop();

       
    }
}
class Stone{
    constructor(x,y,r){
        var options = {
            isStatic: false,
            friction: 1,
            restitution: 0,
            density: 1.2
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.image = loadImage("Plucking mangoes/stone.png");
        this.body = Bodies.circle(this.x,this.y,this.r/2,options);
        World.add(world,this.body);
    }
    display(){
        var stonePos=this.body.position;
		push()
		translate(stonePos.x, stonePos.y);
		imageMode(CENTER);
		ellipseMode(CENTER);
		image(this.image,0,0,this.r*2, this.r*2)
		pop()
    }
}
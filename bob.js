class bob {
constructor(x, y,radius){
  var options = {
    isStatic:false,
    restitution:0.3,
    friction:0.5,
    density:1.2,
  }
 this.x=x
 this.y=y
 this.radius=radius;
 this.body=Bodies.circle(this.x,this.y,this.radius/2,options)
World.add(world, this.body)
}
display(){
  var angle = this.body.angle;
  var bobpos=this.body.position;
  push();
  translate(bobpos.x,bobpos.y);
  rectMode(CENTER)
  fill("lightblue")
  ellipse(0,0,this.radius,this.radius) 
  pop();
  }


}
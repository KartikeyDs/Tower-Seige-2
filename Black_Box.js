class Black_Box{
constructor(x, y, width, height){
var options = {
isStatic:false
}
this.visibility = 225;
this.x = x;
this.y = y;
this.width = width;
this.height = height;
this.body = Bodies.rectangle(x,y,this.width,this.height, options)
World.add(world, this.body);
}
display(){
if(this.body.speed<3){
var pos = this.body.position;
push();
translate(pos.x, pos.y)
rectMode(CENTER);
fill(0);
rect(0,0,this.width, this.height)
pop()


}else{
World.remove(world, this.body)
push();
this.visibility = this.visibility-5;
//tint(255, this.visibility)
//image(this.image, this.body.position.x, this.body.position.y, 50,50)
pop();
}
}

}

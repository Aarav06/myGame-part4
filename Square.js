
class Square{
    constructor(x, y, r) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
        }
        this.body = Bodies.circle(x, y, r, options);
        this.image = loadImage("ball.png");
        World.add(world, this.body);
      }
      display(){
        fill("blue");
        
        push();
        translate(this.body.position.x, this.body.position.y);
        
        imageMode(CENTER);
        image(this.image, 0, 0, 40, 40);
        pop();

      }
  }
  
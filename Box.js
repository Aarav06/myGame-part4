class Box{
  constructor(x, y, width, height) {
      var options = {
          'restitution':0.2,
          'friction':0.7,
          'density':0.8,

      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.Visiblity = 255;
    }
    display(){
      if(this.body.speed < 6){
          fill("red");
          push();
          translate(this.body.position.x, this.body.position.y);
          rectMode(CENTER);
          rect( 0, 0, this.width, this.height);
          pop();
       }
       else{
        World.remove(world, this.body);
        push();
        this.Visiblity = this.Visiblity - 7;
        tint(255,this.Visiblity);
        translate(this.body.position.x, this.body.position.y);
        pop();
      } 
    }
    score() {
      if(this.Visiblity<0&&this.Visiblity>-105) {
        score++;
      }
    }
  }


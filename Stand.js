class Stand{
    constructor(x, y, width, height) {
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.Visiblity = 255;
      }
      display(){
            fill("red");
            push();
            translate(this.body.position.x, this.body.position.y);
            rectMode(CENTER);
            rect(0, 0, this.width, this.height);
            pop();
      }
    }
  
  
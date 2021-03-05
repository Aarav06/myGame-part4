const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var player;
var gameState = 0;
var input;
var score = 0;
var submit;
var submit1;
var contin;
var playerName;
var wall, wall1, wall2, wall3, wall4, wall5;
var player_load;
var wallGroup;
var goal;
var contin1;
var ans;
var cap;
var rand;
var reset;
var inputCount;
var gem_load;
var ball;
var sling;
var block1,block2,block3,block4,block5,block6,block7,block8,block9, block10,block11, block12, block13,block14,block15,block16,block17,block18,block19,block20,block21;
function preload() {
  player_load = loadImage("character.png")
  gem_load = loadImage("gem.png")
}

function setup() {
  createCanvas(1200,800);
  wallGroup = new Group();
  edges = createEdgeSprites();
  engine = Engine.create();
  world = engine.world;
  input = createInput('Type name here');
  inputCount = createInput('How many gems are there?');
  ans = createInput('Type answer here');
  submit = createButton('Enter');
  reset = createButton('Play Again');
  submit1 = createButton('Enter');
  contin = createButton('Continue');
  contin1 = createButton('Continue');
  wall = createSprite(300, 350, 300, 30);
  wall1 = createSprite(600, 200, 30, 300);
  wall2 = createSprite(200, 600, 30, 270);
  wall3 = createSprite(750, 400, 30, 270);
  wall4 = createSprite(890, 600, 30, 270);
  wall5 = createSprite(600, 400, 400, 50);
  wall.shapeColor="purple";
  wall1.shapeColor="purple";
  wall2.shapeColor='purple';
  wall3.shapeColor='purple';
  wall4.shapeColor='purple';
  wallGroup.add(wall);
  wallGroup.add(wall1);
  wallGroup.add(wall2);
  wallGroup.add(wall3);
  wallGroup.add(wall4);
  wallGroup.add(wall5);
  player = createSprite(30, 700, 1, 1);
  goal = createSprite(1100, 100, 40, 40);
  goal.shapeColor = "yellow";
  wall5.shapeColor = "blue";
  wall5.velocityX = 10;
  player.addImage(player_load);
  block1 = new Box(200, 200, 30, 30);
  block2 = new Box(230, 200, 30, 30);
  block3 = new Box(260, 200, 30, 30);
  block4 = new Box(290, 200, 30, 30);
  block5 = new Box(320, 200, 30, 30);
  block6 = new Box(350, 200, 30, 30);
  block7 = new Box(380, 200, 30, 30);
  block8 = new Box(410, 200, 30, 30);
  block10 = new Box(410, 170, 30, 30);
  block11 = new Box(410, 170, 30, 30);
  block12 = new Box(410, 170, 30, 30);
  block13 = new Box(410, 170, 30, 30);
  block14 = new Box(410, 170, 30, 30);
  block15 = new Box(410, 170, 30, 30);
  block16 = new Box(200, 170, 30, 30);
  block17 = new Box(200, 170, 30, 30);
  block18 = new Box(200, 170, 30, 30);
  block19 = new Box(200, 170, 30, 30);
  block20 = new Box(200, 170, 30, 30);
  block21 = new Box(200, 170, 30, 30);

  block9 = new Stand(300, 300, 300, 30);

  ball = new Square(800, 300, 20);
  sling = new SlingShot(ball.body,{x:800, y:200} );
  createBlocks();
}

function draw() {
  background('blue'); 
  Engine.update(engine);
  wall5.bounceOff(edges);
  if(gameState == 0) {
    inputCount.hide();
    var input_value = input.value();
    if(input_value!=null && input_value!="Type name here"){ 
       submit.mousePressed(()=>{
       input.hide(); 
       submit.hide(); 
       playerName = input.value();
       gameState = 1; 
      }); 
    }
    ans.hide();
    contin.hide();
    contin1.hide();
    reset.hide();
    submit1.hide();
    textSize(20);
    fill('white');
    text('Please Enter Your Name', 460, 200)
    input.position(500, 400);
    submit.position(550, 500);
  }
  if(gameState ==  1){
    contin.show();
    background('green');
    textSize(25);
    fill('white');
    text('Welcome ' + playerName, 500,200);
    textSize(20);
    text('How to play this game', 500, 300);
    textSize(15);
    text('1) Use the Arrow keys to move', 500, 400);
    text('2) Navigate through the levels', 500, 430);
    text('3) Have fun! :)', 500, 460);
    contin.position(550, 500);
        contin.mousePressed(()=>{
            contin.hide();
            gameState = 2;
        });
  }
  if(gameState == 2) {
    background('red');
    player.scale = 0.13;
    
    player.collide(edges);
    player.collide(wallGroup);
    if(keyDown(UP_ARROW)) {
      player.y = player.y-5;
    }
    if(keyDown(DOWN_ARROW)) {
      player.y = player.y+5;
    }
    if(keyDown(LEFT_ARROW)) {
      player.x = player.x-5;
    }
    if(keyDown(RIGHT_ARROW)) {
      player.x = player.x+5;
    }
    wall1.display();
    if(player.isTouching(goal)) {
      player.y = 1000;
      gameState = 3;
    }
  drawSprites();
  fill("white");
  textSize(20);
  text("Reach the goal!", 20, 30);
  text("LEVEL 1", 1100, 30);
  }
  if(gameState === 3) {
    contin1.position(550, 500);
    textSize(40);
    background("lightGreen");
    fill("white");
    text("Well Done! Click to move onto lvl 2", 300, 300);
    contin1.show();
    contin1.mousePressed(()=>{
      contin1.hide();
      gameState = 4;
  });
  }
  if(gameState === 4) {
    textSize(40);
    background("pink");
    ans.show();
    submit1.show();
    fill("white");
    text("Quiz:", 200, 200);
    textSize(20);
    text("LEVEL 2", 1100, 30);
    textSize(25);
    text("What is the capital of Belgium?", 200, 270);
    ans.position(500, 400);
    submit1.position(550, 500);
    submit1.mousePressed(()=>{
       ans.hide();
       submit1.hide();
       cap = ans.value();
       console.log(cap);
       if(cap === 'Brussels'||cap === 'brussels') {
         gameState = 5;
       } else{
         gameState = 6; 
       }
    });
  }
  if(gameState === 5) {
    background("green");
    contin.show();
    contin.position(544, 500);
    contin.mousePressed(()=>{
        contin.hide();
        gameState = 7;
    });
    fill("white");
    textSize(40);
    text("Correct!", 500, 400);
  }
  if(gameState === 6) {
    background("red");
    reset.position(550, 550);
    reset.show();
    textSize(40);
    fill("white");
    text("Inorrect!", 500, 400);
    textSize(30);
    text("The answer was not: " + cap, 400, 500);
    reset.mousePressed(()=>{
      player.y = 700;
      player.x = 30;
      reset.hide();
      gameState = 2;
   });
  }
  if(gameState === 7) {
    background("cyan");

    submit.show();
    inputCount.show();
    submit.position = 550, 500;
    var input_value = inputCount.value();
    inputCount.position(500, 400);

      submit.mousePressed(()=>{
      inputCount.hide(); 
      submit.hide(); 
      if(input_value === '16') {
        gameState = 9;
      }
      else{
        gameState = 10;
      }
     }); 
 
    box1.visible = true;
    box2.visible = true;
    box3.visible = true;
    box4.visible = true;
    box5.visible = true;
    box6.visible = true;
    box7.visible = true;
    box8.visible = true;
    box9.visible = true;
    box10.visible = true;
    box11.visible = true;
    box12.visible = true;
    box13.visible = true;
    box14.visible = true;
    box15.visible = true;
    box16.visible = true;

    wall.destroy();
    wall1.destroy();
    wall2.destroy();
    wall3.destroy();
    wall4.destroy();
    wall5.destroy();
    goal.destroy();
    console.log(rand);
    drawSprites();
    fill("white");
    textSize(20);
    text("LEVEL 3", 1100, 30);
  }
  if(gameState == 9) {
    background("purple");
    textSize(40);
    fill("white");
    text("Correct", 510, height/2);
    contin.show();
    contin.position(544, 500);
    contin.mousePressed(()=>{
        contin.hide();
        gameState = 11;
    });
  }
  if(gameState == 10) {
    background("black");
    textSize(40);
    fill("white");
    text("Incorrect", 500, height/2);
    textSize(25);
    text("Reload the page to play again", 420, 500);
  }
  if(gameState == 11) {
    background("purple");
    fill("white");
    textSize(20);
    text('Drag to launch the ball', 200, 500);
    text('Press space to reset the ball', 170, 600);
    text('score '+score, 500, 200);
    text("LEVEL 4", 1100, 30);
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();

    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block10.score();
    block11.score();
    block12.score();
    block13.score();
    block14.score();
    block15.score();
    block16.score();
    block17.score();
    block18.score();
    block19.score();
    block20.score();
    block21.score();
    ball.display();
    sling.display();
    if(score === 300){
      gameState = 12;
    }
  }
  if(gameState === 12) {
    background('lightgreen');
    fill("white");
    textSize(40);
    text('Well done!', height/2, 200);
    contin.show();
    contin.position(544, 500);
    contin.mousePressed(()=>{
        contin.hide();
        gameState = 13;
    });
  }
}





function createBlocks() {
    var ranX1 = random(100, 1100);
    var ranY1 = random(100, 700);
    box1 = createSprite(ranX1,ranY1, 50, 50);
    box1.visible = false;
    box1.scale = 0.08;
    box1.addImage(gem_load);
    var ranX2 = random(100, 1100);
    var ranY2 = random(100, 700);
    box2 = createSprite(ranX2,ranY2, 50, 50);
    box2.visible = false;
    box2.scale = 0.08;
    box2.addImage(gem_load);
    var ranX3 = random(100, 1100);
    var ranY3 = random(100, 700);
    box3 = createSprite(ranX3,ranY3, 50, 50);
    box3.scale = 0.08;
    box3.addImage(gem_load);
    box3.visible = false;
    var ranX4 = random(100, 1100);
    var ranY4 = random(100, 700);
    box4 = createSprite(ranX4,ranY4, 50, 50);
    box4.scale = 0.08;
    box4.addImage(gem_load);
    box4.visible = false;
    var ranX5 = random(100, 1100);
    var ranY5 = random(100, 700);
    box5 = createSprite(ranX5,ranY5, 50, 50);
    box5.scale = 0.08;
    box5.addImage(gem_load);
    box5.visible = false;
    var ranX6 = random(100, 1100);
    var ranY6 = random(100, 700);
    box6 = createSprite(ranX6,ranY6, 50, 50);
    box6.scale = 0.08;
    box6.addImage(gem_load);
    box6.visible = false;
    var ranX7 = random(100, 1100);
    var ranY7 = random(100, 700);
    box7 = createSprite(ranX7,ranY7, 50, 50);
    box7.scale = 0.08;
    box7.addImage(gem_load);
    box7.visible = false;
    var ranX8 = random(100, 1100);
    var ranY8 = random(100, 700);
    box8 = createSprite(ranX8,ranY8, 50, 50);
    box8.scale = 0.08;
    box8.addImage(gem_load);
    box8.visible = false;
    var ranX9 = random(100, 1100);
    var ranY9 = random(100, 700);
    box9 = createSprite(ranX9,ranY9, 50, 50);
    box9.scale = 0.08;
    box9.addImage(gem_load);
    box9.visible = false;
    var ranX10 = random(100, 1100);
    var ranY10= random(100, 700);
    box10 = createSprite(ranX10,ranY10, 50, 50);
    box10.scale = 0.08;
    box10.addImage(gem_load);
    box10.visible = false;
    var ranX11 = random(100, 1100);
    var ranY11 = random(100, 700);
    box11 = createSprite(ranX11,ranY11, 50, 50);
    box11.scale = 0.08;
    box11.addImage(gem_load);
    box11.visible = false;
    var ranX12 = random(100, 1100);
    var ranY12 = random(100, 700);
    box12 = createSprite(ranX12,ranY12, 50, 50);
    box12.scale = 0.08;
    box12.addImage(gem_load);
    box12.visible = false;
    var ranX13 = random(100, 1100);
    var ranY13 = random(100, 700);
    box13 = createSprite(ranX13,ranY13, 50, 50);
    box13.scale = 0.08;
    box13.addImage(gem_load);
    box13.visible = false;
    var ranX14 = random(100, 1100);
    var ranY14 = random(100, 700);
    box14 = createSprite(ranX14,ranY14, 50, 50);
    box14.scale = 0.08;
    box14.addImage(gem_load);
    box14.visible = false;
    var ranX15 = random(100, 1100);
    var ranY15 = random(100, 700);
    box15 = createSprite(ranX15,ranY15, 50, 50);
    box15.scale = 0.08;
    box15.addImage(gem_load);
    box15.visible = false;
    var ranX16 = random(100, 1100);
    var ranY16 = random(100, 700);
    box16 = createSprite(ranX16,ranY16, 50, 50);
    box16.scale = 0.08;
    box16.addImage(gem_load);
    box16.visible = false;
}


function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling.fly();
}


function keyPressed(){
if(keyCode === 32){
  Matter.Body.setPosition(ball.body, {x:800, y:200});

 sling.attach(ball.body);
 
}
}
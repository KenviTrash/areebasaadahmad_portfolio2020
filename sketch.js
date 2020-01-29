var s;
var scl=20;
var tuna;
var SPEED = 10;

function setup() {
  createCanvas(400, 400);
  s = new snake();
  
  frameRate(SPEED);
  pickLocation();
}

function pickLocation()
{
  var cols=floor(width/scl);
  var rows=floor(height/scl);
  tuna = createVector(floor(random(cols)), floor(random(rows)));
  
  tuna.mult(scl);
}

function draw() {
  background(0);
  s.die();
  s.update();
  s.show();
  if(s.eat(tuna))
  {
    pickLocation();
    SPEED += 2;
  }
  fill('green');
  rect(tuna.x, tuna.y, scl, scl);
}

function keyPressed() {
  if(keyCode===UP_ARROW) {
    s.dir(0,-1);
  }
  else if(keyCode===DOWN_ARROW) {
    s.dir(0,1);
  }
  else if(keyCode===LEFT_ARROW) {
    s.dir(-1,0);
  }
  else if(keyCode===RIGHT_ARROW) {
    s.dir(1,0);
  }
}
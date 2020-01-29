let r;
let factor = 0;
let colorR = 148;
let colorB = 77;
let colorG = 255;
var Speed = 25;
var sliderS = 200;

function setup() {
  createCanvas(450, 450);
  frameRate(Speed += sliderS);
  sliderS = createSlider(1,20,10,1);
  sliderS.input(draw);
}

function getVector(index, total) {
  const angle = map(index % total, 0, total, 0, TWO_PI);
  const v = p5.Vector.fromAngle(angle - (TWO_PI / 3));
  v.mult(r);
  return v;
}

function draw() {
  r = 160;
  background(0);
  const total = 190;
  factor += 0.0185;

  if (colorR === 255) {
    colorR = 20;
    colorB = 20;
    colorG = 20;
  }
  else{
    colorR += 0.5;
    colorB += 0.3;
    colorG += 0.6;
  }

  translate(width / 2, height / 2);
  stroke(colorR, colorB, colorG);
  strokeWeight(2);
  noFill();
  ellipse(0, 0, r * 2);

  strokeWeight(2);
  for (let i = 0; i < total; i++) {
    const a = getVector(i, total);
    const b = getVector(i * factor, total);
    line(a.x, a.y, b.x, b.y);
  }
}

let t = 0.0;
let vel = 2;
let num;
let palette_selected;

function setup() {
  createCanvas(200, 200);
  pixelDensity(2);
  angleMode(DEGREES);
  num = random(100000);
  palette_selected = random(palettes);
}

function draw() {
  randomSeed(num);
  background(0);
  orbit();
  t += vel;
}

function orbit() {
  translate(width / 2, height / 2);

  let circleNum = 12;
  for (let i = 0; i < 360; i += 360 / circleNum) {
    let radius = width * 0.3 + width * 0.03 * sin(t + i);
    let ex = radius * sin(i + t / 10);
    let ey = radius * cos(i + t / 10);
    circles(ex, ey, (width / circleNum) * 1.5, i);
  }
}

function circles(x, y, r, i) {
  push();

  translate(x, y);
  noStroke();
  fill(random(palette_selected));
  ellipse(0, 0, r);
  drawingContext.clip();

  blendMode(MULTIPLY);
  push();
  rotate(t + i);
  noStroke();
  fill(255);
  translate(0, r * 0.4);

  let col = color('#2a363b');
  //createRadialGradient(x0, y0, r0, x1, y1, r1)
  let gradientFill = drawingContext.createRadialGradient(
    0,
    0,
    r * 0.4,
    0,
    0,
    r * 0.9
  );
  gradientFill.addColorStop(0, col);
  col.setAlpha(0);
  gradientFill.addColorStop(1, col);
  drawingContext.fillStyle = gradientFill;
  ellipse(0, 0, r * 10);

  pop();
  pop();
}

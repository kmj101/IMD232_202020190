let x;
let y;
let velX;
let velY;
const r = 10;
const vectorRenderMult = 10;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  x = 10;
  y = 10;
  velX = 10;
  velY = 5;

  background(240);
  frameRate(1);
  // frameRate(60);
}

function draw() {
  background(240, 64);
  updatePos();
  noFill();
  stroke(0, 0, 255);
  circle(x, y, 2 * r);
  stroke(255, 0, 0);
  line(x, y, x + velX * vectorRenderMult, y + velY * vectorRenderMult);
}

const updatePos = () => {
  x += velX;
  y += velY;
  if (x < r || x > width - r) velX *= -1;
  if (y < r || y > height - r) velY *= -1;
};

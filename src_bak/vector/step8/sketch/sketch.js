let pos;
let vel;
const r = 10;
const vectorRenderMult = 10;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  pos = createVector(10, 10);
  vel = createVector(10, 5);

  background(240);
  // frameRate(1);
  frameRate(60);
}

function draw() {
  background(240, 64);
  updatePos();
  noFill();
  stroke(0, 0, 255);
  circle(pos.x, pos.y, 2 * r);
  let vectorRender = p5.Vector.mult(vel, vectorRenderMult);
  vectorRender.add(pos);
  stroke(255, 0, 0);
  line(pos.x, pos.y, vectorRender.x, vectorRender.y);
}

const updatePos = () => {
  pos.add(vel);
  if (pos.x < r || pos.x > width - r) vel.x *= -1;
  if (pos.y < r || pos.y > height - r) vel.y *= -1;
};

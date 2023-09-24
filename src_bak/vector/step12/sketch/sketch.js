let pos;
let vel;
const initVel = 2;
let acc;
const r = 20;
let mouseVector;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  pos = createVector(width / 2, height / 2);
  vel = p5.Vector.random2D();
  vel.mult(initVel);
  acc = createVector(0, 0);
  mouseVector = createVector(0, 0);

  // 케이스 1
  acc.set(0, 1);

  background(240);
}

function draw() {
  // // 케이스 2
  // mouseVector.set(mouseX, mouseY);
  // acc = p5.Vector.sub(mouseVector, pos);
  // acc.setMag(0.1);

  update();

  background(240, 64);

  noFill();
  translate(pos.x, pos.y);
  circle(0, 0, 2 * r);
  const accRender = acc.copy();
  accRender.setMag(50);
  line(0, 0, accRender.x, accRender.y);
}

const update = () => {
  vel.add(acc);
  pos.add(vel);
  if (pos.x < r || pos.x > width - r) {
    vel.x *= -1;
    pos.x = constrain(pos.x, r, width - r);
  }
  if (pos.y < r || pos.y > height - r) {
    vel.y *= -1;
    pos.y = constrain(pos.y, r, height - r);
  }
};

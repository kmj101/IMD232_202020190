const pos = { x: 0, y: 0 };
const vel = { x: 0, y: 0 };
const r = 10;
const vectorRenderMult = 10;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  pos.x = 10;
  pos.y = 10;
  vel.x = 10;
  vel.y = 5;

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
  stroke(255, 0, 0);
  line(
    pos.x,
    pos.y,
    pos.x + vel.x * vectorRenderMult,
    pos.y + vel.y * vectorRenderMult
  );
}

const updatePos = () => {
  pos.x += vel.x;
  pos.y += vel.y;
  if (pos.x < r || pos.x > width - r) vel.x *= -1;
  if (pos.y < r || pos.y > height - r) vel.y *= -1;
};

const pos = [0, 0];
const vel = [0, 0];
const r = 10;
const vectorRenderMult = 10;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  pos[0] = 10;
  pos[1] = 10;
  vel[0] = 10;
  vel[1] = 5;

  background(240);
  // frameRate(1);
  frameRate(60);
}

function draw() {
  background(240, 64);
  updatePos();
  noFill();
  stroke(0, 0, 255);
  circle(pos[0], pos[1], 2 * r);
  stroke(255, 0, 0);
  line(
    pos[0],
    pos[1],
    pos[0] + vel[0] * vectorRenderMult,
    pos[1] + vel[1] * vectorRenderMult
  );
}

const updatePos = () => {
  pos[0] += vel[0];
  pos[1] += vel[1];
  if (pos[0] < r || pos[0] > width - r) vel[0] *= -1;
  if (pos[1] < r || pos[1] > height - r) vel[1] *= -1;
};

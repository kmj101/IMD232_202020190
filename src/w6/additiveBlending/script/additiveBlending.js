// Original Code from: https://editor.p5js.org/natureofcode/sketches/fUCtCcOtB
// Daniel Shiffman
// The Nature of Code
// Example 4-9: Additive Blending

//Modified by OO-SUNG SON (spctrm404)

let emitter;
let img;

let canvasContainerId = 'canvas';
let canvasAspectRatio = 2 / 1;
let isCanvasFlexible = true;

function preload() {
  img = loadImage('data/texture.png');
}

function setup() {
  const canvasContainer = select(`#${canvasContainerId}`);
  let canvas = createCanvas(
    canvasContainer.width,
    canvasContainer.width / canvasAspectRatio,
    WEBGL
  );
  canvas.parent(canvasContainer);

  emitter = new Emitter(0, height / 2 - 75);
}

function draw() {
  background(0);
  blendMode(ADD);
  emitter.addParticle();
  let dx = map(mouseX, 0, width, -0.2, 0.2);
  let wind = createVector(dx, 0);
  emitter.applyForce(wind);
  emitter.run();

  drawVector(wind, createVector(0, -height / 2 + 50, 0), 500);
}

function drawVector(v, pos, scale) {
  push();
  let arrowsize = 4;
  translate(pos.x, pos.y);
  stroke(255);
  rotate(v.heading());
  let len = v.mag() * scale;
  line(0, 0, len, 0);
  line(len, 0, len - arrowsize, +arrowsize / 2);
  line(len, 0, len - arrowsize, -arrowsize / 2);
  pop();
}

function windowResized() {
  if (!isCanvasFlexible) return;
  const canvasContainer = select(`#${canvasContainerId}`);
  if (canvasAspectRatio === 0) {
    resizeCanvas(canvasContainer.width, canvasContainer.height);
  } else {
    resizeCanvas(
      canvasContainer.width,
      (canvasContainer.width * 1) / canvasAspectRatio
    );
  }
}

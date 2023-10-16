// Original Code from: https://editor.p5js.org/natureofcode/sketches/9c_CPrg3Bp
// Daniel Shiffman
// The Nature of Code
// Example 4-8: An Image Texture Particle System

//Modified by OO-SUNG SON (spctrm404)

let emitter;
let img;

function preload() {
  img = loadImage('data/texture.png');
}

function setup() {
  setCanvasContainer('canvas', 2, 1, true);
  emitter = new Emitter(width / 2, height - 75);
}

function draw() {
  background(0);
  emitter.addParticle();
  let dx = map(mouseX, 0, width, -0.2, 0.2);
  let wind = createVector(dx, 0);
  emitter.applyForce(wind);
  emitter.run();

  drawVector(wind, createVector(width / 2, 50, 0), 500);
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

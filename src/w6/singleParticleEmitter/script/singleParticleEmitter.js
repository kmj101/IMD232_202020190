// Original Code from: https://editor.p5js.org/natureofcode/sketches/WkX_YtT7xN
// Daniel Shiffman
// The Nature of Code
// Example 4-3: A Single Particle Emitter

//Modified by OO-SUNG SON (spctrm404)

let emitter;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  emitter = new Emitter(width / 2, 50);
}

function draw() {
  background(255);
  emitter.addParticle();
  emitter.run();
}

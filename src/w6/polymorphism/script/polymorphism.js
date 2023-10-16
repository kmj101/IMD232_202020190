// Original Code from: https://editor.p5js.org/natureofcode/sketches/2ZlNJp2EW
// Daniel Shiffman
// The Nature of Code
// Example 4-5: A Particle System with Inheritance and Polymorphism

//Modified by OO-SUNG SON (spctrm404)

let emitter;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  emitter = new Emitter(width / 2, 20);
}

function draw() {
  background(255);
  emitter.addParticle();
  emitter.run();
}

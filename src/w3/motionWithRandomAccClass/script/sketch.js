// Original Code from: https://editor.p5js.org/natureofcode/sketches/w9DU8ccWMf
// Daniel Shiffman
// The Nature of Code
// Example 1-9: Motion 101 (Velocity and Random Acceleration)

//Modified by OO-SUNG SON (spctrm404)

let mover;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  mover = new Mover();
}

function draw() {
  background(255);

  mover.update();
  mover.checkEdges();
  mover.show();
}

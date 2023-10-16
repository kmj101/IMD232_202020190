// Original Code from: https://editor.p5js.org/natureofcode/sketches/fGNwVP3h7
// Daniel Shiffman
// The Nature of Code
// Example 5-3: “Stay Within Walls” Steering Behavior

//Modified by OO-SUNG SON (spctrm404)

let vehicle;
let debug = true;
const offset = 25;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  vehicle = new Vehicle(width / 2, height / 2, 1);
  mVec = createVector();
}

function draw() {
  background(255);

  if (debug) {
    stroke(0);
    noFill();
    rectMode(CENTER);
    rect(width / 2, height / 2, width - offset * 2, height - offset * 2);
  }

  vehicle.boundaries(offset);
  vehicle.update();
  vehicle.display();
}

function mousePressed() {
  debug = !debug;
}

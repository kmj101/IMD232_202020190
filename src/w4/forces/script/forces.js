// Original Code from: https://editor.p5js.org/natureofcode/sketches/4IRI8BEVE
// Daniel Shiffman
// The Nature of Code
// Example 2-1: Forces

//Modified by OO-SUNG SON (spctrm404)

let mover;
let gravity;
let wind;
let showVector = false;

function setup() {
  setCanvasContainer('canvas', 2, 1, true);
  mover = new Mover();
  gravity = createVector(0, 0.1);
  wind = createVector(0.1, 0);
}

function draw() {
  background(255);

  mover.applyForce(gravity);

  if (mouseIsPressed && isMouseInsideCanvas()) {
    mover.applyForce(wind);
  }

  mover.update();
  mover.checkEdges();
  mover.display();
  if (showVector) {
    mover.displayVectors();
  }
}

function keyPressed() {
  if (key === 's' || key === 'S') {
    showVector = !showVector;
  }
}

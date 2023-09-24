// Original Code from: https://editor.p5js.org/natureofcode/sketches/6foX0NUfS
// Daniel Shiffman
// The Nature of Code
// Example 1-7: Motion 101 (Velocity)

//Modified by OO-SUNG SON (spctrm404)

let position;
let velocity;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  position = createVector(random(width), random(height));
  velocity = createVector(random(-2, 2), random(-2, 2));
}

function draw() {
  background(255);
  update();
  checkEdges();
  show();
}

function update() {
  position.add(velocity);
}

function show() {
  stroke(0);
  strokeWeight(2);
  fill(127);
  circle(position.x, position.y, 48);
}

function checkEdges() {
  if (position.x > width) {
    position.x = 0;
  } else if (position.x < 0) {
    position.x = width;
  }

  if (position.y > height) {
    position.y = 0;
  } else if (position.y < 0) {
    position.y = height;
  }
}

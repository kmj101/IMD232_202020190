// Original Code from: https://editor.p5js.org/natureofcode/sketches/4GSialOpQw
// Daniel Shiffman
// The Nature of Code
// Example 1-8: Motion 101 (Velocity and Constant Acceleration)

//Modified by OO-SUNG SON (spctrm404)

let position;
let velocity;
let acceleration;
let topSpeed = 10;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  position = createVector(random(width), random(height));
  velocity = createVector(random(-2, 2), random(-2, 2));
  acceleration = createVector(-0.001, 0.01);
}

function draw() {
  background(255);
  update();
  checkEdges();
  show();
}

function update() {
  velocity.add(acceleration);
  velocity.limit(topSpeed);
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

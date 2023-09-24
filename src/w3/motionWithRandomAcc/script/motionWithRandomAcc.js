// Original Code from: https://editor.p5js.org/natureofcode/sketches/w9DU8ccWMf
// Daniel Shiffman
// The Nature of Code
// Example 1-9: Motion 101 (Velocity and Random Acceleration)

//Modified by OO-SUNG SON (spctrm404)

let position;
let velocity;
let acceleration;
let topSpeed = 5;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  position = createVector(random(width), random(height));
  velocity = createVector();
  acceleration = createVector();
}

function draw() {
  background(255);
  update();
  checkEdges();
  show();
}

function update() {
  acceleration = p5.Vector.random2D();
  acceleration.mult(random(2));
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

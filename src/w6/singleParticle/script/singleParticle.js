// Original Code from: https://editor.p5js.org/natureofcode/sketches/1gpoE1dtG
// Daniel Shiffman
// The Nature of Code
// Example 4-1: A Single Particle

//Modified by OO-SUNG SON (spctrm404)

let particle;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  particle = new Particle(width / 2, 10);
}

function draw() {
  background(255);
  particle.update();
  particle.display();

  let gravity = createVector(0, 0.1);
  particle.applyForce(gravity);

  if (particle.isDead()) {
    particle = new Particle(width / 2, 20);
    console.log('Particle dead!');
  }
}

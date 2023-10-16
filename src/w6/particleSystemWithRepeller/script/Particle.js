// Original Code from: https://editor.p5js.org/natureofcode/sketches/H4TMayNak
// Daniel Shiffman
// The Nature of Code
// Example 4-7: A Particle System with a Repeller

//Modified by OO-SUNG SON (spctrm404)

class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(1, 0);
    this.vel.rotate((TAU / 360) * random(-180, 0));
    this.acc = createVector(0, 0);
    this.lifespan = 255.0;
    this.mass = 1;
  }

  run() {
    this.update();
    this.display();
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.lifespan -= 2.0;
    this.acc.mult(0);
  }

  display() {
    stroke(0, this.lifespan);
    strokeWeight(2);
    fill(127, this.lifespan);
    circle(this.pos.x, this.pos.y, 8);
  }

  applyForce(force) {
    const acc = p5.Vector.div(force, this.mass);
    this.acc.add(acc);
  }

  isDead() {
    return this.lifespan < 0.0;
  }
}

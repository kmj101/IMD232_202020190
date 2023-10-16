// Original Code from: https://editor.p5js.org/natureofcode/sketches/fUCtCcOtB
// Daniel Shiffman
// The Nature of Code
// Example 4-9: Additive Blending

//Modified by OO-SUNG SON (spctrm404)

class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(1, 0);
    this.vel.rotate((TAU / 360) * random(-210, 30));
    this.vel.mult(random(0.5, 2));
    this.acc = createVector(0, 0);
    this.lifespan = 100;
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
    push();
    translate(this.pos.x, this.pos.y);
    noStroke();
    texture(img);
    tint(255, 100, 255, this.lifespan);
    square(0, 0, 32);
    pop();
  }

  applyForce(force) {
    this.acc.add(force);
  }

  isDead() {
    return this.lifespan < 0.0;
  }
}

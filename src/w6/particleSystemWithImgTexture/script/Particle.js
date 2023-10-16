// Original Code from: https://editor.p5js.org/natureofcode/sketches/9c_CPrg3Bp
// Daniel Shiffman
// The Nature of Code
// Example 4-8: An Image Texture Particle System

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
    tint(255, this.lifespan);
    imageMode(CENTER);
    image(img, this.pos.x, this.pos.y);
  }

  applyForce(force) {
    this.acc.add(force);
  }

  isDead() {
    return this.lifespan < 0.0;
  }
}

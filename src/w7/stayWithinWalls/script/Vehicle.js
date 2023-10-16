// Original Code from: https://editor.p5js.org/natureofcode/sketches/fGNwVP3h7
// Daniel Shiffman
// The Nature of Code
// Example 5-3: “Stay Within Walls” Steering Behavior

//Modified by OO-SUNG SON (spctrm404)

class Vehicle {
  constructor(x, y, mass) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.vel.mult(5);
    this.acc = createVector(0, 0);
    this.mass = mass;
    this.rad = 6;
    this.speedMx = 3;
    this.forceMx = 0.15;
    this.decRad = 100;
  }

  update() {
    this.vel.add(this.acc);
    this.vel.limit(this.speedMx);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  applyForce(force) {
    const acc = p5.Vector.div(force, this.mass);
    this.acc.add(acc);
  }

  seek(target) {
    const desired = p5.Vector.sub(target, this.pos);
    // desired.setMag(this.speedMx);
    const d = desired.mag();
    if (d < this.decRad) {
      const m = map(d, 0, this.decRad, 0, this.speedMx);
      desired.setMag(m);
    } else {
      desired.setMag(this.speedMx);
    }
    const steer = p5.Vector.sub(desired, this.vel);
    steer.limit(this.forceMx);

    this.applyForce(steer);
  }

  boundaries(offset) {
    let desired = null;

    if (this.pos.x < offset) {
      desired = createVector(this.speedMx, this.vel.y);
    } else if (this.pos.x > width - offset) {
      desired = createVector(-this.speedMx, this.vel.y);
    }

    if (this.pos.y < offset) {
      desired = createVector(this.vel.x, this.speedMx);
    } else if (this.pos.y > height - offset) {
      desired = createVector(this.vel.x, -this.speedMx);
    }

    if (desired !== null) {
      desired.normalize();
      desired.mult(this.speedMx);
      const steer = p5.Vector.sub(desired, this.vel);
      steer.limit(this.forceMx);
      this.applyForce(steer);
    }
  }

  display() {
    const angle = this.vel.heading();
    fill(127);
    stroke(0);
    push();
    translate(this.pos.x, this.pos.y);
    rotate(angle);
    beginShape();
    vertex(this.rad * 2, 0);
    vertex(-this.rad * 2, -this.rad);
    vertex(-this.rad * 2, this.rad);
    endShape(CLOSE);
    pop();
  }
}

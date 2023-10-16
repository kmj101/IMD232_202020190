// Original Code from: https://editor.p5js.org/natureofcode/sketches/egribz8WV
// Daniel Shiffman
// The Nature of Code
// Example 5-4: Flow Field Following

//Modified by OO-SUNG SON (spctrm404)

class Vehicle {
  constructor(x, y, mass, speedMx, forceMx) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.vel.mult(5);
    this.acc = createVector(0, 0);
    this.mass = mass;
    this.rad = 4;
    this.speedMx = speedMx;
    this.forceMx = forceMx;
  }

  follow(flow) {
    const desired = flow.lookup(this.pos);
    desired.mult(this.speedMx);
    const steer = p5.Vector.sub(desired, this.vel);
    steer.limit(this.forceMx);
    this.applyForce(steer);
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

  borders() {
    if (this.pos.x < -this.rad) this.pos.x = width + this.rad;
    if (this.pos.y < -this.rad) this.pos.y = height + this.rad;
    if (this.pos.x > width + this.rad) this.pos.x = -this.rad;
    if (this.pos.y > height + this.rad) this.pos.y = -this.rad;
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

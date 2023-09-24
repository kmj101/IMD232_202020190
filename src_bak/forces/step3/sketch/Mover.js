class Mover {
  constructor(x, y, mass, rad) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.mass = mass;
    this.rad = rad;
  }

  applyForce(force) {
    const dividedForce = p5.Vector.div(force, this.mass);
    this.acc.add(dividedForce);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  checkEdges() {
    if (this.pos.x < this.rad || this.pos.x > width - this.rad) {
      this.vel.x *= -1;
      this.pos.x = constrain(this.pos.x, this.rad, width - this.rad);
    }

    if (this.pos.y > height - this.rad) {
      this.vel.y *= -1;
      this.pos.y = height - this.rad;
    }
  }

  display() {
    stroke(0);
    strokeWeight(2);
    fill(255, 127);
    circle(this.pos.x, this.pos.y, 2 * this.rad);
  }

  displayVector() {
    if (this.vel.magSq() !== 0) {
      push();
      translate(this.pos.x, this.pos.y);
      const dispVel = this.vel.copy();
      dispVel.setMag(this.rad);
      stroke(255, 0, 0);
      line(0, 0, dispVel.x, dispVel.y);
      pop();
    }
  }
}

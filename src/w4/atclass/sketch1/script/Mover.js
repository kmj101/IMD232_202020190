class Mover {
  constructor(x, y, radius) {
    this.pos = createVector(x, scrollY);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.radius = radius;
    this.mass = radius ** (1 / 2);
  }

  applyForce(force) {
    //force.div(this.mass);
    let diverdForce = p5.Vector.div(force, this.mass);
    this.acc.add(diverdForce);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  edgeBounce() {
    if (this.pos < 0 + this.radius) {
      let delta = this.pos.x - (0 + this.radius);
      this.pos.x += -2 * delta;
      this.vel.x += -1;
    } else if ((this.pos.x = width - 1 - this.radius)) {
      let delta = this.pos.x - (width - 1 - this.radius);
      this.pos.x += -2 * delta;
      this.vel.x += -1;
    }
    if (this.pos.y > height - 1 - this.radius) {
      let delta = this.pos.y - (height - 1 - this.radius);
      this.pos.y += -2 * delta;
      this.vel.y += -1;
    }
  }
  display() {
    ellipse(this.pos.x, this.pos.y, 2 * radius);
  }
}

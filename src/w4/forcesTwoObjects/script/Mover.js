// Original Code from: https://editor.p5js.org/natureofcode/sketches/ePLfo-OGu
// Daniel Shiffman
// The Nature of Code
// Example 2-2: Forces Acting on Two Objects

//Modified by OO-SUNG SON (spctrm404)

class Mover {
  constructor(x, y, m) {
    this.mass = m;
    this.position = createVector(x, y);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
    this.velocityVisualization = createVector(0, 0);
    this.accelerationVisualization = createVector(0, 0);
  }

  applyForce(force) {
    let forceDividedByMass = p5.Vector.div(force, this.mass);
    this.acceleration.add(forceDividedByMass);
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);

    this.velocityVisualization.set(this.velocity);
    this.velocityVisualization.mult(10);

    this.accelerationVisualization.set(this.acceleration);
    this.accelerationVisualization.mult(100);

    this.acceleration.mult(0);
  }

  display() {
    stroke(0);
    strokeWeight(2);
    fill(127, 127);
    circle(this.position.x, this.position.y, 2 * this.mass ** (1 / 2) * 8);
  }

  displayVectors() {
    noFill();
    stroke('red');
    line(
      this.position.x,
      this.position.y,
      this.position.x + this.velocityVisualization.x,
      this.position.y + this.velocityVisualization.y
    );
    stroke('blue');
    line(
      this.position.x,
      this.position.y,
      this.position.x + this.accelerationVisualization.x,
      this.position.y + this.accelerationVisualization.y
    );
  }

  checkEdges() {
    if (this.position.x > width - 1) {
      this.position.x -= width - 1;
      this.position.x *= -1;
      this.position.x += width - 1;
      this.velocity.x *= -1;
    } else if (this.position.x < 0) {
      this.position.x -= 0;
      this.position.x *= -1;
      this.position.x += 0;
      this.velocity.x *= -1;
    }
    if (this.position.y > height - 1) {
      this.position.y -= height - 1;
      this.position.y *= -1;
      this.position.y += height - 1;
      this.velocity.y *= -1;
    }
  }
}

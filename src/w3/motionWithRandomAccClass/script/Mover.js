// Original Code from: https://editor.p5js.org/natureofcode/sketches/w9DU8ccWMf
// Daniel Shiffman
// The Nature of Code
// Example 1-9: Motion 101 (Velocity and Random Acceleration)

//Modified by OO-SUNG SON (spctrm404)

class Mover {
  constructor() {
    this.position = createVector(width / 2, height / 2);
    this.velocity = createVector();
    this.acceleration = createVector();
    this.topSpeed = 5;
  }

  update() {
    // The random2D() function returns a unit vector pointing in a random direction.
    this.acceleration = p5.Vector.random2D();
    this.acceleration.mult(random(2));

    this.velocity.add(this.acceleration);
    this.velocity.limit(this.topSpeed);
    this.position.add(this.velocity);
  }

  show() {
    stroke(0);
    strokeWeight(2);
    fill(127);
    circle(this.position.x, this.position.y, 48);
  }

  checkEdges() {
    if (this.position.x > width) {
      this.position.x = 0;
    } else if (this.position.x < 0) {
      this.position.x = width;
    }

    if (this.position.y > height) {
      this.position.y = 0;
    } else if (this.position.y < 0) {
      this.position.y = height;
    }
  }
}

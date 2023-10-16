// Original Code from: https://editor.p5js.org/natureofcode/sketches/H4TMayNak
// Daniel Shiffman
// The Nature of Code
// Example 4-7: A Particle System with a Repeller

//Modified by OO-SUNG SON (spctrm404)

class Repeller {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.power = 150;
  }

  display() {
    stroke(0);
    strokeWeight(2);
    fill(127);
    circle(this.pos.x, this.pos.y, 32);
  }

  repel(particle) {
    let force = p5.Vector.sub(this.pos, particle.pos);
    let distance = force.mag();
    distance = constrain(distance, 5, 50);
    let strength = (-1 * this.power) / (distance * distance);
    force.setMag(strength);
    return force;
  }
}

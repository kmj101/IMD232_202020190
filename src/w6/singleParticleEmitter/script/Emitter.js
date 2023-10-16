// Original Code from: https://editor.p5js.org/natureofcode/sketches/WkX_YtT7xN
// Daniel Shiffman
// The Nature of Code
// Example 4-3: A Single Particle Emitter

//Modified by OO-SUNG SON (spctrm404)

class Emitter {
  constructor(x, y) {
    this.origin = createVector(x, y);
    this.particles = [];
  }

  addParticle() {
    this.particles.push(new Particle(this.origin.x, this.origin.y));
  }

  run() {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      this.particles[i].run();
      if (this.particles[i].isDead()) {
        this.particles.splice(i, 1);
      }
    }
  }
}

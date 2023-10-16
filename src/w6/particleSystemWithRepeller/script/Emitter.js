// Original Code from: https://editor.p5js.org/natureofcode/sketches/H4TMayNak
// Daniel Shiffman
// The Nature of Code
// Example 4-7: A Particle System with a Repeller

//Modified by OO-SUNG SON (spctrm404)

class Emitter {
  constructor(x, y) {
    this.origin = createVector(x, y);
    this.particles = [];
  }

  addParticle() {
    this.particles.push(new Particle(this.origin.x, this.origin.y));
  }

  applyGravity(gravity) {
    this.particles.forEach((eachParticle) => {
      const force = p5.Vector.mult(gravity, eachParticle.mass);
      eachParticle.applyForce(force);
    });
  }

  applyForce(force) {
    this.particles.forEach((eachParticle) => {
      eachParticle.applyForce(force);
    });
  }

  applyRepeller(repeller) {
    this.particles.forEach((eachParticle) => {
      const force = repeller.repel(eachParticle);
      eachParticle.applyForce(force);
    });
  }

  run() {
    // for (let i = this.particles.length - 1; i >= 0; i--) {
    //   this.particles[i].run();
    //   if (this.particles[i].isDead()) {
    //     this.particles.splice(i, 1);
    //   }
    // }

    this.particles = this.particles.filter((particle) => !particle.isDead());
    this.particles.forEach((eachParticle) => {
      eachParticle.run();
    });
  }
}

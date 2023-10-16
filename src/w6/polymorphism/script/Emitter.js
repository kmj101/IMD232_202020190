// Original Code from: https://editor.p5js.org/natureofcode/sketches/2ZlNJp2EW
// Daniel Shiffman
// The Nature of Code
// Example 4-5: A Particle System with Inheritance and Polymorphism

//Modified by OO-SUNG SON (spctrm404)

class Emitter {
  constructor(x, y) {
    this.origin = createVector(x, y);
    this.particles = [];
  }

  addParticle() {
    let r = random(1);
    if (r < 0.5) {
      this.particles.push(new Particle(this.origin.x, this.origin.y));
    } else {
      this.particles.push(new Confetti(this.origin.x, this.origin.y));
    }
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

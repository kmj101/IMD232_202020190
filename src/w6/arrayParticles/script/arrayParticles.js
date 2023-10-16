// Original Code from: https://editor.p5js.org/natureofcode/sketches/-xTbGZMim
// Daniel Shiffman
// The Nature of Code
// Example 4-2: An Array of Particles

//Modified by OO-SUNG SON (spctrm404)

let particles = [];

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
}

function draw() {
  background(255);
  particles.push(new Particle(width / 2, 20));

  // Looping through backwards to delete
  for (let i = particles.length - 1; i >= 0; i--) {
    let particle = particles[i];
    particle.run();
    if (particle.isDead()) {
      //remove the particle
      particles.splice(i, 1);
    }
  }
}

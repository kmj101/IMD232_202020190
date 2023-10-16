// Original Code from: https://editor.p5js.org/natureofcode/sketches/2ZlNJp2EW
// Daniel Shiffman
// The Nature of Code
// Example 4-5: A Particle System with Inheritance and Polymorphism

//Modified by OO-SUNG SON (spctrm404)

class Confetti extends Particle {
  display() {
    let angle = map(this.pos.x, 0, width, 0, TWO_PI * 2);
    rectMode(CENTER);
    fill(127, this.lifespan);
    stroke(0, this.lifespan);
    strokeWeight(2);
    push();
    translate(this.pos.x, this.pos.y);
    rotate(angle);
    square(0, 0, 12);
    pop();
  }
}

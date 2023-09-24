// Original Code from: https://editor.p5js.org/natureofcode/sketches/FknzcAaVh
// Daniel Shiffman
// The Nature of Code
// Example 2-5: Fluid Resistance

//Modified by OO-SUNG SON (spctrm404)

class Liquid {
  constructor(x, y, w, h, c) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.c = c;
  }

  contains(mover) {
    let pos = mover.position;
    return (
      pos.x > this.x &&
      pos.x < this.x + this.w &&
      pos.y > this.y &&
      pos.y < this.y + this.h
    );
  }

  calculateDrag(mover) {
    let speed = mover.velocity.mag();
    let dragMagnitude = this.c * speed ** 2;
    let dragForce = mover.velocity.copy();
    dragForce.mult(-1);
    // dragForce.normalize();
    // dragForce.mult(dragMagnitude);
    dragForce.setMag(dragMagnitude);
    return dragForce;
  }

  display() {
    noStroke();
    fill(200);
    rect(this.x, this.y, this.w, this.h);
  }
}

// Original Code from: https://editor.p5js.org/natureofcode/sketches/Cl0Eeaz_V
// Daniel Shiffman
// The Nature of Code
// Example 2-6: Attraction

//Modified by OO-SUNG SON (spctrm404)

class Attractor {
  constructor() {
    this.position = createVector(width / 2, height / 2);
    this.mass = 20;
    this.radius = 30;
    this.dragOffset = createVector(0, 0);
    this.dragging = false;
    this.hover = false;
  }

  attract(mover) {
    let force = p5.Vector.sub(this.position, mover.position);
    let distance = force.mag();
    distance = constrain(distance, 5, 25);
    let strength = (G * this.mass * mover.mass) / distance ** 2;
    force.setMag(strength);
    return force;
  }

  display() {
    strokeWeight(4);
    stroke(0);
    if (this.dragging) {
      fill(50);
    } else if (this.hover) {
      fill(100);
    } else {
      fill(175, 200);
    }
    circle(this.position.x, this.position.y, this.radius * 2);
  }

  handleHover(mx, my) {
    let d = dist(mx, my, this.position.x, this.position.y);
    if (d < this.radius) {
      this.hover = true;
    } else {
      this.hover = false;
    }
  }

  handlePress(mx, my) {
    if (!this.hover) return;
    this.dragging = true;
    this.dragOffset.x = this.position.x - mx;
    this.dragOffset.y = this.position.y - my;
  }

  stopDragging() {
    this.dragging = false;
  }

  handleDrag(mx, my) {
    if (this.dragging) {
      this.position.x = mx + this.dragOffset.x;
      this.position.y = my + this.dragOffset.y;
    }
  }
}

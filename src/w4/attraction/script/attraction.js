// Original Code from: https://editor.p5js.org/natureofcode/sketches/Cl0Eeaz_V
// Daniel Shiffman
// The Nature of Code
// Example 2-6: Attraction

//Modified by OO-SUNG SON (spctrm404)

let mover;
let attractor;
let showVector = false;

let G = 1;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  mover = new Mover(300, 50, 2);
  attractor = new Attractor();
}

function draw() {
  background(255);

  let force = attractor.attract(mover);
  mover.applyForce(force);
  mover.update();
  mover.display();
  if (showVector) {
    mover.displayVectors();
  }

  attractor.display();
}

function mouseMoved() {
  if (!isMouseInsideCanvas()) return;
  attractor.handleHover(mouseX, mouseY);
}

function mousePressed() {
  if (!isMouseInsideCanvas()) return;
  attractor.handlePress(mouseX, mouseY);
}

function mouseDragged() {
  if (!isMouseInsideCanvas()) return;
  attractor.handleDrag(mouseX, mouseY);
}

function mouseReleased() {
  if (!isMouseInsideCanvas()) return;
  attractor.stopDragging();
}

function keyPressed() {
  if (key === 's' || key === 'S') {
    showVector = !showVector;
  }
}

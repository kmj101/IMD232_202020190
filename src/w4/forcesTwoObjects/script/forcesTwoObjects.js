// Original Code from: https://editor.p5js.org/natureofcode/sketches/ePLfo-OGu
// Daniel Shiffman
// The Nature of Code
// Example 2-2: Forces Acting on Two Objects

//Modified by OO-SUNG SON (spctrm404)

let moverA;
let moverB;
let gravity;
let wind;
let showVector = false;

function setup() {
  setCanvasContainer('canvas', 2, 1, true);
  moverA = new Mover(width / 3, 30, 10);
  moverB = new Mover((2 * width) / 3, 30, 2);
  gravity = createVector(0, 0.1);
  wind = createVector(0.1, 0);
}

function draw() {
  background(255);

  moverA.applyForce(gravity);
  moverB.applyForce(gravity);

  if (mouseIsPressed && isMouseInsideCanvas()) {
    moverA.applyForce(wind);
    moverB.applyForce(wind);
  }

  moverA.update();
  moverB.update();

  moverA.checkEdges();
  moverB.checkEdges();

  moverA.display();
  moverB.display();

  if (showVector) {
    moverA.displayVectors();
    moverB.displayVectors();
  }
}

function keyPressed() {
  if (key === 's' || key === 'S') {
    showVector = !showVector;
  }
}

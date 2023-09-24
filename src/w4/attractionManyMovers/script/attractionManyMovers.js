// Original Code from: https://editor.p5js.org/natureofcode/sketches/LSXJ6-VziJ
// Daniel Shiffman
// The Nature of Code
// Example 2-7: Attraction with Many Movers

//Modified by OO-SUNG SON (spctrm404)

let movers = [];
let attractor;
let showVector = false;

let G = 1;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  for (let i = 0; i < 10; i++) {
    movers[i] = new Mover(random(width), random(height), random(0.5, 3));
  }
  attractor = new Attractor();
}

function draw() {
  background(255);

  for (let i = 0; i < movers.length; i++) {
    let force = attractor.attract(movers[i]);
    movers[i].applyForce(force);
    movers[i].update();
    movers[i].display();
    if (showVector) {
      movers[i].displayVectors();
    }
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

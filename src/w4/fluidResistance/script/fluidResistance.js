// Original Code from: https://editor.p5js.org/natureofcode/sketches/FknzcAaVh
// Daniel Shiffman
// The Nature of Code
// Example 2-5: Fluid Resistance

//Modified by OO-SUNG SON (spctrm404)

let movers = [];
let liquid;
let showVector = false;

function setup() {
  setCanvasContainer('canvas', 2, 1, true);
  reset();
  liquid = new Liquid(0, height / 2, width, height / 2, 0.1);
}

function draw() {
  background(255);

  liquid.display();
  for (let i = 0; i < movers.length; i++) {
    if (liquid.contains(movers[i])) {
      let dragForce = liquid.calculateDrag(movers[i]);
      movers[i].applyForce(dragForce);
    }

    let gravity = createVector(0, 0.1 * movers[i].mass);
    movers[i].applyForce(gravity);

    movers[i].update();
    movers[i].bounceEdges();
    movers[i].display();
    if (showVector) {
      movers[i].displayVectors();
    }
  }
}

function mousePressed() {
  if (isMouseInsideCanvas()) {
    reset();
  }
}

function reset() {
  for (let i = 0; i < 9; i++) {
    movers[i] = new Mover((width / 10) * (i + 1), 0, random(0.5, 3));
  }
}

function keyPressed() {
  if (key === 's' || key === 'S') {
    showVector = !showVector;
  }
}

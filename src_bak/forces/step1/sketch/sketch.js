let mover;
let gravity;
let wind;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  mover = new Mover(width / 2, height / 2, 1, 24);
  gravity = createVector(0, 0.1);
  wind = createVector(0.1, 0);

  background(240);
}

function draw() {
  if (mouseIsPressed) {
    mover.applyForce(wind);
  }
  mover.applyForce(gravity);
  mover.update();
  mover.checkEdges();

  background(240);

  mover.display();
  mover.displayVector();
}

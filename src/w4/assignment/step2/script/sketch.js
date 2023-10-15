let moverA;
let gravity;
let mVec;
let pMVec;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background(255);
  moverA = new Mover(width / 3, height / 2, 10);
  gravity = createVector(0, 0.1);
  wind = createVector(1, 0);
  mVec = createVector(mouseX, mouseY);
  pMVec = createVector(pmouseX, pmouseY);
}

function draw() {
  background(255);

  let gravityA = createVector(gravity.x, gravity.y);
  gravityA.mult(moverA.mass);
  moverA.applyForce(gravityA);
  if (mouseIsPressed && isMouseInsideCanvas()) {
    moverA.applyForce(moverA);
  }
  if (mouseDragged) {
    moverA.applyForce(mVec);
  }
  if (moverA.contactEdge()) {
    let c = 0.01;
    let friction = moverA.vel.copy();
    friction.mult(-1);
    friction.mult(c);
    moverA.applyForce(friction);
  }
  moverA.update();
  moverA.checkEdges();
  moverA.display();
}

function mouseMoved() {
  moverA.mouseMoved(mouseX, mouseY);
}

function mousePressed() {
  moverA.mousePressed(mouseX, mouseY);
}

function mouseDragged() {
  moverA.mouseDragged(mouseX, mouseY);
}

function mouseReleased() {
  pMVec.set(pmouseX, pmouseY);
  mVec.set(mouseX, mouseY);
  moverA.applyForce(throwingForce);
}

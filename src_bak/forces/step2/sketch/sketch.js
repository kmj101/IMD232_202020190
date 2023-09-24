let moverNum = 10;
let moverArray = [];
let gravity;
let wind;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  // moverArray.push(new Mover(width / 3, height / 2, 1, 24));
  // moverArray.push(new Mover((width / 3) * 2, height / 2, 10, 24));
  for (let cnt = 0; cnt < moverNum; cnt++)
    moverArray.push(
      new Mover((width / (moverNum + 1)) * (cnt + 1), height / 2, cnt + 1, 24)
    );

  gravity = createVector(0, 0.1);
  wind = createVector(0.1, 0);

  background(240);
}

function draw() {
  if (mouseIsPressed) {
    moverArray.forEach((eachMover) => {
      eachMover.applyForce(wind);
    });
  }
  moverArray.forEach((eachMover) => {
    eachMover.applyForce(gravity);
    eachMover.update();
    eachMover.checkEdges();
  });

  background(240);

  moverArray.forEach((eachMover) => {
    eachMover.display();
    eachMover.displayVector();
  });
}

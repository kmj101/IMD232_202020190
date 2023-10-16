// Original Code from: https://editor.p5js.org/natureofcode/sketches/egribz8WV
// Daniel Shiffman
// The Nature of Code
// Example 5-4: Flow Field Following

//Modified by OO-SUNG SON (spctrm404)

let debug = true;
let flowfield;
let vehicles = [];

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  flowfield = new FlowField(20);
  for (let i = 0; i < 1000; i++) {
    vehicles.push(
      new Vehicle(
        random(width),
        random(height),
        1,
        random(2, 5),
        random(0.1, 0.5)
      )
    );
  }
}

function draw() {
  background(255);

  if (debug) flowfield.display();

  vehicles.forEach((each) => {
    each.follow(flowfield);
    each.update();
    each.borders();
    each.display();
  });
}

function keyPressed() {
  if (key == ' ') {
    debug = !debug;
  }
}

function mousePressed() {
  flowfield.init();
}

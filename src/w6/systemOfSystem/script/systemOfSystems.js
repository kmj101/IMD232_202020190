// Original Code from: https://editor.p5js.org/natureofcode/sketches/s_Y3-Mmo7
// Daniel Shiffman
// The Nature of Code
// Example 4-4: A System of Systems

//Modified by OO-SUNG SON (spctrm404)

let emitters = [];

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
}

function draw() {
  background(255);
  //   emitters.forEach((eachEmitter) => {
  //     eachEmitter.addParticle();
  //     eachEmitter.run();
  //   });
  for (let anEmitter of emitters) {
    anEmitter.addParticle();
    anEmitter.run();
  }
}

function mousePressed() {
  emitters.push(new Emitter(mouseX, mouseY));
}

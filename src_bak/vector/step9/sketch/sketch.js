function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  background(240);
}

function draw() {
  // background(240);
  const center = createVector(width / 2, height / 2);
  // 케이스 1
  const randomHundred = createVector(random(-100, 100), random(-100, 100));
  line(
    center.x,
    center.y,
    center.x + randomHundred.x,
    center.y + randomHundred.y
  );
  // // 케이스 2
  // const randomOne = p5.Vector.random2D();
  // randomOne.mult(random(-100, 100));
  // line(center.x, center.y, center.x + randomOne.x, center.y + randomOne.y);
  // // 케이스 3
  // const randomHundredUpward = createVector(0, random(100));
  // randomHundredUpward.rotate(random(TAU));
  // line(
  //   center.x,
  //   center.y,
  //   center.x + randomHundredUpward.x,
  //   center.y + randomHundredUpward.y
  // );
}

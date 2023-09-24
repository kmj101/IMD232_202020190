// Original Code from: https://editor.p5js.org/natureofcode/sketches/HtXiElQbC
// Daniel Shiffman
// The Nature of Code
// Example 1-3: Vector subtraction

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
}

function draw() {
  background(255);

  // 마우스 좌표 벡터
  let mouse = createVector(mouseX, mouseY);
  // 캔버스의 중심 좌표 벡터
  let center = createVector(width / 2, height / 2);

  // 위 두개의 벡터를 나타낸다
  strokeWeight(4);
  stroke(200);
  line(0, 0, mouse.x, mouse.y);
  line(0, 0, center.x, center.y);

  // 마우스 좌표 벡터에서 캔버스 중심 좌표 벡터를 뺀다.
  mouse.sub(center);

  // 위 결과를 원점을 캔버스 중심으로 옮겨 그린다.
  // 원점을 캔버스 중심: 마우스 좌표 벡터에 빼기 했던 벡터의 좌표로 옮기지 않고서야 화면에 제대로 나타낼 수 없다.
  stroke(0);
  translate(width / 2, height / 2);
  line(0, 0, mouse.x, mouse.y);
}

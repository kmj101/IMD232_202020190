// Original Code from: https://editor.p5js.org/natureofcode/sketches/rld_CtioUU
// Daniel Shiffman
// The Nature of Code
// Example 1-5: Vector magnitude

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
}

function draw() {
  background(255);

  // 마우스 좌표 벡터
  let mouse = createVector(mouseX, mouseY);
  // 캔버스의 중심 좌표 벡터
  let center = createVector(width / 2, height / 2);
  // 마우스 좌표 벡터에서 캔버스 중심 좌표 벡터를 뺀다.
  // 이제 mouse는 캔버스 원점을 기준으로 한 좌표 벡터가 아닌, 캔버스 중심을 기준으로한 좌표 벡터가 되었다.
  // 캔버스 중심에 대한 마우스의 상대 위치라고도 할 수 있다.
  // 학술적으로 제대로 된 명칭은 아닐 수 있으나, 우리는 중심에 대한 마우스 벡터라 부르자.
  mouse.sub(center);

  // 중심에 대한 마우스 벡터를 원점을 캔버스 중심으로 옮겨 그린다.
  push();
  translate(width / 2, height / 2);
  line(0, 0, mouse.x, mouse.y);
  pop();

  // 중심에 대한 마우스 벡터의 길이를 상수 m에 담아 화면에 m을 사각형으로 나타낸다.
  //   translate(-width / 2, -height / 2);
  const m = mouse.mag();
  fill(0);
  rect(10, 10, m, 10);
}

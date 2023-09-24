// Original Code from: https://editor.p5js.org/natureofcode/sketches/5dWkegAID
// Daniel Shiffman
// The Nature of Code
// Example 1-6: Normalizing a Vector

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
  translate(width / 2, height / 2);
  stroke(200);
  strokeWeight(2);
  line(0, 0, mouse.x, mouse.y);

  // 중심에 대한 마우스 벡터의 길이를 1로 바꾼다.
  // 길이가 바뀌기에 위치는 바뀌지만, 각도: 방향은 그대로라는 사실은 중요하다.
  mouse.normalize();

  // 1로 바뀐 길이에 50를 곱한다.
  // 1로 바꿔서 좋은 점은 다른값으로 바꾸기 편라하다는 사실이다.
  // 우리는 임의의 길이를 1로 바꾼뒤 그것에 50을 곱해 50으로 바꿨다.
  mouse.mult(50);

  // 위 결과를 나타낸다.
  // 이미 좌표는 24번째 줄에서 화면 중심으로 옮겨져있다.
  stroke(0);
  strokeWeight(8);
  line(0, 0, mouse.x, mouse.y);
}

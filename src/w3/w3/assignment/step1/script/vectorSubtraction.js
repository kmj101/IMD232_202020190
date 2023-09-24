function draw() {
  background(255);
  cam.pan(movedX * 0.001);
  cam.tilt(movedY * 0.001);
  describe('A white circle with black outline in the middle of a gray canvas.');
}

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  pos = createVector;
}

function draw() {
  background(255);

  // 마우스 좌표 벡터
  let mouse = createVector(mouseX, mouseY);
  // 캔버스의 중심 좌표 벡터
  let center = createVector(mouseX, mouseY);

  fill(0, 0, 0);
  // 위 두개의 벡터를 나타낸다
  strokeWeight(2);
  stroke(10);
  translate(width / 2, height / 2);
  translate(p5.Vector.fromAngle(millis() / 1000, 40));
  circle(0, 0, 20, 20);
  line(0, 0, mouse.x, mouse.y);

  // 마우스 좌표 벡터에서 캔버스 중심 좌표 벡터를 뺀다.
  mouse.sub(cursor);

  // 위 결과를 원점을 캔버스 중심으로 옮겨 그린다.
  // 원점을 캔버스 중심: 마우스 좌표 벡터에 빼기 했던 벡터의 좌표로 옮기지 않고서야 화면에 제대로 나타낼 수 없다.
  stroke(0);
  translate(width / 2, height / 2);
  line(0, 0, mouse.x, mouse.y);
}

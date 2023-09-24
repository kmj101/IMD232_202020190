// 공의 위치
let position = [100, 100];
// 공의 속력
let velocity = [2.5, 2];

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background(255);
}

function draw() {
  background(255);

  // 매 프레임 공의 위치에 공의 속도를 더해 이동
  position[0] += velocity[0];
  position[1] += velocity[1];

  // 공이 화면을 벗어나는지: 충돌하는지 확인
  // 속도에 -1을 곱해 뒤집는다.
  if (position[0] > width || position[0] < 0) {
    velocity[0] *= -1;
  }
  if (position[1] > height || position[1] < 0) {
    velocity[1] *= -1;
  }

  stroke(0);
  fill(127);
  strokeWeight(2);
  // 위치 변수를 나타낸다.
  circle(position[0], position[1], 48);
}

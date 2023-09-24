// Original Code from: https://editor.p5js.org/natureofcode/sketches/qU5oPJijX
// Daniel Shiffman
// The Nature of Code
// Example 1-2: Bouncing Ball, with p5.Vector!

//Modified by OO-SUNG SON (spctrm404)

// 공의 위치
let position;
// 공의 속력
let velocity;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  // createVector는 setup 혹은 draw에서 사용되어야 작동한다.
  // 13번 줄 위의 선언시 사용하면 작동하지 않을 것이다.
  position = createVector(100, 100);
  velocity = createVector(2.5, 2);
}

function draw() {
  background(255);

  // 매 프레임 공의 위치에 공의 속도를 더해 이동
  position.add(velocity);

  // 공이 화면을 벗어나는지: 충돌하는지 확인
  // 속도에 -1을 곱해 뒤집는다.
  if (position.x > width || position.x < 0) {
    velocity.x *= -1;
  }
  if (position.y > height || position.y < 0) {
    velocity.y *= -1;
  }

  stroke(0);
  fill(127);
  strokeWeight(2);
  // 위치 변수를 나타낸다.
  circle(position.x, position.y, 48);
}

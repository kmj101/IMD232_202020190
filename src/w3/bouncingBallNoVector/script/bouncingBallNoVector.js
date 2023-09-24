// Original Code from: https://editor.p5js.org/natureofcode/sketches/oadKdOndU
// Daniel Shiffman
// The Nature of Code
// Example 1-1: Bouncing Ball, no vectors

//Modified by OO-SUNG SON (spctrm404)

// 공의 위치
let x = 100;
let y = 100;
// 공의 속력
let velocityX = 2.5;
let velocityY = 2;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background(255);
}

function draw() {
  background(255);

  // 매 프레임 공의 위치에 공의 속도를 더해 이동
  x += velocityX;
  y += velocityY;

  // 공이 화면을 벗어나는지: 충돌하는지 확인
  // 속도에 -1을 곱해 뒤집는다.
  if (x > width || x < 0) {
    velocityX *= -1;
  }
  if (y > height || y < 0) {
    velocityY *= -1;
  }

  stroke(0);
  fill(127);
  strokeWeight(2);
  // 위치 변수를 나타낸다.
  circle(x, y, 48);
}

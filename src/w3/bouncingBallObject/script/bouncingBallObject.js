// 공의 위치
let position = {
  x: 100,
  y: 100,
  // add: function (vector) {
  //   this.x += vector.x;
  //   this.y += vector.y;
  // },
};
// 공의 속력
let velocity = { x: 2.5, y: 2 };

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background(255);
}

function draw() {
  background(255);

  // 매 프레임 공의 위치에 공의 속도를 더해 이동
  position.x += velocity.x;
  position.y += velocity.y;
  // position.add(velocity);

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

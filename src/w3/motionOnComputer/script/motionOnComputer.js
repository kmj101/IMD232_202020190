// 공의 위치를 나타낼 변수
let x;
let y;
// 목표 위치 설정시점의 공의 위치를 저장할 변수
let originX;
let originY;
// 목표 위치를 저장할 변수
let targetX;
let targetY;
// 목표 위치 설정 시점을 저장할 변수
let interpolationBegin = 0;
// 이동 시간
const interpolationDuration = 60 * 1;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  x = width / 2;
  y = height / 2;
  originX = width / 2;
  originY = height / 2;
  targetX = width / 2;
  targetY = height / 2;

  background(240);
}

function draw() {
  const distance = getDistance();
  interpolate(getNormalizedTime(), distance);
  const [distanceX, distanceY] = distance;

  background(240);

  noStroke();

  // 원래 위치
  fill(0, 255, 0);
  circle(originX, originY, 20);

  // 목표 위치
  fill(0, 0, 255);
  circle(targetX, targetY, 20);

  // 현재 위치
  fill(255, 0, 0);
  circle(x, y, 10);

  // 거리
  stroke(0);
  line(originX, originY, originX + distanceX, originY + distanceY);
}

const getNormalizedTime = () => {
  // 목표 위치가 정해진 이래 얼마나 많은 시간(프레임)이 지났는가?
  // 이를 정해진 시간으로 나눠 0~1 사이의 값으로 정규화(Normalize)
  const normalizedTime =
    (frameCount - interpolationBegin) / interpolationDuration;
  return normalizedTime;
};

const getDistance = () => {
  // 목표 위치 - 기존 위치 = 이동해야할 거리
  const distanceX = targetX - originX;
  const distanceY = targetY - originY;
  return [distanceX, distanceY];
};

const interpolate = (normalizedTime, distance) => {
  // 0은 막 시작한 때, 1은 정해진 시간에 도달할 때
  // 따라서 정해진 시간에 도달하기 전까지만 수행
  if (normalizedTime <= 1) {
    const [distanceX, distanceY] = distance;
    // 기존 위치 + 이동해야할 거리 * (0~1)
    x = originX + distanceX * normalizedTime;
    y = originY + distanceY * normalizedTime;
  }
};

const setTarget = (tX, tY) => {
  // 기존 위치 저장
  originX = x;
  originY = y;
  // 목표 위치 지정
  targetX = tX;
  targetY = tY;
  // 목표 위치가 정해진 시점(프레임) 저장
  interpolationBegin = frameCount;
};

function mousePressed() {
  if (!isMouseInsideCanvas()) return;
  setTarget(mouseX, mouseY);
}

let x;
let y;
let originX;
let originY;
let targetX;
let targetY;
let interpolationBegin = 0;
let interpolationDuration = 60 * 1;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  bezierEasingGraphSize = 200;
  bottomLeftX = 100;
  bottomLeftY = 250;
  setEasingUI();
  document.querySelector('#sliderDuration').addEventListener('input', (evt) => {
    interpolationDuration = 60 * evt.target.value;
    document.querySelector('#valDuration').innerHTML = Number(
      evt.target.value
    ).toFixed(6);
  });

  x = width / 2;
  y = height / 2;
  originX = width / 2;
  originY = height / 2;
  targetX = width / 2;
  targetY = height / 2;

  background(240);
}

function draw() {
  background(240);
  renderCubicBezierEasingGraph(
    bottomLeftX,
    bottomLeftY,
    bezierEasingGraphSize,
    cpAX,
    cpAY,
    cpBX,
    cpBY,
    getNormalizedTime()
  );
  interpolate();
  noStroke();
  fill(0, 255, 0);
  circle(originX, originY, 10);
  fill(0, 0, 255);
  circle(targetX, targetY, 20);
  fill(255, 0, 0);
  circle(x, y, 10);
}

const getNormalizedTime = () => {
  return constrain(
    (frameCount - interpolationBegin) / interpolationDuration,
    0,
    1
  );
};

const interpolate = () => {
  // const normalizedTime =
  //   (frameCount - interpolationBegin) / interpolationDuration;
  // if (normalizedTime <= 1) {
  //   x = originX + distanceX * normalizedTime;
  //   y = originY + distanceY * normalizedTime;
  // }
  if (getNormalizedTime() > 1) return;
  // 0~1 사이의 값으로 변환된 시간을 베지어 곡선을 따라 변환된 값으로 가져온다
  const [bX, warpedTime] = getCubicBezierEasing(
    cpAX,
    cpAY,
    cpBX,
    cpBY,
    getNormalizedTime()
  );
  distanceX = targetX - originX;
  distanceY = targetY - originY;
  // 기존에는 0~1 사이의 값으로 변환된 시간을 곱했지만,
  // 이제는 베지어 곡선을 따라 변환된 값을 곱한다
  x = originX + distanceX * warpedTime;
  y = originY + distanceY * warpedTime;
};

const setTarget = (tX, tY) => {
  originX = x;
  originY = y;
  targetX = tX;
  targetY = tY;
  interpolationBegin = frameCount;
};

function mousePressed() {
  if (!isMouseInsideCanvas()) return;
  setTarget(mouseX, mouseY);
}

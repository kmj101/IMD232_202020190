const secondLength = 200;
const minuteLength = 200;
const hourLength = 150;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  background(240);
}

function draw() {
  const secondVector = createVector(1, 0);
  secondVector.rotate((TAU / 60) * second() - (TAU / 360) * 90);
  secondVector.mult(secondLength);
  const minuteVector = createVector(100, 0);
  minuteVector.setMag(minuteLength);
  minuteVector.rotate((TAU / 60) * minute() - (TAU / 360) * 90);
  const hourVector = createVector(100, 0);
  hourVector.rotate((((TAU / 12) * hour()) % 12) - (TAU / 360) * 90);
  hourVector.normalize();
  hourVector.mult(hourLength);

  const mouseVector = createVector(mouseX, mouseY);
  const subVector = p5.Vector.sub(
    mouseVector,
    createVector(width / 2, height / 2)
  );

  console.log(subVector.mag() * 0.5);

  background(subVector.mag() * 0.5);

  translate(width / 2, height / 2);
  stroke(0);
  strokeWeight(5);
  line(0, 0, hourVector.x, hourVector.y);
  line(0, 0, minuteVector.x, minuteVector.y);
  stroke(255, 0, 0);
  line(0, 0, secondVector.x, secondVector.y);
  strokeWeight(1);
  stroke(0, 0, 255);
  line(0, 0, subVector.x, subVector.y);
}

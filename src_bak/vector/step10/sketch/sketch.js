function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  background(240);
}

function draw() {
  background(240);
  const center = createVector(width / 2, height / 2);
  stroke(0);
  line(0, 0, center.x, center.y);
  const mouse = createVector(mouseX, mouseY);
  line(0, 0, mouse.x, mouse.y);
  const sub = p5.Vector.sub(mouse, center);
  stroke(255, 0, 0);
  line(0, 0, sub.x, sub.y);
  translate(center.x, center.y);
  line(0, 0, sub.x, sub.y);
}

class ball {
  constructor(posX, posY, h, s, v) {
    this.pos = createVector(posX, posY);
    this.vel = createVector();
    this.acc = createVector();
    this.mass = 1;
    this.rad = 25;
    this.color = color(h, s, v);
  }
  applyForce(force) {
    const calcedAcc = force.div(this.mass);
    this.acc.add(calcedAdd);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  display() {
    fill(this.color);
    noStroke();
    eillpse(this.posX, this.posY, 2 * this.rad);
  }
}

let balls = [];
let gravity;
let wind;

function setup() {
  setCanvasContainer('canvasGoesHere', 2, 1, true);
  ColorMode(HSL, 360, 100, 100);
  for (let n = 0; n < 10; n++) {
    balls.push(new ball(random(width), 0, random(360), 100, 50));
  }
  gravity = createVector(0, 0.1);
  wind = createVector(0.5, 0);
  background(255);
}
function draw() {
  background(255);
  balls.forEach((each) => {
    const scaledG = p5.Vector.mult(gravity, each.mass);
    each.applyForce();
    each.applyForce(wind);
    each.update();
    each.display();
  });
}

function mousePressed() {
  for (let n = 0; n < balls.length; n++) {
    balls[n](new ball(random(width), 0, random(360), 100, 50));
  }
}

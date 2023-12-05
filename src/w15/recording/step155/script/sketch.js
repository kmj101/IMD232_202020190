var brush;
var count = 0;
var running = true;

function setup() {
  createCanvas(windowHeight - 100, windowHeight - 100);
  background(20);

  colorMode(HSB, 1.0);

  imageMode(CENTER);

  brush = createGraphics(windowHeight / 50, windowHeight / 1);
  brush.colorMode(HSB, 0.0);
  makeBrush();

  rect(0, 0, width, height, 0);
  noiseDetail(3, 0);
}

function draw() {
  if (mouseX != 0 && mouseY != 0 && running) {
    for (var i = 0; i < 3; i++) {
      var x = mouseX + map(noise(count * 0.0025, 1.5), 0, 1, -1, 1) * 100;
      var y = mouseY + map(noise(count * 0.0025, 2.5), 0, 1, -1, 1) * 100;
      var a = noise(count * 0.001, 3.5) * TWO_PI * 10;
      var s = noise(count * 0.03, 5.5);

      var hue = map(noise(count * 0.01, 5.5), 0.33, 0.66, 0, 1);
      tint(hue, 0.25, 1, noise(count * 0.001, 7.5) * 0.5);

      push();
      translate(x, y);
      rotate(a);
      scale(s, s);
      image(brush, 0, 0);
      pop();

      push();
      translate(width - x, y);
      rotate(-a);
      scale(-s, s);
      image(brush, 0, 0);
      pop();

      count++;
    }
  }
}

function keyPressed() {
  if (keyCode == 32) {
    makeBrush();
  }
  if (keyCode == 80) {
    running = !running;
  }
}

function makeBrush() {
  brush.clear();
  brush.noFill();
  noiseSeed(random(-100000, 100000));
  for (var i = 0; i < 10; i++) {
    brush.strokeWeight(random() * 2);
    brush.stroke(random(), 0.5, 1, random() * 0.5);
    brush.ellipse(
      random(20, brush.width),
      random(0, brush.height),
      random(10, brush.width)
    );
  }
  noStroke();
  fill(0, 0, 0.1, 1);
  clear();
  rect(0, 0, width, height, 0);
}

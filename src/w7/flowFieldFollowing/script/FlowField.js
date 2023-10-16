// Original Code from: https://editor.p5js.org/natureofcode/sketches/egribz8WV
// Daniel Shiffman
// The Nature of Code
// Example 5-4: Flow Field Following

//Modified by OO-SUNG SON (spctrm404)

class FlowField {
  constructor(resolution) {
    this.resolution = resolution;
    this.columns = floor(width / this.resolution);
    this.rows = floor(height / this.resolution);
    this.field = new Array(this.columns);
    for (let col = 0; col < this.columns; col++) {
      this.field[col] = new Array(this.rows);
    }
    this.init();
  }

  init() {
    noiseSeed(random(10000));
    let xoff = 0;
    for (let colIdx = 0; colIdx < this.columns; colIdx++) {
      let yoff = 0;
      for (let rowIdx = 0; rowIdx < this.rows; rowIdx++) {
        let angle = map(noise(xoff, yoff), 0, 1, 0, TAU);
        this.field[colIdx][rowIdx] = p5.Vector.fromAngle(angle);
        yoff += 0.1;
      }
      xoff += 0.1;
    }
  }

  display() {
    for (let colIdx = 0; colIdx < this.columns; colIdx++) {
      for (let rowIdx = 0; rowIdx < this.rows; rowIdx++) {
        const w = width / this.columns;
        const h = height / this.rows;
        const v = this.field[colIdx][rowIdx].copy();
        v.setMag(w * 0.5);
        let x = colIdx * w + w / 2;
        let y = rowIdx * h + h / 2;
        strokeWeight(1);
        line(x, y, x + v.x, y + v.y);
      }
    }
  }

  lookup(pos) {
    let column = constrain(floor(pos.x / this.resolution), 0, this.columns - 1);
    let row = constrain(floor(pos.y / this.resolution), 0, this.rows - 1);
    return this.field[column][row].copy();
  }
}

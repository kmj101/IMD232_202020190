function setup() {
  setCanvasContainer('canvas', 3, 2, true);
}

function draw() {
  background(255);
  noStroke();
  fill(0);
  if (mouseX > width / 2) {
    if (mouseY > height / 2) {
      rect(width / 2, height / 2, width / 2, height / 2);
    } else {
      rect(width / 2, 0, width / 2, height / 2);
    }
  } else {
    if (mouseY > height / 2) {
      rect(0, height / 2, width / 2, height / 2);
    } else {
      rect(0, 0, width / 2, height / 2);
    }
  }

  //   // 위 코드에서 착안해 가로를 3등분해보려했지만 작동하지 않는다. 왜일까?
  //   if (mouseX > (width * 1) / 3) {
  //     if (mouseY > height / 2) {
  //       rect((width * 1) / 3, height / 2, width / 3, height / 2);
  //     } else {
  //       rect((width * 1) / 3, 0, width / 3, height / 2);
  //     }
  //   } else if (mouseX > (width * 2) / 3) {
  //     if (mouseY > height / 2) {
  //       rect((width * 2) / 3, height / 2, width / 3, height / 2);
  //     } else {
  //       rect((width * 2) / 3, 0, width / 3, height / 2);
  //     }
  //   } else {
  //     if (mouseY > height / 2) {
  //       rect(0, height / 2, width / 3, height / 2);
  //     } else {
  //       rect(0, 0, width / 3, height / 2);
  //     }
  //   }

  //   // 위 코드를 제대로 작동하도록 고치면 아래와 같다. 무엇이 다른걸까??
  //   if (mouseX > (width * 2) / 3) {
  //     if (mouseY > height / 2) {
  //       rect((width * 2) / 3, height / 2, width / 3, height / 2);
  //     } else {
  //       rect((width * 2) / 3, 0, width / 3, height / 2);
  //     }
  //   } else if (mouseX > (width * 1) / 3) {
  //     if (mouseY > height / 2) {
  //       rect((width * 1) / 3, height / 2, width / 3, height / 2);
  //     } else {
  //       rect((width * 1) / 3, 0, width / 3, height / 2);
  //     }
  //   } else {
  //     if (mouseY > height / 2) {
  //       rect(0, height / 2, width / 3, height / 2);
  //     } else {
  //       rect(0, 0, width / 3, height / 2);
  //     }
  //   }
}

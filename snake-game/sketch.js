let direction = "right";
let score;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0);
}

function checkStatus() {}

function keyPressed() {
  switch (keyCode) {
    case 87: // W
      if (direction !== "down") direction = "up";
      break;
    case 65: // A
      if (direction !== "right") direction = "left";
      break;
    case 83: // S
      if (direction !== "up") direction = "down";
      break;
    case 68: // D
      if (direction !== "left") direction = "right";
      break;
  }
}

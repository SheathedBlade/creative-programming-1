let direction = "right";
let score;
let bodyCount = 5,
  step = 10;

let startX = 20,
  startY = 250;

let fruitX = 0,
  fruitY = 0;

let segmentX = [],
  segmentY = [];

function generateColor() {
  let r = parseInt(random(256));
  let g = parseInt(random(256));
  let b = parseInt(random(256));

  return color(r, g, b);
}

function setup() {
  // Create scoreboard
  score = createDiv("Score: 0");
  score.id = "scoreboard";
  score.position(10, 10);
  score.style("color", "white");
  score.style("font-family", "Quicksand");
  score.style("font-weight", "bold");

  createCanvas(600, 600);
  noStroke();
  frameRate(20);

  // Create snake
  for (let i = 0; i < bodyCount; i++) {
    segmentX.push(startX + i * step);
    segmentY.push(startY);
  }
}

function draw() {
  background(0);

  for (let i = 0; i < bodyCount - 1; i++) {
    generateSegment(segmentX[i], segmentY[i], 10);
  }

  // Checkers
  updateSnakePosition();
  checkGameState();
  checkFruit();
}

function generateSegment(x, y, radius) {
  //fill(generateColor());
  circle(x, y, radius);
}

function updateSnakePosition() {
  for (let i = 0; i < bodyCount - 1; i++) {
    segmentX[i] = segmentX[i + 1];
    segmentY[i] = segmentY[i + 1];
  }

  switch (direction) {
    case "right":
      segmentX[bodyCount - 1] = segmentX[bodyCount - 2] + step;
      segmentY[bodyCount - 1] = segmentY[bodyCount - 2];
      break;
    case "up":
      segmentX[bodyCount - 1] = segmentX[bodyCount - 2];
      segmentY[bodyCount - 1] = segmentY[bodyCount - 2] - step;
      break;
    case "left":
      segmentX[bodyCount - 1] = segmentX[bodyCount - 2] - step;
      segmentY[bodyCount - 1] = segmentY[bodyCount - 2];
      break;
    case "down":
      segmentX[bodyCount - 1] = segmentX[bodyCount - 2];
      segmentY[bodyCount - 1] = segmentY[bodyCount - 2] + step;
      break;
  }
}

function checkGameState() {}

function checkFruit() {}

function updateFruitSpawn() {}

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

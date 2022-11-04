let direction = "right";
let instructions;
let resetBtn;
let score;
let bodyCount = 10,
  step = 10;

let startX = 10,
  startY = 250;

let fruitX = 0,
  fruitY = 0;

let segmentX = [],
  segmentY = [],
  segmentC = [];

function generateColor() {
  let r = parseInt(random(256));
  let g = parseInt(random(256));
  let b = parseInt(random(256));

  return color(r, g, b);
}

function resetGame() {
  segmentX = [];
  segmentY = [];
  segmentC = [];
  bodyCount = 10;
  direction = "right";
  score.html("Score: 0");

  // Create snake
  for (let i = 0; i < bodyCount; i++) {
    segmentX.push(startX + i * step);
    segmentY.push(startY);
    segmentC.push(generateColor());
  }

  // Reset button
  resetBtn.hide();

  updateFruitSpawn();
  loop();
}

function hoverButton() {
  resetBtn.style("background-color", "#f792a3");
}

function unhoverButton() {
  resetBtn.style("background-color", "#ff4d6a");
}

function setup() {
  createCanvas(600, 600);
  noStroke();
  frameRate(20);

  // Create scoreboard
  score = createDiv("Score: 0");
  score.id = "scoreboard";
  score.position(10, 10);
  score.style("color", "white");
  score.style("font-family", "Quicksand");
  score.style("font-weight", "bold");

  // Create directions
  instructions = createDiv("WASD for movement");
  instructions.id = "instructions";
  instructions.position(10, 570);
  instructions.style("color", "white");
  instructions.style("font-family", "Quicksand");

  // Create reset game button
  resetBtn = createButton("Play Again");
  resetBtn.mousePressed(resetGame).position(width + 20, 20);
  resetBtn.style("font-family", "Quicksand");
  resetBtn.style("border", "none");
  resetBtn.style("padding", "15px");
  resetBtn.style("color", "white");
  resetBtn.style("text-decoration", "none");
  resetBtn.style("background-color", "#ff4d6a");
  resetBtn.mouseOver(hoverButton).mouseOut(unhoverButton);

  resetGame();
}

function draw() {
  background(0);

  for (let i = 0; i < bodyCount; i++) {
    generateBody(segmentX[i], segmentY[i], step, segmentC[i]);
  }
  console.log(segmentX);
  // Checkers
  updateSnakePosition();
  checkGameState();
  checkFruit();
}

function generateBody(x, y, radius, c) {
  fill(c);
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

function checkGameState() {
  // Check if snake either hit edge of canvas or hit itself
  if (
    segmentX[segmentX.length - 1] > width ||
    segmentX[segmentX.length - 1] < 0 ||
    segmentY[segmentY.length - 1] > height ||
    segmentY[segmentY.length - 1] < 0 ||
    checkSnakeCollision()
  ) {
    noLoop();
    const scoreValue = parseInt(score.html().substring(7));
    score.html("Game Over! Your final score is: " + scoreValue + "!");
    resetBtn.show();
  }
}

function checkSnakeCollision() {
  const snakeHeadX = segmentX[segmentX.length - 1];
  const snakeHeadY = segmentY[segmentY.length - 1];

  for (let i = 0; i < segmentX.length - 1; i++) {
    if (segmentX[i] === snakeHeadX && segmentY[i] === snakeHeadY) return true;
  }

  return false;
}

function checkFruit() {
  // Spawns fruit and checks if fruit is obtained
  // If so, add to snake, update score accordingly
  generateBody(fruitX, fruitY, step, color(255));
  if (
    segmentX[segmentX.length - 1] === fruitX &&
    segmentY[segmentY.length - 1] === fruitY
  ) {
    const prevScore = parseInt(score.html().substring(7));
    score.html("Score: " + (prevScore + 1));
    segmentX.unshift(segmentX[0]);
    segmentY.unshift(segmentY[0]);
    segmentC.unshift(generateColor());
    bodyCount++;
    updateFruitSpawn();
  }
}

function updateFruitSpawn() {
  // Makes it so fruit stay aligned with grid that snake takes
  fruitX = floor(random(10, (width - 100) / 10)) * step;
  fruitY = floor(random(10, (height - 100) / 10)) * step;
}

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

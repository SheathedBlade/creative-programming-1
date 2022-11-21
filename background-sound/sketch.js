let dia = 50;
let speedX = 5;
let speedY = -3;

let xPos, yPos;
let sfx1, sfx2;

function preload() {
  soundFormats("wav");
  sfx1 = loadSound("./assets/retro.wav");
  sfx2 = loadSound("./assets/gameover.wav");
}

function setup() {
  createCanvas(600, 600);
  xPos = width / 2;
  yPos = height / 2;
}

function draw() {
  background(50);

  fill(255);
  noStroke();
  circle(xPos, yPos, dia);

  xPos += speedX;
  yPos += speedY;

  if (xPos <= dia / 2 || xPos >= width - dia / 2) {
    sfx1.play();
    speedX *= -1;
  }
  if (yPos <= dia / 2 || yPos >= height - dia / 2) {
    sfx2.play();
    speedY *= -1;
  }
}

function mousePressed() {}

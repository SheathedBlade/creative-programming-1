let xspeed = 3;
let yspeed = 3;
let x;
let y;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
}

function draw() {
  background(50);
  fill(255);
  noStroke();
  rectMode(CENTER);
  square(x, y, 100);

  x += xspeed;
  y += yspeed;
  if (x + 50 >= width || x - 50 <= 0) xspeed *= -1;
  if (y + 50 >= height || y - 50 <= 0) yspeed *= -1;
}

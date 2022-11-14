let speedY = 3;
let speedX = 5;
let x, y;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
}

function draw() {
  background(50);
  fill(255, 150, 0);
  noStroke();
  circle(width / 4, y, 50);

  /**
   * Easing parameters:
   * Input value
   * Input range
   * Output range
   * Easing Type
   * Start, end, both
   */

  let easedX = map2(x, 0, width, 0, width, QUARTIC, BOTH);
  let easedY = map2(y, 0, height, 0, height, QUINTIC, BOTH);
  fill(0, 250, 255);
  circle(width - width / 4, easedY, 50);

  let angle = map2(y, 0, height, 0, TWO_PI, QUADRATIC, BOTH);
  let dia = map2(y, 0, height, 50, 150, SINUSOIDAL, BOTH);
  let from = color(255, 150, 0);
  let to = color(0, 150, 255);
  let pct = map2(y, 0, height, 0, 1, EXPONENTIAL, BOTH);

  push();
  translate(width / 2, height / 2);
  rotate(angle);
  rectMode(CENTER);
  fill(lerpColor(from, to, pct));
  square(0, 0, dia);
  pop();

  fill(150, 250, 255);
  circle(easedX, height - height / 4, 50);
  circle(map2(x, 0, width, 0, width, SQRT, BOTH), height / 4, 50);

  y += speedY;

  if (y < 25 || y > height - 25) {
    speedY *= -1;
  }

  x += speedX;
  if (x < 25 || x > width - 25) speedX *= -1;
}

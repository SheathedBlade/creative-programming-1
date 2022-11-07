let speed = 3;
let radius = 100;
let x;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
}

function draw() {
  background(50);

  let from = color(255, 150, 0);
  let to = color(0, 150, 255);
  let pct = map(x, radius, width - radius, 0, 1);
  let c = lerpColor(from, to, pct);

  fill(c);
  noStroke();
  circle(x, height / 2, radius * 2);

  x += speed;
  if (x + 100 >= width || x - 100 <= 0) speed *= -1;
}

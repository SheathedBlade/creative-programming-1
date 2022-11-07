let minRad = 50;
let maxRad = 200;
let xspeed = 2;
let yspeed = 3;
let x, y;
let angle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
}

function drawFace(x, y, a, r) {
  push();
  translate(x, y);
  rotate(a);
  fill(0, 150, 255);
  noStroke();
  rectMode(CENTER);
  square(0, 0, r * 2);

  fill(255);
  ellipseMode(CENTER);
  circle(-r / 1.75, -r / 4, r / 2);
  circle(r / 1.75, -r / 4, r / 2);

  let pupilDia = map(r, minRad, maxRad, r / 4, r / 16);
  fill(0);
  circle(-r / 1.75, -r / 4, pupilDia);
  circle(r / 1.75, -r / 4, pupilDia);

  let mouth = map(r, minRad, maxRad, 2, r / 3);
  fill(0);
  ellipse(0, r / 5, r / 3, mouth);

  fill("green");
  triangle(-r / 2, -r * 2, r / 8, -r / 2, -r / 1.5, -r / 2);
  triangle(r / 2, -r * 2, r / 1.5, -r / 2, -r / 8, -r / 2);

  pop();
}

function draw() {
  background(50);

  let radius = map(x, 0, width, minRad, maxRad);
  drawFace(x, y, angle, radius);
  x += xspeed;
  y += yspeed;

  if (x < 0 || x > width) xspeed *= -1;
  if (y < 0 || y > height) yspeed *= -1;
}

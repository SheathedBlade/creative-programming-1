let angle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(50);

  push();
  translate(width / 2, height / 2);
  rotate(angle);
  fill(255);
  noStroke();
  rectMode(CENTER);
  square(0, 0, 200);
  pop();

  for (let a = 0; a < radians(360); a += radians(15)) {
    push();
    translate(width / 2, height / 2);
    rotate(a);
    translate(0, 200);
    rotate(angle);
    noStroke();
    rectMode(CENTER);
    square(0, 0, 50);
    pop();
  }

  for (let b = 0; b < radians(360); b += radians(7)) {
    push();
    translate(width / 2, height / 2);
    rotate(b);
    translate(0, 300);
    rotate(-angle);
    rectMode(CENTER);
    fill("red");
    noStroke();
    square(0, 0, 50);
    fill("green");
    triangle(0, 0, 25, 25, -25, 25);
    pop();
  }

  angle += radians(1);
}

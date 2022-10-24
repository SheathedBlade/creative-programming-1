let x, y;

function setup() {
  createCanvas(600, 600);
  x = width / 2;
  y = height / 2;
}

function draw() {
  background(150, 40, 220);
  fill(255);
  noStroke();
  ellipseMode(CENTER);
  circle(x, y, 50);
}

function keyPressed() {
  console.log(key);
  console.log(keyCode);
  if (keyCode == LEFT_ARROW) x -= 10;
  else if (keyCode == RIGHT_ARROW) x += 10;
  if (keyCode == UP_ARROW) y -= 10;
  else if (keyCode == DOWN_ARROW) y += 10;
}

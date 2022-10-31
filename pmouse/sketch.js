let cursorColor = "rgba(0,0,0,0.8)";

function generateColor() {
  return int(random(255));
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noCursor();
  background(255, 30);
}

function draw() {
  stroke(0);
  strokeWeight(8);

  //line(mouseX, mouseY, pmouseX, pmouseY);

  let speed = dist(mouseX, mouseY, pmouseX, pmouseY);
  let diameter = map(speed, 0, 100, 5, 100);

  fill(cursorColor);
  noStroke();
  square(mouseX, mouseY, diameter);
}

function mousePressed() {
  console.log("im down");
  cursorColor =
    "rgba(" +
    generateColor() +
    "," +
    generateColor() +
    "," +
    generateColor() +
    ",0.8)";
}

function mouseReleased() {
  console.log("im up");
  cursorColor = "rgba(0,0,0,0.8)";
}

function mouseDragged() {
  console.log("help me");
  cursorColor =
    "rgba(" +
    generateColor() +
    "," +
    generateColor() +
    "," +
    generateColor() +
    ",0.8)";
}

function doubleClicked() {
  console.log("double click");
  cursorColor = "rgba(124,125,6,0.8)";
}

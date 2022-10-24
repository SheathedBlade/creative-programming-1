let cursorColor = "rgb(255,255,255)";

function setup() {
  createCanvas(windowWidth, windowHeight);
  noCursor();
}

function draw() {
  background(150, 140, 220);
  fill(cursorColor);
  noStroke();
  square(mouseX, mouseY, 30);
}

function mousePressed() {
  console.log("im down");
  cursorColor = "rgb(56,123,231)";
}

function mouseReleased() {
  console.log("im up");
  cursorColor = "rgb(255,255,255)";
}

function mouseDragged() {
  console.log("help me");
  cursorColor = "rgb(126,12,123)";
}

function doubleClicked() {
  console.log("double click");
  cursorColor = "rgb(0,0,0)";
}

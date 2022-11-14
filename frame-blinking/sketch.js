let blinkLeft = true;
let blinkRight = false;
let interval = 800; // in milliseconds
let prevTime;

function setup() {
  createCanvas(windowWidth, windowHeight);
  prevTime = millis(); // Converts previous start time to milliseconds
}

function draw() {
  background(50);

  console.log(frameCount);
  // Controls frame rate and speed to when object appears
  if (frameCount % 30 === 0) blinkLeft = !blinkLeft;
  if (blinkLeft) drawlight(width / 4, height / 2, color(180, 150, 255));
  if (millis() > prevTime + interval) {
    blinkRight = !blinkRight;
    prevTime = millis();
  }
  if (blinkRight) drawlight(width - width / 4, height / 2, color(255, 255, 0));
}

function drawlight(x, y, c) {
  let r = red(c);
  let g = green(c);
  let b = blue(c);

  for (let i = 0; i < 10; i++) {
    let dia = map(i, 0, 9, 200, 30);
    let alpha = map(i, 0, 9, 20, 255);
    fill(r, g, b, alpha);
    noStroke();
    circle(x, y, dia);
  }
}

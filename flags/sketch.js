let showIntro = true;
let showMainSketch = false;
let showEnding = false;
let showLeft = false,
  showRight = false,
  blinkLeft = false,
  blinkRight = false;
let font, prevTime;
let interval = 1000;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont("Georgia");
  prevTime = millis();
}

function draw() {
  background(50);

  if (showIntro) intro();
  else if (showMainSketch) mainSketch();
  else if (showEnding) ending();
}

function keyPressed() {
  if (showIntro) {
    showIntro = false;
    showMainSketch = true;
  } else if (showMainSketch) {
    if (keyCode === LEFT_ARROW) showLeft = !showLeft;
    if (keyCode === RIGHT_ARROW) showRight = !showRight;
    if (keyCode === ENTER) {
      showMainSketch = false;
      showEnding = true;
    }
  }
}

function intro() {
  background(50);
  fill(255);
  noStroke();
  textSize(100);
  textAlign(CENTER, CENTER);
  text("INTRO", width / 2, height / 2);
  textSize(24);
  text("[Press Any Key to Start]", width / 2, height - height / 4);
}

function mainSketch() {
  background(255, 150, 0);
  fill(0);
  noStroke();
  textSize(height / 6);
  textAlign(CENTER, CENTER);
  text("[It could be worse]", width / 2, height / 2);

  if (frameCount % 30 === 0) if (showLeft) blinkLeft = !blinkLeft;

  if (millis() > prevTime + interval) {
    if (showRight) blinkRight = !blinkRight;
    prevTime = millis();
  }

  if (blinkLeft)
    drawlight(width / 4, height - height / 4, color(180, 150, 255));
  if (blinkRight)
    drawlight(width - width / 4, height - height / 4, color(255, 255, 0));
}

function ending() {
  background(180, 122, 87);
  fill(230, 187, 100);
  noStroke();
  textSize(height / 6);
  textAlign(CENTER, CENTER);
  text("[You made it to the end!]", width / 2, height / 2);
}

function drawlight(x, y, c) {
  let r = red(c);
  let g = green(c);
  let b = blue(c);

  for (let i = 0; i < 10; i++) {
    let dia = map(i, 0, 9, 100, 30);
    let alpha = map(i, 0, 9, 20, 255);
    fill(r, g, b, alpha);
    noStroke();
    circle(x, y, dia);
  }
}

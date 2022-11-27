let showIntro = true;
let showScene1 = false;
let showScene2 = false;
let showScene3 = false;
let showEnding = false;
let currTime, startTime, tEllipse;
let speedX = 5,
  speedX2 = 2;
let easeX, easeX2;
let lighthouse;

let maxSteps = 40;
let gravity;
let rain = [];
let discharges, steps, effectSize, center, canvasSize;

let bgMusic, arcticWind, horrorWind;

function raining(array, gravity) {
  array.forEach((drop) => {
    drop.applyForce(gravity);
    drop.fall();
    drop.render();
  });
}

function lightningBGFlash() {
  let chance = random(0, 100);
  if (chance < 2) background(50, 85, 165, 100);
}

function updateScene() {
  if (millis() > currTime + 1000 && (!showIntro || !showEnding)) {
    startTime++;
    currTime = millis();
  }
  if (startTime >= 20) {
    if (showScene1) {
      showScene1 = false;
      showScene2 = true;
    } else if (showScene2) {
      showScene2 = false;
      showScene3 = true;
    } else if (showScene3) {
      showScene3 = false;
      showEnding = true;
    }
    startTime = 0;
  }
}

function preload() {
  soundFormats("mp3", "wav");
  bgMusic = loadSound("./assets/rainLoop.wav");
  arcticWind = loadSound("./assets/arctic_wind.wav");
  horrorWind = loadSound("./assets/horror_wind.wav");
  lighthouse = loadImage("./assets/lighthouse.png");
}

function setup() {
  canvasSize = createVector(windowWidth, windowHeight);

  createCanvas(canvasSize.x, canvasSize.y);
  noSmooth();
  strokeCap(SQUARE);
  textFont("Trebuchet MS");
  currTime = millis();
  startTime = 0;
  tEllipse = 0;
  easeX = width / 2;
  easeX2 = width / 2;
  angleMode(DEGREES);
  rectMode(CENTER);

  for (let i = 0; i < 1040; i++) {
    rain.push(new Raindrop());
  }
}

function draw() {
  background(10, 20, 30);

  if (showIntro) intro();
  else {
    updateScene();
    if (!showEnding || !showIntro) {
      lightningBGFlash();
      raining(rain, gravity);

      if (bgMusic.isLoaded() && !bgMusic.isPlaying()) {
        bgMusic.setVolume(0.2);
        bgMusic.loop();
      }

      if (arcticWind.isLoaded() && !arcticWind.isPlaying() && showScene2) {
        arcticWind.setVolume(0.4);
        arcticWind.loop();
      }

      if (horrorWind.isLoaded() && !horrorWind.isPlaying() && showScene3) {
        arcticWind.stop();
        horrorWind.setVolume(0.7);
        horrorWind.loop();
      }
    }

    if (showScene1) scene1();
    else if (showScene2) scene2();
    else if (showScene3) scene3();
    else if (showEnding) ending();
  }
}

function keyPressed() {
  if (showIntro) {
    showIntro = false;
    showScene1 = true;
  } else if (showEnding) {
    showEnding = false;
    showIntro = true;
  }
}

function intro() {
  if (bgMusic.isPlaying()) bgMusic.stop();
  fill(255);
  noStroke();
  textSize(100);
  textAlign(CENTER, CENTER);
  text("Lost at Sea", width / 2, height / 2);
  textSize(24);
  text("[Press Any Key to Start]", width / 2, height - height / 4);
}

// Start of thunderstorm / waves
function scene1() {
  const xPos = 0,
    yPos = 0;
  for (let x = 0; x <= width; x += 30) {
    for (let y = 0; y <= height; y += 30) {
      const xAngle = map(xPos, 0, width, -4 * PI, 4 * PI, true);
      const yAngle = map(yPos, 0, height, -4 * PI, 4 * PI, true);
      const angle = xAngle * (x / width) + yAngle * (y / height);

      const myX = x + 10 * cos(degrees((PI / 2) * tEllipse * angle));
      const myY = y + 10 * sin(degrees((PI / 2) * tEllipse * angle));
      fill(30, 60, 90, 90);
      noStroke();
      ellipse(myX, myY, 10);
    }
  }

  // Adding "boats"
  let easedX1 = map2(easeX, 0, width, width / 2, width - 100, QUARTIC, BOTH);
  let easedX2 = map2(easeX, 0, width, width / 5, width / 3, EXPONENTIAL, BOTH);
  let easedX3 = map2(easeX, 0, width, width / 7, width - 200, QUADRATIC, BOTH);
  fill(152, 80, 49, 90);
  rect(easedX1, height / 4, 100, 50);
  rect(easedX2, height / 3, 100, 50);
  rect(easedX3, height - 200, 100, 50);

  tEllipse += 0.01;
  easeX += speedX;
  if (easeX < 25 || easeX > width - 25) speedX *= -1;
}

function flickerLight() {
  let chance = random(0, 100);
  if (chance < 4) {
    fill(223, 179, 48, 190);
    noStroke();
    circle(1375, height / 1.65, 100);
  }
}

// Flickering lighthouse
function scene2() {
  // Flickering light
  flickerLight();

  // Shifting boat
  fill(152, 80, 49, 90);
  noStroke();
  let eased = map2(easeX2, 0, width / 2, width / 6, width / 2, CUBIC, BOTH);
  rect(eased, height / 1.1, width / 5, height / 5);
  easeX2 += speedX2;
  if (easeX2 < 25 || easeX2 > width / 2) speedX2 *= -1;

  // Background
  fill(10, 20, 60);
  noStroke();
  lighthouse.filter(GRAY);
  tint(80);
  image(lighthouse, 1023, height / 1.8);
  rect(width / 2, height, width, height / 6);
}

// Whirlpool
function scene3() {
  noFill();
  stroke(255);

  translate(width / 2, height / 2);

  for (let i = 0; i < 200; i++) {
    push();
    rotate(sin(frameCount + i) * PI * 100);

    let r = map(sin(frameCount), -1, 1, 50, 100);
    let g = map(cos(frameCount / 2), -1, 1, 75, 150);
    let b = map(sin(frameCount / 4), -1, 1, 160, 255);

    stroke(r, g, b);
    strokeWeight(1);
    rect(0, 100, 700 - i * 3.5, 700 - i * 3.5, 200 - i);
    pop();
  }

  let ang1 = TWO_PI * noise(0.01 * frameCount + 10);
  let ang2 = TWO_PI * noise(0.01 * frameCount + 20);
  let ang3 = degrees(TWO_PI * noise(0.01 * frameCount + 30));
  let rx = 60 * noise(0.01 * frameCount + 40);
  let tx = 400 * noise(0.01 * frameCount + 50);
  let size1 = 200 * noise(0.01 * frameCount + 60);
  let size2 = 50 * noise(0.01 * frameCount + 60);

  for (let i = 0; i < 8; i++) {
    push();
    rotate(degrees(ang1 + (TWO_PI * i) / 8));
    translate(tx, 0);
    fill(152, 80, 49, 70);
    stroke(152, 80, 49, 150);
    rect(0, 0, size1, size1);
    for (let j = 0; j < 6; j++) {
      push();
      rotate(degrees(ang2 + (TWO_PI * j) / 6));
      translate(rx, 0);
      rotate(ang3);
      fill(13, 195, 19, 40);
      stroke(13, 195, 19, 100);
      rect(rx, 0, size2, size2);
      pop();
    }
    translate();
    pop();
  }
}

function ending() {
  if (arcticWind.isPlaying()) arcticWind.stop();

  if (horrorWind.isPlaying()) horrorWind.stop();

  fill(255);
  noStroke();
  textSize(100);
  textAlign(CENTER, CENTER);
  text("Fin", width / 2, height / 2);
  textSize(24);
  text("[Press Any Key to Go Back to Start]", width / 2, height - height / 4);
}

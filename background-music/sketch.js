let bgMusic;
let font;
let showIntro = true;

let dia = 50;
let speedX = 8;
let speedY = -6;

let xPos, yPos;
let sfx1, sfx2, sfx3;
let bgColor;

function preload() {
  soundFormats("mp3", "wav");
  bgMusic = loadSound("./assets/breathout.mp3");
  sfx1 = loadSound("./assets/retro.wav");
  sfx2 = loadSound("./assets/gameover.wav");
  sfx3 = loadSound("./assets/transition.wav");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  xPos = width / 2;
  yPos = height / 2;
  randomBG();
}

function draw() {
  if (bgMusic.isPlaying()) sunrise();
  else if (showIntro) intro();
  else bouncing();
}

function intro() {
  background(50);

  textFont("Helvetica");
  textSize(18);
  textAlign(CENTER, CENTER);
  fill(255);
  noStroke();
  text("[Click anywhere to start!]", width / 2, height / 2);
}

function sunrise() {
  let duration = bgMusic.duration();
  let time = bgMusic.currentTime();
  let pct = map(time, 0, duration, 0, 1);
  let dark = color(30, 0, 0);
  let light = color(255, 100, 150);
  background(lerpColor(dark, light, pct));

  let y = map(time, 0, duration, height + 300, height / 4);
  let dia = map(time, 0, duration, 600, 100);
  fill(255, 255, 100);
  noStroke();
  circle(width / 2, y, dia);

  if (time <= duration - 1 && time >= duration - 2 && !sfx3.isPlaying())
    sfx3.play();
}

function randomBG() {
  let r = parseInt(random(256));
  let g = parseInt(random(256));
  let b = parseInt(random(256));

  bgColor = color(r, g, b);
}

function bouncing() {
  background(bgColor);
  fill(255);
  noStroke();
  circle(xPos, yPos, dia);

  xPos += speedX;
  yPos += speedY;

  if (xPos <= dia / 2 || xPos >= width - dia / 2) {
    if (sfx1.isLoaded()) sfx1.play();
    randomBG();
    speedX *= -1;
  }
  if (yPos <= dia / 2 || yPos >= height - dia / 2) {
    if (sfx2.isLoaded()) sfx2.play();
    randomBG();
    speedY *= -1;
  }
}

function mousePressed() {
  if (bgMusic.isLoaded() && showIntro) {
    showIntro = false;
    bgMusic.play();
  }
}

let showIntro = true;
let showScene1 = false;
let showScene2 = false;
let showScene3 = false;
let showEnding = false;
let currTime;

let maxSteps = 40;
let gravity;
let rain = [];
let discharges, steps, effectSize, center, canvasSize;

// function Discharge(pos, v0, childrenSpawnProbability) {
//   this.v0 = v0;
//   this.pos = [pos.copy()];
//   this.children = [];
//   this.childrenSpawnProbability = childrenSpawnProbability;

//   this.update = function (stepI) {
//     let p0 = this.pos[this.pos.length - 1];
//     for (let i = 0; i < stepI; i++) {
//       let p1 = p5.Vector.add(p0, p5.Vector.mult(v0, 5));
//       v0.add(p5.Vector.random2D().mult(0.44));
//       v0.normalize();

//       this.pos.push(p1);
//       p0 = p1;

//       let chSpawnProb =
//         this.childrenSpawnProbability *
//         (0.25 + (0.75 * this.pos.length) / maxSteps);
//       if (random(0.0, 1.0) < chSpawnProb) {
//         let d = new Discharge(p0.copy(), v0.copy(), chSpawnProb);
//         this.children.push(d);
//       }
//     }

//     for (let i = 0; i < this.children.length; i++) {
//       this.children[i].update(stepI);
//     }
//   };

//   this.draw = function () {
//     for (let i = 1; i < this.pos.length; i++) {
//       let p0 = this.pos[i - 1];
//       let p1 = this.pos[i];
//       let u = p0.dist(center) / effectSize;
//       strokeWeight(3 - 2 * u);
//       line(p0.x, p0.y, p1.x, p1.y);
//     }

//     for (let i = 0; i < this.children.length; i++) {
//       this.children[i].draw();
//     }
//   };

//   this.done = function () {
//     return (
//       this.pos.length > maxSteps ||
//       this.pos[this.pos.length - 1].dist(center) > effectSize
//     );
//   };
// }

function raining(array, gravity) {
  array.forEach((drop) => {
    drop.applyForce(gravity);
    drop.fall();
    drop.render();
  });
}

function setup() {
  canvasSize = createVector(windowWidth, windowHeight);
  // center = p5.Vector.div(canvasSize, 2);
  // effectSize = 400;
  // discharges = [];

  createCanvas(canvasSize.x, canvasSize.y);
  noSmooth();
  strokeCap(SQUARE);
  textFont("Trebuchet MS");
  currTime = millis();
  angleMode(DEGREES);
  rectMode(CENTER);

  for (let i = 0; i < 1040; i++) {
    rain.push(new Raindrop());
  }
}

function draw() {
  background(10, 20, 30);

  if (showIntro) intro();
  else if (showScene1) scene1();
  else if (showScene2) scene2();
  else if (showScene3) scene3();
  else if (showEnding) ending();
}

function keyPressed() {
  if (showIntro) {
    showIntro = false;
    showScene1 = true;
  }
}

function intro() {
  background(50, 75, 165, 0.8);
  fill(255);
  noStroke();
  textSize(100);
  textAlign(CENTER, CENTER);
  text("Rainy Night", width / 2, height / 2);
  textSize(24);
  text("[Press Any Key to Start]", width / 2, height - height / 4);
}

// Thunderstorm
function scene1() {
  // if (random(0.0, 1.0) < 0.1) {
  //   let c = createVector(200, height - 100);
  //   let d = new Discharge(c.copy(), p5.Vector.random2D(), 0.1);
  //   discharges.push(d);
  // }

  // discharges = discharges.filter((elem) => !elem.done());
  // for (let i = 0; i < discharges.length; i++) discharges[i].update(8 - (i % 4));

  // background(50, 75, 165, 0.8);
  // stroke(255);

  // for (let i = 0; i < discharges.length; i++) {
  //   discharges[i].draw();
  // }

  raining(rain, gravity);
}

// Falling trees filling up screen as lightning hits
function scene2() {}

// Whirlpool
function scene3() {
  noFill();
  stroke(255);

  translate(width / 2, height / 2);

  for (let i = 0; i < 200; i++) {
    push();
    rotate(sin(frameCount + i) * 100);

    let r = map(sin(frameCount), -1, 1, 50, 100);
    let g = map(cos(frameCount / 2), -1, 1, 75, 150);
    let b = map(sin(frameCount / 4), -1, 1, 160, 255);

    stroke(r, g, b);
    rect(0, 0, 600 - i * 3, 600 - i * 3, 200 - i);
    pop();
  }
}

function ending() {}

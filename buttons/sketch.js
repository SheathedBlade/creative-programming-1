let textButton, radioButton, dropDown, checkBox, colorPicker;
let bgColor = "rgb(0,150,255)";
let cursorSize = 50;
let angle = 0;
let rotateCursor = false;

function changeBackgroundColor() {
  let r = int(random(255));
  let g = int(random(255));
  let b = int(random(255));
  bgColor = "rgb(" + r + "," + g + "," + b + ")";
}

function changeCursorSize() {
  cursorSize = parseInt(dropDown.value());
}

function toggleCursorRotation() {
  rotateCursor = !rotateCursor;
}

function setup() {
  createCanvas(600, 600);
  noCursor();

  textButton = createButton("Change background color");
  textButton.mousePressed(changeBackgroundColor).position(width + 20, 580);

  radioButton = createRadio();
  radioButton.option("Square");
  radioButton.option("Circle");
  radioButton.option("Triangle");
  radioButton.selected("Triangle");
  radioButton.position(width + 20, 20);

  dropDown = createSelect();
  dropDown.option("10");
  dropDown.option("50");
  dropDown.option("100");
  dropDown.option("200");
  dropDown.selected("50");
  dropDown.position(width + 20, 60).changed(changeCursorSize);

  checkBox = createCheckbox("Rotate cursor", false);
  checkBox.changed(toggleCursorRotation).position(width + 20, 140);

  colorPicker = createColorPicker("#ed225d");
  colorPicker.position(width + 20, 180);
}

function draw() {
  background(bgColor);

  push();
  translate(mouseX, mouseY);
  if (rotateCursor) {
    angle += radians(2);
    rotate(angle);
  }

  fill(colorPicker.color());

  let cursorShape = radioButton.value();
  switch (cursorShape) {
    case "Square":
      rectMode(CENTER);
      square(0, 0, cursorSize);
      break;
    case "Circle":
      ellipseMode(CENTER);
      circle(0, 0, cursorSize);
      break;
    case "Triangle":
      //rectMode(CENTER);
      triangle(0, 0, -cursorSize, cursorSize, cursorSize, cursorSize);
      break;
  }
  pop();
}

// These are toggles for each scene that dictates what gets shown on screen
let showMainMenu = true,
  showIntro = false,
  showEnding = false;

// Scoring count
let score = 0;

// Custom font
let urbanistMedium;

// Loads all necessary music tracks
let bgm_1;

// Dialogue for intro
let dialogueIntro = [
  {
    text: "Welcome, Chancellor.",
    next: 1,
  },
  {
    text: "You have been newly appointed to this position.",
    next: 2,
  },
  {
    text: "You will be passing and enforcing many policies.",
    next: 3,
  },
  {
    text: "I shall be your assistant in this endeavor.",
    next: 4,
  },
  {
    text: "All you have to do is decide which path we will embark.",
    next: 5,
  },
  {
    text: "Glory to the Global Conglomerate, Chancellor.",
    next: 6,
  },
];

// Preloads any necessary assets such as images and audio
function preload() {
  // Loads urbanist font - medium
  urbanistMedium = loadFont("./assets/fonts/Urbanist-Medium.ttf");
  // Sets sound format for importing audio to mp3 and wav
  soundFormats("mp3", "wav");
  // Loads background music 1
  bgm_1 = loadSound("./assets/audio/bgm_1.mp3");
}

function setup() {
  // Gets vectors of the size of the canvas (both are based on window dimensions)
  canvasSize = createVector(windowWidth, windowHeight);
  // Creates canvas with specified vectors
  createCanvas(canvasSize.x, canvasSize.y);
  // Strokes are not rounded
  strokeCap(SQUARE);
  // Sets text to Trebuchet MS
  textFont(urbanistMedium);
  // Sets angle mode to degrees
  angleMode(DEGREES);
  // Sets rectangle mode to center, makes rectangles drawn starting from center
  rectMode(CENTER);
  // Reduces volume of bgm_1
  bgm_1.setVolume(0.2);
}

// Updates hidden score for public relations
function updateScore() {}

// Changes and updates scenes
function updateScene() {}

// Draws scene and calls any update functions
function draw() {
  // If main menu toggle is true, show the main menu scene
  if (showMainMenu) mainMenu();
  else {
    updateScene();
  }
}

// Mouse clicked function. Includes several actions that are scene dependant
function mouseClicked() {
  // If the main menu is the current scene
  if (showMainMenu) {
    // Set main menu toggle to false to make it not draw the scene
    showMainMenu = false;
    // Set intro to true to have this scene be drawn
    showIntro = true;
  }
}

// Main menu scene, allows player to click to start
function mainMenu() {
  // If BGM isn't playing and it's loaded, start playing BGM and loop it
  if (!bgm_1.isPlaying() && bgm_1.isLoaded()) bgm_1.loop();
  background(10, 20, 30);
  // Fills text color with white
  fill(255);
  // Disables stroke
  noStroke();
  // Sets text size to 100
  textSize(100);
  // Centers the text
  textAlign(CENTER, CENTER);
  // Shows title text on the middle of the window
  text("The Enforcer", width / 2, height / 3);
  // Sets text size to 24
  textSize(24);
  // Shows secondary text telling player to click to start the game
  // Appears below the title text
  text("[Click Anywhere to Start]", width / 2, height - height / 4);
  text(
    "[To play the game, use your mouse to click on the choices, and advance through dialogue.]",
    width / 2,
    height - height / 5
  );
}

// Promoted as new chancellor for efforts in eradicating disease
function intro() {}

// Welcome to new job, tutorial (day 1)
function week1() {}

// Shown after choice made in week 1
function night1() {}

// Food supply chain
function week2() {}

// Shown after choice made in week 2
function night2() {}

// Insurgents rising
function week3() {}

// Shown after choice made in week 3
function night3() {}

// Caught insurgents, what to do?
function week4() {}

// Shown after choice made in week 4
function night4() {}

// Violence breaking out at main square, what to do?
function week5() {}

// Shown after choice made in week 5
function night5() {}

// Civil war, Peacekeepers are ready to deploy (either send in more soldiers, or deploy Peacekeepers)
function week6() {}

// Shown after choice made in week 6
function night6() {}

// One choice: fight
function week7() {}

// Shown after the final week, ends with a short epilogue text
function ending() {}

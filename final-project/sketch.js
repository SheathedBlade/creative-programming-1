// These are toggles for each scene that dictates what gets shown on screen
// main menu toggle
let showMainMenu = true,
  // intro toggle
  showIntro = false,
  // week 1 start toggle
  showWeek1Start = false,
  // week 1 choice toggle
  showWeek1Choice = false,
  // week 1 end toggle
  showWeek1End = false,
  // week 2 start toggle
  showWeek2Start = false,
  // week 2 choice toggle
  showWeek2Choice = false,
  // week 2 end toggle
  showWeek2End = false,
  // week 3 start toggle
  showWeek3Start = false,
  // week 3 choice toggle
  showWeek3Choice = false,
  // week 3 end toggle
  showWeek3End = false,
  // week 4 start toggle
  showWeek4Start = false,
  // week 4 choice toggle
  showWeek4Choice = false,
  // week 4 end toggle
  showWeek4End = false,
  // week 5 start toggle
  showWeek5Start = false,
  // week 5 choice toggle
  showWeek5Choice = false,
  // week 5 end toggle
  showWeek5End = false,
  // week 6 start toggle
  showWeek6Start = false,
  // week 6 choice toggle
  showWeek6Choice = false,
  // week 6 end toggle
  showWeek6End = false,
  // week 7 start toggle
  showWeek7Start = false,
  // week 7 choice toggle
  showWeek7Choice = false,
  // ending toggle
  showEnding = false;

// Scoring count
let score = 100;

// Custom font
let urbanistMedium;

// Initialize all necessary music tracks
let bgm_1;

// Initialize all necessary images
let mainMenuImg, mood;

// Current character, click counter, current index, and next index
let currentChar = 0,
  currIndex = 0,
  clickCount = 0,
  nextIndex = 0;

// Initialize choice variable (will only be 0 or 1, but -1 will be start state)
let choice = -1;

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
    text: "As the individual who solved the malignant phenomenon called disease, we have high expectations for you.",
    next: 3,
  },
  {
    text: "You will be passing and enforcing many policies.",
    next: 4,
  },
  {
    text: "I shall be your assistant in this endeavor.",
    next: 5,
  },
  {
    text: "All you have to do is decide which path we will embark.",
    next: 6,
  },
  {
    text: "Glory to the Global Conglomerate, Chancellor.",
    next: 7,
  },
];

// Week 1 dialogue
let dialogueWeek1Start = [
  {
    text: "Welcome to your first day, Chancellor.",
    next: 1,
  },
  {
    text: "Each day I will present you with two folders.",
    next: 2,
  },
  {
    text: "They contain different proposals for policies yet to be implemented.",
    next: 3,
  },
  {
    text: "Our enforcers can only handle one decision.",
    next: 4,
  },
  {
    text: "Please, take your time and click which one to enact.",
    next: 5,
  },
  {
    text: "Additionally, you may take a look at our current situation in order to correctly decide which policy to enact.",
    next: 6,
  },
  {
    text: "Let's get the ball rolling, shall we?",
    next: 7,
  },
  {
    text: "The Ministry of Hospitality has requested funds to construct a new housing district.",
    next: 8,
  },
];

// Week 1 choice
let dialogueWeek1Choice = {
  question:
    "We don't nearly have enough funds. How should we fundraise this construction?",
  option1: {
    answer: "Increase sales tax across all transactions.",
    score: -10,
  },
  option2: {
    answer: "Increase all taxes on those in the wealthier tax bracket.",
    score: -5,
  },
};

// Week 1 ending dialogue
// An array of arrays, two dialogue trees from two different options
let dialogueWeek1End = [
  [
    {
      text: "Great idea, Chancellor. We should be able to raise funds very quickly without being overbearing on our citizens.",
      next: 1,
    },
    {
      text: "I shall contact the Ministry of Currency about your decision, as well as the Ministry of Hospitality to go forward with the construction.",
      next: 2,
    },
    {
      text: "[Week 1 has ended.]",
      next: 3,
    },
  ],
  [
    {
      text: "Interesting idea, Chancellor. We don't want to pressure the less fortunate, after all.",
      next: 1,
    },
    {
      text: "The wealthy would include us, but we can easily afford dipping into our wallets a bit more.",
      next: 2,
    },
    {
      text: "I shall contact the Ministry of Currency about your decision, as well as the Ministry of Hospitality to go forward with the construction.",
      next: 3,
    },
    {
      text: "[Week 1 has ended.]",
      next: 4,
    },
  ],
];

// Week 2 dialogue - food supply
let dialogueWeek2Start = [
  {
    text: "Welcome back, Chancellor.",
    next: 1,
  },
  {
    text: "The Ministry of Nourishment has run into problems supplying our populace with food.",
    next: 2,
  },
  {
    text: "Our society grows exponentially every day. We will need to find a solution to provide enough food for everyone.",
    next: 3,
  },
];

// Week 2 choice
let dialogueWeek2Choice = {
  question: "How should we ensure that there is enough food for everyone?",
  option1: {
    answer:
      "Research and develop a food item with the most nutritional value, and serve only that.",
    score: -15,
  },
  option2: {
    answer:
      "Enforce a food item limit on every storefront, so that no one hoards food.",
    score: -20,
  },
};

// Week 2 ending dialogue
// An array of arrays, two dialogue trees from two different options
let dialogueWeek2End = [
  [
    {
      text: "Quite an interesting angle, Chancellor.",
      next: 1,
    },
    {
      text: "By only making one type of food, we save on resources that can be fully devoted elsewhere.",
      next: 2,
    },
    {
      text: "And in doing so, we will not have to worry about devoting all of our efforts on all types of food.",
      next: 3,
    },
    {
      text: "This food would also have the best nutritional value of any food we have created.",
      next: 4,
    },
    {
      text: "Though, I can only imagine how it tastes.",
      next: 5,
    },
    {
      text: "Still, it's for the best for all.",
      next: 6,
    },
    {
      text: "I shall contact the Ministry of Nourishment of your decision.",
      next: 7,
    },
    {
      text: "[Week 2 has ended.]",
      next: 8,
    },
  ],
  [
    {
      text: "Quite a harsh, but understandable choice, Chancellor.",
      next: 1,
    },
    {
      text: "It is true that there are people who buy too much, and end up with waste by the end of the day.",
      next: 2,
    },
    {
      text: "This would ensure that there is minimal wastage of food. This excess food can be provided to another.",
      next: 3,
    },
    {
      text: "I imagine we can make some exceptions for culinarians, as it is their job.",
      next: 4,
    },
    {
      text: "It is perhaps a short-term solution, but it is to make sure everyone is fed.",
      next: 5,
    },
    {
      text: "I shall contact the Ministry of Nourishment of your decision.",
      next: 6,
    },
    {
      text: "[Week 2 has ended.]",
      next: 7,
    },
  ],
];

// Week 3 dialogue - insurgents part 1
let dialogueWeek3Start = [
  {
    text: "Welcome back, Chancellor.",
    next: 1,
  },
  {
    text: "The Ministry of Security has notified us of a potential insurgent threat.",
    next: 2,
  },
  {
    text: "To think that people are unhappy of how we run things!",
    next: 3,
  },
  {
    text: "Do they know how taxing it is to meet everyone's needs in a society like this every single day?",
    next: 4,
  },
  {
    text: "But I digress.",
    next: 5,
  },
];

// Week 3 choice
let dialogueWeek3Choice = {
  question: "How should we deal with this imminent threat?",
  option1: {
    answer:
      "Send drones to monitor their actions. They haven't done anything dangerous yet.",
    score: -30,
  },
  option2: {
    answer:
      "Order the capture of all suspects involved with this insurgent group.",
    score: -50,
  },
};

// Week 3 ending dialogue
// An array of arrays, two dialogue trees from two different options
let dialogueWeek3End = [
  [
    {
      text: "I quite agree, Chancellor.",
      next: 1,
    },
    {
      text: "They haven't done anything notable yet, other than kicking up some rumors.",
      next: 2,
    },
    {
      text: "We shall keep a close eye on them.",
      next: 3,
    },
    {
      text: "I shall notify the Ministry of Security to deploy drones to monitor anyone suspected of involvement.",
      next: 4,
    },
    {
      text: "[Week 3 has ended.]",
      next: 5,
    },
  ],
  [
    {
      text: "True, we should cut all loose ends and make sure we keep the peace.",
      next: 1,
    },
    {
      text: "We should nip this issue in the bud before anything catastrophic happens.",
      next: 2,
    },
    {
      text: "I shall notify the Ministry of Security to order the detainment of those suspected of involvement.",
      next: 3,
    },
    {
      text: "[Week 3 has ended.]",
      next: 4,
    },
  ],
];

// Week 4 dialogue - insurgents part 2
let dialogueWeek4Start = [
  {
    text: "Welcome back, Chancellor.",
    next: 1,
  },
  {
    text: "The Ministry of Security has ascertained the identities of these insurgents.",
    next: 2,
  },
  {
    text: "They are a group, mostly of young adults, that preach the idea of freedom.",
    next: 3,
  },
  {
    text: "They say that we are restricting their freedoms for too long.",
    next: 4,
  },
  {
    text: "Yet, our society can only exist through peace and order.",
    next: 5,
  },
  {
    text: "Have they not seen the wars and tragedies when we were once divided into myriad nations?",
    next: 6,
  },
  {
    text: "Now that we have determined that there is a threat upon our society, we have to deal with these insurgents.",
    next: 7,
  },
];

// Week 4 choice
let dialogueWeek4Choice = {
  question: "What should we do with these insurgents?",
  option1: {
    answer: "Execute them to set an example and remind the people of our past.",
    score: -80,
  },
  option2: {
    answer: "Order the exile of these insurgents and force them out.",
    score: -70,
  },
};

// Week 4 ending dialogue
// An array of arrays, two dialogue trees from two different options
let dialogueWeek4End = [
  [
    {
      text: "This decision should serve to remind people the struggles we had to endure to reach this paradise.",
      next: 1,
    },
    {
      text: "Though it is regrettable, we must persevere and be strong.",
      next: 2,
    },
    {
      text: "We must destroy the source of this conflict at all costs.",
      next: 3,
    },
    {
      text: "I'll contact the Ministry of Security to execute the insurgents.",
      next: 4,
    },
    {
      text: "[Week 4 has ended.]",
      next: 5,
    },
  ],
  [
    {
      text: "True enough, Chancellor.",
      next: 1,
    },
    {
      text: "If we allow this to go on any longer, our way of life will be ruined.",
      next: 2,
    },
    {
      text: "They should be grateful that we're allowing them to live.",
      next: 3,
    },
    {
      text: "I'll contact the Ministry of Security to exile the insurgents.",
      next: 4,
    },
    {
      text: "[Week 4 has ended.]",
      next: 5,
    },
  ],
];

// Week 5 dialogue - rioting
let dialogueWeek5Start = [
  {
    text: "Welcome back, Chancellor.",
    next: 1,
  },
  {
    text: "The Ministry of Security has notified us of a riot happening in the main square.",
    next: 2,
  },
  {
    text: "It was precisely how we dealt with the insurgents the previous week that they decided to act up.",
    next: 3,
  },
  {
    text: "We cannot allow this to go any further.",
    next: 4,
  },
];

// Week 5 choice
let dialogueWeek5Choice = {
  question: "How should we diffuse the rioting?",
  option1: {
    answer: "Detain the rioters immediately and sentence them to death.",
    score: -100,
  },
  option2: {
    answer: "Shoot into the crowd and fight back against the rioters.",
    score: -100,
  },
};

// Week 5 ending dialogue
// An array of arrays, two dialogue trees from two different options
let dialogueWeek5End = [
  [
    {
      text: "Indeed, Chancellor.",
      next: 1,
    },
    {
      text: "To think that they would get away with violence while preaching their cause is absurd.",
      next: 2,
    },
    {
      text: "Nothing less than the death sentence is an appropriate punishment.",
      next: 3,
    },
    {
      text: "I shall notify the Ministry of Security of the order to detain all in sight of the riot.",
      next: 4,
    },
    {
      text: "[Week 5 has ended.]",
      next: 5,
    },
  ],
  [
    {
      text: "An extreme route, to be sure, Chancellor.",
      next: 1,
    },
    {
      text: "But they have striked first, so we must respond in kind.",
      next: 2,
    },
    {
      text: "We cannot take any more chances with these miscreants.",
      next: 3,
    },
    {
      text: "I shall notify the Ministry of Security that all bets are off.",
      next: 4,
    },
    {
      text: "[Week 5 has ended.]",
      next: 5,
    },
  ],
];

// Week 6 dialogue - civil war
let dialogueWeek6Start = [
  {
    text: "Welcome back, Chancellor.",
    next: 1,
  },
  {
    text: "The situation has worsened. Our soldiers have been deployed to eliminate these so-called 'Freedom Fighters'.",
    next: 2,
  },
  {
    text: "We want this war to end quickly.",
    next: 3,
  },
  {
    text: "The brilliant minds in the Ministry of Security have completed development of our combat artificial intelligence.",
    next: 4,
  },
  {
    text: "Code named 'Peacekeeper', they will eliminate any threat to peace. We have thousands of units on standby, and they are yours to command.",
    next: 5,
  },
  {
    text: "Personally, I'd rather avoid needing to resort to this solution.",
    next: 6,
  },
];

// Week 6 choice
let dialogueWeek6Choice = {
  question: "Please choose carefully. There may not be a next time.",
  option1: {
    answer: "Deploy the Peacekeepers to end the war quickly.",
    score: -666,
  },
  option2: {
    answer: "Deploy all available battalions and crush the insurgents.",
    score: -666,
  },
};

// Week 6 ending dialogue
// An array of arrays, two dialogue trees from two different options
let dialogueWeek6End = [
  [
    {
      text: "...",
      next: 1,
    },
    {
      text: "I understand your decision, Chancellor.",
      next: 2,
    },
    {
      text: "Perhaps desperate times call for desperate measures.",
      next: 3,
    },
    {
      text: "I will relay this information to our frontline tactician at once.",
      next: 4,
    },
    {
      text: "...",
      next: 5,
    },
    {
      text: "We probably will not meet again.",
      next: 6,
    },
    {
      text: "I wish you luck, Chancellor.",
      next: 7,
    },
    {
      text: "[Week 6 has ended.]",
      next: 8,
    },
  ],
  [
    {
      text: "...",
      next: 1,
    },
    {
      text: "With our manpower, surely these insurgents do not stand a chance.",
      next: 2,
    },
    {
      text: "That being said, I will do my part in defending our society.",
      next: 3,
    },
    {
      text: "I will relay this information to our frontline tactician at once.",
      next: 4,
    },
    {
      text: "...",
      next: 5,
    },
    {
      text: "We probably will not meet again.",
      next: 6,
    },
    {
      text: "I wish you luck, Chancellor.",
      next: 7,
    },
    {
      text: "[Week 6 has ended.]",
      next: 8,
    },
  ],
];

// Week 7 dialogue - apocalypse
let dialogueWeek7Start = [
  {
    text: "Your office is decrepit and and destroyed.",
    next: 1,
  },
  {
    text: "Your assistant is nowhere to be found.",
    next: 2,
  },
  {
    text: "The Peacekeepers have determined that mankind is a threat to peace.",
    next: 3,
  },
  {
    text: "All is silent, save for the march of the Peacekeepers and the distant screams of the stragglers.",
    next: 4,
  },
  {
    text: "On your desk, you see a bloodied standard-issue rifle.",
    next: 5,
  },
];

// Week 7 "choice"
let dialogueWeek7Choice = {
  question: "All that's left to do is fight.",
  option1: {
    answer: "Pick up the rifle.",
    score: -999999,
  },
};

// Ending dialogue
let dialogueEnding = [
  {
    text: "The Global Conglomerate has fallen.",
    next: 1,
  },
  {
    text: "Is there truly no other way to avert this disaster?",
    next: 2,
  },
  {
    text: "The End.",
    next: 3,
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
  // Loads main menu image
  mainMenuImg = loadImage("./assets/images/main_menu.png");
  // Loads mood icon
  mood = loadImage("./assets/images/mood.png");
}

function setup() {
  // Gets vectors of the size of the canvas (both are based on window dimensions)
  canvasSize = createVector(windowWidth, windowHeight);
  // Creates canvas with specified vectors
  createCanvas(canvasSize.x, canvasSize.y);
  // Strokes are not rounded
  strokeCap(SQUARE);
  // Sets text to urbanist
  textFont(urbanistMedium);
  // Wraps text by word
  textWrap(WORD);
  // Sets angle mode to degrees
  angleMode(DEGREES);
  // Sets rectMode to center, makes shapes drawn starting from center
  rectMode(CENTER);
}

// Changes and updates scenes
function updateScene() {
  // Shows intro if toggle is true
  if (showIntro) intro();
  // shows start of week 1 scene
  else if (showWeek1Start) week1Start();
  // shows seamless transition into decision scene for week 1
  else if (showWeek1Choice) week1Choice();
  // shows week 1 end (aka results) scene
  else if (showWeek1End) week1End();
  // shows start of week 2 scene
  else if (showWeek2Start) week2Start();
  // shows seamless transition into decision scene for week 2
  else if (showWeek2Choice) week2Choice();
  // shows week 2 end (aka results) scene
  else if (showWeek2End) week2End();
  // shows start of week 3 scene
  else if (showWeek3Start) week3Start();
  // shows seamless transition into decision scene for week 3
  else if (showWeek3Choice) week3Choice();
  // shows week 3 end (aka results) scene
  else if (showWeek3End) week3End();
  // shows start of week 4 scene
  else if (showWeek4Start) week4Start();
  // shows seamless transition into decision scene for week 4
  else if (showWeek4Choice) week4Choice();
  // shows week 4 end (aka results) scene
  else if (showWeek4End) week4End();
  // shows start of week 5 scene
  else if (showWeek5Start) week5Start();
  // shows seamless transition into decision scene for week 5
  else if (showWeek5Choice) week5Choice();
  // shows week 5 end (aka results) scene
  else if (showWeek5End) week5End();
  // shows start of week 6 scene
  else if (showWeek6Start) week6Start();
  // shows seamless transition into decision scene for week 6
  else if (showWeek6Choice) week6Choice();
  // shows week 6 end (aka results) scene
  else if (showWeek6End) week6End();
  // shows start of week 7 scene
  else if (showWeek7Start) week7Start();
  // shows seamless transition into decision scene for week 7
  else if (showWeek7Choice) week7Choice();
  // shows epilogue scene
  else if (showEnding) ending();
}

// Draws scene and calls any update functions
function draw() {
  // Sets background to a dark blue, normally
  background(10, 20, 30);
  // Resizes mood icon to be smaller
  mood.resize(100, 100);
  // If main menu toggle is true, show the main menu scene
  if (showMainMenu) {
    // If BGM isn't playing and it's loaded
    if (!bgm_1.isPlaying() && bgm_1.isLoaded()) {
      // Reduces volume of bgm_1
      bgm_1.setVolume(0.2);
      // Start playing BGM and loop it
      bgm_1.loop();
    }
    // Load main menu
    mainMenu();
  } else {
    // Checks toggles and draws out appropriate scene
    updateScene();
    // Draws mood icon to the top left corner of the window
    image(mood, 10, 10);
  }
}

// Mouse clicked function. Includes several actions that are scene dependant (mostly logic)
function mouseClicked() {
  // If the main menu is the current scene
  if (showMainMenu) {
    // Set main menu toggle to false to make it not draw the scene
    showMainMenu = false;
    // Set intro to true to have this scene be drawn
    showIntro = true;
  }
  // If intro is shown
  if (showIntro) {
    // Checks if we reached end of dialogue intro
    if (nextIndex == dialogueIntro.length) {
      // Sets intro toggle to false
      showIntro = false;
      // Sets week 1 start toggle to true
      showWeek1Start = true;
      // Resets current and next index for next block of dialogue
      nextIndex = 0;
      currIndex = 0;
    } else {
      // Sets current index to next index
      currIndex = nextIndex;
      // Calls function to load appropriate dialogue, to advance dialogue
      loadDialogue(dialogueIntro, currIndex);
    }
  }

  // if week 1 start is shown
  if (showWeek1Start) {
    // Checks if we reached end of dialogue week 1 start
    if (nextIndex == dialogueWeek1Start.length) {
      // Sets week 1 start toggle to false
      showWeek1Start = false;
      // Sets week 1 choice toggle to true
      showWeek1Choice = true;
      // Resets current and next index for next block of dialogue
      nextIndex = 0;
      currIndex = 0;
      currentChar = 0;
    } else {
      // Sets current index to next index
      currIndex = nextIndex;
      // Calls function to load appropriate dialogue, to advance dialogue
      loadDialogue(dialogueWeek1Start, currIndex);
    }
  }
  // if week 1 choices are shown
  if (showWeek1Choice) {
    // Set click counter up by 1
    clickCount++;
    // Count up to 2 mouse clicks (on the second click, the choice will be made)
    if (clickCount >= 2) {
      // Calls pickChoice function
      pickChoice(dialogueWeek1Choice);
      // Sets choice toggle to false
      showWeek1Choice = false;
      // Shows results of week 1
      showWeek1End = true;
      // Resets click counter, current and next index for next block of dialogue
      nextIndex = 0;
      currIndex = 0;
      clickCount = 0;
    }
  }
  // if week 1 results are shown
  if (showWeek1End) {
    // Checks if we reached end of dialogue week 1 end
    if (nextIndex == dialogueWeek1End[choice].length) {
      // Sets week 1 end toggle to false
      showWeek1End = false;
      // Sets week 2 start toggle to true
      showWeek2Start = true;
      // Resets current and next index for next block of dialogue
      nextIndex = 0;
      currIndex = 0;
      // Puts choice var back to start state
      choice = -1;
    } else {
      // Sets current index to next index
      currIndex = nextIndex;
      // Calls function to load appropriate dialogue, to advance dialogue
      loadDialogue(dialogueWeek1End[choice], currIndex);
    }
  }

  // if week 2 start is shown
  if (showWeek2Start) {
    // Checks if we reached end of dialogue week 2 start
    if (nextIndex == dialogueWeek2Start.length) {
      // Sets weel 2 start toggle to false
      showWeek2Start = false;
      // Sets week 2 choice toggle to true
      showWeek2Choice = true;
      // Resets current and next index for next block of dialogue
      nextIndex = 0;
      currIndex = 0;
      currentChar = 0;
    } else {
      // Sets current index to next index
      currIndex = nextIndex;
      // Calls function to load appropriate dialogue, to advance dialogue
      loadDialogue(dialogueWeek2Start, currIndex);
    }
  }
  // if week 2 choices are shown
  if (showWeek2Choice) {
    // Set click counter up by 1
    clickCount++;
    // Count up to 2 mouse clicks (on the second click, the choice will be made)
    if (clickCount >= 2) {
      // Calls pickChoice function
      pickChoice(dialogueWeek2Choice);
      // Sets week 2 choice toggle to false
      showWeek2Choice = false;
      // Shows results of week 2
      showWeek2End = true;
      // Resets click counter, current and next index for next block of dialogue
      nextIndex = 0;
      currIndex = 0;
      clickCount = 0;
    }
  }
  // if week 2 results are shown
  if (showWeek2End) {
    // Checks if we reached end of dialogue week 2 end
    if (nextIndex == dialogueWeek2End[choice].length) {
      // Sets week 2 end toggle to false
      showWeek2End = false;
      // Sets week 3 start toggle to true
      showWeek3Start = true;
      // Resets current and next index for next block of dialogue
      nextIndex = 0;
      currIndex = 0;
      // Puts choice var back to start state
      choice = -1;
    } else {
      // Sets current index to next index
      currIndex = nextIndex;
      // Calls function to load appropriate dialogue, to advance dialogue
      loadDialogue(dialogueWeek2End[choice], currIndex);
    }
  }

  // if week 3 start is shown
  if (showWeek3Start) {
    // Checks if we reached end of dialogue week 3 start
    if (nextIndex == dialogueWeek3Start.length) {
      // Sets week 3 start toggle to false
      showWeek3Start = false;
      // Sets week 3 choice toggle to true
      showWeek3Choice = true;
      // Resets current and next index for next block of dialogue
      nextIndex = 0;
      currIndex = 0;
      currentChar = 0;
    } else {
      // Sets current index to next index
      currIndex = nextIndex;
      // Calls function to load appropriate dialogue, to advance dialogue
      loadDialogue(dialogueWeek3Start, currIndex);
    }
  }
  // if week 3 choices are shown
  if (showWeek3Choice) {
    // Set click counter up by 1
    clickCount++;
    // Count up to 2 mouse clicks (on the second click, the choice will be made)
    if (clickCount >= 2) {
      // Calls pickChoice function
      pickChoice(dialogueWeek3Choice);
      // Sets week 3 choice toggle to false
      showWeek3Choice = false;
      // Shows results of week 3
      showWeek3End = true;
      // Resets click counter, current and next index for next block of dialogue
      nextIndex = 0;
      currIndex = 0;
      clickCount = 0;
    }
  }
  // if week 3 results are shown
  if (showWeek3End) {
    // Checks if we reached end of dialogue week 3 end
    if (nextIndex == dialogueWeek3End[choice].length) {
      // Sets week 3 end toggle to false
      showWeek3End = false;
      // Sets week 4 start toggle to true
      showWeek4Start = true;
      // Resets current and next index for next block of dialogue
      nextIndex = 0;
      currIndex = 0;
      // Puts choice var back to start state
      choice = -1;
    } else {
      // Sets current index to next index
      currIndex = nextIndex;
      // Calls function to load appropriate dialogue, to advance dialogue
      loadDialogue(dialogueWeek3End[choice], currIndex);
    }
  }

  // if week 4 start is shown
  if (showWeek4Start) {
    // Checks if we reached end of dialogue week 4 start
    if (nextIndex == dialogueWeek4Start.length) {
      // Sets week 4 start toggle to false
      showWeek4Start = false;
      // Sets week 4 choice toggle to true
      showWeek4Choice = true;
      // Resets current and next index for next block of dialogue
      nextIndex = 0;
      currIndex = 0;
      currentChar = 0;
    } else {
      // Sets current index to next index
      currIndex = nextIndex;
      // Calls function to load appropriate dialogue, to advance dialogue
      loadDialogue(dialogueWeek4Start, currIndex);
    }
  }
  // if week 4 choices are shown
  if (showWeek4Choice) {
    // Set click counter up by 1
    clickCount++;
    // Count up to 2 mouse clicks (on the second click, the choice will be made)
    if (clickCount >= 2) {
      // Calls pickChoice function
      pickChoice(dialogueWeek4Choice);
      // Sets week 4 choice toggle to false
      showWeek4Choice = false;
      // Shows results of week 4
      showWeek4End = true;
      // Resets click counter, current and next index for next block of dialogue
      nextIndex = 0;
      currIndex = 0;
      clickCount = 0;
    }
  }
  // if week 4 results are shown
  if (showWeek4End) {
    // Checks if we reached end of dialogue week 4 end
    if (nextIndex == dialogueWeek4End[choice].length) {
      // Sets week 4 end toggle to false
      showWeek4End = false;
      // Sets week 5 start toggle to true
      showWeek5Start = true;
      // Resets current and next index for next block of dialogue
      nextIndex = 0;
      currIndex = 0;
      // Puts choice var back to start state
      choice = -1;
    } else {
      // Sets current index to next index
      currIndex = nextIndex;
      // Calls function to load appropriate dialogue, to advance dialogue
      loadDialogue(dialogueWeek4End[choice], currIndex);
    }
  }

  // if week 5 start is shown
  if (showWeek5Start) {
    // Checks if we reached end of dialogue week 5 start
    if (nextIndex == dialogueWeek5Start.length) {
      // Sets week 5 start toggle to false
      showWeek5Start = false;
      // Sets week 5 choice toggle to true
      showWeek5Choice = true;
      // Resets current and next index for next block of dialogue
      nextIndex = 0;
      currIndex = 0;
      currentChar = 0;
    } else {
      // Sets current index to next index
      currIndex = nextIndex;
      // Calls function to load appropriate dialogue, to advance dialogue
      loadDialogue(dialogueWeek5Start, currIndex);
    }
  }
  // if week 5 choices are shown
  if (showWeek5Choice) {
    // Set click counter up by 1
    clickCount++;
    // Count up to 2 mouse clicks (on the second click, the choice will be made)
    if (clickCount >= 2) {
      // Calls pickChoice function
      pickChoice(dialogueWeek5Choice);
      // Sets week 5 choice toggle to false
      showWeek5Choice = false;
      // Shows results of week 5
      showWeek5End = true;
      // Resets click counter, current and next index for next block of dialogue
      nextIndex = 0;
      currIndex = 0;
      clickCount = 0;
    }
  }
  // if week 5 results are shown
  if (showWeek5End) {
    // Checks if we reached end of dialogue week 5 end
    if (nextIndex == dialogueWeek5End[choice].length) {
      // Sets week 5 end toggle to false
      showWeek5End = false;
      // Sets week 6 start toggle to true
      showWeek6Start = true;
      // Resets current and next index for next block of dialogue
      nextIndex = 0;
      currIndex = 0;
      // Puts choice var back to start state
      choice = -1;
    } else {
      // Sets current index to next index
      currIndex = nextIndex;
      // Calls function to load appropriate dialogue, to advance dialogue
      loadDialogue(dialogueWeek5End[choice], currIndex);
    }
  }

  // if week 6 start is shown
  if (showWeek6Start) {
    // Checks if we reached end of dialogue week 6 start
    if (nextIndex == dialogueWeek6Start.length) {
      // Sets week 6 start toggle to false
      showWeek6Start = false;
      // Sets week 6 choice toggle to true
      showWeek6Choice = true;
      // Resets current and next index for next block of dialogue
      nextIndex = 0;
      currIndex = 0;
      currentChar = 0;
    } else {
      // Sets current index to next index
      currIndex = nextIndex;
      // Calls function to load appropriate dialogue, to advance dialogue
      loadDialogue(dialogueWeek6Start, currIndex);
    }
  }
  // if week 6 choices are shown
  if (showWeek6Choice) {
    // Set click counter up by 1
    clickCount++;
    // Count up to 2 mouse clicks (on the second click, the choice will be made)
    if (clickCount >= 2) {
      // Calls pickChoice function
      pickChoice(dialogueWeek6Choice);
      // Sets week 6 choice toggle to false
      showWeek6Choice = false;
      // Shows results of week 6
      showWeek6End = true;
      // Resets click counter, current and next index for next block of dialogue
      nextIndex = 0;
      currIndex = 0;
      clickCount = 0;
    }
  }
  // if week 6 results are shown
  if (showWeek6End) {
    // Checks if we reached end of dialogue week 6 end
    if (nextIndex == dialogueWeek6End[choice].length) {
      // Sets week 6 end toggle to false
      showWeek2End = false;
      // Sets week 7 start toggle to true
      showWeek7Start = true;
      // Resets current and next index for next block of dialogue
      nextIndex = 0;
      currIndex = 0;
      // Puts choice var back to start state
      choice = -1;
    } else {
      // Sets current index to next index
      currIndex = nextIndex;
      // Calls function to load appropriate dialogue, to advance dialogue
      loadDialogue(dialogueWeek6End[choice], currIndex);
    }
  }

  // if week 7 start is shown
  if (showWeek7Start) {
    // Checks if we reached end of dialogue week 7 start
    if (nextIndex == dialogueWeek7Start.length) {
      // Sets week 7 start toggle to false
      showWeek7Start = false;
      // Sets week 7 choice toggle to true
      showWeek7Choice = true;
      // Resets current and next index for next block of dialogue
      nextIndex = 0;
      currIndex = 0;
      currentChar = 0;
    } else {
      // Sets current index to next index
      currIndex = nextIndex;
      // Calls function to load appropriate dialogue, to advance dialogue
      loadDialogue(dialogueWeek7Start, currIndex);
    }
  }
  // if week 7 choices are shown
  if (showWeek7Choice) {
    // Set click counter up by 1
    clickCount++;
    // Count up to 2 mouse clicks (on the second click, the choice will be made)
    if (clickCount >= 2) {
      // Calls pickChoice function
      pickChoice(dialogueWeek7Choice);
      // Sets week 7 choice toggle to false
      showWeek7Choice = false;
      // Shows ending
      showEnding = true;
      // Resets click counter, current and next index for next block of dialogue
      nextIndex = 0;
      currIndex = 0;
      clickCount = 0;
    }
  }

  // If ending is shown
  if (showEnding) {
    // Sets current index to next index
    currIndex = nextIndex;
    // Calls function to load appropriate dialogue, to advance dialogue
    loadDialogue(dialogueEnding, currIndex);
  }
}

// Function to select one out of 2 choices
function pickChoice(choiceList) {
  // If mouse click was on left side of the window, then pick that option
  if (mouseX < width / 2) {
    // Set choice to 0 (acts as index for next dialogue tree)
    choice = 0;
    // Updates hidden score
    updateScore(choiceList.option1.score);
  }
  // Otherwise, select other option
  else {
    // Sets choice to 1
    choice = 1;
    // Updates hidden score
    updateScore(choiceList.option2.score);
  }
}

// Loads next text of dialogue from certain scenes
function loadDialogue(dialogueList, index) {
  // Gets index of next line of dialogue
  nextIndex = dialogueList[index].next;
  // Resets character counter
  currentChar = 0;
}

// Function to update hidden score
function updateScore(scoreValue) {
  // Increments (or decrements) score value
  score += scoreValue;
}

// Main menu scene, allows player to click to start
function mainMenu() {
  // Resize main menu image to cover screen
  mainMenuImg.resize(width, height);
  // Tint image black
  tint(150);
  // Loads image as background image
  image(mainMenuImg, 0, 0);
  // Fills text color with white
  fill(255);
  // Disables stroke
  noStroke();
  // Sets text size to 100
  textSize(100);
  // Centers the text horizontally and vertically
  textAlign(CENTER, CENTER);
  // Shows title text on the middle of the window
  text("Hubris", width / 2, height / 3);
  // Sets text size to 30
  textSize(30);
  // Shows secondary text telling player to click to start the game
  text("[Click Anywhere to Start]", width / 2, height - height / 3);
  // Shows some basic instructions on how to play the game
  text(
    "[Use your mouse to click on the choices, and advance through dialogue.]",
    width / 2,
    height - height / 5
  );
}

// Promoted as new chancellor for efforts in eradicating disease
function intro() {
  // Gets current string of dialogue intro text (for typewriter effect)
  let currentString = dialogueIntro[currIndex].text.substring(0, currentChar);
  // Sets text size to 40
  textSize(40);
  // Aligns text center
  textAlign(CENTER, TOP);
  // Draws text string
  text(currentString, width / 2, height / 5, width / 1.5);

  // Increment currentChar by certain value
  // Affects how fast/slow typewriter effect is
  currentChar += 0.3;
}

// Welcome to new job, tutorial (day 1)
function week1Start() {
  // Gets current string of dialogue week 1 start text (for typewriter effect)
  let currentString = dialogueWeek1Start[currIndex].text.substring(
    0,
    currentChar
  );
  // Sets text size to 40
  textSize(40);
  // Aligns text center
  textAlign(CENTER, TOP);
  // Draws text string
  text(currentString, width / 2, height / 5, width / 1.5);
  // Draws current week number
  text("Week 1", width - width / 12, 20);
  // Increment currentChar by certain value
  // Affects how fast/slow typewriter effect is
  currentChar += 0.3;
}

// Decision to be made in week 1
function week1Choice() {
  // Gets current string of dialogue week 1 choice text (for typewriter effect)
  let currentQuestion = dialogueWeek1Choice.question.substring(0, currentChar);
  // Sets text size to 40
  textSize(40);
  // Aligns text center
  textAlign(CENTER, TOP);
  // Draws text string
  text(currentQuestion, width / 2, height / 5, width / 1.5);
  // Draws current week number
  text("Week 1", width - width / 12, 20);
  // Gets option 1 string
  let currentOption1 = dialogueWeek1Choice.option1.answer.substring(
    0,
    currentChar
  );
  // Gets option 2 string
  let currentOption2 = dialogueWeek1Choice.option2.answer.substring(
    0,
    currentChar
  );
  // sets text size to 30
  textSize(30);
  // draws option 1 text
  text(currentOption1, width / 4, height - height / 3, width / 4);
  // draws option 2 text
  text(currentOption2, width - width / 4, height - height / 3, width / 4);

  // Increment currentChar by certain value
  // Affects how fast/slow typewriter effect is
  currentChar += 0.3;
}

// Shown after choice made in week 1
function week1End() {
  // Gets current string of dialogue week 1 end text (for typewriter effect)
  let currentString = dialogueWeek1End[choice][currIndex].text.substring(
    0,
    currentChar
  );
  // Sets text size to 40
  textSize(40);
  // Aligns text center
  textAlign(CENTER, TOP);
  // Draws text string
  text(currentString, width / 2, height / 5, width / 1.5);
  // Draws current week number
  text("Week 1", width - width / 12, 20);
  // Increment currentChar by certain value
  // Affects how fast/slow typewriter effect is
  currentChar += 0.3;
}

// Food supply chain
function week2Start() {
  // Gets current string of dialogue week 2 start text (for typewriter effect)
  let currentString = dialogueWeek2Start[currIndex].text.substring(
    0,
    currentChar
  );
  // Sets text size to 40
  textSize(40);
  // Aligns text center
  textAlign(CENTER, TOP);
  // Draws text string
  text(currentString, width / 2, height / 5, width / 1.5);
  // Draws current week number
  text("Week 2", width - width / 12, 20);
  // Increment currentChar by certain value
  // Affects how fast/slow typewriter effect is
  currentChar += 0.3;
}

// choice to make in week 2
function week2Choice() {
  // Gets current string of dialogue week 2 choice text (for typewriter effect)
  let currentQuestion = dialogueWeek2Choice.question.substring(0, currentChar);
  // Sets text size to 40
  textSize(40);
  // Aligns text center
  textAlign(CENTER, TOP);
  // Draws text string
  text(currentQuestion, width / 2, height / 5, width / 1.5);
  // Draws current week number
  text("Week 2", width - width / 12, 20);
  // Gets option 1 string
  let currentOption1 = dialogueWeek2Choice.option1.answer.substring(
    0,
    currentChar
  );
  // Gets option 2 string
  let currentOption2 = dialogueWeek2Choice.option2.answer.substring(
    0,
    currentChar
  );
  // sets text size to 30
  textSize(30);
  // draws option 1 text
  text(currentOption1, width / 4, height - height / 3, width / 4);
  // draws option 2 text
  text(currentOption2, width - width / 4, height - height / 3, width / 4);

  // Increment currentChar by certain value
  // Affects how fast/slow typewriter effect is
  currentChar += 0.3;
}

// Shown after choice in week 2
function week2End() {
  // Gets current string of dialogue week 2 end text (for typewriter effect)
  let currentString = dialogueWeek2End[choice][currIndex].text.substring(
    0,
    currentChar
  );
  // Sets text size to 40
  textSize(40);
  // Aligns text center
  textAlign(CENTER, TOP);
  // Draws text string
  text(currentString, width / 2, height / 5, width / 1.5);
  // Draws current week number
  text("Week 2", width - width / 12, 20);
  // Increment currentChar by certain value
  // Affects how fast/slow typewriter effect is
  currentChar += 0.3;
}

// Insurgents rising
function week3Start() {
  // Gets current string of dialogue week 3 start text (for typewriter effect)
  let currentString = dialogueWeek3Start[currIndex].text.substring(
    0,
    currentChar
  );
  // Sets text size to 40
  textSize(40);
  // Aligns text center
  textAlign(CENTER, TOP);
  // Draws text string
  text(currentString, width / 2, height / 5, width / 1.5);
  // Draws current week number
  text("Week 3", width - width / 12, 20);
  // Increment currentChar by certain value
  // Affects how fast/slow typeqriter effect is
  currentChar += 0.3;
}

// choice to be made to insurgents on week 3
function week3Choice() {
  // Gets current string of dialogue week 3 choice text (for typewriter effect)
  let currentQuestion = dialogueWeek3Choice.question.substring(0, currentChar);
  // Sets text size to 40
  textSize(40);
  // Aligns text center
  textAlign(CENTER, TOP);
  // Draws text string
  text(currentQuestion, width / 2, height / 5, width / 1.5);
  // Draws current week number
  text("Week 3", width - width / 12, 20);
  // Gets option 1 string
  let currentOption1 = dialogueWeek3Choice.option1.answer.substring(
    0,
    currentChar
  );
  // Gets option 2 string
  let currentOption2 = dialogueWeek3Choice.option2.answer.substring(
    0,
    currentChar
  );
  // sets text size to 30
  textSize(30);
  // draws option 1 text
  text(currentOption1, width / 4, height - height / 3, width / 4);
  // draws option 2 text
  text(currentOption2, width - width / 4, height - height / 3, width / 4);

  // Increment currentChar by certain value
  // Affects how fast/slow typewriter effect is
  currentChar += 0.3;
}

// Shown after choice made in week 3
function week3End() {
  // Gets current string of dialogue week 3 end text (for typewriter effect)
  let currentString = dialogueWeek3End[choice][currIndex].text.substring(
    0,
    currentChar
  );
  // Sets text size to 40
  textSize(40);
  // Aligns text center
  textAlign(CENTER, TOP);
  // Draws text string
  text(currentString, width / 2, height / 5, width / 1.5);
  // Draws current week number
  text("Week 3", width - width / 12, 20);
  // Increment currentChar by certain value
  // Affects how fast/slow typewriter effect is
  currentChar += 0.3;
}

// Caught insurgents, what to do?
function week4Start() {
  // Gets current string of dialogue week 4 start text (for typewriter effect)
  let currentString = dialogueWeek4Start[currIndex].text.substring(
    0,
    currentChar
  );
  // Sets text size to 40
  textSize(40);
  // Aligns text center
  textAlign(CENTER, TOP);
  // Draws text string
  text(currentString, width / 2, height / 5, width / 1.5);
  // Draws current week number
  text("Week 4", width - width / 12, 20);
  // Increment currentChar by certain value
  // Affects how fast/slow typewriter effect is
  currentChar += 0.3;
}

// choice for week 4
function week4Choice() {
  // Gets current string of dialogue week 4 choice text (for typewriter effect)
  let currentQuestion = dialogueWeek4Choice.question.substring(0, currentChar);
  // Sets text size to 40
  textSize(40);
  // Aligns text center
  textAlign(CENTER, TOP);
  // Draws text string
  text(currentQuestion, width / 2, height / 5, width / 1.5);
  // Draws current week number
  text("Week 4", width - width / 12, 20);
  // Gets option 1 string
  let currentOption1 = dialogueWeek4Choice.option1.answer.substring(
    0,
    currentChar
  );
  // Gets option 2 string
  let currentOption2 = dialogueWeek4Choice.option2.answer.substring(
    0,
    currentChar
  );
  // sets text size to 30
  textSize(30);
  // draws option 1 text
  text(currentOption1, width / 4, height - height / 3, width / 4);
  // draws option 2 text
  text(currentOption2, width - width / 4, height - height / 3, width / 4);

  // Increment currentChar by certain value
  // Affects how fast/slow typewriter effect is
  currentChar += 0.3;
}

// Shown after choice made in week 4
function week4End() {
  // Gets current string of dialogue week 4 end text (for typewriter effect)
  let currentString = dialogueWeek4End[choice][currIndex].text.substring(
    0,
    currentChar
  );
  // Sets text size to 40
  textSize(40);
  // Aligns text center
  textAlign(CENTER, TOP);
  // Draws text string
  text(currentString, width / 2, height / 5, width / 1.5);
  // Draws current week number
  text("Week 4", width - width / 12, 20);
  // Increment currentChar by certain value
  // Affects how fast/slow typewriter effect is
  currentChar += 0.3;
}

// Violence breaking out at main square, what to do?
function week5Start() {
  // Gets current string of dialogue week 5 start text (for typewriter effect)
  let currentString = dialogueWeek5Start[currIndex].text.substring(
    0,
    currentChar
  );
  // Sets text size to 40
  textSize(40);
  // Aligns text center
  textAlign(CENTER, TOP);
  // Draws text string
  text(currentString, width / 2, height / 5, width / 1.5);
  // Draws current week number
  text("Week 5", width - width / 12, 20);
  // Increment currentChar by certain value
  // Affects how fast/slow typewriter effect is
  currentChar += 0.3;
}

// Choice to diffuse situation at main square in week 5
function week5Choice() {
  // Gets current string of dialogue week 5 choice text (for typewriter effect)
  let currentQuestion = dialogueWeek5Choice.question.substring(0, currentChar);
  // Sets text size to 40
  textSize(40);
  // Aligns text center
  textAlign(CENTER, TOP);
  // Draws text string
  text(currentQuestion, width / 2, height / 5, width / 1.5);
  // Draws current week number
  text("Week 5", width - width / 12, 20);
  // Gets option 1 string
  let currentOption1 = dialogueWeek5Choice.option1.answer.substring(
    0,
    currentChar
  );
  // Gets option 2 string
  let currentOption2 = dialogueWeek5Choice.option2.answer.substring(
    0,
    currentChar
  );
  // sets text size to 30
  textSize(30);
  // draws option 1 text
  text(currentOption1, width / 4, height - height / 3, width / 4);
  // draws option 2 text
  text(currentOption2, width - width / 4, height - height / 3, width / 4);

  // Increment currentChar by certain value
  // Affects how fast/slow typewriter effect is
  currentChar += 0.3;
}

// Shown after choice made in week 5
function week5End() {
  // Gets current string of dialogue week 5 end text (for typewriter effect)
  let currentString = dialogueWeek5End[choice][currIndex].text.substring(
    0,
    currentChar
  );
  // Sets text size to 40
  textSize(40);
  // Aligns text center
  textAlign(CENTER, TOP);
  // Draws text string
  text(currentString, width / 2, height / 5, width / 1.5);
  // Draws current week number
  text("Week 5", width - width / 12, 20);
  // Increment currentChar by certain value
  // Affects how fast/slow typewriter effect is
  currentChar += 0.3;
}

// Civil war, Peacekeepers are ready to deploy (either send in more soldiers, or deploy Peacekeepers)
function week6Start() {
  // Gets current string of dialogue week 6 start text (for typewriter effect)
  let currentString = dialogueWeek6Start[currIndex].text.substring(
    0,
    currentChar
  );
  // Sets text size to 40
  textSize(40);
  // Aligns text center
  textAlign(CENTER, TOP);
  // Draws text string
  text(currentString, width / 2, height / 5, width / 1.5);
  // Draws current week number
  text("Week 6", width - width / 12, 20);
  // Increment currentChar by certain value
  // Affects how fast/slow typewriter effect is
  currentChar += 0.3;
}

// choice to mitigate civil war in week 6
function week6Choice() {
  // Gets current string of dialogue week 6 choice text (for typewriter effect)
  let currentQuestion = dialogueWeek1Choice.question.substring(0, currentChar);
  // Sets text size to 40
  textSize(40);
  // Aligns text center
  textAlign(CENTER, TOP);
  // Draws text string
  text(currentQuestion, width / 2, height / 5, width / 1.5);
  // Draws current week number
  text("Week 6", width - width / 12, 20);
  // Gets option 1 string
  let currentOption1 = dialogueWeek6Choice.option1.answer.substring(
    0,
    currentChar
  );
  // Gets option 2 string
  let currentOption2 = dialogueWeek6Choice.option2.answer.substring(
    0,
    currentChar
  );
  // sets text size to 30
  textSize(30);
  // draws option 1 text
  text(currentOption1, width / 4, height - height / 3, width / 4);
  // draws option 2 text
  text(currentOption2, width - width / 4, height - height / 3, width / 4);

  // Increment currentChar by certain value
  // Affects how fast/slow typewriter effect is
  currentChar += 0.3;
}

// Shown after choice made in week 6
function week6End() {
  // Gets current string of dialogue week 6 end text (for typewriter effect)
  let currentString = dialogueWeek6End[choice][currIndex].text.substring(
    0,
    currentChar
  );
  // Sets text size to 40
  textSize(40);
  // Aligns text center
  textAlign(CENTER, TOP);
  // Draws text string
  text(currentString, width / 2, height / 5, width / 1.5);
  // Draws current week number
  text("Week 6", width - width / 12, 20);
  // Increment currentChar by certain value
  // Affects how fast/slow typewriter effect is
  currentChar += 0.3;
}

// One choice: fight
function week7Start() {
  // Gets current string of dialogue week 7 start text (for typewriter effect)
  let currentString = dialogueWeek7Start[currIndex].text.substring(
    0,
    currentChar
  );
  // Sets text size to 40
  textSize(40);
  // Aligns text center and top
  textAlign(CENTER, TOP);
  // Draws text string
  text(currentString, width / 2, height / 5, width / 1.5);
  // Draws current week number
  text("Week 7", width - width / 12, 20);
  // Increment currentChar by certain value
  // Affects how fast/slow typewriter effect is
  currentChar += 0.3;
}

// Single choice for week 7
function week7Choice() {
  // Gets current string of dialogue week 7 choice text (for typewriter effect)
  let currentQuestion = dialogueWeek7Choice.question.substring(0, currentChar);
  // Sets text size to 40
  textSize(40);
  // Aligns text center and top
  textAlign(CENTER, TOP);
  // Draws text string
  text(currentQuestion, width / 2, height / 5, width / 1.5);
  // Draws current week number
  text("Week 7", width - width / 12, 20);
  // Gets option string
  let currentOption1 = dialogueWeek6Choice.option1.answer.substring(
    0,
    currentChar
  );
  // sets text size to 30
  textSize(30);
  // draws option 1 text
  text(currentOption1, width / 2, height - height / 3, width / 4);

  // Increment currentChar by certain value
  // Affects how fast/slow typewriter effect is
  currentChar += 0.3;
}

// Shown after the final week, ends with a short epilogue text
function ending() {
  // Gets current string of dialogue ending text (for typewriter effect)
  let currentString = dialogueEnding[currIndex].text.substring(0, currentChar);
  // Sets text size to 40
  textSize(40);
  // Aligns text center
  textAlign(CENTER);
  // Draws text string
  text(currentString, width / 2, height / 5);

  // Increment currentChar by certain value
  // Affects how fast/slow typewriter effect is
  currentChar += 0.3;
}

// “I love you” is texted an average of 1,186 times a year per person
// In NYC alone: "I love you" is texted 312 times every second

const ily_nyc = 312;
var timer;
var wait = 1000;
const heart_size = 8;

function preload() {
  myFont = loadFont("coolvetica.otf");
}

function setup() {
  createCanvas(600, 600);
  timer = millis();
  frameRate(1);
}

function draw() {
  background("#ededed");
  textFont(myFont);

  if (millis() >= 6500) {
    drawGrid();
    randSquares();
    timer = millis();
  } else {
    fill("black");
    textSize(65);
    text("New York Minute", 20, 180);
    textSize(30);
    text("Every second, 312 New Yorkers", 20, 270);
    text("text 'I love you' to someone.", 20, 305);
    text("Each       represents one of those texts.", 20, 400);
    fill("red");
    heart(106, 380, 20);
  }
}

function drawGrid() {
  for (let row = 0; row < 60; row++) {
    for (let col = 0; col < 60; col++) {
      const x = col * 10;
      const y = row * 10;
      fill("white");
      heart(x + 4, y + 2, heart_size);
    }
  }
}

function randSquares() {
  for (i = 0; i < ily_nyc; i++) {
    var randX = floor(random(0, 60)) * 10;
    var randY = floor(random(0, 60)) * 10;
    fill("red");
    heart(randX + 4, randY + 2, heart_size);
  }
}

function heart(x, y, size) {
  beginShape();
  vertex(x, y);
  bezierVertex(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
  bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
  endShape(CLOSE);
}

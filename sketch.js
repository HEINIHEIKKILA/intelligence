let img;

function preload() {
  img = loadImage('Image 10.6.2024 at 12.44.jpg'); // Varmista, että polku on oikein
}

function setup() {
  createCanvas(800, 800);
  image(img, 0, 0, 800, 800); // Piirretään kuva
  noLoop();
}

function draw() {
  stroke(255, 255, 0);
  strokeWeight(2);
  noFill();
  
  // Piirretään rihmastoa satunnaisesti kuvan päälle
  for (let i = 0; i < 100; i++) {
    let startX = random(width);
    let startY = random(height);
    let endX = startX + random(-20, 20);
    let endY = startY + random(-20, 20);
    line(startX, startY, endX, endY);
  }
}

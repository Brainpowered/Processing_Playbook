var a = 0;

function setup() {
  createCanvas(400, 400, P3D); // NOTE: P3D not available in p5js
}

function draw() {
  background(51);
  stroke(255);
  noFill();
  
  translate(width/2, height/2);
  rotateX(a)
  box(200);
  
  a += 0.01;
}
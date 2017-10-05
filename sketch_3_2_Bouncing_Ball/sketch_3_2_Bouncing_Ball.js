var x = 0;
var wWidth = 600;
var modifier = 3;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  ellipse(x,100, 100,100);
  x += modifier;
  if(x >= wWidth || x<=0){
    modifier *= -1;
  }
}
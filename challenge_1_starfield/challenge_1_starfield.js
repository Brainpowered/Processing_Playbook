var stars = new Array(200);
var speed = 1;
function setup() {
  createCanvas(500, 500);
  for(var i=0; i<stars.length; i++){
    stars[i] = new Star();
  }
}

function draw() {
  speed = map(mouseX, 0, width, 0, 20);
  translate(width/2, height/2);
  background(0);
    for(var i=0; i<stars.length; i++){
    stars[i].update(speed);
    
    stars[i].draw();
  }
}
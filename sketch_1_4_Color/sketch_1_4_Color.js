var guy = {};

function setup() {
  createCanvas(400, 400);
  guy = {x:100, y: 100};
}

function drawGuy(x, y){
   //background(255);
  background(150, 150, 200);
  ellipseMode(CENTER);
  rectMode(CENTER);
  
  // Body
  fill(255, 0, 0);
  rect(x+40, y+45, 20, 100);
  
  // Head 
  fill(0, 0, 255);
  ellipse(x+40, y+15, 60, 60);
  
  // Eyes
  fill(0, 255, 0);
  ellipse(x+21, y+15, 16, 32);
  ellipse(x+59, y+15, 16, 32);
  
  // Legs
  line(x+30, y+95, x+20, y+105);
  line(x+50, y+95, x+60, y+105); 
}
  
function draw() {
  drawGuy(mouseX, mouseY);
}
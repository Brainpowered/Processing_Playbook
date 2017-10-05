function Star() {
   this.x = random(-width, width);
   this.y = random(-width, height);
   this.z = random(width);
   this.size = 5;
   this.px = this.x;
   this.py = this.y;
   
   this.update = function(speed){
     this.z-=speed;
     if(this.z < 1) {
       this.z = width;
       this.x = random(-width, width);
       this.y = random(-width, height); 
       
       this.px = this.x;
       this.py = this.y;
     } else {
       
     }
   };
   
   this.draw = function(){
     fill(255);
     noStroke();
     
     var sx = map(this.x/this.z, 0, 1, 0, width);
     var sy = map(this.y/this.z, 0, 1, 0, height);
     var r = map(this.z, 0, width, 8, 0);
     ellipse(sx, sy, r, r);
     
     stroke(255);
     line(sx, sy, this.px, this.py);
    
     this.px = sx;
     this.py = sy;
   };
}
class ball{

constructor(){this.x=random(width);this.y=random(height);this.xspd=random(5);
   this.yspd=3;this.cnt=0;
}

move(){this.x=this.x+this.xspd;this.y=this.y+this.yspd;}
checkbd(){
   if(this.x<0||this.x>width){this.xspd=-1*this.xspd;this.cnt++;}
   if(this.y<0||this.y>height){this.yspd=-1*this.yspd;}
 }
update(){fill(250,0,0);ellipse(this.x,this.y,20,10);
}
isdead(){if(this.cnt>7){return true;}else{return false;}}
}

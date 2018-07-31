class bullit{

constructor( xs, ys){this.x=xs;this.y=ys;
    this.yspd=4;}
set_bullit( xs, ys){this.x=xs;this.y=ys;}
moveBullit(){fill(0,250,0);ellipse(this.x,this.y,5,5);
  this.y=this.y-this.yspd;}
rect_b( x, y){this.x=x;this.y=y;rectMode(CENTER);
     fill(0,int(random(250)),0);rect(this.x,y,30,10);}
coll(xp, yp){
      if(dist(this.x,this.y,xp,yp)<20){return true;}
      if(dist(this.x,this.y,xp,yp)<20){return true;}
      else{return false;}}

isdead(){if(this.y<10){return true;}else{return false;}}
}

let cntbullits;let xcor=30;
let cnthits;let ball_test;
let balllist=[];let bull=[];let bs,bu;
let bb,ballch;
function setup() {
	createCanvas(800,500);
  b_draw=new bullit(xcor,height-30);b_draw.rect_b(30,470);
 cntbullits=0;cnthits=0;
ball_test=new ball();
 for(let j=0;j<15;j++){
   balllist.push(new ball());}
 //for(int j=0;j<1;j++){
   bull.push(new bullit(30,height-40));
}

 let ch=0;
 let framecnt=0;
 function draw(){
   framecnt++;
   if(framecnt%50==0){balllist.push(new ball());}
   background(250,200,0);
   b_draw.rect_b(xcor,height-40);

    text(ball_test.x,100,50);
 for(let j=0;j<balllist.length;j++){
    bs=balllist[j];//textSize(24);
	text("# of balls is "+balllist.length,30,30);
   bs.move();bs.checkbd();bs.update();
 if(bs.isdead()){balllist.splice(j,1);}
 }

 for(let j=0;j<bull.length;j++){ bu=bull[j];bu.moveBullit();
 if(bu.isdead()){bull.splice(j,1);}
 if(bu.y<50){bull.splice(j,1);}
}

 colls(balllist,bull);
 text("# of hits is "+cnthits,500,50);
 text("# of shots fired is "+cntbullits,500,30);

 }

 function keyPressed(){
   if(keyCode==UP_ARROW){bull.push(new bullit(xcor,height-40));cntbullits++;}
    if(keyCode==LEFT_ARROW){xcor=xcor-5;b_draw.rect_b(xcor,height-40);}
		if(keyCode==RIGHT_ARROW){xcor=xcor+5;b_draw.rect_b(xcor,height-40);}
 }

 function colls(bal, bu){
  for(let j=0;j<bal.length;j++){
    for(let k=0;k<bu.length;k++){
     bb=bu[k]; ballch=bal[j];
    if(bb.coll(ballch.x,ballch.y)){bal.splice(j,1);bu.splice(k,1);cnthits++;}

 }
  }
 }

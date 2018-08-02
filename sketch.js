let cntbullits;let xcor=30;
let cnthits;let ball_test;bullspeed=4;
let balllist=[];let bull=[];let bs,bu;
let bb,ballch,can1,mess,inp;
function setup() {textSize(36);
	can1=createCanvas(800,450);can1.position(200,30);
	can1.class("can1");
	mess=select("#mess1");mess.class("mess");mess.position(30,50);
	  b_draw=new bullit(xcor,height-30);b_draw.rect_b(30,470);
 cntbullits=0;cnthits=0;
ball_test=new ball();
 for(let j=0;j<5;j++){
   balllist.push(new ball());}
 //for(int j=0;j<1;j++){
   bull.push(new bullit(30,height-40));
inp=createInput(5);inp.class("mess");inp.position(30,150);
inp.changed(()=>{bullspeed=inp.value();});
}

 let ch=0;
 let framecnt=0;

 function draw(){
   framecnt++;
   if(framecnt%50==0){balllist.push(new ball());}
   background(250,200,0);
   b_draw.rect_b(xcor,height-40);

textSize(24);
 for(let j=0;j<balllist.length;j++){
    bs=balllist[j];//textSize(24);
	text("# of balls is "+balllist.length,30,30);
   bs.move();bs.checkbd();bs.update();
 if(bs.isdead()){balllist.splice(j,1);}
 }

 for(let j=0;j<bull.length;j++){ bu=bull[j];bu.moveBullit();
 if(bu.isdead()){bull.splice(j,1);}

}

 colls(balllist,bull);
 text("# of hits is "+cnthits,500,50);
 text("# of shots fired is "+cntbullits,500,30);

 }

 function keyPressed(){
   if(keyCode==UP_ARROW){bull.push(new bullit(xcor,height-40));cntbullits++;}
    if(keyCode==LEFT_ARROW){xcor=xcor-15;b_draw.rect_b(xcor,height-40);}
		if(keyCode==RIGHT_ARROW){xcor=xcor+15;b_draw.rect_b(xcor,height-40);}
 }

 function colls(bal, bu){
  for(let j=0;j<bal.length;j++){
    for(let k=0;k<bu.length;k++){
     bb=bu[k]; ballch=bal[j];
    if(bb.coll(ballch.x,ballch.y)){bal.splice(j,1);bu.splice(k,1);cnthits++;}

 }
  }
 }

var canvas=document.querySelector('canvas');
var c=canvas.getContext('2d');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
// c.font="30px Arial";
// c.fillText("hello world",10,50);
let x=undefined;
let y=undefined;
let dx=undefined;
let dy=undefined;
let radius=undefined;
let colour=['#4B7174','#E7783C','#B25827','#FF6833','#7D291A'];

addEventListener('click',function(){
     init();
})

addEventListener('resize',function(){
    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;
    init();
})
let mouse={
    x:undefined,
    y:undefined
}
addEventListener('mousemove',function(event){
    mouse.x=event.x;
console.log('mouse.x : '+mouse.x)
    mouse.y=event.y;
})
// console.log(mouse.x+' '+mouse.y)
function circle(x,y,dy,dx,radius,colour)
{
    this.colour=colour;
    this.x=x;
    this.y=y;
    this.radius=radius;
    this.dy=dy;
    this.dx=dx;

    this.create=function(){
        c.beginPath();
        c.arc(this.x,this.y,this.radius,0,2*Math.PI,false);
        c.fillStyle=this.colour;
        c.fill();
    }
    this.update=function(){
        // console.log(mouse.x);
        if(this.y+this.radius+this.dy>canvas.height)
        this.dy=-this.dy*0.95;
        else
        this.dy=this.dy+1; 
        // if(this.dy===0)
        // this.dx=0;
        if(this.x+this.radius+this.dx>canvas.width||this.x-this.radius<0)
        this.dx=-this.dx;

        this.y+=this.dy;
        this.x+=this.dx
        this.create();
    }
}
let cir=[];
let color;
let ct=1;
function init(){
    cir=[];
for(i=0;i<400;i++)
{
    
    radius=Math.random()*20;
    x=Math.random()*(canvas.width-2*radius)+radius;
    y=Math.random()*(canvas.height-2*radius)+radius;
    color=colour[Math.floor(Math.random()*5)];
    dx=Math.random();
    if(ct==1)
    {
        dx=dx*ct;
        ct=ct*(-1);
    }
    else 
    {
        dx=dx*ct;
        ct=ct*(-1)
    }
    // dx=randomIntFromRange(0,3);
    // dy=randomIntFromRange(0,canvas.innerwidth);
    cir.push(new circle(x,y,1,dx,radius,color));

}
}
function move(){
    c.clearRect(0,0,window.innerWidth,window.innerHeight);
    requestAnimationFrame(move);
    for(let i=0;i<400;i++){
    cir[i].update();
}
}
init();
move();
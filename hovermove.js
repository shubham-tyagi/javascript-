let canvas = document.querySelector('canvas')
canvas.height=window.innerHeight;
canvas.width=window.innerWidth;
c=canvas.getContext('2d');

let mouse ={
    x:undefined,
    y:undefined
}
addEventListener('mousemove',function(event){
mouse.x=event.x;
mouse.y=event.y;
console.log('mouse.x : '+mouse.x);

})
addEventListener('resize',function(){
canvas.height=window.innerHeight;
canvas.width=window.innerWidth;
init();
// move();
})
// c.fillStyle='rgba(255,0,0,0.9)'
// c.fillRect(100,100,100,100);

// c.fillStyle='rgba(0,255,0,0.9)'
// c.fillRect(400,400,100,100);

// c.fillStyle='rgba(0,0,255,0.9)'
// c.fillRect(700,200,100,100);

// c.beginPath();
// c.moveTo(100,300);
// c.lineTo(500,100);
// c.stroke();

// c.beginPath();
// c.moveTo(300,400);
// c.lineTo(800,100);
// c.strokeStyle='rgba(100,50,255,0.9)';
// c.stroke();
let x=300;
let y=300;
let dx=2;
let dy=2;
let radius=30;
function circle(x,y,dx,dy,radius)
{
    this.x=x;
    this.y=y;
    this.dx=dx;
    this.dy=dy;
    this.radius=radius;
    this.colour=['#4B7174','#E7783C','#B25827','#FF6833','#7D291A'];
    this.color=this.colour[Math.floor(Math.random()*6)];

    this.create=function()
    {
        c.beginPath();
        c.arc(this.x,this.y,this.radius,0,2*Math.PI,false);
        c.fillStyle=this.color;
        c.fill();
        // c.stroke();
    }

    this.update=function()
    { 
        // c.beginPath();
        // c.clearRect(0,0,innerWidth,innerHeight)
        //  console.log(this.dx);
        if(this.x+30>innerWidth||this.x-30<0)
        this.dx=-this.dx;
        if(this.y+30>innerHeight||this.y-30<0)
        this.dy=-this.dy
        this.x+=this.dx;
        this.y+=this.dy;
        if(mouse.x-this.x<50&&mouse.y-this.y<50&&mouse.x-this.x>-50&&mouse.y-this.y>-50&&this.radius<50){
            this.radius+=1;
        }
        else if(this.radius>2){
            this.radius-=1;
        }
        this.create();
    }
}
let cir=[];
// let cir=new circle(x,y,dx,dy,radius);
function init(){
cir=[];
for(let i=0;i<1000;i++)
{    
    x=Math.random()*(innerWidth-radius*2)+radius;
    y=Math.random()*(innerHeight-radius*2)+radius;
    dx=(Math.random()*4)-2;
    dy=(Math.random()*4)-2;
    radius=Math.random()*30;
    
    cir.push(new circle(x,y,dx,dy,radius));
}
}


 function move()
{
    // c.beginPath();
    // c.fill();
    c.clearRect(0,0,innerWidth,innerHeight)
    requestAnimationFrame(move);
    // c.strokeStyle=color[1];

    for(let i=0;i<1000;i++)
    {  
        // c.beginPath();
        // c.clearRect(0,0,innerWidth,innerHeight)
        cir[i].update();
    }
}
//     if(x+30>innerWidth||x-30<0)
//     dx=-dx;
//     if(y+30>innerHeight||y-30<0)
//     dy=-dy
//     x+=dx;
//     y+=dy;
// }
init();
move();

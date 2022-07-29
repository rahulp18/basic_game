const canvas=document.getElementById('canvas1');
const ctx=canvas.getContext('2d');
const CANVAS_WIDTH=canvas.width=600;
const CANVAS_HEIGHT=canvas.height=600;

 const playerImage=new Image();
 playerImage.src='shadow_dog.png';
const spriteHeight=523;
const spriteWidth=574;
const staggerFrames=5;
 let actionName='idel';
const getActionName=()=>{
     actionName=document.getElementById('input').value;
}
 
let gameFrame=2;
const  spriteAnimations=[];
const animationStates=[
{
    name:'idel',
    frames:7,
},{
    name:'jump',
    frames:7,
},
{
    name:"fall",
    frames:7
},
{
    name:'run',
    frames:9,
},

{
    name:"dizzy",
    frames:11
}
,{
    name:"sit",
    frames:5
},
{
    name:"roll",
    frames:7
},
{
    name:"ko",
    frames:7
},
{
    name:'getHit',
    frames:12
},
{
    name:"dance",
    frames:4
},


];
animationStates.forEach((state,index)=>{
    let frames={
        loc:[],
    }
    for(let j=0;j<state.frames;j++){
let positionX=j*spriteWidth;
let positionY=index*spriteHeight;
frames.loc.push({x:positionX,y:positionY})
    }
spriteAnimations[state.name]=frames;

});
 
 
console.log(spriteAnimations);
 function animate(){
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    
    let position=Math.floor(gameFrame/staggerFrames)% spriteAnimations[actionName].loc.length;
     
     let frameX=spriteWidth*position;
     let frameY=spriteAnimations[actionName].loc[position].y;
    //  console.log(frameY);
    ctx.drawImage(playerImage,frameX,frameY,spriteWidth,spriteHeight,0,0,spriteWidth,spriteHeight);
  
     
   gameFrame++;
    requestAnimationFrame(animate);
 }
 animate();
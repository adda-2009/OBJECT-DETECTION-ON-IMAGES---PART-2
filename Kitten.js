img="";

function setup()
{
canvas=createCanvas(640,420);
canvas.center();
}

function preload()
{
img=loadImage('Kitten.jpg');
}

function draw()
{
image(img,0,0,640,420);
fill('#000000');
text("Kitten",110,110);
noFill();
stroke('#000000');
rect(100,0,200,350);
}
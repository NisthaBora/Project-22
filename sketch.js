var bgImg;
var cat1, cat2;
var mouse1,mouse2;
var Tom;
var Jerry;

function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    cat1 = loadAnimation("images/cat1.png");
    mouse1 = loadAnimation("images/mouse1.png");
    cat2 = loadAnimation("images/cat2.png","images/cat3.png",)
    mouse2 = loadAnimation("images/mouse2.png","images/mouse3.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    Tom=createSprite(70,150);
    Tom.addAnimation("cat1");

    Jerry = createSprite(650,150);
    Jerry.addAnimation("mouse1");
    
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}

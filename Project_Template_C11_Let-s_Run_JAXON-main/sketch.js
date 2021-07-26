var path,boy,leftBoundary,rightBoundary;
var pathImg,boyImg;
var coin,coinImg;
var i;

function preload(){
  //pre-load images
  pathImg=loadImage("path.png");
  boyImg=loadAnimation("Runner-1.png","Runner-2.png");
  coinImg=loadImage("coin.png");

}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY=4;
  path.scale=1.2;

  //create boy running
  boy=createSprite(180,340,30,30);
  boy.scale=0.08;
  boy.addAnimation("JakeRunning",boyImg);

  //create leftBOundary
  leftBoundary=createSprite(0,0,100,800);
  leftBoundary.visible=false;

  //create rightBoundary
  rightBoundary=createSprite(410,0,100,800);
  rightBoundary.visible=false;

  //creating coins
  coin=createSprite(200,200,80,90);
  coin.addImage(coinImg);
  coin.scale=0.3
  coin=createSprite(100,200,80,90);
  coin.addImage(coinImg);
  coin.scale=0.3
  coin=createSprite(300,200,80,90);
  coin.addImage(coinImg);
  coin.scale=0.3;

}

function draw() {
  background(0);

  textSize(20);
  text('coin Score', 1,200);
  textSize(10);
  text('0', 20,230);
  if(path.y>400) {
  path.y=height/2 ;
  }
  if(boy.isTouching(coin)) {
  coinscore = coinscore+1;
  }

  path.velocityY=4;

  //moment of boy on x axis 
  boy.x=World.mouseX;

  edges=createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);

  //code to reset the background
  if(path.y > 400 ){
    path.y = hight/2;
  }
  drawSprites();

}
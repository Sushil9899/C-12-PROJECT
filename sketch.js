var garden,rabbit,apple,orangeL,redL;
var gardenImg,rabbitImg,carrotImg,orangeImg,redImg,rabbitImg2,eat;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png");
  rabbitimg2 = loadImage("r2.png")
  eat = loadSound("yum.mp3")
}


function setup(){
  
  createCanvas(600,400);
// Moving background
garden=createSprite(300,180);
garden.addImage(gardenImg);
garden.scale = 0.4

//creating boy running
rabbit = createSprite(160,340,20,20);
rabbit.scale =0.2;
rabbit.addImage(rabbitImg);
}

function draw() {
  background(0);
  
  // boy moving on Xaxis with mouse'
  rabbit.x = World.mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  
if(rabbit.x >= 300){
  rabbit.addImage(rabbitImg)
  rabbit.scale = 0.2
}

if(rabbit.x <= 300){
  rabbit.addImage(rabbitimg2)
  rabbit.scale = 0.2}

 apple = Math.random(random(1,3));
apple = Math.round(1,3);

orangeL = Math.round(random(1,3));
 orangeL = Math.round(1,3)


 redL = Math.round(random(1,3));
 redL = Math.round(1,3)













   drawSprites();
   

  // if(rabbit.Istouching(apple)){
   //  sound.Play(eat)
   //}
  



 



  
   if (frameCount % 50 == 0) {
     if (apple == 2) {
       createApples();
    } else if (orangeL == 1) {
       createOrange();
     }else {
       createRed();
     }
   }

   if (frameCount % 80 == 0) {
     if (apple == 2) {
       createApples();
    } else if (orangeL == 1) {
       createOrange();
     }
   }

   if (frameCount / 80 == 0) {
     if (apple == 2) {
       createApples();
     } else if (orangeL == 1) {
       createOrange();
     }else {
       createRed();
     }
   }

   if (frameCount % 80 == 160) {
     if (apple == 160) {
       createApples();
     } else if (orangeL == 2) {
       createOrange();
     }else {
       createRed();
     }
   }
  
createApples()

}

function createApples() {
if(frameCount %160 == 0){
  apple = createSprite(random(50, 350),40, 10, 10);
apple.addImage(appleImg);
apple.scale=0.07;
apple.velocityY = 3;
apple.lifetime = 150;
}
}

function createOrange() {
  orangeL = createSprite(random(50, 350),40, 10, 10);
  orangeL.addImage(orangeImg);
  orangeL.scale=0.08;
  orangeL.velocityY = 3;
  orangeL.lifetime = 150;
  }
  
  function createRed(){
  redL = createSprite(random(50, 350),40, 10, 10);
  redL.addImage(redImg);
  redL.scale=0.06;
    redL.velocityY = 3;
    redL.lifetime = 150;
  
}
  
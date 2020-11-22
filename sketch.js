var fixedrect, movingrect, r1, r2;
var g1, g2;
var r3, r4;

function setup() {
  createCanvas(800, 400);
  fixedrect = createSprite(400, 200, 50, 80);
  movingrect = createSprite(400, 200, 80, 50);

  g1 = createSprite(400, 300, 50, 80);
  g2 = createSprite(600, 300, 80, 50);

  r1 = createSprite(50, 100, 50, 80);
  r2 = createSprite(650, 100, 80, 50);

  r1.velocityX = 10;
  r2.velocityX = -10;

  r3 = createSprite(50, 50, 50, 80);
  r4 = createSprite(50, 350, 80, 50);

  r3.velocityY = 10;
  r4.velocityY = -10;

  fixedrect.shapeColor = "green";
  movingrect.shapeColor = "green";

  fixedrect.debug = true;
  movingrect.debug = true;

  console.log();

}

function draw() {
  background(0);

  movingrect.x = mouseX;
  movingrect.y = mouseY;

  if (isTouching(movingrect,g2)) {
    g2.shapeColor = "red";
    movingrect.shapeColor = "red";
  }
  else {
    g2.shapeColor = "green";
    movingrect.shapeColor = "green";
  }

bounceOff(r1,r2);
 bounceOff(r3, r4);

  drawSprites();
}


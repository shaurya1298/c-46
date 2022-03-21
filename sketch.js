var char, charImg
var obstacle;
var obstacle1,obstacle2,obstacle3;

function preload()
{
charImg = loadImage("character.png.png");
obstacle1 = loadImage("wave 1.png")
obstacle2 = loadImage("wave 2.png")
obstacle3 = loadImage("wave 3.png")


}


function setup()

{
    createCanvas(600, 500);
    char = createSprite(81,456,20,50)
    char.addImage(charImg)
    char.scale=0.2;

    

}
function draw()
{
background(0)

text(mouseX +" " +mouseY,mouseX,mouseY)
spawnObstacles()
drawSprites()
}

function spawnObstacles()
{

    if(frameCount % 60 === 0) {
        var obstacle = createSprite(600,450,10,40);
        //obstacle.debug = true;
        obstacle.velocityX =-6
        obstacle.scale=0.2
        //generate random obstacles
        var rand = Math.round(random(1,3));
        switch(rand) {
          case 1: obstacle.addImage(obstacle1);
                  break;
          case 2: obstacle.addImage(obstacle2);
                  break;
          case 3: obstacle.addImage(obstacle3);
                  break;
}
 }
}
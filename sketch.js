var balloon,balloonImage1,balloonImage2;
// create database and position variable here

function preload(){
   bg =loadImage("cityImage.png");
   balloonImage1=loadAnimation("hotairballoon1.png");
   balloonImage2=loadAnimation("hotairballoon1.png","hotairballoon1.png",
   "hotairballoon1.png","hotairballoon2.png","hotairballoon2.png",
   "hotairballoon2.png","hotairballoon3.png","hotairballoon3.png","hotairballoon3.png");
  }

//Function to set initial environment
function setup() {
  database=firebase.database();
  createCanvas(1500,700);

  balloon=createSprite(250,450,150,150);
  balloon.addAnimation("hotAirBalloon",balloonImage1);
  balloon.scale=0.5;

  textSize(20); 
}

// function to display UI
function draw() {
  background(bg);

  if(keyDown(LEFT_ARROW)){
    uptadeHieght(0,-10)
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    balloon.scale=ballon.scale -0.01;
    //write code to move air balloon in left direction
  }
  else if(keyDown(RIGHT_ARROW)){
    uptadeHieght(0,-10)
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    balloon.scale=ballon.scale -0.01;
    //write code to move air balloon in right direction
  }
  else if(keyDown(UP_ARROW)){
    uptadeHieght(0,-10)
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    balloon.scale=ballon.scale -0.01;
    //write code to move air balloon in up direction
  }
  else if(keyDown(DOWN_ARROW)){
    uptadeHieght(0,-10)
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    balloon.scale=ballon.scale -0.01;
    //write code to move air balloon in down direction
  }

  drawSprites();
  fill(0);
  stroke("white");
  textSize(25);
  text("**Use arrow keys to move Hot Air Balloon!",40,40);
}

function uptadeHieght(x,y){
  database.ref("ballon/hieght").set({
    "x": hieght.x+x,
    "y": hieght.y+y

  })
}

function readhieght(data){
  hieght= data.val();
  ballon.x = hieght.x;
  ballon.y = hieght.y;
}

function showError(){
  console.log("Error in writting to the database")
}

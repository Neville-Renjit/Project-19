var monkey, stone







function preload () {
 backImage= loadImage("jungle.jpg");
  monkey_move = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png") ;
   
 bananaImage = loadImage("Banana.png"); 
 obstacle_Img = loadImage("stone.png"); 
  
}

function setup() {
  createCanvas(600, 300);
  monkey = createSprite(400,200,10,10);
  
  
  
}

function draw() {
  background("white");
  
  
  
  
  drawSprites();
} 
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,ground,bird,pig1,log1,box3;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,300,70,70);
    box2 = new Box(900,300,70,70);
    ground = new Ground(600,height,1200,20);
    bird = new Bird(50,50);
    pig1 = new Pig(800,300);
    log1 = new Log(800,250,300,PI/2);
    box3 = new Box(700,200,70,70);
    box4 = new Box(900,200,70,70);
    log2 = new Log(800,150,300,PI/2);
    pig2 = new Pig(800,200);
    box5 = new Box(800,100,70,70);
    log3 = new Log(750,100,150,PI/7);
    log4 = new Log(850,100,150,-PI/7);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    bird.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    log2.display();
    pig2.display();
    log3.display();
    log4.display();
    box5.display();
}
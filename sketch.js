const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,pig,log1,log2,pig2,box3,box4,box5,log3,log4;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,310,70,70);
    box2 = new Box(910,310,70,70);
    box3 = new Box(720,220,70,70);
    box4 = new Box(890,220,70,70);
    box5 = new Box(810,150,70,70);

    ground = new Ground(600,height,1200,20)

    pig =new Pig(810,310);
    pig2 = new Pig(810,240);

    log1 = new Log(810,290,300,PI/2);
    log2 = new Log(810,200,300,PI/2);
    log3 = new Log(750,150,150,PI/7);
    log4 = new Log(870,150,150,-PI/7);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig.display();
    log1.display();
    box3.display();
    box4.display();
    log2.display();
    pig2.display();
    box5.display();
    log3.display();
    log4.display();
}
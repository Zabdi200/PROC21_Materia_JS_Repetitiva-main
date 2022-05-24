const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundobj;
var izquierda;
var derecha;

function preload() {
    fondo1 = loadImage("parque.jpg");

}

function setup() {
    createCanvas(windowWidth, windowHeight);

    var ball_options = {
        isStatic: false,
        restitution: 0.1,
        friction: 0,
        density: 1.2

    }

    engine = Engine.create();
    world = engine.world;

    //crear los cuerpos aquí.
    ball = Bodies.circle(600, 300, 10, ball_options);
    World.add(world, ball);
    groundobj = new Ground(width / 2, 670, width, 20);
    izquierda = new Ground(1000, 600, 20, 120);
    derecha = new Ground(1200, 600, 20, 120);

    var ball_options = {
        isStatic: false,
        restitution: 0.3,
        friction: 0,
        density: 1.2

    }
    Engine.run(engine);

}


function draw() {
    rectMode(CENTER);
    background("black");

    ellipse(ball.position.x, ball.position.y, 20);
    groundobj.display();
    izquierda.display();
    derecha.display();

    drawSprites();

    keyPressed();
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        Matter.Body.applyForce(ball, { x: 0, y: 0 }, { x: 0.1, y: -0.01 })
    }
}
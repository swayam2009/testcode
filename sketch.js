
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

function setup()
{
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
var options={
  //isStatic: true,
  restitution: 0.5,
  frictionAir: 0.05
}

  ball=Bodies.circle(100,10,20,options);
  World.add(world, ball);

  var ground_options={
    isStatic: true
  }
  ground=Bodies.rectangle(0,400,400,10,ground_options);
  World.add(world, ground);
}

function draw() 
{
  background(51);
  Engine.update(engine);

  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x, ground.position.y,400,10);

 
}



const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var engine,world
var ball
var ground

function setup() {
  createCanvas(800,400);
  engine=Engine.create()
  world=engine.world

  ball=Bodies.circle(200,100,30)
  World.add(world,ball)

  var option={
  isStatic:true  
  }
  ground=Bodies.rectangle(400,380,800,10,option)
  World.add(world,ground)
}

function draw() {
  background("red");
  Engine.update(engine)  
  ellipse(ball.position.x,ball.position.y,60,60)
  rectMode (CENTER)
  rect(ground.position.x,ground.position.y,800,10)
}
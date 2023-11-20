const { Engine, Render, World, Bodies } = Matter;

// create engine
const engine = Engine.create();
const world = engine.world;

// create renderer
const render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    width: 800,
    height: 600,
    showAngleIndicator: true,
    showCollisions: true,
    showVelocity: true,
  },
});

Render.run(render);

// add a rectangle
const rectangle = Bodies.rectangle(400, 300, 80, 40, { fillStyle: '#FF1493' }); // Pink color
World.add(world, rectangle);

// add mouse control
const mouseConstraint = Matter.MouseConstraint.create(engine, {
  element: render.canvas,
});

World.add(world, mouseConstraint);

// fit the render viewport to the scene
Render.lookAt(render, {
  min: { x: 0, y: 0 },
  max: { x: 800, y: 600 },
});

var Engine = Matter.Engine,
  Render = Matter.Render,
  Runner = Matter.Runner,
  Body = Matter.Body,
  Composite = Matter.Composite,
  Composites = Matter.Composites,
  Constraint = Matter.Constraint,
  MouseConstraint = Matter.MouseConstraint,
  Mouse = Matter.Mouse,
  Bodies = Matter.Bodies,
  Vertices = Matter.Vertices;

// Create Matter.js engine and world
var engine = Engine.create(),
  world = engine.world;

// Create renderer
var render = Render.create({
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

// Create runner
var runner = Runner.create();
Runner.run(runner, engine);

// Add bodies
var group = Body.nextGroup(true);

var ropeA = Composites.stack(100, 50, 8, 1, 10, 10, function (x, y) {
  return Bodies.rectangle(x, y, 50, 20, {
    collisionFilter: { group: group },
    render: { fillStyle: '#FF1493' }, // Pink color
  });
});

Composites.chain(ropeA, 0.5, 0, -0.5, 0, {
  stiffness: 0.8,
  length: 2,
  render: { type: 'line' },
});

Composite.add(
  ropeA,
  Constraint.create({
    bodyB: ropeA.bodies[0],
    pointB: { x: -25, y: 0 },
    pointA: {
      x: ropeA.bodies[0].position.x,
      y: ropeA.bodies[0].position.y,
    },
    stiffness: 0.5,
  })
);

group = Body.nextGroup(true);

// Create a concave shape for ropeB
var ropeBVertices = Vertices.fromPath('0 0 20 0 40 20 20 40');
var ropeB = Body.create({
  parts: Bodies.fromVertices(350, 50, ropeBVertices, {
    collisionFilter: { group: group },
    render: { fillStyle: '#00FF00' }, // Lime color
  }),
});

Composite.add(world, ropeB);

Composites.chain(ropeB, 0.5, 0, -0.5, 0, {
  stiffness: 0.8,
  length: 2,
  render: { type: 'line' },
});

Composite.add(
  ropeB,
  Constraint.create({
    bodyB: ropeB.bodies[0],
    pointB: { x: -20, y: 0 },
    pointA: {
      x: ropeB.bodies[0].position.x,
      y: ropeB.bodies[0].position.y,
    },
    stiffness: 0.5,
  })
);

group = Body.nextGroup(true);

var ropeC = Composites.stack(600, 50, 13, 1, 10, 10, function (x, y) {
  return Bodies.rectangle(x - 20, y, 50, 20, {
    collisionFilter: { group: group },
    chamfer: 5,
    render: { fillStyle: '#0000FF' }, // Blue color
  });
});

Composites.chain(ropeC, 0.3, 0, -0.3, 0, { stiffness: 1, length: 0 });
Composite.add(
  ropeC,
  Constraint.create({
    bodyB: ropeC.bodies[0],
    pointB: { x: -20, y: 0 },
    pointA: {
      x: ropeC.bodies[0].position.x,
      y: ropeC.bodies[0].position.y,
    },
    stiffness: 0.5,
  })
);

Composite.add(world, [
  ropeA,
  ropeB,
  ropeC,
  Bodies.rectangle(400, 600, 1200, 50.5, { isStatic: true }),
]);

// Add mouse control
var mouse = Mouse.create(render.canvas),
  mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
      stiffness: 0.2,
      render: {
        visible: false,
      },
    },
  });

Composite.add(world, mouseConstraint);

// Keep the mouse in sync with rendering
render.mouse = mouse;

// Fit the render viewport to the scene
Render.lookAt(render, {
  min: { x: 0, y: 0 },
  max: { x: 700, y: 600 },
});

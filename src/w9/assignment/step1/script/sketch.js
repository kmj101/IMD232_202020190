const { Engine, Render, Runner, Body, Composite, Composites, Constraint, MouseConstraint, Mouse, Bodies, Vertices } = Matter;

// create engine
const engine = Engine.create();
const world = engine.world;

// create renderer
const elem = document.querySelector('#canvas');
const render = Render.create({
  element: elem,
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

// create runner
const runner = Runner.create();
Runner.run(runner, engine);

// add bodies
let group = Body.nextGroup(true);

// First chain (pink)
const ropeA = Composites.stack(100, 50, 8, 1, 10, 10, (x, y) => {
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

// Second chain (green) - Concave shape
const ropeBVertices = Vertices.fromPath('0 0 20 0 40 20 20 40');
const ropeB = Body.create({
  parts: Bodies.fromVertices(350, 50, ropeBVertices, {
    collisionFilter: { group: group },
    render: { fillStyle: '#00FF00' }, // Green color
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

// Third chain (blue)
const ropeC = Composites.stack(600, 50, 13, 1, 10, 10, (x, y) => {
  return Bodies.rectangle(x - 20, y, 50, 20, {
    collisionFilter: { group: group },
    chamfer: 5,
    render: { fillStyle: '#0000FF' }, // Blue color
  });
});

Composites.chain(ropeC, 0.3, 0, -0.3, 0, {

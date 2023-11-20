// ...

group = Body.nextGroup(true);

// Create a concave shape for ropeB
var ropeBVertices = Vertices.fromPath('0 0 20 0 40 20 20 40');
var ropeB = Body.create({
  parts: Bodies.fromVertices(350, 50, ropeBVertices, {
    collisionFilter: { group: group },
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
    pointA: { x: ropeB.bodies[0].position.x, y: ropeB.bodies[0].position.y },
    stiffness: 0.5,
  })
);

// ...

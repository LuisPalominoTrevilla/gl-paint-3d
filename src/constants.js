module.exports = {
  geometries: {
    cube: 0,
    sphere: 1,
    cone: 2,
    plane: 3,
    cylinder: 4,
    icosahedron: 5
  },
  geometryNames: {
    0: 'Cube',
    1: 'Sphere',
    2: 'Cone',
    3: 'Plane',
    4: 'Cylinder',
    5: 'Icosahedron'
  },
  geometryIcon: {
    0: 'cube',
    1: 'globe',
    2: 'ice-cream',
    3: 'square',
    4: 'circle',
    5: 'gem'
  },
  materials:{
    lineBasic: 0,
    lineDashed:1,
    meshBasic:2,
    meshDepth:3,
    meshDistance:4,
    meshLambert:5,
    meshMatcap:6,
    meshNormal:7,
    meshPhong:8,
    meshPhysical:9,
    meshStandard:10,
    meshToon:11,
    points:12,
    rawShader:13,
    shader:14,
    shadow:15,
    sprite:16,
  },
  appModes: {
    editing: 0,
    animation: 1
  },
  animationStates: {
    init: 0,
    play: 1,
    pause: 2
  },
  editingStates: {
    select: 0,
    delete: 1,
    group: 2
  }
};

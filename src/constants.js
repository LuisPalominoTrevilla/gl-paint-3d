module.exports = {
  geometries: {
    cube: 0,
    sphere: 1,
    cone: 2,
    plane: 3,
    cylinder: 4,
    icosahedron: 5,
    tetrahedron: 6,
    dodecahedron: 7,
    octahedron: 8,
    obj: 9
  },
  geometryNames: {
    0: 'Cube',
    1: 'Sphere',
    2: 'Cone',
    3: 'Plane',
    4: 'Cylinder',
    5: 'Icosahedron',
    6: 'Tetrahedron',
    7: 'Dodecahedron',
    8: 'Octahedron',
    9: 'OBJ'
  },
  geometryIcon: {
    0: 'cube',
    1: 'globe',
    2: 'ice-cream',
    3: 'square',
    4: 'circle',
    5: 'gem',
    6: 'gem',
    7: 'gem',
    8: 'gem',
    9: 'file-code'
  },
  geometryParameters: {
    0: {
      width: 1,
      height: 1,
      depth: 1,
      widthSegments: 1,
      heightSegments: 1,
      depthSegments: 1
    },
    1: {
      radius: 1,
      widthSegments: 8,
      heightSegments: 6,
      phiStart: 0,
      phiLength: Math.PI * 2,
      thetaStart: 0,
      thetaLength: Math.PI
    },
    2: {
      radius: 1,
      height: 1,
      radialSegments: 8,
      heightSegments: 1,
      openEnded: false,
      thetaStart: 0,
      thetaLength: Math.PI * 2
    },
    3: {
      width: 1,
      height: 1,
      widthSegments: 1,
      heightSegments: 1
    },
    4: {
      radiusTop: 1,
      radiusBottom: 1,
      height: 1,
      radialSegments: 8,
      heightSegments: 1,
      openEnded: false,
      thetaStart: 0,
      thetaLength: Math.PI * 2
    },
    5: {
      radius: 1,
      detail: 0
    },
    6: {
      radius: 1,
      detail: 0
    },
    7: {
      radius: 1,
      detail: 0
    },
    8: {
      radius: 1,
      detail: 0
    },
    9: {
      file: null,
      text: ''
    }
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

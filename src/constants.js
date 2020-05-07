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
    circle: 9,
    ring: 10,
    obj: 11,
    torus: 12,
    torusKnot: 13,
    text: 14
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
    9: 'Circle',
    10: 'Ring',
    11: 'OBJ',
    12: 'Torus',
    13: 'TorusKnot',
    14: 'Text'
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
    9: 'circle',
    10: 'ring',
    11: 'file-code',
    12: 'life-ring',
    13: 'life-ring',
    14: 'font'
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
      radius: 1,
      segments: 8,
      thetaStart: 0,
      thetaLength: Math.PI * 2
    },
    10: {
      innerRadius: 0.5,
      outerRadius: 1,
      thetaSegments: 8,
      phiSegments: 8,
      thetaStart: 0,
      thetaLength: Math.PI * 2
    },
    11: {
      file: null,
      text: ''
    },
    12: {
      radius: 1,
      tube: 0.4,
      radialSegments: 8,
      tubularSegments: 6,
      arc: Math.PI * 2
    },
    13: {
      radius: 1,
      tube: 0.4,
      tubularSegments: 6,
      radialSegments: 8,
      p: 2,
      q: 3
    },
    14: {
      text: 'Hello',
      file: null,
      fontJson: {},
      font: null,
      size: 10,
      height: 5,
      curveSegments: 12,
      bevelEnabled: false,
      bevelThickness: 1,
      bevelSize: 0.8,
      bevelOffset: 0,
      bevelSegments: 3
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

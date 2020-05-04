import * as Three from 'three';
import Constants from '../constants';

export default {
  create(type) {
    switch (type) {
      case Constants.geometries.cube: {
        return new Three.BoxGeometry(0.2, 0.2, 0.2);
      }

      case Constants.geometries.sphere: {
        return new Three.SphereGeometry(0.2, 9, 9);
      }

      case Constants.geometries.cone: {
        return new Three.ConeGeometry(0.2, 0.5, 0.5);
      }

      case Constants.geometries.plane: {
        return new Three.PlaneGeometry(1, 1, 1, 1);
      }

      case Constants.geometries.cylinder: {
        return new Three.CylinderGeometry(0.5, 0.5, 2, 10);
      }

      case Constants.geometries.icosahedron: {
        return new Three.IcosahedronGeometry(0.4, 0);
      }
      default:
        return null;
    }
  }
};

import * as Three from 'three';
import Constants from '../constants';

export default {
  create({ type, params }) {
    switch (type) {
      case Constants.geometries.cube: {
        return new Three.BoxGeometry(
          params.width,
          params.height,
          params.depth,
          params.widthSegments,
          params.heightSegments,
          params.depthSegments
        );
      }

      case Constants.geometries.sphere: {
        return new Three.SphereGeometry(
          params.radius,
          params.widthSegments,
          params.heightSegments,
          params.phiStart,
          params.phiLength,
          params.thetaStart,
          params.thetaLength
        );
      }

      case Constants.geometries.cone: {
        return new Three.ConeGeometry(
          params.radius,
          params.height,
          params.radialSegments,
          params.heightSegments,
          params.openEnded,
          params.thetaStart,
          params.thetaLength
        );
      }

      case Constants.geometries.plane: {
        return new Three.PlaneGeometry(
          params.width,
          params.height,
          params.widthSegments,
          params.heightSegments
        );
      }

      case Constants.geometries.cylinder: {
        return new Three.CylinderGeometry(
          params.radiusTop,
          params.radiusBottom,
          params.height,
          params.radialSegments,
          params.heightSegments,
          params.openEnded,
          params.thetaStart,
          params.thetaLength
        );
      }

      case Constants.geometries.icosahedron: {
        return new Three.IcosahedronGeometry(params.radius, params.detail);
      }
      default:
        return null;
    }
  }
};

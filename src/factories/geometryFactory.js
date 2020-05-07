import * as Three from 'three';
import Constants from '../constants';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

const loader = new OBJLoader();

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
      case Constants.geometries.tetrahedron: {
        return new Three.TetrahedronGeometry(params.radius, params.detail);
      }
      case Constants.geometries.dodecahedron: {
        return new Three.DodecahedronGeometry(params.radius, params.detail);
      }
      case Constants.geometries.octahedron: {
        return new Three.OctahedronGeometry(params.radius, params.detail);
      }
      case Constants.geometries.obj: {
        const obj = loader.parse(params.text);
        return obj.children[0].geometry;
      }
      default:
        return null;
    }
  }
};

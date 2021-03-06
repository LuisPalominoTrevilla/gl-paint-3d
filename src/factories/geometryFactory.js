import * as Three from 'three';
import Constants from '../constants';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

const loader = new OBJLoader();
const fontLoader = new Three.FontLoader();

export default {
  create({ type, params }) {
    switch (type) {
      case Constants.geometries.cube:
        return new Three.BoxGeometry(
          params.width,
          params.height,
          params.depth,
          params.widthSegments,
          params.heightSegments,
          params.depthSegments
        );
      case Constants.geometries.sphere:
        return new Three.SphereGeometry(
          params.radius,
          params.widthSegments,
          params.heightSegments,
          params.phiStart,
          params.phiLength,
          params.thetaStart,
          params.thetaLength
        );
      case Constants.geometries.cone:
        return new Three.ConeGeometry(
          params.radius,
          params.height,
          params.radialSegments,
          params.heightSegments,
          params.openEnded,
          params.thetaStart,
          params.thetaLength
        );
      case Constants.geometries.plane:
        return new Three.PlaneGeometry(
          params.width,
          params.height,
          params.widthSegments,
          params.heightSegments
        );
      case Constants.geometries.cylinder:
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
      case Constants.geometries.icosahedron:
        return new Three.IcosahedronGeometry(params.radius, params.detail);
      case Constants.geometries.tetrahedron:
        return new Three.TetrahedronGeometry(params.radius, params.detail);
      case Constants.geometries.dodecahedron:
        return new Three.DodecahedronGeometry(params.radius, params.detail);
      case Constants.geometries.octahedron:
        return new Three.OctahedronGeometry(params.radius, params.detail);
      case Constants.geometries.circle:
        return new Three.CircleGeometry(
          params.radius,
          params.segments,
          params.thetaStart,
          params.thetaLength
        );
      case Constants.geometries.ring:
        return new Three.RingGeometry(
          params.innerRadius,
          params.outerRadius,
          params.thetaSegments,
          params.phiSegments,
          params.thetaStart,
          params.thetaLength
        );
      case Constants.geometries.obj: {
        const obj = loader.parse(params.text);
        return obj.children[0].geometry;
      }
      case Constants.geometries.torus:
        return new Three.TorusGeometry(
          params.radius,
          params.tube,
          params.radialSegments,
          params.tubularSegments,
          params.arc
        );
      case Constants.geometries.torusKnot:
        return new Three.TorusKnotGeometry(
          params.radius,
          params.tube,
          params.tubularSegments,
          params.radialSegments,
          params.p,
          params.q
        );
      case Constants.geometries.text: {
        params.font = fontLoader.parse(params.fontJson);
        return new Three.TextGeometry(params.text, params);
      }
      default:
        return null;
    }
  }
};

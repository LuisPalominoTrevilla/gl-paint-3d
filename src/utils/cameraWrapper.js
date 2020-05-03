import * as Three from 'three';

class CameraWrapper {
  constructor({ fovy, aspect, near, far, initZ = 1 }) {
    this.camera = new Three.PerspectiveCamera(fovy, aspect, near, far);
    this.camera.position.z = initZ;
    this.animation = {
      theta: 0,
      deltaTheta: 0.01,
      orbit: false
    };
  }

  getDegDeltaTheta() {
    return parseFloat(((this.animation.deltaTheta * 180) / Math.PI).toFixed(2));
  }

  setDegDeltaTheta(deg) {
    this.animation.deltaTheta = (parseFloat(deg) * Math.PI) / 180;
  }

  _incrementTheta() {
    this.animation.theta =
      (this.animation.theta + this.animation.deltaTheta) % (2 * Math.PI);
  }

  orbitStep() {
    const x = 2 * Math.sin(this.animation.theta);
    const z = 2 * Math.cos(this.animation.theta);

    this._incrementTheta();

    this.camera.position.set(x, 0, z);
    // TODO: use target data
    this.camera.lookAt(0, 0, 0);
    this.camera.up.set(0, 1, 0);
  }
  // TODO: Reset animation
}

export default CameraWrapper;

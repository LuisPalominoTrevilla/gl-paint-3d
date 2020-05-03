import * as Three from 'three';

class CameraWrapper {
  constructor({ fovy, aspect, near, far, initZ = 1 }) {
    this.camera = new Three.PerspectiveCamera(fovy, aspect, near, far);
    this.camera.position.z = initZ;
    this.animation = {
      target: new Three.Vector3(0, 0, 0),
      fixedTarget: false,
      deltaTheta: 0.05,
      orbit: false
    };
    this.setAnimationData();
  }

  setAnimationData() {
    this.animation.r = Math.sqrt(
      Math.pow(this.camera.position.x, 2) + Math.pow(this.camera.position.z, 2)
    );
    if (this.animation.r === 0) {
      this.animation.theta = 0;
    } else {
      this.animation.theta = Math.acos(
        this.camera.position.z / this.animation.r
      );
      if (this.camera.position.x < 0)
        this.animation.theta = 2 * Math.PI - this.animation.theta;
    }
  }

  setTarget(x, y, z) {
    this.animation.target = new Three.Vector3(x, y, z);
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
    const x = this.animation.r * Math.sin(this.animation.theta);
    const z = this.animation.r * Math.cos(this.animation.theta);

    this._incrementTheta();

    this.camera.position.set(x, this.camera.position.y, z);
    if (this.animation.fixedTarget) {
      this.camera.lookAt(this.animation.target);
    } else {
      this.camera.lookAt(0, 0, 0);
    }
    this.camera.up.set(0, 1, 0);
  }
  // TODO: Reset animation
}

export default CameraWrapper;

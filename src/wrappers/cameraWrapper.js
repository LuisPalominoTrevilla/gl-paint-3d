import * as Three from 'three';
import Constants from '../constants';

class CameraWrapper {
  constructor({ type, params }, dimensions) {
    const aspect = dimensions.width / dimensions.height;
    if (type === Constants.cameraTypes.perspective) {
      this.camera = new Three.PerspectiveCamera(
        params.fovy,
        aspect,
        params.near,
        params.far
      );
    } else {
      this.camera = new Three.OrthographicCamera(
        params.left * aspect,
        params.right * aspect,
        params.top,
        params.bottom,
        params.near,
        params.far
      );
    }
    const { x, y, z } = params.initPos;
    this.camera.position.x = x;
    this.camera.position.y = y;
    this.camera.position.z = z;
    this.animation = {
      target: new Three.Vector3(0, 0, 0),
      fixedTarget: false,
      deltaTheta: 0.05,
      orbit: false
    };
    this.initData = {};
    this.prepareAnimation();
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

  prepareAnimation() {
    this.initData.position = this.camera.position.clone();
    this.setAnimationData();
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

  animationStep() {
    if (!this.animation.orbit) return;
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

  renderStep() {
    if (this.animation.fixedTarget) {
      this.camera.lookAt(this.animation.target);
    }
  }

  resetAnimationData() {
    const { x, y, z } = this.initData.position;
    this.camera.position.set(x, y, z);
    if (this.animation.fixedTarget) {
      this.camera.lookAt(this.animation.target);
    } else {
      this.camera.lookAt(0, 0, 0);
    }
    this.setAnimationData();
  }
}

export default CameraWrapper;

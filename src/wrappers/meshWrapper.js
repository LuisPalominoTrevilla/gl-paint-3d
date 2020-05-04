import * as Three from 'three';

class MeshWrapper {
  constructor({ geometry, material }) {
    this.mesh = new Three.Mesh(geometry, material);
    this.animation = {};
    this.initData = {};
    this.prepareAnimation();
  }

  prepareAnimation() {}

  animationStep() {}

  resetAnimationData() {}
}

export default MeshWrapper;

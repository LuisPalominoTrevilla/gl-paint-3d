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

  selectMesh() {
    this.prevColor = this.mesh.material.color.clone();
    this.mesh.material.color.set(0xc44f36);
  }

  deselectMesh() {
    // TODO: add new material if one was given
    if (this.prevColor) {
      this.mesh.material.color.set(this.prevColor);
      delete this.prevColor;
    }
  }
}

export default MeshWrapper;

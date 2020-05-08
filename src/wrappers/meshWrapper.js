import * as Three from 'three';

class MeshWrapper {
  constructor({ geometry, material }) {
    this.mesh = new Three.Mesh(geometry, material);
    this.animation = {
      animate: false,
      rotation: new Three.Vector3(0, 0, 0)
    };
    this.initData = {};
    this.prepareAnimation();
  }

  prepareAnimation() {
    this.initData.rotation = this.mesh.rotation.clone();
  }

  animationStep() {
    if (!this.animation.animate) return;
    this.mesh.rotation.x += this.animation.rotation.x;
    this.mesh.rotation.y += this.animation.rotation.y;
    this.mesh.rotation.z += this.animation.rotation.z;
  }

  resetAnimationData() {
    const { x, y, z } = this.initData.rotation;
    this.mesh.rotation.set(x, y, z);
  }

  selectMesh() {
    this.prevColor = this.mesh.material.color.clone();
    this.mesh.material.color.set(0xc44f36);
  }

  updateMesh(material) {
      this.mesh.material.dispose();
      this.mesh.material=material;
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

import * as Three from 'three';

class MeshWrapper {
  constructor({ geometry, material, meshes }) {
    this.isGroup = meshes != null;
    if (this.isGroup) {
      this.mesh = new Three.Group();
      meshes.forEach(mesh => this.mesh.add(mesh));
    } else {
      this.mesh = new Three.Mesh(geometry, material);
    }
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
    const selectMeshes = [this.mesh];
    while (selectMeshes.length > 0) {
      const mesh = selectMeshes.pop();
      if (mesh instanceof Three.Mesh) {
        mesh.prevColor = mesh.material.color.clone();
        mesh.material.color.set(0xc44f36);
      } else {
        selectMeshes.push(...mesh.children);
      }
    }
  }

  updateMesh(material) {
    this.mesh.material.dispose();
    this.mesh.material = material;
  }

  deselectMesh() {
    const objMeshes = [this.mesh];
    while (objMeshes.length > 0) {
      const mesh = objMeshes.pop();
      if (mesh instanceof Three.Mesh) {
        if (mesh.prevColor) {
          mesh.material.color.set(mesh.prevColor);
          delete mesh.prevColor;
        }
      } else {
        objMeshes.push(...mesh.children);
      }
    }
  }
}

export default MeshWrapper;

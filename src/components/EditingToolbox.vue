<template>
  <div class="card editing-toolbox">
    <div v-show="selectedMesh !== null">
      <div class="mb-4">
        <v-chip>Properties</v-chip>
        <coordinates-selection
          title="Position"
          :coordinates="position"
          @coordinates-set="setPosition"
        />
        <coordinates-selection
          title="Rotation"
          :coordinates="rotation"
          @coordinates-set="setRotation"
        />
        <coordinates-selection
          title="Scaling"
          :coordinates="scaling"
          @coordinates-set="setScaling"
        />
      </div>
      <div class="">
        <v-chip>Animation</v-chip>
        <coordinates-selection
          title="Rotation"
          :coordinates="animationRotation"
          @coordinates-set="setAnimationRotation"
        />
        <v-switch v-model="meshAnimation.animate" label="Animate" />
      </div>
    </div>
  </div>
</template>

<script>
import CoordinatesSelection from './CoordinatesSelection';

export default {
  components: {
    CoordinatesSelection
  },
  props: {
    selectedMesh: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      position: {},
      rotation: {},
      scaling: {},
      animationRotation: {}
    };
  },
  computed: {
    meshAnimation() {
      return this.selectedMesh ? this.selectedMesh.animation : {};
    }
  },
  watch: {
    selectedMesh(newMesh) {
      if (newMesh === null) return;
      this.position = newMesh.mesh.position.clone();
      this.rotation = newMesh.mesh.rotation.clone();
      this.rotation.x = parseFloat(
        (((this.rotation.x * 180) / Math.PI) % 360).toFixed(2)
      );
      this.rotation.y = parseFloat(
        (((this.rotation.y * 180) / Math.PI) % 360).toFixed(2)
      );
      this.rotation.z = parseFloat(
        (((this.rotation.z * 180) / Math.PI) % 360).toFixed(2)
      );
      this.scaling = newMesh.mesh.scale.clone();
      this.animationRotation = newMesh.animation.rotation.clone();
      this.animationRotation.x = parseFloat(
        (((this.animationRotation.x * 180) / Math.PI) % 360).toFixed(2)
      );
      this.animationRotation.y = parseFloat(
        (((this.animationRotation.y * 180) / Math.PI) % 360).toFixed(2)
      );
      this.animationRotation.z = parseFloat(
        (((this.animationRotation.z * 180) / Math.PI) % 360).toFixed(2)
      );
    }
  },
  methods: {
    setPosition() {
      const { x, y, z } = this.position;
      this.selectedMesh.mesh.position.set(x, y, z);
    },
    setRotation() {
      let { x, y, z } = this.rotation;
      x *= Math.PI / 180;
      y *= Math.PI / 180;
      z *= Math.PI / 180;
      this.selectedMesh.mesh.rotation.set(x, y, z);
    },
    setScaling() {
      const { x, y, z } = this.scaling;
      this.selectedMesh.mesh.scale.set(x, y, z);
    },
    setAnimationRotation() {
      let { x, y, z } = this.animationRotation;
      x *= Math.PI / 180;
      y *= Math.PI / 180;
      z *= Math.PI / 180;
      this.meshAnimation.rotation.set(x, y, z);
    }
  }
};
</script>

<style lang="scss" scoped>
.editing-toolbox {
  height: 100%;
}
</style>

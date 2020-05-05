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
      <v-chip>Animation</v-chip>
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
      scaling: {}
    };
  },
  watch: {
    selectedMesh(newMesh) {
      if (newMesh === null) return;
      this.position = newMesh.mesh.position.clone();
      this.rotation = newMesh.mesh.rotation.clone();
      this.scaling = newMesh.mesh.scale.clone();
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
    }
  }
};
</script>

<style lang="scss" scoped>
.editing-toolbox {
  height: 100%;
}
</style>

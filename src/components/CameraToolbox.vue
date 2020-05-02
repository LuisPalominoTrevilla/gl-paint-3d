<template>
  <div class="card camera-toolbox">
    <div class="horizontal">
      <v-slider v-model="panX" min="-100" max="100" label="Pan X"></v-slider>
      <v-slider v-model="zoom" min="-100" max="100" label="Zoom"></v-slider>
    </div>
    <div class="vertical">
      <v-slider
        v-model="panY"
        min="-100"
        max="100"
        label="Pan Y"
        :vertical="true"
      ></v-slider>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    camera: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      stepFactor: 0.01,
      zoomFactor: 0.5
    };
  },
  computed: {
    panX: {
      get() {
        return this.camera.position.x / this.stepFactor;
      },
      set(val) {
        this.camera.position.x = val * this.stepFactor;
      }
    },
    panY: {
      get() {
        return this.camera.position.y / this.stepFactor;
      },
      set(val) {
        this.camera.position.y = val * this.stepFactor;
      }
    },
    zoom: {
      get() {
        return this.camera.position.z / this.zoomFactor;
      },
      set(val) {
        this.camera.position.z = val * this.zoomFactor;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.camera-toolbox {
  display: flex;
  justify-content: space-around;
  width: 100%;

  .horizontal {
    flex-grow: 2;
  }

  .vertical {
    flex-grow: 1;
  }
}
</style>

<template>
  <div class="card">
    <v-slider v-model="panX" min="-100" max="100" label="Pan X"></v-slider>
    <v-slider v-model="panY" min="-100" max="100" label="Pan Y"></v-slider>
    <v-slider v-model="zoom" min="-100" max="100" label="Zoom"></v-slider>
  </div>
</template>

<script>
export default {
  props: {
    cameraData: {
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
        return this.cameraData.x / this.stepFactor;
      },
      set(val) {
        this.cameraData.x = val * this.stepFactor;
      }
    },
    panY: {
      get() {
        return this.cameraData.y / this.stepFactor;
      },
      set(val) {
        this.cameraData.y = val * this.stepFactor;
      }
    },
    zoom: {
      get() {
        return this.cameraData.z / this.zoomFactor;
      },
      set(val) {
        this.cameraData.z = val * this.zoomFactor;
      }
    }
  }
};
</script>

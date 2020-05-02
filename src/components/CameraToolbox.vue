<template>
  <div class="card camera-toolbox">
    <div class="horizontal">
      <v-slider v-model="panX" min="-100" max="100" label="Pan X"></v-slider>
      <v-slider v-model="zoom" min="-100" max="100" label="Zoom"></v-slider>
      <v-slider v-model="yaw" min="-180" max="180" label="Yaw"></v-slider>
      <div class="input-group">
        <v-chip label>
          Position:
        </v-chip>
        <v-text-field
          v-model="newPosition.x"
          class="number-input"
          label="x"
          hide-details="auto"
          type="number"
        />
        <v-text-field
          v-model="newPosition.y"
          class="number-input"
          label="y"
          hide-details="auto"
          type="number"
        />
        <v-text-field
          v-model="newPosition.z"
          class="number-input"
          label="z"
          hide-details="auto"
          type="number"
        />
        <v-btn
          :disabled="disableSetPosition"
          class="white--text"
          color="blue darken-3"
          @click="setPosition"
          >Set</v-btn
        >
        <v-btn class="white--text" color="blue darken-3" @click="fillPosition"
          >Fill</v-btn
        >
      </div>
      <div class="input-group">
        <v-chip label>
          Target:
        </v-chip>
        <v-text-field
          v-model="target.x"
          class="number-input"
          label="x"
          hide-details="auto"
          type="number"
        />
        <v-text-field
          v-model="target.y"
          class="number-input"
          label="y"
          hide-details="auto"
          type="number"
        />
        <v-text-field
          v-model="target.z"
          class="number-input"
          label="z"
          hide-details="auto"
          type="number"
        />
        <v-btn
          :disabled="disableSetTarget"
          class="white--text"
          color="blue darken-3"
          @click="setTarget"
          >Set</v-btn
        >
        <v-switch label="Fix"></v-switch>
      </div>
    </div>
    <div class="vertical">
      <v-slider
        v-model="panY"
        min="-100"
        max="100"
        label="Pan Y"
        :vertical="true"
      ></v-slider>
      <v-slider
        v-model="pitch"
        min="-180"
        max="180"
        label="Pitch"
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
      zoomFactor: 0.3,
      newPosition: {},
      target: {}
    };
  },
  computed: {
    disableSetPosition() {
      return (
        isNaN(this.newPosition.x) ||
        isNaN(this.newPosition.y) ||
        isNaN(this.newPosition.z)
      );
    },
    disableSetTarget() {
      return (
        isNaN(this.target.x) || isNaN(this.target.y) || isNaN(this.target.z)
      );
    },
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
    },
    pitch: {
      get() {
        return (this.camera.rotation.x * 180) / Math.PI;
      },
      set(deg) {
        this.camera.rotation.x = (deg * Math.PI) / 180;
      }
    },
    yaw: {
      get() {
        return -(this.camera.rotation.y * 180) / Math.PI;
      },
      set(deg) {
        this.camera.rotation.y = -(deg * Math.PI) / 180;
      }
    }
  },
  methods: {
    setPosition() {
      this.camera.position.set(
        this.newPosition.x,
        this.newPosition.y,
        this.newPosition.z
      );
      this.newPosition = {};
    },
    setTarget() {
      this.camera.lookAt(this.target.x, this.target.y, this.target.z);
      this.target = {};
    },
    fillPosition() {
      this.newPosition = {
        x: this.camera.position.x,
        y: this.camera.position.y,
        z: this.camera.position.z
      };
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
    flex: 5;
  }

  .vertical {
    display: flex;
    flex: 3;
  }

  .input-group {
    .number-input {
      width: 60px;
    }

    & > * {
      display: inline-block;
      margin-right: 1rem;
    }
  }
}
</style>

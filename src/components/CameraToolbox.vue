<template>
  <div class="card camera-toolbox">
    <div class="horizontal-sliders">
      <v-slider
        :readonly="isAnimationMode"
        v-model="panX"
        min="-500"
        max="500"
        label="Pan X"
      ></v-slider>
      <v-slider
        :readonly="isAnimationMode"
        v-model="zoom"
        min="-100"
        max="100"
        label="Zoom"
      ></v-slider>
      <v-slider
        :readonly="isAnimationMode"
        v-model="yaw"
        min="-180"
        max="180"
        label="Yaw"
      ></v-slider>
      <v-slider
        :readonly="isAnimationMode"
        v-model="roll"
        min="-180"
        max="180"
        label="Roll"
      ></v-slider>
      <v-btn
        :disabled="isAnimationMode"
        class="white--text"
        color="blue darken-3"
        @click="$refs.cameraDialog.open()"
        >Change Camera</v-btn
      >
    </div>
    <div class="vertical-sliders">
      <v-slider
        :readonly="isAnimationMode"
        class="large-slider"
        v-model="panY"
        min="-300"
        max="300"
        label="Pan Y"
        :vertical="true"
      ></v-slider>
      <v-slider
        :readonly="isAnimationMode"
        v-model="pitch"
        min="-180"
        max="180"
        label="Pitch"
        :vertical="true"
      ></v-slider>
    </div>
    <div class="position-inputs">
      <div class="input-group">
        <v-chip label>
          Position
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
          Target
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
        <v-switch
          :readonly="isAnimationMode"
          v-model="cameraAnimation.fixedTarget"
          label="Fix"
        />
      </div>
      <v-chip>
        Animation
      </v-chip>
      <div class="d-flex justify-space-around mt-2">
        <v-switch
          :readonly="isAnimationMode"
          v-model="cameraAnimation.orbit"
          label="Orbit"
        />
        <div class="d-flex">
          <v-text-field
            v-model="deltaTheta"
            class="number-input align-self-start"
            label="deltaTheta"
            hide-details="auto"
            type="number"
          />
          <v-btn
            :disabled="disableSetDeltaTheta"
            class="white--text align-self-center ml-2"
            color="blue darken-3"
            @click="setDeltaTheta"
            >Set</v-btn
          >
        </div>
      </div>
    </div>
    <camera-dialog
      ref="cameraDialog"
      @create-camera="$emit('create-camera', $event)"
    />
  </div>
</template>

<script>
import CameraDialog from './CameraDialog';
import Constants from '../constants';

export default {
  props: {
    cameraWrapper: {
      type: Object,
      required: true
    },
    appMode: {
      type: Number,
      required: true
    }
  },
  components: {
    CameraDialog
  },
  data() {
    return {
      stepFactor: 0.08,
      zoomFactor: 0.3,
      newPosition: {},
      target: {},
      deltaTheta: this.cameraWrapper.getDegDeltaTheta()
    };
  },
  watch: {
    fixedTarget(fixed) {
      this.target = fixed
        ? {
            x: this.cameraAnimation.target.x,
            y: this.cameraAnimation.target.y,
            z: this.cameraAnimation.target.z
          }
        : {};
    }
  },
  computed: {
    camera() {
      return this.cameraWrapper.camera;
    },
    cameraAnimation() {
      return this.cameraWrapper.animation;
    },
    fixedTarget() {
      return this.cameraAnimation.fixedTarget;
    },
    isAnimationMode() {
      return this.appMode === Constants.appModes.animation;
    },
    disableSetPosition() {
      return (
        this.isAnimationMode ||
        isNaN(parseFloat(this.newPosition.x)) ||
        isNaN(parseFloat(this.newPosition.y)) ||
        isNaN(parseFloat(this.newPosition.z))
      );
    },
    disableSetTarget() {
      return (
        this.isAnimationMode ||
        isNaN(parseFloat(this.target.x)) ||
        isNaN(parseFloat(this.target.y)) ||
        isNaN(parseFloat(this.target.z))
      );
    },
    disableSetDeltaTheta() {
      return this.isAnimationMode || isNaN(parseFloat(this.deltaTheta));
    },
    panX: {
      get() {
        return this.camera.position.x / this.stepFactor;
      },
      set(val) {
        if (this.isAnimationMode) return;
        this.camera.position.x = val * this.stepFactor;
      }
    },
    panY: {
      get() {
        return this.camera.position.y / this.stepFactor;
      },
      set(val) {
        if (this.isAnimationMode) return;
        this.camera.position.y = val * this.stepFactor;
      }
    },
    zoom: {
      get() {
        return this.camera.position.z / this.zoomFactor;
      },
      set(val) {
        if (this.isAnimationMode) return;
        this.camera.position.z = val * this.zoomFactor;
      }
    },
    pitch: {
      get() {
        return (this.camera.rotation.x * 180) / Math.PI;
      },
      set(deg) {
        if (this.isAnimationMode) return;
        this.camera.rotation.x = (deg * Math.PI) / 180;
      }
    },
    yaw: {
      get() {
        return -(this.camera.rotation.y * 180) / Math.PI;
      },
      set(deg) {
        if (this.isAnimationMode) return;
        this.camera.rotation.y = -(deg * Math.PI) / 180;
      }
    },
    roll: {
      get() {
        return -(this.camera.rotation.z * 180) / Math.PI;
      },
      set(deg) {
        if (this.isAnimationMode) return;
        this.camera.rotation.z = -(deg * Math.PI) / 180;
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
      this.cameraWrapper.setTarget(this.target.x, this.target.y, this.target.z);
      if (!this.fixedTarget) this.target = {};
    },
    fillPosition() {
      this.newPosition = {
        x: this.camera.position.x,
        y: this.camera.position.y,
        z: this.camera.position.z
      };
    },
    setDeltaTheta() {
      this.cameraWrapper.setDegDeltaTheta(this.deltaTheta);
    }
  }
};
</script>

<style lang="scss" scoped>
.camera-toolbox {
  display: flex;
  justify-content: space-around;
  width: 100%;

  .horizontal-sliders {
    display: flex;
    flex-direction: column;
    flex: 4;
  }

  .vertical-sliders {
    display: flex;
    flex: 2;

    ::v-deep .v-slider {
      height: 250px;
    }
  }

  .position-inputs {
    flex: 5;
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

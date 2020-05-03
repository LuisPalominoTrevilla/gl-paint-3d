<template>
  <v-app>
    <div class="main-container">
      <div class="left">
        <geometry-toolbox @draw="draw" />
      </div>
      <div class="center">
        <paint-canvas
          :canvasDimensions="canvasDimensions"
          :camera="camera"
          :geometries="geometries"
          :appMode="appMode"
          :animationState="animationState"
          ref="canvas"
        />
        <camera-toolbox :camera="camera" :appMode="appMode" />
      </div>
      <div class="right">
        <mode-selection
          :mode="appMode"
          :animationState="animationState"
          @mode-change="appMode = $event"
          @anim-state-change="animationState = $event"
        />
      </div>
    </div>
  </v-app>
</template>

<script>
import PaintCanvas from './components/PaintCanvas';
import CameraToolbox from './components/CameraToolbox';
import GeometryToolbox from './components/GeometryToolbox';
import ModeSelection from './components/ModeSelection';
import Constants from './constants';

import * as Three from 'three';
import './styles/index.scss';

export default {
  name: 'App',
  components: {
    PaintCanvas,
    CameraToolbox,
    GeometryToolbox,
    ModeSelection
  },
  data() {
    return {
      camera: null,
      canvasDimensions: {},
      geometries: [],
      appMode: 0,
      animationState: Constants.animationStates.init
    };
  },
  beforeMount() {
    this.canvasDimensions = {
      width: 800,
      height: 550
    };
    this.camera = new Three.PerspectiveCamera(
      70,
      this.canvasDimensions.width / this.canvasDimensions.height,
      0.01,
      100
    );
    this.camera.position.z = 2;
  },
  methods: {
    draw: function(geometry) {
      this.$refs.canvas.addFigure(geometry);
    }
  }
};
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 1rem;
}

.main-container {
  display: flex;
  justify-content: space-around;

  .center {
    display: flex;
    flex: 2;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }

  .left {
    flex: 1;
  }

  .right {
    flex: 1;
  }
}
</style>

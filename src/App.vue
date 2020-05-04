<template>
  <v-app>
    <div class="main-container">
      <div class="top-container">
        <div class="left">
          <FigureTabs @create-mesh="createMesh" />
        </div>
        <div class="center">
          <paint-canvas
            :canvasDimensions="canvasDimensions"
            :cameraWrapper="cameraWrapper"
            :appMode="appMode"
            :animationState="animationState"
            ref="canvas"
          />
        </div>
        <div class="right">
          <mode-selection
            :mode="appMode"
            :animationState="animationState"
            @mode-change="modeChanged"
            @anim-state-change="animStateChanged"
          />
        </div>
      </div>
      <div class="bottom-container">
        <div class="left"></div>
        <div class="right">
          <camera-toolbox :cameraWrapper="cameraWrapper" :appMode="appMode" />
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
import PaintCanvas from './components/PaintCanvas';
import CameraToolbox from './components/CameraToolbox';
import ModeSelection from './components/ModeSelection';
import CameraWrapper from './wrappers/cameraWrapper';
import MeshWrapper from './wrappers/meshWrapper';
import Constants from './constants';
import FigureTabs from './components/FigureTabs';

import './styles/index.scss';

export default {
  name: 'App',
  components: {
    PaintCanvas,
    CameraToolbox,
    ModeSelection,
    FigureTabs,
  },
  data() {
    return {
      cameraWrapper: null,
      canvasDimensions: {},
      meshWrappers: [],
      appMode: Constants.appModes.editing,
      animationState: Constants.animationStates.init
    };
  },
  beforeMount() {
    this.canvasDimensions = {
      width: 800,
      height: 550
    };
    this.cameraWrapper = new CameraWrapper({
      fovy: 70,
      aspect: this.canvasDimensions.width / this.canvasDimensions.height,
      near: 0.01,
      far: 100,
      initZ: 2
    });
  },
  methods: {
    createMesh(meshData) {
      const meshWrapper = new MeshWrapper(meshData);
      this.meshWrappers.push(meshWrapper);
      this.$refs.canvas.addMesh(meshWrapper.mesh);
    },
    modeChanged(newMode) {
      this.appMode = newMode;
      if (newMode === Constants.appModes.animation) {
        this.cameraWrapper.prepareAnimation();
      }
    },
    animStateChanged(newState) {
      this.animationState = newState;
      if (newState === Constants.animationStates.init) {
        this.cameraWrapper.resetAnimationData();
      }
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
}

.top-container {
  display: flex;
  justify-content: space-around;
  padding-right: 1rem;

  .center {
    flex: 2;
  }

  .left {
    flex: 1;
  }

  .right {
    flex: 1;
  }
}

.bottom-container {
  display: flex;
  justify-content: space-around;
  padding-right: 1rem;

  .left {
    flex: 1;
  }

  .right {
    flex: 3;
  }
}
</style>

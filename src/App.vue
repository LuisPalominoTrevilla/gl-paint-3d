<template>
  <v-app>
    <div class="main-container">
      <div class="left">
        <geometry-toolbox @draw="draw" />
      </div>
      <div class="center">
        <paint-canvas :camera="camera" :geometries="geometries" ref="canvas" />
        <camera-toolbox :camera="camera" />
      </div>
    </div>
  </v-app>
</template>

<script>
import PaintCanvas from './components/PaintCanvas';
import CameraToolbox from './components/CameraToolbox';
import GeometryToolbox from './components/GeometryToolbox';
import * as Three from 'three';
import './styles/index.scss';

export default {
  name: 'App',
  components: {
    PaintCanvas,
    CameraToolbox,
    GeometryToolbox
  },
  data() {
    return {
      camera: null,
      canvasDimensions: {},
      geometries: []
    };
  },
  beforeMount() {
    this.canvasDimensions = {
      width: 700,
      height: 600
    };
    this.camera = new Three.PerspectiveCamera(
      70,
      this.canvasDimensions.width / this.canvasDimensions.height,
      0.01,
      100
    );
  },
  methods: {
    draw: function(name) {
      this.$refs.canvas.addFigure(name);
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
  margin-top: 60px;
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
}
</style>

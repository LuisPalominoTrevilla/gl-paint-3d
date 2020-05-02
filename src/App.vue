<template>
  <v-app>
    <div class="main-container">
      <div class="left">
        <geometry-toolbox />
      </div>
      <div class="center">
        <paint-canvas :cameraData="cameraData" />
        <camera-toolbox :cameraData="cameraData" />
      </div>
    </div>
  </v-app>
</template>

<script>
import PaintCanvas from "./components/PaintCanvas";
import CameraToolbox from "./components/CameraToolbox";
import GeometryToolbox from "./components/GeometryToolbox";
import "./styles/index.scss";

export default {
  name: "App",
  components: {
    PaintCanvas,
    CameraToolbox,
    GeometryToolbox
  },
  data() {
    return {
      cameraData: {
        x: 0,
        y: 0,
        z: 2
      }
    };
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

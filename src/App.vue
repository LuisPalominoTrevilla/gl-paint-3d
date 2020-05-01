<template>
  <div id="app">
    <div class="main-container">
      <div class="center">
        <paint-canvas />
        <camera-toolbox />
      </div>
    </div>
  </div>
</template>

<script>
import PaintCanvas from "./components/PaintCanvas";
import CameraToolbox from "./components/CameraToolbox";

import "./styles/index.scss";

export default {
  name: "App",
  components: {
    PaintCanvas,
    CameraToolbox,
  },
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
    flex-direction: column;
    justify-content: space-around;
  }
}
</style>

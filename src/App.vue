<template>
  <div id="app">
    <paint-canvas />
  </div>
</template>

<script>
import PaintCanvas from "./components/PaintCanvas";

export default {
  name: "App",
  components: {
    PaintCanvas
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

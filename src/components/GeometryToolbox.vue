<template>
  <div class="toolbox card">
    <div class="tool-row" v-for="a in 3" :key="a">
      <div class="tool">
        cube
      </div>
      <div class="tool">
        sphere
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.toolbox {
  display: flex;
  flex-direction: column;
}

.tool-row {
  display: flex;
  justify-content: space-around;

  .tool {
    padding: 8px;
  }
}
</style>

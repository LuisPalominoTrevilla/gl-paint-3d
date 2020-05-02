<template>
  <div class="toolbox card">
    <div class="tool-row" v-for="(n, a) in 3" :key="a">
      <div class="tool">
        <GeometryTool :geometry="geometries[a * 2]" @draw="draw" />
      </div>
      <div class="tool">
        <GeometryTool :geometry="geometries[a * 2 + 1]" @draw="draw" />
      </div>
    </div>
  </div>
</template>

<script>
import GeometryTool from './GeometryTool';
import Constants from '../constants';

export default {
  components: {
    GeometryTool
  },

  data: function() {
    return {
      geometries: Object.values(Constants.geometries)
    };
  },

  methods: {
    draw: function(name) {
      this.$emit('draw', name);
    }
  }
};
</script>

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
    display: flex;
    flex: 1;
  }
}
</style>

<template>
  <div class="toolbox card">
    <v-row>
      <v-col cols="6" v-for="geometry in geometries" :key="geometry">
        <div class="tool">
          <GeometryTool :geometry="geometry" @draw="draw" />
        </div>
      </v-col>
    </v-row>
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
.tool {
  padding: 8px;
  display: flex;
  flex: 1;
}
</style>

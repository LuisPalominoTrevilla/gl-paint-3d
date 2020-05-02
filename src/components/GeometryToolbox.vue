<template>
  <div class="toolbox card">
    <v-row>
      <v-col cols="6" v-for="geometry in geometries" :key="geometry">
        <GeometryTool class="geometry" :geometry="geometry" @draw="draw" />
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
.geometry {
  width: 100%;
}
</style>

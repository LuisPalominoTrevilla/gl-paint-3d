<template>
  <div class="toolbox card">
    <h3 class="Title">Geometries</h3>
    <v-row>
      <v-col cols="6" v-for="geometry in geometries" :key="geometry">
        <GeometryTool
          class="geometry"
          :geometry="FigureIcon[geometry]"
          @draw="draw"
          :name="geometry"
        />
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
      geometries: Object.keys(Constants.geometries),
      FigureIcon: Constants.geometries
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

.Title{
  align: center;
}
</style>

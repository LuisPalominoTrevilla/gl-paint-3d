<template>
  <div class="toolbox">
    <h3 class="title">Geometries</h3>
    <v-row>
      <v-col cols="6" v-for="geometry in geometries" :key="geometry">
        <geometry-tool
          class="geometry"
          :geometry="geometry"
          @create-geometry="$refs.geometryDialog.open($event)"
        />
      </v-col>
    </v-row>
    <geometry-dialog
      ref="geometryDialog"
      @parameters-selected="$emit('create-mesh', $event)"
    />
  </div>
</template>

<script>
import GeometryTool from './GeometryTool';
import GeometryDialog from './GeometryDialog/GeometryDialog';
import Constants from '../constants';

export default {
  components: {
    GeometryTool,
    GeometryDialog
  },

  data() {
    return {
      geometries: Object.values(Constants.geometries)
    };
  }
};
</script>

<style lang="scss" scoped>
.geometry {
  width: 100%;
}
</style>

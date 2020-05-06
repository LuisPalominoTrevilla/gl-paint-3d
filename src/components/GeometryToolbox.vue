<template>
  <div class="toolbox card">
    <v-row>
      <v-col cols="6" v-for="geometry in geometries" :key="geometry">
        <geometry-tool
          class="geometry"
          :geometry="FigureIcon[geometry]"
          @create-geometry="$refs.geometryDialog.open($event)"
          :name="geometry"
        />
      </v-col>
    </v-row>
    <geometry-dialog ref="geometryDialog" @parameters-selected="createMesh" />
  </div>
</template>

<script>
import GeometryTool from './GeometryTool';
import GeometryDialog from './GeometryDialog';
import GeometryFactory from '../factories/geometryFactory';
import Constants from '../constants';
import * as Three from 'three';

export default {
  components: {
    GeometryTool,
    GeometryDialog
  },

  data() {
    return {
      geometries: Object.keys(Constants.geometries),
      FigureIcon: Constants.geometries
    };
  },

  methods: {
    createMesh({ type }) {
      const geometry = GeometryFactory.create(type);
      // TODO: Create selected material using own factory
      const material = new Three.MeshBasicMaterial();
      this.$emit('create-mesh', { geometry, material });
    }
  }
};
</script>

<style lang="scss" scoped>
.geometry {
  width: 100%;
}
</style>

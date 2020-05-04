<template>
  <div class="toolbox card">
    <h3 class="Title">Geometries</h3>
    <v-row>
      <v-col cols="6" v-for="geometry in geometries" :key="geometry">
        <GeometryTool
          class="geometry"
          :geometry="FigureIcon[geometry]"
          @create-geometry="createMesh"
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

  data() {
    return {
      geometries: Object.keys(Constants.geometries),
      FigureIcon: Constants.geometries
    };
  },

  methods: {
    createMesh(geometryType) {
      this.$emit('create-mesh',geometryType);
      //const geometry = GeometryFactory.create(geometryType);
      // TODO: Create selected material using own factory
      //const material = new Three.MeshBasicMaterial();
      //this.$emit('create-mesh', { geometry, material });
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

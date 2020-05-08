<template>
  <div class="toolbox card">
    <h3 class="Title">Geometries</h3>
    <v-row>
      <v-col cols="6" v-for="geometry in geometries" :key="geometry">
        <geometry-tool
          class="geometry"
          :geometry="geometry"
          @create-geometry="$refs.geometryDialog.open($event)"
        />
      </v-col>
    </v-row>
    <geometry-dialog ref="geometryDialog" @parameters-selected="createMesh" />
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
  },

  methods: {
    createMesh({type,params}) {
      this.$emit('create-mesh', {geometryType:type,geometryParams:params});
      //const geometry = GeometryFactory.create(type);
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

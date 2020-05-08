<template>
  <div class="figure-tabs card">
    <div v-show="showTabs">
      <v-tabs v-model="tab">
        <v-tabs-slider color="yellow"></v-tabs-slider>
        <v-tab>
          Geometries
        </v-tab>
        <v-tab>
          Materials
        </v-tab>
      </v-tabs>
      <v-tabs-items v-model="tab">
        <v-tab-item>
          <geometry-toolbox @create-mesh="createMesh" />
        </v-tab-item>

        <v-tab-item>
          <material-toolbox
            ref="toolbox"
            :currentMeshMaterial="currentMesh"
            :currentMeshMaterialName="getMaterialName"
            @changeMesh="updateMesh"
          />
        </v-tab-item>
      </v-tabs-items>
    </div>
  </div>
</template>

<script>
import GeometryToolbox from './GeometryToolbox';
import MaterialToolbox from './MaterialToolbox';
import GeometryFactory from '../factories/geometryFactory';
import MaterialFactory from '../factories/materialFactory';
import Constants from '../constants';
import * as Three from 'three';

export default {
  components: {
    GeometryToolbox,
    MaterialToolbox
  },
  props: {
    currentMesh: { type: Object },
    selectedEditState: {
      type: Number,
      required: true
    },
    appMode: {
      type: Number,
      required: true
    }
  },
  computed: {
    getMaterialName() {
      if (this.currentMesh && !this.currentMesh.isGroup) {
        let name = this.currentMesh.mesh.material.type.slice(0, -8);
        name = name.replace(name[0], name[0].toLowerCase());
        return name;
      }
      return '';
    },
    showTabs() {
      return (
        this.appMode === Constants.appModes.editing &&
        this.selectedEditState === Constants.editingStates.select
      );
    }
  },
  data() {
    return {
      tab: null
    };
  },
  methods: {
    createMesh({ type, params }) {
      const geometry = GeometryFactory.create({
        type,
        params
      });
      const currentMaterial = this.$refs.toolbox;
      let material;
      if (currentMaterial) {
        let data = currentMaterial.getMaterialData();
        material = MaterialFactory.create(data.datakey, data.params);
      } else {
        material = new Three.MeshBasicMaterial();
      }
      this.$emit('create-mesh', { geometry, material });
    },
    updateMesh(data, key) {
      let newMaterial = MaterialFactory.create(key, data);
      this.$emit('updateMesh', newMaterial);
    }
  }
};
</script>

<style lang="scss" scoped>
.figure-tabs {
  height: 100%;
}
</style>

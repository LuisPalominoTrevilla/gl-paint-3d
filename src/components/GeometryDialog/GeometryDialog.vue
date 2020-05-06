<template>
  <v-dialog v-model="dialog" scrollable>
    <v-card>
      <v-card-title>{{ dialogTitle }}</v-card-title>
      <v-divider></v-divider>
      <box-geometry-inputs
        v-show="cubeSelected"
        class="ma-7"
        :params="geometryParameters[geometryType]"
      />
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
        <v-btn color="blue darken-1" text @click="selectParameters">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import BoxGeometryInputs from './BoxGeometryInputs';
import Constants from '../../constants';

export default {
  components: {
    BoxGeometryInputs
  },
  data() {
    return {
      dialog: false,
      geometryType: null,
      geometryParameters: {}
    };
  },
  beforeMount() {
    this.resetParams();
  },
  computed: {
    dialogTitle() {
      return this.geometryType != null
        ? `${Constants.geometryNames[this.geometryType]} properties`
        : '';
    },
    cubeSelected() {
      return this.geometryType === Constants.geometries.cube;
    }
  },
  methods: {
    open(type) {
      this.dialog = true;
      this.geometryType = type;
      this.resetParams();
    },
    selectParameters() {
      this.dialog = false;
      this.$emit('parameters-selected', {
        type: this.geometryType,
        params: this.geometryParameters[this.geometryType]
      });
    },
    resetParams() {
      this.geometryParameters = {
        [Constants.geometries.cube]: {
          width: 1,
          height: 1,
          depth: 1,
          widthSegments: 1,
          heightSegments: 1,
          depthSegments: 1
        },
        [Constants.geometries.sphere]: {},
        [Constants.geometries.cone]: {},
        [Constants.geometries.plane]: {},
        [Constants.geometries.cylinder]: {},
        [Constants.geometries.icosahedron]: {}
      };
    }
  }
};
</script>

<style lang="scss" scoped>
::v-deep .v-dialog {
  width: 50%;
}
</style>

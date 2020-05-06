<template>
  <v-dialog v-model="dialog" scrollable>
    <v-card>
      <v-card-title>{{ dialogTitle }}</v-card-title>
      <v-divider></v-divider>
      <component
        class="ma-7"
        :is="geometryComponent"
        :params="geometryParams"
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
import SphereGeometryInputs from './SphereGeometryInputs';
import ConeGeometryInputs from './ConeGeometryInputs';
import PlaneGeometryInputs from './PlaneGeometryInputs';
import CylinderGeometryInputs from './CylinderGeometryInputs';
import IcosahedronGeometryInputs from './IcosahedronGeometryInputs';
import Constants from '../../constants';

export default {
  components: {
    BoxGeometryInputs,
    SphereGeometryInputs,
    ConeGeometryInputs,
    PlaneGeometryInputs,
    CylinderGeometryInputs,
    IcosahedronGeometryInputs
  },
  data() {
    return {
      dialog: false,
      geometryType: null,
      geometryParameters: {},
      geometryInputComponents: {
        [Constants.geometries.cube]: 'BoxGeometryInputs',
        [Constants.geometries.sphere]: 'SphereGeometryInputs',
        [Constants.geometries.cone]: 'ConeGeometryInputs',
        [Constants.geometries.plane]: 'PlaneGeometryInputs',
        [Constants.geometries.cylinder]: 'CylinderGeometryInputs',
        [Constants.geometries.icosahedron]: 'IcosahedronGeometryInputs'
      }
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
    geometryParams() {
      return this.geometryType != null
        ? this.geometryParameters[this.geometryType]
        : {};
    },
    geometryComponent() {
      return this.geometryType != null
        ? this.geometryInputComponents[this.geometryType]
        : '';
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
        params: this.geometryParams
      });
    },
    resetParams() {
      this.geometryParameters = Constants.geometryParameters;
    }
  }
};
</script>

<style lang="scss" scoped>
::v-deep .v-dialog {
  width: 50%;
}
</style>

<template>
  <v-dialog v-model="dialog" scrollable>
    <v-card>
      <v-card-title>{{ dialogTitle }}</v-card-title>
      <v-divider></v-divider>
      <component
        class="ma-7"
        :is="geometryComponent"
        :params="geometryParams"
        @correct-data="hasErrors = !$event"
      />
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
        <v-btn
          :disabled="disableCreate"
          color="blue darken-1"
          text
          @click="selectParameters"
          >Create</v-btn
        >
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
import SahedronGeometryInputs from './SahedronGeometryInputs';
import CircleGeometryInputs from './CircleGeometryInputs';
import RingGeometryInputs from './RingGeometryInputs';
import OBJGeometryInputs from './OBJGeometryInputs';
import TorusGeometryInputs from './TorusGeometryInputs';
import TorusKnotGeometryInputs from './TorusKnotGeometryInputs';
import Constants from '../../constants';
import { cloneDeep } from 'lodash';

export default {
  components: {
    BoxGeometryInputs,
    SphereGeometryInputs,
    ConeGeometryInputs,
    PlaneGeometryInputs,
    CylinderGeometryInputs,
    SahedronGeometryInputs,
    CircleGeometryInputs,
    RingGeometryInputs,
    OBJGeometryInputs,
    TorusGeometryInputs,
    TorusKnotGeometryInputs
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
        [Constants.geometries.icosahedron]: 'SahedronGeometryInputs',
        [Constants.geometries.tetrahedron]: 'SahedronGeometryInputs',
        [Constants.geometries.dodecahedron]: 'SahedronGeometryInputs',
        [Constants.geometries.octahedron]: 'SahedronGeometryInputs',
        [Constants.geometries.circle]: 'CircleGeometryInputs',
        [Constants.geometries.ring]: 'RingGeometryInputs',
        [Constants.geometries.torus]: 'TorusGeometryInputs',
        [Constants.geometries.torusKnot]: 'TorusKnotGeometryInputs',
        [Constants.geometries.obj]: 'OBJGeometryInputs'
      },
      hasErrors: false
    };
  },
  beforeMount() {
    this.resetParams();
  },
  computed: {
    disableCreate() {
      return this.hasErrors;
    },
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
      this.geometryParameters = cloneDeep(Constants.geometryParameters);
    }
  }
};
</script>

<style lang="scss" scoped>
::v-deep .v-dialog {
  width: 50%;
}
</style>

<template>
  <v-dialog v-model="dialog" scrollable>
    <v-card>
      <v-card-title>Create Camera</v-card-title>
      <v-divider></v-divider>
      <div class="ma-7">
        <v-radio-group class="mt-7" v-model="cameraType" row>
          <v-radio
            :value="cameraTypes.perspective"
            active-class="selected-state"
          >
            <template v-slot:label>
              Perspective
            </template>
          </v-radio>
          <v-radio
            :value="cameraTypes.orthographic"
            active-class="selected-state"
          >
            <template v-slot:label>
              Orthographic
            </template>
          </v-radio>
        </v-radio-group>
        <div v-show="cameraType === cameraTypes.perspective">
          <div class="d-flex">
            <v-text-field
              v-model="cameraParams[cameraType].fovy"
              class="camera-input"
              label="Fovy"
              hide-details="auto"
              type="number"
            />
            <v-text-field
              v-model="cameraParams[cameraType].near"
              class="camera-input"
              label="Near"
              hide-details="auto"
              type="number"
            />
            <v-text-field
              v-model="cameraParams[cameraType].far"
              class="camera-input"
              label="Far"
              hide-details="auto"
              type="number"
            />
          </div>
        </div>
        <div v-show="cameraType === cameraTypes.orthographic">
          <div class="d-flex">
            <v-text-field
              v-model="cameraParams[cameraType].left"
              class="camera-input"
              label="Left"
              hide-details="auto"
              type="number"
            />
            <v-text-field
              v-model="cameraParams[cameraType].right"
              class="camera-input"
              label="Right"
              hide-details="auto"
              type="number"
            />
            <v-text-field
              v-model="cameraParams[cameraType].top"
              class="camera-input"
              label="Top"
              hide-details="auto"
              type="number"
            />
            <v-text-field
              v-model="cameraParams[cameraType].bottom"
              class="camera-input"
              label="Bottom"
              hide-details="auto"
              type="number"
            />
          </div>
          <div class="d-flex">
            <v-text-field
              v-model="cameraParams[cameraType].near"
              class="camera-input"
              label="Near"
              hide-details="auto"
              type="number"
            />
            <v-text-field
              v-model="cameraParams[cameraType].far"
              class="camera-input"
              label="Far"
              hide-details="auto"
              type="number"
            />
          </div>
        </div>
        <div class="d-flex">
          <v-text-field
            v-model="cameraParams[cameraType].initPos.x"
            class="camera-input"
            label="x"
            hide-details="auto"
            type="number"
          />
          <v-text-field
            v-model="cameraParams[cameraType].initPos.y"
            class="camera-input"
            label="y"
            hide-details="auto"
            type="number"
          />
          <v-text-field
            v-model="cameraParams[cameraType].initPos.z"
            class="camera-input"
            label="z"
            hide-details="auto"
            type="number"
          />
        </div>
      </div>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
        <v-btn
          :disabled="disableCreate"
          color="blue darken-1"
          text
          @click="createCamera"
          >Create</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import Constants from '../constants';
import { cloneDeep } from 'lodash';

export default {
  data() {
    return {
      dialog: false,
      cameraType: Constants.cameraTypes.perspective,
      cameraParams: {}
    };
  },
  computed: {
    disableCreate() {
      return false;
    },
    cameraTypes() {
      return Constants.cameraTypes;
    }
  },
  beforeMount() {
    this.resetParams();
  },
  methods: {
    open() {
      this.dialog = true;
      this.resetParams();
    },
    resetParams() {
      this.cameraParams = cloneDeep(Constants.cameraParams);
    },
    createCamera() {
      this.dialog = false;
      this.$emit('create-camera', {
        type: this.cameraType,
        params: this.cameraParams[this.cameraType]
      });
    }
  }
};
</script>

<style lang="scss" scoped>
::v-deep .v-dialog {
  width: 50%;
}

.camera-input {
  margin-right: 2rem;

  &:last-child {
    margin-right: 0;
  }
}
</style>

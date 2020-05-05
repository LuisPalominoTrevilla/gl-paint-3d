<template>
  <v-app>
    <div class="main-container">
      <div class="top-container">
        <div class="left">
          <geometry-toolbox @create-mesh="createMesh" />
        </div>
        <div class="center">
          <paint-canvas
            :canvasDimensions="canvasDimensions"
            :cameraWrapper="cameraWrapper"
            :meshWrappers="meshWrappers"
            :appMode="appMode"
            :animationState="animationState"
            @select-mesh="selectMesh"
            @deselect-mesh="deselectMeshes"
            ref="canvas"
          />
        </div>
        <div class="right">
          <editing-toolbox :selectedMesh="selectedMesh" />
        </div>
      </div>
      <div class="bottom-container">
        <div class="left">
          <mode-selection-toolbox
            :mode="appMode"
            :animationState="animationState"
            :selectedEditState="editingState"
            @mode-change="modeChanged"
            @anim-state-change="animStateChanged"
            @edit-state-change="editStateChanged"
          />
        </div>
        <div class="right">
          <camera-toolbox :cameraWrapper="cameraWrapper" :appMode="appMode" />
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
import PaintCanvas from './components/PaintCanvas';
import CameraToolbox from './components/CameraToolbox';
import GeometryToolbox from './components/GeometryToolbox';
import ModeSelectionToolbox from './components/ModeSelectionToolbox';
import EditingToolbox from './components/EditingToolbox';
import CameraWrapper from './wrappers/cameraWrapper';
import MeshWrapper from './wrappers/meshWrapper';
import Constants from './constants';

import './styles/index.scss';

export default {
  name: 'App',
  components: {
    PaintCanvas,
    CameraToolbox,
    GeometryToolbox,
    ModeSelectionToolbox,
    EditingToolbox
  },
  data() {
    return {
      cameraWrapper: null,
      canvasDimensions: {},
      meshWrappers: [],
      selectedMeshIdx: null,
      groupingMeshes: [],
      appMode: Constants.appModes.editing,
      animationState: Constants.animationStates.init,
      editingState: Constants.editingStates.select
    };
  },
  computed: {
    selectedMesh() {
      return this.selectedMeshIdx === null
        ? null
        : this.meshWrappers[this.selectedMeshIdx];
    }
  },
  beforeMount() {
    this.canvasDimensions = {
      width: 800,
      height: 550
    };
    this.cameraWrapper = new CameraWrapper({
      fovy: 70,
      aspect: this.canvasDimensions.width / this.canvasDimensions.height,
      near: 0.01,
      far: 100,
      initZ: 2
    });
  },
  methods: {
    createMesh(meshData) {
      const meshWrapper = new MeshWrapper(meshData);
      this.meshWrappers.push(meshWrapper);
      this.$refs.canvas.addMesh(meshWrapper.mesh);
    },
    modeChanged(newMode) {
      this.appMode = newMode;
      if (newMode === Constants.appModes.animation) {
        this.cameraWrapper.prepareAnimation();
        this.meshWrappers.forEach(wrapper => wrapper.prepareAnimation());
        this.deselectMeshes();
      }
    },
    animStateChanged(newState) {
      this.animationState = newState;
      if (newState === Constants.animationStates.init) {
        this.cameraWrapper.resetAnimationData();
        this.meshWrappers.forEach(wrapper => wrapper.resetAnimationData());
      }
    },
    editStateChanged(newState) {
      this.deselectMeshes();
      this.editingState = newState;
    },
    selectMesh(uuid) {
      if (this.appMode !== Constants.appModes.editing) return;

      const selectedIdx = this.meshWrappers.findIndex(
        wrapper => wrapper.mesh.uuid === uuid
      );
      switch (this.editingState) {
        case Constants.editingStates.select:
          if (this.selectedMesh) {
            const selectedUUid = this.selectedMesh.mesh.uuid;
            this.deselectMeshes();
            if (this.meshWrappers[selectedIdx].mesh.uuid === selectedUUid)
              return;
          }
          this.meshWrappers[selectedIdx].selectMesh();
          this.selectedMeshIdx = selectedIdx;
          break;
        case Constants.editingStates.delete:
          this.$refs.canvas.removeMesh(this.meshWrappers[selectedIdx].mesh);
          this.meshWrappers.splice(selectedIdx, 1);
          break;
        default:
          console.error('Invalid current state');
      }
    },
    deselectMeshes() {
      switch (this.editingState) {
        case Constants.editingStates.select:
          if (this.selectedMesh) {
            this.selectedMesh.deselectMesh();
            this.selectedMeshIdx = null;
          }
          break;
        case Constants.editingStates.group:
          // TODO: Iterate over meshes idx and deselect them
          this.groupingMeshes = [];
          break;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.top-container {
  display: flex;
  justify-content: space-around;
  padding-right: 1rem;

  .center {
    flex: 2;
  }

  .left {
    flex: 1;
  }

  .right {
    flex: 1;
  }
}

.bottom-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-right: 1rem;

  .left {
    flex: 1;
  }

  .right {
    flex: 3;
  }
}
</style>

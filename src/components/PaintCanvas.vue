<template>
  <div id="container" ref="container"></div>
</template>

<script>
import * as Three from 'three';
import Constants from '../constants';

export default {
  name: 'PaintCanvas',

  props: {
    cameraWrapper: {
      type: Object,
      required: true
    },
    meshWrappers: {
      type: Array,
      required: true
    },
    canvasDimensions: {
      type: Object,
      required: true
    },
    appMode: {
      type: Number,
      required: true
    },
    animationState: {
      type: Number,
      required: true
    }
  },

  data() {
    return {
      scene: null,
      renderer: null,
      mouse: null,
      raycaster: null
    };
  },

  computed: {
    camera() {
      return this.cameraWrapper.camera;
    },

    cameraAnimation() {
      return this.cameraWrapper.animation;
    }
  },

  mounted() {
    this.init();
    this.animate();
  },

  methods: {
    init() {
      const container = this.$refs.container;
      this.scene = new Three.Scene();
      this.raycaster = new Three.Raycaster();
      this.renderer = new Three.WebGLRenderer({ antialias: true });
      this.renderer.setSize(
        this.canvasDimensions.width,
        this.canvasDimensions.height
      );
      container.appendChild(this.renderer.domElement);
      container.addEventListener('mousedown', this.onMouseClick, false);
    },

    animate() {
      requestAnimationFrame(this.animate);

      if (this.appMode === Constants.appModes.editing) {
        this.cameraWrapper.renderStep();
      } else if (
        this.appMode === Constants.appModes.animation &&
        this.animationState === Constants.animationStates.play
      ) {
        this.cameraWrapper.animationStep();
        this.meshWrappers.forEach(wrapper => wrapper.animationStep());
      }
      this.renderer.render(this.scene, this.camera);
    },

    addMesh(mesh, selectMesh = true) {
      this.scene.add(mesh);
      if (selectMesh) this.$emit('select-mesh', mesh.uuid);
    },

    removeMesh(mesh) {
      this.scene.remove(mesh);
    },

    onMouseClick(event) {
      if (this.appMode !== Constants.appModes.editing) return;

      const rect = event.target.getBoundingClientRect();
      const mouse3D = {
        x: (2 * (event.clientX - rect.left)) / this.canvasDimensions.width - 1,
        y: (2 * (rect.top - event.clientY)) / this.canvasDimensions.height + 1
      };

      this.raycaster.setFromCamera(mouse3D, this.camera);

      const intersects = this.raycaster.intersectObjects(
        this.scene.children,
        true
      );
      if (intersects.length === 0) {
        this.$emit('deselect-mesh');
      } else {
        let object = intersects[0].object;
        while (!(object.parent instanceof Three.Scene)) {
          object = object.parent;
        }
        this.$emit('select-mesh', object.uuid);
      }
    }
  }
};
</script>

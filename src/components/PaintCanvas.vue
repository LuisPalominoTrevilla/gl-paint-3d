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
      this.mouse = new Three.Vector2(-10, -10);
      this.renderer = new Three.WebGLRenderer({ antialias: true });
      this.renderer.setSize(
        this.canvasDimensions.width,
        this.canvasDimensions.height
      );
      container.appendChild(this.renderer.domElement);
      container.addEventListener('mousemove', this.onMouseMove, false);
    },

    animate() {
      requestAnimationFrame(this.animate);

      if (this.appMode === Constants.appModes.editing) {
        this.raycaster.setFromCamera(this.mouse, this.camera);

        var intersects = this.raycaster.intersectObjects(this.scene.children);
        for (var i = 0; i < intersects.length; i++) {
          intersects[i].object.material.color.set(0xc44f36);
        }
        this.cameraWrapper.renderStep();
      } else if (
        this.appMode === Constants.appModes.animation &&
        this.animationState === Constants.animationStates.play
      ) {
        this.cameraWrapper.animationStep();
        // TODO: Animate all meshes
      }
      this.renderer.render(this.scene, this.camera);
    },

    addMesh(mesh) {
      this.scene.add(mesh);
    },

    onMouseMove(event) {
      let x = event.clientX;
      let y = event.clientY;
      var rect = event.target.getBoundingClientRect();
      var xClipp = (2 * (x - rect.left)) / this.canvasDimensions.width - 1;
      var yClipp = (2 * (rect.top - y)) / this.canvasDimensions.height + 1;
      this.mouse.x = xClipp;
      this.mouse.y = yClipp;
    }
  }
};
</script>

<template>
  <div id="container" ref="container"></div>
</template>

<script>
import * as Three from 'three';
import Constants from '../constants';

export default {
  name: 'PaintCanvas',

  props: {
    camera: {
      type: Object,
      required: true
    },
    geometries: {
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
      mesh: null,
      mouse: null,
      raycaster: null,
      theta: 0,
      deltaTheta: 0.01
    };
  },

  mounted() {
    this.init();
    this.animate();
  },

  methods: {
    init() {
      const container = this.$refs.container;
      this.scene = new Three.Scene();
      this.mesh = [];
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
      } else if (
        this.appMode === Constants.appModes.animation &&
        this.animationState === Constants.animationStates.play
      ) {
        const x = 2 * Math.sin(this.theta);
        const z = 2 * Math.cos(this.theta);
        // TODO: module
        this.theta += this.deltaTheta;
        this.camera.position.set(x, 0, z);
        // TODO: use target data
        this.camera.lookAt(0, 0, 0);
        this.camera.up.set(0, 1, 0);
      }
      this.renderer.render(this.scene, this.camera);
    },
    addFigure(geometry) {
      switch (geometry) {
        case Constants.geometries.cube: {
          let geometry = new Three.BoxGeometry(0.2, 0.2, 0.2);
          let material = new Three.MeshBasicMaterial();
          let fig = new Three.Mesh(geometry, material);
          fig.position.set(-0.4, 0.4, 0);
          this.mesh.push(fig);
          this.scene.add(fig);
          break;
        }

        case Constants.geometries.sphere: {
          let geometry = new Three.SphereGeometry(0.2, 9, 9);
          let material = new Three.MeshBasicMaterial();
          let fig = new Three.Mesh(geometry, material);
          fig.position.set(0, 0.4, 0);
          this.mesh.push(fig);
          this.scene.add(fig);
          break;
        }

        case Constants.geometries.cone: {
          let geometry = new Three.ConeGeometry(0.2, 0.5, 0.5);
          let material = new Three.MeshBasicMaterial();
          let fig = new Three.Mesh(geometry, material);
          fig.position.set(-0.4, 0, 0);
          this.mesh.push(fig);
          this.scene.add(fig);
          break;
        }

        case Constants.geometries.plane: {
          let geometry = new Three.PlaneGeometry(1, 1, 1, 1);
          let material = new Three.MeshBasicMaterial();
          let fig = new Three.Mesh(geometry, material);
          fig.rotation.x = -0.55 * Math.PI;
          fig.position.set(0, -0.2, 0.5);
          this.mesh.push(fig);
          this.scene.add(fig);

          break;
        }
        default:
          console.log('Hello from ' + geometry);
          break;
      }
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

<style lang="scss" scoped></style>

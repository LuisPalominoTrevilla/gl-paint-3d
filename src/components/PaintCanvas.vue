<template>
  <div id="container" ref="container"></div>
</template>

<script>
import * as Three from "three";

export default {
  name: "PaintCanvas",

  props: {
    cameraData: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      camera: null,
      scene: null,
      renderer: null,
      mesh: null
    };
  },

  mounted() {
    this.init();
    this.animate();
  },

  watch: {
    cameraData: {
      deep: true,
      handler(data) {
        this.camera.position.x = data.x;
        this.camera.position.y = data.y;
        this.camera.position.z = data.z;
      }
    }
  },

  methods: {
    init() {
      const container = this.$refs.container;

      this.camera = new Three.PerspectiveCamera(
        70,
        container.clientWidth / container.clientHeight,
        0.01,
        100
      );
      this.camera.position.z = this.cameraData.z;

      this.scene = new Three.Scene();

      let geometry = new Three.BoxGeometry(0.2, 0.2, 0.2);
      let material = new Three.MeshNormalMaterial();

      this.mesh = new Three.Mesh(geometry, material);
      this.scene.add(this.mesh);

      this.renderer = new Three.WebGLRenderer({ antialias: true });
      this.renderer.setSize(container.clientWidth, container.clientHeight);
      container.appendChild(this.renderer.domElement);
    },
    animate() {
      requestAnimationFrame(this.animate);
      this.mesh.rotation.x += 0.01;
      this.mesh.rotation.y += 0.02;
      this.renderer.render(this.scene, this.camera);
    }
  }
};
</script>

<style lang="scss" scoped>
#container {
  width: 700px;
  height: 600px;
}
</style>

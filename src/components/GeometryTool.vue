<template>
  <v-btn class="toolBtn" v-on:click="draw">
    <font-awesome-icon :icon="geometryIcon" />
  </v-btn>
</template>

<script>
import Constants from '../constants';

export default {
  props: {
    geometry: {
      type: Number,
      required: true
    }
  },
  computed: {
    geometryIcon() {
      const icon = Constants.geometryIcon[this.geometry];
      return icon ? icon : 'brush';
    }
  },
  methods: {
    draw() {
      this.$emit('draw', this.geometry);
    }
  }
};
</script>

<style lang="scss" scoped>
.toolBtn {
  display: flex;
  flex: 1;
  font-size: 24px;
  color: rgb(45, 112, 200);
}
.toolImg {
  height: 2rem;
}
</style>

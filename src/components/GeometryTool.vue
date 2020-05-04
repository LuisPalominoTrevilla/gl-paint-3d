<template>
  <v-tooltip bottom>
    <template v-slot:activator="{ on }">
      <v-btn class="toolBtn" @click="createGeometry" v-on="on">
        <font-awesome-icon :icon="geometryIcon" />
      </v-btn>
    </template>
    <span>{{ name }}</span>
  </v-tooltip>
</template>

<script>
import Constants from '../constants';

export default {
  props: {
    name: {
      type: String,
      required: true
    },
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
    createGeometry() {
      this.$emit('create-geometry', this.geometry);
    }
  }
};
</script>

<style lang="scss" scoped>
.toolBtn {
  width: 100%;
  font-size: 24px;
  color: rgb(45, 112, 200);
}
.toolImg {
  height: 2rem;
}
</style>

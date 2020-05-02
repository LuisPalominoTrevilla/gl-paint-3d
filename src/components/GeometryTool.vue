<template>
  <v-btn class="toolBtn" v-on:click="draw">
    <font-awesome-icon icon="user-secret" />
  </v-btn>
</template>

<script>
export default {
  props: {
    geometry: {
      type: Number,
      required: true
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
}
.toolImg {
  height: 2rem;
}
</style>

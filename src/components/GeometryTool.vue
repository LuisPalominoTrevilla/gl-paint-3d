<template>
  <v-btn class="toolBtn" v-on:click="draw(name)">
    {{ name }}
  </v-btn>
</template>

<script>
export default {
  props: {
    imgSrc: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  methods: {
    draw: function(name) {
      this.$emit('draw', name);
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

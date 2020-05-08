<template>
  <div>
    <div class="d-flex">
      <v-text-field
        v-model.number="params.radius"
        class="number-input"
        label="radius"
        hide-details="auto"
        type="number"
      />
      <v-text-field
        v-model.number="params.tube"
        class="number-input"
        label="tube"
        hide-details="auto"
        type="number"
      />
      <v-text-field
        v-model.number="params.radialSegments"
        class="number-input"
        label="radialSegments"
        hide-details="auto"
        type="number"
      />
      <v-text-field
        v-model.number="params.tubularSegments"
        class="number-input"
        label="tubularSegments"
        hide-details="auto"
        type="number"
      />
      <v-text-field
        v-model.number="arc"
        class="number-input"
        label="arc"
        hide-details="auto"
        type="number"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    params: {
      type: Object,
      required: true
    }
  },
  computed: {
    arc: {
      get() {
        return parseFloat(((this.params.arc * 180) / Math.PI).toFixed(2));
      },
      set(deg) {
        this.params.arc = (deg * Math.PI) / 180;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.number-input {
  margin-right: 2rem;

  &:last-child {
    margin-right: 0;
  }
}
</style>

<template>
  <div>
    <div class="d-flex">
      <v-text-field
        v-model="params.radius"
        class="number-input"
        label="radius"
        hide-details="auto"
        type="number"
      />
      <v-text-field
        v-model="params.tube"
        class="number-input"
        label="tube"
        hide-details="auto"
        type="number"
      />
      <v-text-field
        v-model="params.radialSegments"
        class="number-input"
        label="radialSegments"
        hide-details="auto"
        type="number"
      />
      <v-text-field
        v-model="params.tubularSegments"
        class="number-input"
        label="tubularSegments"
        hide-details="auto"
        type="number"
      />
      <v-text-field
        v-model="params.p"
        class="number-input"
        label="params.p"
        hide-details="auto"
        type="number"
      />
      <v-text-field
        v-model="params.q"
        class="number-input"
        label="params.q"
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

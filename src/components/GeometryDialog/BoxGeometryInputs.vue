<template>
  <div>
    <div class="d-flex">
      <v-text-field
        v-model.number="params.width"
        class="number-input"
        label="width"
        hide-details="auto"
        type="number"
      />
      <v-text-field
        v-model.number="params.height"
        class="number-input"
        label="height"
        hide-details="auto"
        type="number"
      />
      <v-text-field
        v-model.number="params.depth"
        class="number-input"
        label="depth"
        hide-details="auto"
        type="number"
      />
    </div>
    <div class="d-flex">
      <v-text-field
        v-model.number="params.widthSegments"
        class="number-input"
        label="widthSegments"
        hide-details="auto"
        type="number"
      />
      <v-text-field
        v-model.number="params.heightSegments"
        class="number-input"
        label="heightSegments"
        hide-details="auto"
        type="number"
      />
      <v-text-field
        v-model.number="params.depthSegments"
        class="number-input"
        label="depthSegments"
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

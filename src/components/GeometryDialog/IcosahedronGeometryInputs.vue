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
        v-model="params.detail"
        class="number-input"
        label="detail"
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

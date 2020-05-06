<template>
  <div class="input-group">
    <v-chip label>
      {{ title }}
    </v-chip>
    <v-text-field
      v-model="coordinates.x"
      class="number-input"
      label="x"
      hide-details="auto"
      type="number"
    />
    <v-text-field
      v-model="coordinates.y"
      class="number-input"
      label="y"
      hide-details="auto"
      type="number"
    />
    <v-text-field
      v-model="coordinates.z"
      class="number-input"
      label="z"
      hide-details="auto"
      type="number"
    />
    <v-btn
      :disabled="disableSetCoordinates"
      class="white--text"
      color="blue darken-3"
      @click="$emit('coordinates-set')"
      >Set</v-btn
    >
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    coordinates: {
      type: Object,
      required: true
    }
  },
  computed: {
    disableSetCoordinates() {
      return (
        isNaN(parseFloat(this.coordinates.x)) ||
        isNaN(parseFloat(this.coordinates.y)) ||
        isNaN(parseFloat(this.coordinates.z))
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.input-group {
  .number-input {
    width: 60px;
  }

  & > * {
    display: inline-block;
    margin-right: 1rem;
  }
}
</style>

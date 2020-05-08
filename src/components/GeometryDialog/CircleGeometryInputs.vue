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
        v-model.number="params.segments"
        class="number-input"
        label="segments"
        hide-details="auto"
        type="number"
      />
      <v-text-field
        v-model.number="thetaStart"
        class="number-input"
        label="thetaStart"
        hide-details="auto"
        type="number"
      />
      <v-text-field
        v-model.number="thetaLength"
        class="number-input"
        label="thetaLength"
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
    thetaStart: {
      get() {
        return parseFloat(
          ((this.params.thetaStart * 180) / Math.PI).toFixed(2)
        );
      },
      set(deg) {
        this.params.thetaStart = (deg * Math.PI) / 180;
      }
    },
    thetaLength: {
      get() {
        return parseFloat(
          ((this.params.thetaLength * 180) / Math.PI).toFixed(2)
        );
      },
      set(deg) {
        this.params.thetaLength = (deg * Math.PI) / 180;
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

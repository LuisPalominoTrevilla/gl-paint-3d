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
    </div>
    <div class="d-flex">
      <v-text-field
        v-model.number="phiStart"
        class="number-input"
        label="phiStart"
        hide-details="auto"
        type="number"
      />
      <v-text-field
        v-model.number="phiLength"
        class="number-input"
        label="phiLength"
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
    phiStart: {
      get() {
        return parseFloat(((this.params.phiStart * 180) / Math.PI).toFixed(2));
      },
      set(deg) {
        this.params.phiStart = (deg * Math.PI) / 180;
      }
    },
    phiLength: {
      get() {
        return parseFloat(((this.params.phiLength * 180) / Math.PI).toFixed(2));
      },
      set(deg) {
        this.params.phiLength = (deg * Math.PI) / 180;
      }
    },
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

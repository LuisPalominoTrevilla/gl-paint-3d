<template>
  <div class="card">
    <v-radio-group v-model="appMode">
      <v-radio label="Editing" :value="0"></v-radio>
      <v-radio label="Animation" :value="1"></v-radio>
    </v-radio-group>
  </div>
</template>

<script>
export default {
  props: {
    mode: {
      type: Number,
      required: true
    }
  },
  computed: {
    appMode: {
      get() {
        return this.mode;
      },
      set(newMode) {
        this.$emit('mode-change', newMode);
      }
    }
  }
};
</script>

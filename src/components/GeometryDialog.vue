<template>
  <v-dialog v-model="dialog" scrollable>
    <v-card>
      <v-card-title>{{ dialogTitle }}</v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        hello
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
        <v-btn color="blue darken-1" text @click="selectParameters">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import Constants from '../constants';

export default {
  data() {
    return {
      dialog: false,
      geometryType: null
    };
  },
  computed: {
    dialogTitle() {
      return this.geometryType != null
        ? `${Constants.geometryNames[this.geometryType]} properties`
        : '';
    }
  },
  methods: {
    open(type) {
      this.dialog = true;
      this.geometryType = type;
    },
    selectParameters() {
      this.dialog = false;
      this.$emit('parameters-selected', { type: this.geometryType });
    }
  }
};
</script>

<style lang="scss" scoped>
::v-deep .v-dialog {
  width: 50%;
}
</style>

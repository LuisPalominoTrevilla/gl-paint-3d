<template>
  <div>
    <div class="d-flex">
      <v-text-field
        v-model="params.text"
        class="number-input"
        label="text"
        hide-details="auto"
      />
      <v-file-input
        v-model="params.file"
        label="Font file"
        class="number-input"
        accept="application/json"
      ></v-file-input>
      <v-text-field
        v-model="params.size"
        class="number-input"
        label="size"
        hide-details="auto"
        type="number"
      />
      <v-text-field
        v-model="params.height"
        class="number-input"
        label="height"
        hide-details="auto"
        type="number"
      />
      <v-text-field
        v-model="params.curveSegments"
        class="number-input"
        label="curveSegments"
        hide-details="auto"
        type="number"
      />
    </div>
    <div class="d-flex">
      <v-switch
        class="number-input"
        v-model="params.bevelEnabled"
        label="bevelEnabled"
      />
      <v-text-field
        v-model="params.bevelThickness"
        class="number-input"
        label="bevelThickness"
        hide-details="auto"
        type="number"
      />
      <v-text-field
        v-model="params.bevelSize"
        class="number-input"
        label="bevelSize"
        hide-details="auto"
        type="number"
      />
      <v-text-field
        v-model="params.bevelOffset"
        class="number-input"
        label="bevelOffset"
        hide-details="auto"
        type="number"
      />
      <v-text-field
        v-model="params.bevelSegments"
        class="number-input"
        label="bevelSegments"
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
  data() {
    return {
      reader: new FileReader()
    };
  },
  watch: {
    file: {
      immediate: true,
      handler(newFile) {
        if (newFile) {
          this.reader.readAsText(this.file);
        }
      }
    }
  },
  computed: {
    file() {
      return this.params.file;
    }
  },
  beforeMount() {
    this.reader.onload = this.readFile;
    this.$emit('correct-data', false);
  },
  methods: {
    readFile(event) {
      this.params.fontJson = JSON.parse(event.target.result);
      this.$emit('correct-data', true);
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

<template>
  <div class="ma-7">
    <v-file-input v-model="params.file" label="OBJ file"></v-file-input>
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
      this.params.text = event.target.result;
      this.$emit('correct-data', true);
    }
  }
};
</script>

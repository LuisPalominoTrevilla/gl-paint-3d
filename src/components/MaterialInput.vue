<template>
  <v-expansion-panel>
    <v-expansion-panel-header>{{ field }}</v-expansion-panel-header>
    <v-expansion-panel-content>
      <v-color-picker
        v-if="field === 'color' || field === 'emissive' || field === 'specular'"
        :value="defaultVal"
        v-on:input="handler"
        ref="Colorinp"
      ></v-color-picker>
      <v-text-field
        v-else-if="typeof this.defaultVal === 'number'"
        :value="defaultVal"
        v-on:input="handler"
        ref="Numberinp"
      ></v-text-field>
      <v-switch
        v-else-if="typeof this.defaultVal === 'boolean'"
        :value="defaultVal"
        v-on:change="handler"
        ref="inp"
      ></v-switch>
      <v-select
        v-else-if="isText"
        :items="getItems"
        :value="defaultVal"
        v-on:input="handler"
        ref="inp"
      ></v-select>
      <v-file-input
        v-else
        accept="image/*"
        label="Texture"
        v-on:change="handler"
        ref="Fileinp"
      ></v-file-input>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
import Constants from '../constants';

export default {
  props: {
    field: {
      required: true
    },
    defaultVal: {
      required: true
    },
    selected: {
      type: Boolean
    }
  },
  computed: {
    isText() {
      return Constants[this.field];
    },
    getDefault() {
      return this.defaultVal;
    },
    getItems() {
      return Constants[this.field];
    }
  },
  data() {
    return {
      current: this.defaultVal
    };
  },
  methods: {
    handler() {
      let colorRef = this.$refs.Colorinp;
      if (colorRef) {
        this.current = colorRef.$children[0].$children[0].color.hex;
      } else if (this.$refs.Numberinp) {
        this.current =
          this.$refs.Numberinp.lazyValue !== ''
            ? parseInt(this.$refs.Numberinp.lazyValue)
            : 0;
      } else {
        if (this.$refs.inp) {
          this.current = this.$refs.inp.lazyValue
            ? this.$refs.inp.lazyValue
            : false; //When is v-switch False is taken as Null
        } else {
          this.current = this.$refs.Fileinp.lazyValue
            ? this.$refs.Fileinp.lazyValue.name
            : null; //For v-fileinput null cases
        }
      }
      if (!this.selected) {
        this.$emit('updateData', this.field, this.current);
      } else {
        this.$emit('changeMaterialData', this.field, this.current);
      }
    }
  }
};
</script>

<template>
  <div class="card">
    <v-chip label>
      Mode
    </v-chip>
    <v-radio-group v-model="appMode">
      <v-radio label="Editing" :value="0"></v-radio>
      <v-radio label="Animation" :value="1"></v-radio>
    </v-radio-group>
    <div class="animation-controls" v-show="!showEditing">
      <v-chip label>
        Animation Controls
      </v-chip>
      <div class="d-flex justify-space-around mt-4">
        <v-btn
          :disabled="disablePlayBtn"
          @click="playAnimation"
          class="white--text"
          color="blue darken-3"
          >Play</v-btn
        >
        <v-btn
          :disabled="disablePauseBtn"
          @click="pauseAnimation"
          class="white--text"
          color="blue darken-3"
          >Pause</v-btn
        >
        <v-btn
          :disabled="disableResetBtn"
          @click="resetAnimation"
          class="white--text"
          color="blue darken-3"
          >Reset</v-btn
        >
      </div>
    </div>
  </div>
</template>

<script>
import Constants from '../constants';

export default {
  props: {
    mode: {
      type: Number,
      required: true
    },
    animationState: {
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
        if (newMode === Constants.appModes.editing)
          this.$emit('anim-state-change', Constants.animationStates.init);
      }
    },
    showEditing() {
      return this.mode === Constants.appModes.editing;
    },
    disablePlayBtn() {
      return this.animationState === Constants.animationStates.play;
    },
    disablePauseBtn() {
      return this.animationState === Constants.animationStates.pause;
    },
    disableResetBtn() {
      return this.animationState === Constants.animationStates.init;
    }
  },
  methods: {
    playAnimation() {
      this.$emit('anim-state-change', Constants.animationStates.play);
    },
    pauseAnimation() {
      this.$emit('anim-state-change', Constants.animationStates.pause);
    },
    resetAnimation() {
      this.$emit('anim-state-change', Constants.animationStates.init);
    }
  }
};
</script>

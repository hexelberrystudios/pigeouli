<template>
  <fieldset class="pg-emotion-selector">
    <legend class="pg-dark-text-shadow">Which face are you making writing this?</legend>
    <emotion-option
      v-for="emotion in emotions" 
      v-bind:emotion="emotion"
      v-bind:key="emotion"></emotion-option>
  </fieldset>
</template>

<script>
import EmotionOption from './EmotionOption';

export default {
  name: 'emotion-select',
  data() {
    return {
      emotions: ['neutral', 'happy', 'sad', 'angry', 'confused', 'tired']
    };
  },
  components: {
    EmotionOption
  }
};
</script>

<style>
  .pg-emotion-selector {
    margin-top: 1rem;
    margin-left: 0;
    margin-right: 0;
    border-color: var(--med-color);
    border-radius: 0.3rem;
  }
</style>

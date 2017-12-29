<template>
  <div class="pg-emotion-select">
    <input :id="emotion" type="radio" name="emotion" :value="emotion" class="pg-emotion-select pg-sr-only">
    <label :for="emotion">
      <img :src="imgUrl" :alt="altText" class="pg-emotion-option">
    </label>
  </div>  
</template>

<script>
export default {
  name: 'emotion-option',
  data() {
    return {
      imgUrl: '/static/img/pigeon_profile_neutral.svg',
      altText: `An image of a pigeon with a ${this.emotion} expression`
    };
  },
  props: {
    emotion: {
      type: String,
      required: true
    }
  }
};
</script>

<style>
  .pg-emotion-select {
    display: inline-block;
    margin: 0 0.5rem;
  }

  .pg-emotion-select:checked + label > img {
    background-color: var(--white-color);
  }
  
  .pg-emotion-option {
    width: 5rem;
    border: 0.1rem solid var(--med-color);
    border-radius: 1rem;
    background-color: var(--dark-color);
    padding-top: 0.5rem;
    transition: all 0.125s;
    cursor: pointer;
  }
</style>

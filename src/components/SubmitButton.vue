<template>
  <button type="submit" class="pg-button">{{ text }}</button>
</template>

<script>
  export default {
    name: 'submit-button',
    props: {
      text: {
        type: String,
        required: true
      }
    }
  };
</script>

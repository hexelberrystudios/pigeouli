<template>
  <button type="button" class="hxb-button">{{ text }}</button>
</template>

<script>
  export default {
    name: 'primary-button',
    props: {
      text: {
        type: String,
        required: true
      }
    }
  }
</script>
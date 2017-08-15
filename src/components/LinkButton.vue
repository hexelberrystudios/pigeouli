<template>
  <router-link :to="href" class="pg-button">{{ text }}</router-link>
</template>

<script>
  export default {
    name: 'link-button',
    props: {
      href: {
        type: String,
        required: true
      },
      text: {
        type: String,
        required: true
      }
    }
  };
</script>

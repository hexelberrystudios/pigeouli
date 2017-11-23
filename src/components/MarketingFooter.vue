<template>
  <footer class="pg-marketing-footer" v-bind:class="{ 'is-fixed': isFixed }">
    <router-link to="terms-of-service" class="pg-dark-text-shadow">Terms Of Service</router-link>
    <router-link to="privacy-policy" class="pg-dark-text-shadow">Privacy Policy</router-link>
  </footer>
</template>

<script>
  export default {
    name: 'marketing-footer',
    props: {
      isFixed: {
        type: Boolean,
        required: false
      }
    }
  };
</script>

<style scoped>
  .pg-marketing-footer {
    width: 100%;
    text-align: center;
  }

  .pg-marketing-footer.is-fixed {
    position: absolute;
    bottom: 0;
  }

  .pg-marketing-footer > a:not(:first-child) {
    padding-left: 0.5rem;
  }
</style>

<template>
  <header>
    <router-link to="/dashboard">Pigeouli</router-link>
  </header>
</template>

<script>
  export default {
    name: 'app-header'
  };
</script>

<style scoped>
  header {
    text-align: center;
    background-color: var(--dark-color);
    padding: 0.25rem;
  }

  a {
    color: var(--white-color);
  }
</style>

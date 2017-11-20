<template>
  <div>
    <app-header></app-header>
    <a href="/logout" class="pg-dark-text-shadow">Logout</a>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from '../AppHeader';
import AppFooter from '../AppFooter';

export default {
  name: 'settings-page',
  components: {
    AppHeader,
    AppFooter
  }
};
</script>

<style scoped>
  a {
    display: inline-block;
    padding: 1rem;
    color: var(--white-color);
  }
</style>

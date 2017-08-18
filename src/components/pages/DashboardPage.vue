<template>
  <div>
    <app-header></app-header>
    <posts></posts>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from '../AppHeader';
import AppFooter from '../AppFooter';
import Posts from '../Posts';

export default {
  name: 'dashboard-page',
  components: {
    AppHeader,
    AppFooter,
    Posts
  }
};
</script>

<style>
  
</style>

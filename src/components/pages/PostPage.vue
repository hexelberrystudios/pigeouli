<template>
  <div>
    <app-header></app-header>
    <new-post-form :username="username"></new-post-form>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from '../AppHeader';
import AppFooter from '../AppFooter';
import NewPostForm from '../NewPostForm';

export default {
  name: 'post-page',
  data: function data() {
    return {
      username: 'Jumbalayah'
    };
  },
  components: {
    AppHeader,
    AppFooter,
    NewPostForm
  }
};
</script>

<style>
  
</style>

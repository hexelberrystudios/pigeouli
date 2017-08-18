<template>
  <footer class="pg-footer">
    <ul class="pg-footer-list">
      <li class="pg-footer-list__action"><router-link to="/dashboard">Home</router-link></li>
      <li class="pg-footer-list__action"><router-link to="/post">Post</router-link></li>
    </ul>
  </footer>
</template>

<script>
  export default {
    name: 'app-footer'
  };
</script>

<style>
  /* Footer */
  .pg-footer {
    position: fixed;
    bottom: 0;
    background-color: var(--dark-color);
    color: var(--white-color);
    width: 100%;
    padding: 0.25rem 0;
  }

  .pg-footer-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .pg-footer-list__action {
    display: inline-block;
    text-align: center;
    padding: 0;
  }

  .pg-footer-list__action > a {
    color: var(--white-color);
  }
</style>

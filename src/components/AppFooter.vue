<template>
  <footer class="hxb-footer">
    <ul class="hxb-footer-list">
      <li class="hxb-footer-list__action"><router-link to="/app/todo">To Do</router-link></li>
      <li class="hxb-footer-list__action"><router-link to="/app/search">Search</router-link></li>
      <li class="hxb-footer-list__action"><router-link to="/app/edit">Edit</router-link></li>
      <li class="hxb-footer-list__action"><router-link to="/app/new">New</router-link></li>
    </ul>
  </footer>
</template>

<script>
  export default {
    name: 'app-footer'
  }
</script>
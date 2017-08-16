<template>
  <ul>
    <li>
      <post></post>
    </li>
  </ul>
</template>

<script>
import Post from './Post';

export default {
  name: 'posts',
  components: {
    Post
  }
};
</script>

<style scoped>
  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
  }
</style>

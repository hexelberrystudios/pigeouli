<template>
  <ul>
    <li v-for="post in posts">
      <post :username="post.username" :content="post.content"></post>
    </li>
  </ul>
</template>

<script>
import Post from './Post';

export default {
  name: 'posts',
  data() {
    return {
      posts: [{
        username: 'Jumbalayah',
        content: 'Coo coo!!!! Cooo coooccoocoocoo cooo cooco! Coo coo!!!! Cooo coooccoocoocoo cooo cooco! Coo coo!!!! Cooo coooccoocoocoo cooo cooco! Coo coo!!!! Cooo coooccoocoocoo cooo cooco!'
      }, {
        username: 'Crawfish22',
        content: 'coo coooo co coo...'
      }, {
        username: 'Tekal',
        content: 'coooo!!!! coo coo  cooooooo!!!!!??'
      }]
    };
  },
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

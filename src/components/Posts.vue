<template>
  <ul>
    <li v-for="post in posts">
      <post :username="post.username" :content="post.content"></post>
    </li>
  </ul>
</template>

<script>
import Post from './Post';
import { generalError } from '../utilities';

export default {
  name: 'posts',
  mounted() {
    this.$http.get('/posts').then((response) => {
      console.log(response.body);
      this.posts = response.body;
    }, (response) => {
      // error
      this.error = {
        message: generalError
      };
      console.error(response);
      window.scrollTo(0, 0);
    });
  },
  data() {
    return {
      posts: {}
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

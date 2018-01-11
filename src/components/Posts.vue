<template>
  <ul>
    <li v-for="post in posts">
      <post :username="post.username"
            :content="post.content"
            :emotion="post.emotion"></post>
    </li>
    <!-- If the number of posts that we received is less than twenty,
         That means there are no more posts to retrieve -->
    <button type="button" v-if="recentPostNum === 20" @click="getMorePosts">More Posts</button>
  </ul>
</template>

<script>
import Post from './Post';
import { generalError } from '../utilities';

export default {
  name: 'posts',
  mounted() {
    this.getMorePosts();
  },
  methods: {
    getMorePosts() {
      this.$http.post('/recent-posts', {
        startingPostId: this.lastPostId
      }).then((response) => {
        const newPosts = response.body;
        console.log(newPosts);
        this.posts = newPosts;

        if (newPosts && newPosts.length) {
          this.recentPostNum = newPosts.length;
          this.lastPostId = newPosts[newPosts.length - 1].id;
        }
      }, (response) => {
        // error
        this.error = {
          message: generalError
        };
        console.error(response);
        window.scrollTo(0, 0);
      });
    }
  },
  data() {
    return {
      posts: {},
      recentPostNum: 0,
      lastPostId: 0
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

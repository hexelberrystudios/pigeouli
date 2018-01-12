<template>
  <article class="pg-posts">
    <ul class="pg-post-list">
      <li v-for="post in posts" class="pg-post-list__items">
        <post :username="post.username"
              :content="post.content"
              :emotion="post.emotion"></post>
      </li>
    </ul>
    <!-- If the number of posts that we received is less than twenty,
         That means there are no more posts to retrieve -->
    <button type="button"
            v-if="recentPostNum === 10"
            @click="getMorePosts"
            class="pg-more-posts-btn">More Posts</button>
  </article>
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
        this.posts = this.posts.concat(newPosts);

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
      posts: [],
      recentPostNum: 0,
      lastPostId: 0
    };
  },
  components: {
    Post
  }
};
</script>

<style>
  .pg-posts {
    background-color: var(--dark-color);
  }

  /* desktop */
  @media all and (min-width: 501px) {
    .pg-posts {
      padding: 2rem;
    }
  }

  .pg-post-list {
    margin: 0;
    padding: 0;
  }

  .pg-post-list__items {
    list-style: none;
  }

  .pg-more-posts-btn {
    display: block;
    width: 100%;
    margin: 0 auto 3rem auto;
    border: none;
    background-color: var(--dark-color);
    color: var(--white-color);
    font-size: 100%;
    padding: 0.5rem;
    box-shadow: 0 0.1rem 0.25rem var(--med-color);
  }
</style>

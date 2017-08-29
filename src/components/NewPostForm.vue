<template>
  <form v-on:submit="addPost" name="post" method="post" action="/post">
    <div>
      <img src="/static/img/profile.png" alt="An image of a pigeon" class="pg-np-pigeon" />
      <span class="pg-np-username">{{ username }}</span>
    </div>
    <label for="new-post" class="pg-sr-only">Post Content</label>
    <textarea id="new-post"
              rows="10"
              cols="50"
              v-model="post"></textarea>
    <!--<span v-class="{ 'pg-chars-over': remainingCharCount < 0 }">{{ remainingCharCount }}</span>-->
    <submit-button text="Post"></submit-button>
  </form>
</template>

<script>
import SubmitButton from './SubmitButton';

export default {
  name: 'new-post-form',
  created() {
    this.$store.dispatch('form/resetForm');
  },
  computed: {
    post: {
      get() {
        return this.$store.state.form.fields.post;
      },
      set(value) {
        const allowableCharacters = ['c', 'o', 'C', 'O', ' ', '!', '?', '.'];
        let post = value;

        function getRandomInt(min, max) {
          return Math.floor(Math.random() * ((max - min) + 1)) + min;
        }

        // go through the post and make sure only the allowable characters are in the string
        post = Array.prototype.map.call(post, (char) => {
          // automatically replace any offending characters with either a 'c' or 'o'
          const randomCharacter = getRandomInt(0, 1);
          let result;

          if (allowableCharacters.indexOf(char) > -1) {
            // accepted character
            result = char;
          } else {
            // replacing offending character
            result = allowableCharacters[randomCharacter];
          }

          return result;
        }).join('');

        // tell action in form vuex module to update its form field
        // with the following key/value pair
        this.$store.dispatch('form/updateField', {
          name: 'post',
          value: post
        });
      }
    },
    remainingCharCount() {
      const maxCharCount = 140;
      let currentCharCount;

      if (this.post) {
        currentCharCount = this.post.length;
      } else {
        currentCharCount = 0;
      }

      return maxCharCount - currentCharCount;
    }
  },
  methods: {
    addPost(e) {
      const self = this;
      // let username = self.$store.state.form.fields.username;
      e.preventDefault();

      self.$router.push('/dashboard');
    }
  },
  props: {
    username: {
      Type: String,
      required: true
    }
  },
  components: {
    SubmitButton
  }
};
</script>

<style scoped>
  .pg-np-pigeon {
    width: 10%;
    border-radius: 0.3rem;
    float: left;
  }

  .pg-np-username {
    float: left;
    padding: 1rem;
  }

  textarea {
    width: 98%;
    display: block;
    padding: 1%;
    font-size: 1rem;
    border-width: 0.1rem;
    border-left: none;
    border-right: none;
    border-color: var(--med-color);
  }

  .pg-button {
    float: right;
    margin: 0.5rem;
  }

  .pg-chars-over {
    color: red;
  }
</style>

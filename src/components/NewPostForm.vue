<template>
  <form v-on:submit="post" name="post" method="post" action="/post">
    <div>
      <img src="/static/img/profile.png" alt="An image of a pigeon" class="pg-np-pigeon" />
      <span class="pg-np-username">{{ username }}</span>
    </div>
    <label for="new-post" class="pg-sr-only">Post Content</label>
    <textarea id="new-post"
              rows="10"
              cols="50"
              @input="update"></textarea>
    <span @class="{ 'pg-chars-over': remainingCharCount < 0 }">{{ remainingCharCount }}</span>
    <submit-button text="Post"></submit-button>
    <span>{{ charactersRemaining }}</span>
  </form>
</template>

<script>
import { mapState } from 'vuex';
import SubmitButton from './SubmitButton';

export default {
  name: 'new-post-form',
  created() {
    this.$store.dispatch('form/resetForm');
  },
  computed: {
    // get the latest value of this form field from the vuex store
    ...mapState({
      post(state) {
        return state.form.fields['post'];
      }
    }),
    remainingCharCount() {
      const maxCharCount = 140;

      return maxCharCount - this.post.length;
    }
  },
  methods: {
    update(e) {
      let i,
        currentChar;
      let post = e.target.value;
      let allowableCharacters = ['c', 'o', '!', '?', '.'];

      // go through the post and make sure only the allowable characters are in the string
      post = Array.prototype.map.call(post, function (char) {
        // automatically replace any offending characters with either a 'c' or 'o'
        const randomCharacter = Math.floor(Math.random() * (max - min + 1));

        if (allowableCharacters.indexOf(char) > -1) {
          // accepted character
          return char;
        } else {
          // replacing offending character
          return allowableCharacters[randomCharacter];
        }
      }).join('');

      // tell action in form vuex module to update its form field with the following key/value pair
      this.$store.dispatch('form/updateField', {
        name: 'post',
        value: post
      })
    },
    post(e) {
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

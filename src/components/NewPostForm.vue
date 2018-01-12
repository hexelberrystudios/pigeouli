<template>
  <form v-on:submit="addPost" name="post" method="post" action="/post" class="pg-new-post-form">
    <emotion-select></emotion-select>
    <label for="new-post" class="pg-sr-only">What do you need to say?</label>
    <textarea id="new-post"
              rows="10"
              cols="50"
              class="pg-post-field"
              v-model="post"></textarea>
    <span :class="{ 'pg-chars-over': remainingCharCount < 0, 'pg-dark-text-shadow': true, 'pg-chars': true }">{{ remainingCharCount }}</span>
    <p id="form-error"
       v-if="error.message"
       v-html="error.message"
       class="pg-input-error pg-white-text-shadow"
       role="alert"></p>
    <submit-button text="Post"></submit-button>
  </form>
</template>

<script>
import SubmitButton from './SubmitButton';
import Username from './Username';
import EmotionSelect from './EmotionSelect';
import { getRandomInt, generalError } from '../utilities';

export default {
  name: 'new-post-form',
  created() {
    this.$store.dispatch('form/resetForm');
  },
  data() {
    return {
      error: {}
    };
  },
  computed: {
    post: {
      get() {
        return this.$store.state.form.fields.post;
      },
      set(value) {
        const allowableCharacters = ['c', 'o', 'C', 'O', ' ', '!', '?', '.'];
        let post = value;

        // go through the post and make sure only the allowable characters are in the string
        post = Array.prototype.map.call(post, (char) => {
          let randomCharacter;
          let result;

          // automatically replace any offending characters with either a 'c' or 'o'
          // (or 'C'/'O' if the letter is capitalized)
          if (char === char.toLowerCase()) {
            randomCharacter = getRandomInt(0, 1);
          } else {
            randomCharacter = getRandomInt(2, 3);
          }

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
      e.preventDefault();

      this.$http.post('/post', {
        content: this.post,
        emotion: this.$store.state.form.fields.emotion
      }).then((response) => {
        if (response.body.error) {
          // form is invalid, show errors
          this.error = response.body.error;
        } else {
          // success
          this.$router.push('/dashboard');
        }
      }, (response) => {
        // error
        this.error = {
          message: generalError
        };
        console.error(response);
      });
    }
  },
  props: {
    username: {
      Type: String,
      required: true
    }
  },
  components: {
    SubmitButton,
    Username,
    EmotionSelect
  }
};
</script>

<style>
  .pg-np-username {
    padding: 1rem;
  }

  .pg-post-field {
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

  .pg-chars {
    padding-left: 0.25rem;
  }

  /* desktop */
  @media all and (min-width: 501px) {
    .pg-new-post-form {
      padding: 2rem;
    }

    .pg-emotion-selector {
      margin-bottom: 1rem;
    }

    .pg-post-field {
      border: 0.1rem solid var(--med-color);
    }
  }
</style>

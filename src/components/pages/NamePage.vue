<template>
  <article>
    <img src="/static/img/pigeon-select.png" />
    <span id="name-prompt" class="pg-dark-text-shadow">Your name is</span>
    <span id="username">{{ username }}</span>
    <button type="button" @click="reroll" class="pg-button">No, it's...</button>
    <router-link to="/register" class="pg-dark-text-shadow">Yeah, that's it.</router-link>
  </article>
</template>

<script>
import Utilities from '../../utilities';

export default {
  name: 'name-page',
  created() {
    this.$store.dispatch('form/resetForm');
    this.reroll();
  },
  computed: {
    username: {
      get() {
        return this.$store.state.form.fields.username;
      },
      set(value) {
        this.$store.dispatch('form/updateField', {
          name: 'username',
          value
        });
      }
    }
  },
  methods: {
    reroll() {
      this.$http.get('/new-username').then((response) => {
        console.log(response.body);
      }, (response) => {
        this.error = Utilities.generalError;
        console.error(response);
      });
      this.username = 'doof badonk';
    }
  }
};
</script>

<style scoped>
  article {
    font-size: 1.25rem;
  }

  img {
    display: block;
    height: 50vh;
    margin: 0 auto;
    padding-top: 1rem;
  }

  #name-prompt {
    display: block;
    text-align: center;
    padding: 0.5rem 1rem;
  }

  #username {
    display: block;
    text-align: center;
    color: var(--dark-color);
    font-weight: bold;
    padding-bottom: 1rem;
  }

  button {
    display: block;
    margin: 0 auto;
  }

  a {
    display: block;
    text-align: center;
    padding-top: 1rem;
    color: var(--white-color);
  }
</style>

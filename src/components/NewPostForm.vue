<template>
  <form v-on:submit="post" name="post" method="post" action="/post">
    <div>
      <img src="/static/img/profile.png" alt="An image of a pigeon" class="pg-np-pigeon" />
      <span class="pg-np-username">{{ username }}</span>
    </div>
    <textarea rows="10" cols="50"></textarea>
    <submit-button text="Post"></submit-button>
    <span>{{ charactersRemaining }}</span>
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

  },
  methods: {
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
</style>

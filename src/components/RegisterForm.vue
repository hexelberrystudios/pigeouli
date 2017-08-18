<template>
  <form v-on:submit="register" name="register" method="post" action="/register">
    <text-field id="username"
                label="username"
                type="text"
                placeholder="username"></text-field>
    <text-field id="passphrase"
                label="passphrase"
                type="password"
                placeholder="passphrase"></text-field>
    <p class="pg-dark-text-shadow">(The passphrase is ideally a few random words, but can be anything as long as it's at least three characters.)</p>
    <submit-button text="I'm in"></submit-button>
  </form>
</template>

<script>
  import TextField from './TextField';
  import SubmitButton from './SubmitButton';
  
  export default {
    name: 'register-form',
    created() {
      this.$store.dispatch('form/resetForm');
    },
    methods: {
      register: function register(e) {
        const self = this;
        // let username = self.$store.state.form.fields.username;
        e.preventDefault();

        // @TODO: ajax call to register, where CouchDB url will be created,
        // and the url to sync with will be returned.
        // Prerequisite: Authorization token for signing up for premium.
        self.$router.push('/dashboard');
      }
    },
    components: {
      TextField,
      SubmitButton
    }
  };
</script>

<style scoped>
  form {
    display: grid;
  }

  form > * {
    justify-self: center;
  }
</style>

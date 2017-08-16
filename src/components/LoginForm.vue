<template>
  <form v-on:submit="login" name="login" method="post" action="/app/login" class="hxb-form">
    <text-field id="username"
                label="username"
                type="text"
                placeholder="username"></text-field>
    <text-field id="passphrase"
                label="passphrase"
                type="passphrase"
                placeholder="passphrase"></text-field>
    <submit-button text="Login"></submit-button>
  </form>
</template>

<script>
  import TextField from './TextField';
  import SubmitButton from './SubmitButton';
  
  export default {
    name: 'login-form',
    created() {
      this.$store.dispatch('form/resetForm');
    },
    methods: {
      login: function login(e) {
        const self = this;
        e.preventDefault();

        // @TODO: ajax call to login, where the server will return the user's db url
        // for us to sync with
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

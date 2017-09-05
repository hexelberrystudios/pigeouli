<template>
  <form v-on:submit="login" name="login" method="post" action="/login">
    <text-field id="username" label="username" type="text" placeholder="username"></text-field>
    <text-field id="passphrase" label="passphrase" type="passphrase" placeholder="passphrase"></text-field>
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
    login(e) {
      const fields = this.$store.state.form.fields;
      e.preventDefault();

      this.$http.post('/login', {
        email: fields.email,
        passphrase: fields.passphrase
      }).then((response) => {
        // success
        console.log(response);
        self.$router.push('/dashboard');
      }, (response) => {
        // error
        console.error(response);
      });
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

form>* {
  justify-self: center;
}
</style>

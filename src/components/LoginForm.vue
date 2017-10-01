<template>
  <form v-on:submit="login"
        name="login" 
        method="post"
        action="/login"
        aria-describedby="form-error">
    <text-field id="email"
                label="email"
                type="email"
                placeholder="email"
                :error="error.email"></text-field>
    <text-field id="passphrase"
                label="passphrase"
                type="password"
                placeholder="passphrase"
                :error="error.passphrase"></text-field>
    <p id="form-error"
       v-if="error.message"
       v-html="error.message"
       class="pg-input-error pg-white-text-shadow"
       role="alert"></p>
    <submit-button text="Login"></submit-button>
  </form>
</template>

<script>
import TextField from './TextField';
import SubmitButton from './SubmitButton';
import Utilities from '../utilities';

export default {
  name: 'login-form',
  created() {
    this.$store.dispatch('form/resetForm');
  },
  data() {
    return {
      error: {}
    };
  },
  methods: {
    login(e) {
      let user;
      const fields = this.$store.state.form.fields;
      const self = this;
      e.preventDefault();

      this.$http.post('/login', {
        email: fields.email,
        passphrase: fields.passphrase
      }).then((response) => {
        if (response.body.error) {
          // form is invalid, show errors
          this.error = response.body.error;
        } else {
          // success
          console.log(response);
          user = response.data.user;

          if (user) {
            self.$router.push('/dashboard');
          }
        }
      }, (response) => {
        // error
        this.error = {
          message: Utilities.generalError
        };
        console.error(response);
        window.scrollTo(0, 0);
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

form > * {
  justify-self: center;
}
</style>

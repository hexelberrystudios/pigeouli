<template>
  <form v-on:submit="login"
        name="login"
        class="pg-form"
        method="post"
        action="/login"
        aria-describedby="form-error">
    <text-field id="email"
                label="email"
                type="email"
                :error="error.email"></text-field>
    <text-field id="passphrase"
                label="passphrase"
                type="password"
                :error="error.passphrase"></text-field>
    <p id="form-error"
       v-if="error.message"
       v-html="error.message"
       class="pg-input-error pg-white-text-shadow"
       role="alert"></p>
    <submit-button text="Login"></submit-button>
    <div class="pg-mt-1">
      <router-link to="/forgot" class="pg-dark-text-shadow">Forgot your password?</router-link>
    </div>
  </form>
</template>

<script>
import TextField from './TextField';
import SubmitButton from './SubmitButton';
import { generalError, clearLoginInfo } from '../utilities';

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
            clearLoginInfo();
            this.$router.push('/dashboard');
          }
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
  components: {
    TextField,
    SubmitButton
  }
};
</script>

<style scoped>
  .pg-mt-1 {
    margin-top: 1rem;
  }
</style>

<template>
  <form v-on:submit="register"
        name="register" 
        method="post" 
        action="/register" 
        aria-describedby="form-error">
    <div id="username-container" class="pg-form-field">
      <label id="username-label" class="pg-dark-text-shadow">username</label>
      <span id="username" class="pg-dark-text-shadow">{{ username }}</span>
    </div>
    <text-field id="email" 
                label="email" 
                type="email" 
                :error="error.email"></text-field>
    <text-field id="passphrase"
                label="passphrase" 
                type="password" 
                :error="error.passphrase"></text-field>
    <p class="pg-dark-text-shadow">(The passphrase is ideally a few random words, but can be anything as long as it's at least three characters.)</p>
    <p id="form-error"
       v-if="error.message"
       v-html="error.message"
       class="pg-input-error pg-white-text-shadow"
       role="alert"></p>
    <submit-button text="I'm in"></submit-button>
  </form>
</template>

<script>
import TextField from './TextField';
import SubmitButton from './SubmitButton';
import Utilities from '../utilities';

export default {
  name: 'register-form',
  data() {
    return {
      error: {}
    };
  },
  computed: {
    username: {
      get() {
        let result = '';

        if (this.$store.state.form.fields && this.$store.state.form.fields.username) {
          result = this.$store.state.form.fields.username;
        } else {
          this.$router.push('/name');
        }

        return result;
      }
    }
  },
  methods: {
    register(e) {
      const fields = this.$store.state.form.fields;
      const self = this;
      // let username = self.$store.state.form.fields.username;
      e.preventDefault();

      this.$http.post('/register', {
        username: fields.username,
        email: fields.email,
        passphrase: fields.passphrase
      }).then((response) => {
        console.log(response.body);
        console.log(response.body.error);
        if (response.body.error) {
          // form is invalid, show errors
          this.error = response.body.error;
          window.scrollTo(0, 0);
        } else {
          // success
          console.log(response.body);
          self.$router.push('/dashboard');
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

#username-container {
  text-align: center;
}

#username-label {
  display: block;
  font-size: 1.25em;
}

#username {
  display: block;
  font-size: 1.25em;
  margin: 0.5em 0;
}
</style>

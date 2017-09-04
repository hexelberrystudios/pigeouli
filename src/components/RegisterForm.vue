<template>
  <form v-on:submit="register" name="register" method="post" action="/register">
    <div id="username-container" class="pg-form-field">
      <label id="username-label" class="pg-dark-text-shadow">username</label>
      <span id="username" class="pg-dark-text-shadow">{{ username }}</span>
    </div>
    <text-field id="email" label="email" type="email"></text-field>
    <text-field id="passphrase" label="passphrase" type="password"></text-field>
    <p class="pg-dark-text-shadow">(The passphrase is ideally a few random words, but can be anything as long as it's at least three characters.)</p>
    <submit-button text="I'm in"></submit-button>
  </form>
</template>

<script>
import TextField from './TextField';
import SubmitButton from './SubmitButton';

export default {
  name: 'register-form',
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
      // let username = self.$store.state.form.fields.username;
      e.preventDefault();

      this.$http.post('/register', {
        username: fields.username,
        email: fields.email,
        passphrase: fields.passphrase
      }).then(response => {
        // success
        console.log(response);
        self.$router.push('/dashboard');
      }, response => {
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

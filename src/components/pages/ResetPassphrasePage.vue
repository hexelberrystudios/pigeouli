<template>
  <article>
    <header>
      <h1 class="pg-dark-text-shadow pg-txt-center">Pigeouli</h1>
    </header>
    <form v-on:submit="reset"
        name="reset" 
        class="pg-form"
        method="post"
        action="/reset"
        aria-describedby="form-error">
      <p class="pg-dark-text-shadow">Fill out this form to complete a password reset.</p>
      <text-field id="passphrase"
                  label="new passphrase"
                  type="password"
                  placeholder="new passphrase"
                  :error="error.passphrase"></text-field>
      <p class="pg-dark-text-shadow">(The passphrase is ideally a few random words, but can be anything as long as it's at least three characters.)</p>
      <p id="form-error"
        v-if="error.message"
        v-html="error.message"
        class="pg-input-error pg-white-text-shadow"
        role="alert"></p>
      <p v-if="formSubmitted && !error.message" class="pg-txt-center pg-dark-text-shadow">Your passphrase has been reset! You may <router-link to="/login">login</router-link> now.</p>
      <submit-button text="Reset"></submit-button>
    </form>
  </article>
</template>

<script>
  import TextField from '../TextField';
  import SubmitButton from '../SubmitButton';
  import { generalError } from '../../utilities';

  export default {
    name: 'reset-passphrase-page',
    created() {
      this.$store.dispatch('form/resetForm');
    },
    data() {
      return {
        error: {},
        formSubmitted: false
      };
    },
    methods: {
      reset(e) {
        const fields = this.$store.state.form.fields;
        e.preventDefault();

        this.$http.post('/reset', {
          passphrase: fields.passphrase,
          token: decodeURIComponent(this.$route.params.token)
        }).then((response) => {
          if (response.body.error) {
            // form is invalid, show errors
            this.error = response.body.error;
          } else {
            // success
            console.log(response);
            this.formSubmitted = true;
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

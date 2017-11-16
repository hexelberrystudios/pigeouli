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
      <text-field id="email"
                  label="email"
                  type="email"
                  placeholder="email"
                  :error="error.email"></text-field>
      <submit-button text="Reset"></submit-button>
    </form>
  </article>
</template>

<script>
  import TextField from '../TextField';
  import SubmitButton from '../SubmitButton';
  import Utilities from '../../utilities';

  export default {
    name: 'reset-passphrase-page',
    created() {
      this.$store.dispatch('form/resetForm');
    },
    data() {
      return {
        error: {}
      };
    },
    methods: {
      reset(e) {
        const fields = this.$store.state.form.fields;
        const self = this;
        e.preventDefault();

        this.$http.post('/reset', {
          email: fields.email,
          token: Utilities.getQueryParam('token')
        }).then((response) => {
          if (response.body.error) {
            // form is invalid, show errors
            self.error = response.body.error;
          } else {
            // success
            console.log(response);
            self.formSubmitted = true;
          }
        }, (response) => {
          // error
          self.error = {
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

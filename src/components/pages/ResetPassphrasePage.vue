<template>
  <article>
    <header>
      <h1 class="pg-dark-text-shadow pg-txt-center">Pigeouli</h1>
    </header>
    <form v-on:submit="reset"
        name="reset" 
        method="post"
        action="/reset"
        aria-describedby="form-error">
      <p>Fill out this form to complete a password reset.</p>
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
  import TextField from './TextField';
  import SubmitButton from './SubmitButton';
  import Utilities from '../../utilities';

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
    computed: {
      mailtoInfo() {
        return 'mailto:support@pigeouli.com?Subject=Reset%20Password%20Request%20for%20' + encodeURIComponent(this.$store.state.form.fields.email);
      }
    },
    methods: {
      forget(e) {
        const fields = this.$store.state.form.fields;
        const self = this;
        e.preventDefault();

        this.$http.post('/reset', {
          email: fields.email,
          token: Utilities.getQueryParam('token')
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

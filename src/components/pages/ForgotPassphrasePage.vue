<template>
  <article>
    <header>
      <h1 class="pg-dark-text-shadow pg-txt-center">Pigeouli</h1>
    </header>
    <form v-on:submit="forget"
        name="forgot"
        class="pg-form"
        method="post"
        action="/forgot"
        aria-describedby="form-error">
      <p class="pg-dark-text-shadow">Fill out this form to begin a password reset.</p>
      <text-field id="email"
                  label="email"
                  type="email"
                  placeholder="email"
                  :error="error.email"></text-field>
      <p id="form-error"
        v-if="error.message"
        v-html="error.message"
        class="pg-input-error pg-white-text-shadow"
        role="alert"></p>
      <submit-button text="Reset"></submit-button>
    </form>
    <p v-if="formSubmitted" class="pg-txt-center pg-dark-text-shadow">Please contact <a :href="mailtoInfo" class="pg-dark-text-shadow">support@pigeouli.com</a> to request a link for setting your new password. Please make sure to include your email in the request.</p>
  </article>
</template>

<script>
  import TextField from '../TextField';
  import SubmitButton from '../SubmitButton';
  import { generalError } from '../../utilities';

  export default {
    name: 'forgot-passphrase-page',
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
        return `mailto:support@pigeouli.com?Subject=Reset%20Password%20Request%20for%20${encodeURIComponent(this.$store.state.form.fields.email)}`;
      }
    },
    methods: {
      forget(e) {
        const fields = this.$store.state.form.fields;
        e.preventDefault();

        this.$http.post('/forgot', {
          email: fields.email
        }).then((response) => {
          if (response.body.error) {
            // form is invalid, show errors
            this.error = response.body.error;
          } else {
            // success
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

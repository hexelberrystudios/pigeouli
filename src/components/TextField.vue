<template>
  <div class="pg-form-field">
    <label :for="id" class="pg-dark-text-shadow">{{ label }}</label>
    <input :id="id"
           :type="type"
           :name="id"
           class="pg-input-field"
           :placeholder="placeholder"
           :value="value"
           @input="update" />
  </div>
</template>

<script>
  /*
   * This is a text field. It can be of type text, email, password, etc.
   *
   * @param {STRING} {REQUIRED} id          The id and name of this text field.
   * @param {STRING} {REQUIRED} label       The label for this text field.
   * @param {STRING} {OPTIONAL} type        The type of input field this will be.
   *                                        (text, password, email, etc.)
   * @param {STRING} {OPTIONAL} placeholder The placeholder attribute for this text field.
   */

  export default {
    name: 'text-field',
    methods: {
      update(e) {
        // tell action in form vuex module to update its form field with the following key/value pair
        this.$store.dispatch('form/updateField', {
          name: this.id,
          value: e.target.value
        });
      }
    },
    // define the props that can be passed in, to differentiate local variables
    // versus arguments I guess
    props: {
      id: {
        type: String,
        required: true
      },
      label: {
        type: String,
        required: true
      },
      type: {
        type: String,
        default: 'text',
        required: false
      },
      placeholder: {
        type: String,
        required: false
      },
      value: {
        type: String,
        required: false
      }
    }
  };
</script>

<style scoped>
  label {
    display: block;
    font-size: 1.25em;
  }

  input {
    font-size: 1.25em;
    margin: 0.5em 0;
  }
</style>

<template>
  <div class="hxb-form-field">
    <label :for="id"
           class="hxb-u-display-block">{{ label }}</label>
    <textarea :id="id"
              :name="id"
              class="hxb-input-field"
              :placeholder="placeholder"
              @input="update"
              rows="10"
              cols="50">{{ value }}</textarea>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  
  export default {
    name: 'textarea-field',
    methods: {
      update (e) {
        // tell action in form vuex module to update its form field with the following key/value pair
        this.$store.dispatch('form/updateField', {
          name: this.id,
          value: e.target.value
        })
      }
    },
    computed: {
      // get the latest value of this form field from the vuex store
      ...mapState({
        value: function (state) {
          return state.form.fields[this.id];
        }
      })
    },
    props: {
      id: {
        type: String,
        required: true
      },
      label: {
        type: String,
        required: true
      },
      placeholder: {
        type: String,
        required: false
      }
    }
  }
</script>
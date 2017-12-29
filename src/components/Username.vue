<template>
  <span :class="classNames">{{ username }}</span>
</template>

<script>
import { mapState } from 'vuex';

const fetchInitialData = store => store.dispatch('user/getUser');

export default {
  name: 'username',
  prefetch: fetchInitialData,
  computed: {
    // get the latest value of this form field from the vuex store
    ...mapState({
      username: (state) => {
        if (state.user && state.user.user) {
          return state.user.user.username;
        } else {
          return '';
        }
      }
    })
  },
  mounted() {
    fetchInitialData(this.$store);
  },
  props: {
    classNames: {
      type: String,
      required: false
    }
  }
};
</script>

<style>

</style>

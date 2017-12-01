<template>
  <span v-class="classNames" v-if="user">{{ user.username }}</span>
</template>

<script>
import { mapGetters } from 'vuex';

const fetchInitialData = store => store.dispatch('user/getUser');

export default {
  name: 'username',
  prefetch: fetchInitialData,
  computed: {
    ...mapGetters({
      user: 'user/get'
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

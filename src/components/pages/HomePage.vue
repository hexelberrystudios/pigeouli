<template>
  <article>
    <header>
      <h1 class="pg-dark-text-shadow">Pigeouli</h1>
      <h2 class="pg-dark-text-shadow">The secret network for pigeons</h2>
    </header>
    <section>
      <link-button href="/login" text="Login"></link-button>
      <link-button href="/knock" text="Register"></link-button>
      <img src="static/img/pigeon_home.png" alt="A pigeon looking at you suspiciously" />
    </section>
  </article>
</template>

<script>
import LinkButton from '../LinkButton';

export default {
  name: 'home-page',
  components: {
    LinkButton
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  a:first-child {
    margin-right: 0.5em;
  }

  img {
    position: absolute;
    bottom: 0;
    right: 0;
    height: 50vh;
  }
</style>

<template>
  <article class="pg-home-page">
    <header>
      <h1 class="pg-dark-text-shadow">Pigeouli</h1>
      <h2 class="pg-dark-text-shadow">The secret network for pigeons</h2>
    </header>
    <section>
      <img src="static/img/pigeon_home.png" alt="A pigeon looking at you suspiciously" class="pg-home-img" />
      <link-button id="login-btn" href="/login" text="Login"></link-button>
      <link-button href="/knock" text="Register"></link-button>
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
<style>
  .pg-home-page {
    padding-left: 1rem;
  }

  #login-btn {
    margin-right: 0.5em;
  }

  /* make sure the image does not overlap the buttons */
  .pg-home-page .pg-button {
    z-index: 10;
  }

  .pg-home-img {
    position: absolute;
    bottom: 0;
    right: 0;
    height: 35vh;
  }
</style>

<template>
  <article>
    <header>
      <h1 class="pg-dark-text-shadow">Are you really a <em>pigeon?</em></h1>
      <h2 class="pg-white-text-shadow">Uh...yeah...I mean...</h2>
    </header>
    <section>
      <link-button href="/register" text="&quot;Coo&quot;"></link-button>
      <img src="static/img/pigeon_home.png" alt="A pigeon looking at you skeptically" />
    </section>
  </article>
</template>

<script>
  import LinkButton from '../LinkButton';

  export default {
    name: 'knock-page',
    components: {
      LinkButton
    }
  };
</script>

<style scoped>
  article {
    padding-left: 1rem;
  }

  h2 {
    color: var(--dark-color);
  }

  img {
    position: absolute;
    bottom: 0;
    right: 0;
    height: 50vh;
  }
</style>

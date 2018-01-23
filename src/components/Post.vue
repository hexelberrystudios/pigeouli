<template>
  <article class="pg-post">
    <!-- @TODO: use aria-label for the displayed emotion -->
    <aside class="pg-profile-pic">
      <img :src="emotionUrl" alt="An image of a pigeon" class="pg-np-pigeon" />
    </aside>
    <section class="pg-post__container">
      <header class="pg-post__username pg-white-text-shadow">{{ username }}:</header>
      <p class="pg-post__content pg-dark-text-shadow">{{ content }}</p>
    </section>
  </article>
</template>

<script>
export default {
  name: 'post',
  data() {
    return {
      emotionUrl: `/static/img/pigeon_profile_${this.emotion}.svg`
    };
  },
  props: {
    username: {
      Type: String,
      required: true
    },
    content: {
      Type: String,
      required: true
    },
    emotion: {
      Type: String,
      required: true
    }
  }
};
</script>

<style>
  /* desktop */
  @media all and (min-width: 501px) {
    .pg-post {
      display: grid;
      grid-template-columns: 1fr 9fr;
    }
  }
  /* mobile */
  @media all and (max-width: 500px) {
    .pg-post {
      display: grid;
      grid-template-columns: 2fr 8fr;
    }
  }

  .pg-profile-pic {
    display: flex;
    position: relative;
    width: 100%;
    background-color: var(--dark-color);
    border: dashed rgba( 0,0,0,0.2);
    border-width: 0.1rem;
    overflow: hidden;
    z-index: 999;
  }

  .pg-post__container {
    display: inline-block;
    background-color: var(--light-color);
    padding-left: 0.5rem;
    border: dashed rgba( 0,0,0,0.2);
    border-width: 0.1rem;
  }

  .pg-post__username {
    color: var(--dark-color);
    font-weight: bold;
    padding-top: 0.5rem;
  }

  .pg-np-pigeon {
    width: 100%;
    align-self: flex-end;
    padding-top: 0.5rem;
  }
</style>

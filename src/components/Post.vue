<template>
  <article>
    <aside>
      <img src="/static/img/profile.png" class="pg-post__profile__pic" alt="An image of a pigeon" />
    </aside>
    <section class="pg-post__container">
      <header class="pg-post__username pg-dark-text-shadow">{{ username }}</header>
      <p class="pg-post__content pg-dark-text-shadow">{{ content }}</p>
    </section>
  </article>
</template>

<script>
export default {
  name: 'post',
  props: {
    username: {
      Type: String,
      required: true
    },
    content: {
      Type: String,
      required: true
    }
  }
};
</script>

<style scoped>
  article {
    display: grid;
    grid-template-columns: 1fr 9fr;
  }

  aside {
    position: relative;
    background-color: var(--dark-color);
    border: dashed rgba( 0,0,0,0.2);
    border-width: 0.1rem;
    overflow: hidden;
  }

  .pg-post__profile__pic {
    width: 100%;
    background-color: #f6f4f5;
    border-radius: 0.25rem;
  }

  .pg-post__container {
    display: inline-block;
    background-color: #ff9a9e;
    padding-left: 0.5rem;
    border: dashed rgba( 0,0,0,0.2);
    border-width: 0.1rem;
  }

  .pg-post__username {
    padding-top: 1rem;
  }
</style>

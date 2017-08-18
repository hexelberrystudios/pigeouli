<template>
  <article>
    <aside>
      <img src="/static/img/profile.png" class="post__profile__pic" alt="" />
    </aside>
    <section class="post__container">
      <header class="post__username">{{ username }}</header>
      <p class="post__content">{{ content }}</p>
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

  .post__profile__pic {
    width: 100%;
    background-color: #f6f4f5;
    border-radius: 0.25rem;
  }

  .post__container {
    display: inline-block;
    background-color: #ff9a9e;
    padding-left: 0.5rem;
    border: dashed rgba( 0,0,0,0.2);
    border-width: 0.1rem;
  }

  .post__username {
    padding-top: 1rem;
  }
</style>

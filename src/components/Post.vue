<template>
  <article>
    <img src="/static/img/profile.png" class="post__profile__pic" alt="" />
    <section class="post__container">
      <header class="post__username">Jumbalayah</header>
      <p class="post__content">Coo coo!!!! Cooo coooccoocoocoo cooo cooco! Coo coo!!!! Cooo coooccoocoocoo cooo cooco! Coo coo!!!! Cooo coooccoocoocoo cooo cooco! Coo coo!!!! Cooo coooccoocoocoo cooo cooco!</p>
    </section>
  </article>
</template>

<script>
export default {
  name: 'post'
};
</script>

<style>
  article {
    background-color: #f6f4f5;
  }

  .post__profile__pic {
    display: inline-block;
    width: 4rem;
    vertical-align: bottom;
    padding: 0 0.25rem 0 1rem;
  }

  .post__container {
    display: inline-block;
    width: 80%;
    background-color: #ff9a9e;
    padding-left: 0.5rem;
  }

  .post__username {
    padding-top: 1rem;
  }
</style>

<template>
  <article>
    <!-- @TODO: use aria-label for the displayed emotion -->
    <aside class="pg-profile-pic">
      <div class="pg-pigeon--neutral">
        <div class="pg-pigeon__body">
          <div class="pg-pigeon__body-copy"></div>
          <div class="pg-pigeon__eye">
            <div class="pg-pigeon__pupil"></div>
          </div>
          <div class="pg-pigeon__beak"></div>
          <div class="pg-pigeon__wing"></div>
        </div>
      </div>
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

<style>
  /* desktop */
  @media all and (min-width: 501px) {
    article {
      display: grid;
      grid-template-columns: 1fr 9fr;
    }

    .pg-pigeon--neutral {
      width: 6rem;
      height: 5rem;
    }
  }
  /* mobile */
  @media all and (max-width: 500px) {
    article {
      display: grid;
      grid-template-columns: 2fr 8fr;
    }

    .pg-pigeon--neutral {
      width: 4rem;
      height: 3.5rem;
    }
  }

  .pg-profile-pic {
    position: relative;
    width: 100%;
    background-color: var(--dark-color);
    border: dashed rgba( 0,0,0,0.2);
    border-width: 0.1rem;
    overflow: hidden;
    z-index: 999;
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

  .pg-pigeon--neutral {
    position: absolute;
    bottom: -9%;
  }

  .pg-pigeon--neutral .pg-pigeon__body {
    display: block;
    position: absolute;
    width: 40%;
    height: 100%;
    left: 20%;
    background-color: #000;
    border-radius: 3rem;
    z-index: 1;
  }

  .pg-pigeon--neutral .pg-pigeon__body-copy {
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #000;
    border-radius: 3rem;
    z-index: 2;
  }

  .pg-pigeon--neutral .pg-pigeon__eye {
    display: block;
    position: absolute;
    width: 45%;
    height: 20%;
    top: 12%;    
    left: 20%;
    background-color: #fff;
    border-radius: 100%;
    z-index: 3;
  }

  .pg-pigeon--neutral .pg-pigeon__pupil {
    display: block;
    position: absolute;
    width: 20%;
    height: 25%;
    top: 35%;
    left: 25%;
    background-color: #000;
    border-radius: 100%;
    z-index: 4;
  }

  .pg-pigeon--neutral .pg-pigeon__wing {
    display: block;
    position: absolute;
    width: 100%;
    height: 65%;
    bottom: -18%;
    right: -60%;
    border-top-left-radius: 100%;
    background-color: #ff0000;
    transform: rotate(-45deg);
    z-index: 5;
  }

  .pg-pigeon--neutral .pg-pigeon__beak {
    display: block;
    position: absolute;
    width: 10%;
    height: 10%;
    top: 22%;
    left: -10%;
    border-radius: 100%;
    background-color: #ff0000;
    transform: rotate(90deg);
    z-index: 1;
  }
</style>

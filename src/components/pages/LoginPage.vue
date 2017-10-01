<template>
  <article>
    <header>
      <h1 class="pg-dark-text-shadow pg-txt-center">Pigeouli</h1>
    </header>
    <login-form></login-form>
  </article>
</template>

<script>
  import LoginForm from '../LoginForm';
  
  export default {
    name: 'login-page',
    // List the components used on this page. This is using ES2015 syntax,
    // where PrimaryButton is the same as 'PrimaryButton': PrimaryButton
    components: {
      LoginForm
    }
  };
</script>

<template>
  <div>
    <header>
      <h1 class="pg-dark-text-shadow pg-txt-center">Pigeouli</h1>
    </header>
    <register-form></register-form>
    <marketing-footer :is-fixed="true"></marketing-footer>
  </div>
</template>

<script>
  import RegisterForm from '../RegisterForm';
  import MarketingFooter from '../MarketingFooter';
  
  export default {
    name: 'register-page',
    // List the components used on this page. This is using ES2015 syntax,
    // where PrimaryButton is the same as 'PrimaryButton': PrimaryButton
    components: {
      RegisterForm,
      MarketingFooter
    }
  };
</script>


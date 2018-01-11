<template>
  <article>
    <header>
      <h1>Terms of service</h1>
    </header>
    <p>By using the service provided by <strong>Pigeouli</strong> ("Service"), all services of Hexelberry Studios, you are agreeing to be bound by the following terms and conditions ("Terms of Service"). ProFinda reserves the right to update and change the Terms of Service from time to time without notice. Any new features that augment or enhance the current Service, including the release of new tools and resources, shall be subject to the Terms of Service. Continued use of the Service after any such changes shall constitute your consent to such changes. You can review the most current version of the Terms of Service here at any time. You understand and agree that ProFinda cannot be responsible for the Content posted on the Service and you nonetheless may be exposed to such materials. You agree to use the Service at your own risk.</p>
    <h2>Account Terms</h2>
    <ol>
      <li>
        You must be 13 years or older to use this Service.
      </li>
      <li>
        You must be a human. Accounts registered by “bots” or other automated methods are not permitted.
      </li>
      <li>
        You are responsible for maintaining the security of your account and password. Hexelberry Studios cannot and will not be liable for any loss or damage from your failure to comply with this security obligation.
      </li>
      <li>
        You are responsible for all Content posted and activity that occurs under your account.
      </li>
      <li>
        You may not use the Service for any illegal or unauthorized purpose. You must not, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright laws).
      </li>
    </ol>
    <h2>Termination</h2>
    <ol>
      <li>
        Hexelberry Studios, in its sole discretion, has the right to suspend or terminate your account and refuse any and all current or future use of the Service, or any other Hexelberry Studios service, for any reason at any time.
      </li>
      <li>
        Such termination of the Service will result in the deactivation or deletion of your Account or your access to your Account, and the forfeiture and relinquishment of all Content in your Account.
      </li>
      <li>
        Hexelberry Studios reserves the right to refuse service to anyone for any reason at any time.
      </li>
    </ol>
    <h2>Copyright and Content Ownership</h2>
    <ol>
      <li>
        The Service operates compliant to International Safe Harbouring laws. We claim no intellectual property rights over the material you provide to the Service. Your profile and materials uploaded remain yours.
      </li>
      <li>
        Pigeouli does not pre-screen Content, but Pigeouli and its designee have the right (but not the obligation) in their sole discretion to refuse or remove any Content that is available via the Service.
      </li>
    </ol>
    <h2>General Conditions</h2>
    <ol>
      <li>
        Your use of the Service is at your sole risk. The service is provided on an “as is” and “as available” basis.
      </li>
      <li>
        You understand that Pigeouli uses third party vendors and hosting partners to provide the necessary hardware, software, networking, storage, and related technology required to run the Service.
      </li>
      <li>
        You must not modify, adapt or hack the Service or modify another website so as to falsely imply that it is associated with the Service.
      </li>
      <li>
        We may, but have no obligation to, remove Content and Accounts containing Content that we determine in our sole discretion are unlawful, offensive, threatening, libelous, defamatory, pornographic, obscene or otherwise objectionable or violates any party’s intellectual property or these Terms of Service.
      </li>
      <li>
        Verbal, physical, written or other abuse (including threats of abuse or retribution) of any Hexelberry Studios customer, employee, member, or officer will result in immediate account termination.
      </li>
      <li>
        You understand that the technical processing and transmission of the Service, including your Content, may be transferred unencrypted and involve (a) transmissions over various networks; and (b) changes to conform and adapt to technical requirements of connecting networks or devices.
      </li>
      <li>
        You must not transmit any worms or viruses or any code of a destructive nature.
      </li>
      <li>
        Hexelberry Studios does not warrant that the service will be uninterrupted, timely, secure, or error-free.
      </li>
      <li>
        The failure of Hexelberry Studios to exercise or enforce any right or provision of the Terms of Service shall not constitute a waiver of such right or provision. The Terms of Service constitutes the entire agreement between you and Hexelberry Studios and govern your use of the Service, superseding any prior agreements between you and Hexelberry Studios (including, but not limited to, any prior versions of the Terms of Service).
      </li>
      <li>
        Questions about the Terms of Service should be sent to the support team at:
        <a href="mailto:support@pigeouli.com?Subject=Terms%20Of%20Service%20Question" class="pg-dark-text-shadow">support@pigeouli.com</a>
      </li>
    </ol>
    <marketing-footer></marketing-footer>
  </article>
</template>

<script>
  import MarketingFooter from '../MarketingFooter';

  export default {
    name: 'terms-of-service-page',
    components: {
      MarketingFooter
    }
  };
</script>

<style scoped>
  article {
    width: 85vw;
    max-width: 60rem;
    margin: 0 auto;
    line-height: 1.42857143;
  }

  * {
    text-shadow: var(--dark-text-shadow);
  }

  /* can't apply text shadows to list-style elements, so
     we need to recreate them */
  ol {
    counter-reset: li;
    list-style: none;
  }

  li {
    position: relative;
  }

  li:before {
    content: counter(li)'.';
    counter-increment: li;
    position: absolute;
    left: -3.4%;
    text-align: right;
    width: 1.5rem;
    text-shadow: var(--dark-text-shadow);
  }
</style>

  <!-- JAVASCRIPT --> 
<script>
  import NavBar from './lib/NavBar.svelte';
  import Fundraiser from './lib/Fundraiser.svelte';
  import Footer from './lib/Footer.svelte';

  import meditoLogo from '/medito-logo.svg';
  const meditoURL = "https://www.meditofoundation.org";

</script>

  <!-- HTML -->
<main>
  <NavBar logo_src={meditoLogo} logo_url={meditoURL} />
  <Fundraiser />
  <Footer />
</main>

  <!-- CSS -->
<style>

</style>

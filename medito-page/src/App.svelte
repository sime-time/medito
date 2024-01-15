<script>
  import meditoLogo from '/medito-logo.svg';
  import NavBar from './lib/NavBar.svelte';
  import Fundraiser from './lib/Fundraiser.svelte';
  import Footer from './lib/Footer.svelte';
</script>

<main>
  <NavBar logo_src={meditoLogo} logo_url={"https://www.meditofoundation.org"} />
  <Fundraiser />
  <Footer />
</main>

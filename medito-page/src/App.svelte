<script>
  import meditoLogo from '/medito-logo.svg'
  import NavBar from './lib/NavBar.svelte';
  import Hero from './lib/Hero.svelte';
</script>

<main>
  <NavBar image_src={meditoLogo} home_url={"https://www.meditofoundation.org"} />

  <Hero />
</main>


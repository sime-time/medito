<!-- JAVASCRIPT -->
<script>
  export let logo_src;
  export let logo_url;

  const navItems = [
    {label: "Home", href: "https://www.meditofoundation.org", class: "nav-link"},
    {label: "About", href: "#description", class: "nav-link"},
    {label: "FAQ", href: "#faq", class: "nav-link"},
  ];

  let isHamburgerActive = false; 
  let isNavMenuActive = false; 

  function toggleMenu() {
    isHamburgerActive = !isHamburgerActive; 
    isNavMenuActive = !isNavMenuActive; 
  }

  function closeMenu() {
    isHamburgerActive = false; 
    isNavMenuActive = false; 
  }

</script>



<!-- HTML -->
<nav class="nav-bar">
  <!-- LOGO -->
  <div class="nav-branding">
    <a href={logo_url} class="logo-container">
      <img src={logo_src} class="logo" alt="company logo" />
    </a>
  </div>

  <!-- NAV MENU ITEMS -->
  <div class="nav-menu" class:active={isNavMenuActive}>
    {#each navItems as item} 
      <a href={item.href} class={item.class} on:click={closeMenu}>{item.label}</a>
    {/each} 
  </div>

  <!-- HAMBURGER -->
  <button class="hamburger" class:active={isHamburgerActive} on:click={toggleMenu} aria-hidden="true">
    <span class="bar"></span>
    <span class="bar"></span>
    <span class="bar"></span>
  </button>
</nav>



<!-- CSS -->
<style>
.nav-bar {
  max-width: var(--max-width);
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  padding: 1em;
}
.nav-menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
}
.nav-link {
  color: inherit;
  text-decoration: inherit;
  margin: 1em;
  padding-block: 1em;
  transition: 0.2s ease;
}
.nav-link:hover {
  color: var(--primary);
}

.nav-branding {
  display: flex;
  align-items: center;
  margin-right: auto;
}
.logo-container {
  flex-direction: flex-start;
}
.logo {
  height: 6em;
}

.hamburger {
  display: none;
  cursor: pointer;
}

.bar {
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px auto;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  background: var(--foreground)
}

@media(max-width: 768px) {
  .hamburger {
    display: block;
    background: var(--background);
    border: 0px solid;
  }

  .hamburger.active .bar:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }
  .hamburger.active .bar:nth-child(2) {
    opacity: 0;
  }
  .hamburger.active .bar:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }

  .nav-menu {
    position: fixed;
    left: 100%;
    top: 8rem;
    gap: 0;
    flex-direction: column;
    background: var(--background);
    width: 100%;
    text-align: center;
    justify-content: flex-start;
    transition: 0.4s;
    height: 100vh;
    z-index: 999; /* make sure this covers over everything on screen */
  }

  .nav-item {
    margin: 16px 0;
  }

  .nav-menu.active {
    left: 0;
  }
}
</style>

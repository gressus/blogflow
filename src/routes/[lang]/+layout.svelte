<script>
  import Header from './Header.svelte';
  import Footer from './Footer.svelte';

  export let data
</script>

<div class="layout dark-theme">
  <header>
    <Header {...data}/>
  </header>

  <main>
    <slot />
  </main>

  <footer>
    <Footer />
  </footer>
</div>

<style>
  .layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh; 
  }  

</style>
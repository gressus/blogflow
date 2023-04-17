<script>
  import { onMount, onDestroy } from 'svelte';

  let theme = 'dark';

  const setTheme = (newTheme) => {
    theme = newTheme;
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  onMount(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      setTheme(theme);
    }
  });

  onDestroy(() => {
    // localStorage.removeItem('theme');
  });
</script>

<style>
  .theme-toggle {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 18px;
    color: inherit;
    padding: 0;
    margin-left: 16px;
    margin-top: 8px;
  }

  svg, g {
    fill: grey;
    stroke: grey;
  }
</style>

<button class="theme-toggle" on:click="{toggleTheme}">
  <!-- {theme === 'dark' ? '🌞' : '🌙'} -->
  <!-- {#if theme === 'light'}
    <svg height="20" width="20">
      <circle cx="10" cy="10" r="10"/>
    </svg>
  {:else}
    <svg height="20" width="20">
      <circle cx="10" cy="10" r="10"/>
    </svg> 
  {/if} -->
  <svg class="sun-and-moon" aria-hidden="true" width="24" height="24" viewBox="0 0 24 24">
    <circle class="sun" cx="12" cy="12" r="6" mask="url(#moon-mask)"/>
    <g class="sun-beams">
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </g>
  </svg>
</button>
<script>
  import { goto } from '$app/navigation';

  export let lang = 'en';

  const toggleLanguage = () => {
    const currentPath = window.location.pathname;
    if (lang == "en") {
      goto(`https://yoursite.kg${currentPath}`);
    } else if (lang == "kg") {
      goto(`https://yoursite.com${currentPath}`);
    }
  };
</script>

<style>
  .language-toggle {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 16px;
    color: inherit;
    padding: 0;
    margin-left: 16px;
    top: -5px;
    position: relative;
  }
</style>

<button class="language-toggle" on:click="{toggleLanguage}">
  {lang === 'kg' ? 'KG' : 'EN'}
</button>
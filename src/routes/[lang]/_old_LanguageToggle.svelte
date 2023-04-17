<script>
  import { onMount, onDestroy } from 'svelte';
  import { goto } from '$app/navigation';

  let language = 'en';

  const setLanguage = (newLanguage) => {
    language = newLanguage;
    localStorage.setItem('language', newLanguage);
  };

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'kg' : 'en';
    setLanguage(newLanguage);
    goto(`/${newLanguage}`);
  };

  onMount(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      setLanguage(savedLanguage);
    } else {
      setLanguage(language);
    }
  });

  onDestroy(() => {
    // localStorage.removeItem('language');
  });
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
    /* margin-top: 5px; */
    top: -5px;
    position: relative;
  }
</style>

<button class="language-toggle" on:click="{toggleLanguage}">
  {language === 'en' ? 'KG' : 'EN'}
</button>

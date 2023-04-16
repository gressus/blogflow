<script>
  import { goto } from '$app/navigation';

  export let lang = 'en';

  const toggleLanguage = () => {
    if (lang == "en") {
      goto(`https://yoursite.kg`);
    } else if (lang == "kg") {
      goto(`https://yoursite.com`);
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
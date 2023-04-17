<script>
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';

  export let lang = 'en';

  const toggleLanguage = () => {
    let currentUrl = $page.url.href;
    if (lang == "en") {
      currentUrl = currentUrl.replace('en', 'kg');    
    } else if (lang == "kg") {
      currentUrl = currentUrl.replace('kg', 'en');    
    }
    goto(currentUrl, { replaceState: true });
  };

  // function getUrl() {
  //   let currentUrl = $page.url.href;
  //   if (lang == "en") {
  //     currentUrl = currentUrl.replace('en', 'kg');    
  //   } else if (lang == "kg") {
  //     currentUrl = currentUrl.replace('kg', 'en');    
  //   }
  //   return currentUrl
  // }

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

<!-- <a class="language-toggle" href={getUrl()}>{lang === 'kg' ? 'KG' : 'EN'}</a> -->

<button class="language-toggle" on:click="{toggleLanguage}">
  {lang === 'kg' ? 'KG' : 'EN'}
</button>
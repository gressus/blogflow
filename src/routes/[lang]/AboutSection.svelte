<script>
  import { goto } from '$app/navigation';

  export let lang
  $: console.log('lang ' + JSON.stringify(lang));
  const translations = {
    en: {
      title: "Hi, I'm [Your Name]",
      description:
        'a software engineer, teacher, blogger, husband and father. This is a short introduction about me.',
      learnMore: 'Learn more',
    },
    kg: {
      title: 'Салам, менин атым [Сиздин ысымыңыз]',
      description:
        'программист, мугалим, блогер, күйөө жана ата. Бул мен жөнүндө кыскача маалымат',
      learnMore: 'Көбүрөөк билүү үчүн',
    },
  };

  $: t = translations[lang];  
</script>

<div class="about-section">
  <h1>{t.title}</h1>
  <p>{t.description}</p>
  <button class="learn-more" on:click={() => goto('/' + lang +'/about')}>{t.learnMore}</button>
</div>

<style>
  .about-section {
    padding: 1rem;
    text-align: center;
  }

  .about-section h1 {
    margin-bottom: 1rem;
  }

  .about-section p {
    font-size: 1rem;
    line-height: 1.5;
  }

  .learn-more {
    display: inline-block;
    background: #007aff;
    border: none;
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
    font-size: 1rem;
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    text-decoration: none;
    transition: background-color 0.2s;
  }

  .learn-more:hover {
    background-color: #005fbf;
  }
</style>
<script>
  import { onMount } from 'svelte';
  import LanguageToggle from './LanguageToggle.svelte';
  import ThemeToggle from './ThemeToggle.svelte';

  export let url
  export let lang

  let isSticky = false;
  let menuOpen = false;

  const toggleMenu = () => {
    menuOpen = !menuOpen;
  };

  const closeMenu = () => {
    if (menuOpen) {
      menuOpen = false;
    }
  };

  $: closeMenu(url)

  onMount(() => {
    const header = document.getElementById('header');
    const sticky = header.offsetTop;

    window.onscroll = () => {
      if (window.pageYOffset > sticky) {
        isSticky = true;
      } else {
        isSticky = false;
      }
    };
  });

  const translations = {
    en: {
      home: 'Home',
      about: 'About',
      blog: 'Blog',
      projects: 'Projects',
      contacts: 'Contacts',
      name: '[Your Name]',
    },
    kg: {
      home: 'Үй',
      about: 'Мен жөнүндө',
      blog: 'Блог',
      projects: 'Долбоорлор',
      contacts: 'Байланыш',
      name: '[Сиздин атыңыз]',
    },
  };

  $: t = translations[lang]  
</script>

<header id="header" class:sticky="{isSticky}">
  <div class="logo">
    John Doe
  </div>

  <nav class:open="{menuOpen}">
    <ul>
      <li><a href={`/${lang}/`}>{t.home}</a></li>
      <li><a href={`/${lang}/about`}>{t.about}</a></li>
      <li><a href={`/${lang}/blog`}>{t.blog}</a></li>
      <li><a href={`/${lang}/projects`}>{t.projects}</a></li>
      <li><a href={`/${lang}/contacts`}>{t.contacts}</a></li>
    </ul>
  </nav>
  <div>
    <ThemeToggle />
    <LanguageToggle {lang}/>
  </div>

  <button on:click="{toggleMenu}" class="burger-menu">
    {menuOpen ? '✖' : '☰'}
  </button>

</header>

<style>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* background-color: #1a1a1a; */
    padding: 10px 20px;
    /* font-family: 'SF Pro Text', 'Roboto', 'Helvetica', 'Arial', sans-serif; */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
  }

  .sticky {
    background-color: rgba(255, 255, 255, 0.95);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    padding-left: 20px;
    padding-right: 20px;
  }

  :global(html[data-theme='dark'] .sticky) {
    background-color: rgba(26, 26, 26, 0.95) !important;
  }  

  .logo {
    font-size: 24px;
    font-weight: 200;
    letter-spacing: -0.015em;
    color: #a4a4a4;
    letter-spacing: 3px;
  }

  .burger-menu {
    font-size: 24px;
    background: none;
    border: none;
    cursor: pointer;
    outline: none;
    z-index: 101;
    color: #1a1a1a
  }

  :global(html[data-theme='dark'] .burger-menu) {
    color: #f5f5f7 !important;
  }
  
  :global(html[data-theme='light'] .burger-menu) {
    color: #1a1a1a !important;
  }  

  nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: transform 0.3s ease;
    transform: translateY(-100%);
    z-index: 100;
  }

  :global(html[data-theme='dark'] nav) {
    background-color: #1a1a1a !important;
  }

  nav.open {
    transform: translateY(0);
  }

  nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  nav ul li {
    margin: 20px 0;
  }

  nav ul li a {
    font-size: 24px;
    font-weight: 500;
    letter-spacing: -0.012em;
    /* color: #f5f5f7; */
    text-decoration: none;
    transition: color 0.2s ease;
  }

  nav ul li a:hover {
    color: #007aff;
  }

  @media screen and (min-width: 768px) {
    .burger-menu {
      display: none;
    }

    nav {
      position: static;
      background-color: transparent;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      transform: translateY(0);
    }

    nav ul {
      display: flex;
      flex-direction: row;
    }

    nav ul li {
      margin: 0 10px;
    }

    nav ul li a {
      font-size: 16px;
    }
  }
</style>
<script>
  import AboutSection from './AboutSection.svelte';
  export let data

  const translations = {
    en: {
      popularArticles: 'Popular Articles',
      readMore: 'Read more',
    },
    kg: {
      popularArticles: 'Популярдуу макалалар',
      readMore: 'Кененирээк окуу',
    },
  };

  const t = translations[data.lang];
</script>

<AboutSection {...data}/>

<div class="container">
  <h2>{t.popularArticles}</h2>
  <section class="popular-articles">
    {#each data.posts as article}
      <div class="article-card">
        {#if article.imageUrl}
          <img src="{`posts/${article.furl}/${article.imageUrl}`}" alt="{article.title}" />
        {/if}
        <h3>{article.title}</h3>
        <p>{article.excerpt}</p>
        <a class="read-more" href={`/${article.furl}`}>{t.readMore}</a>
      </div>
    {/each}
  </section>
</div>

<style>
  h2 {
    padding-left: 1rem;    
  }

  .popular-articles {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 1rem;
    padding: 1rem;
  }

  :global(html[data-theme='dark'] .article-card) {
    border-color: #444 !important;
  }  

  .article-card {
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 1rem;
  }

  .article-card img {
    max-width: 100%;
    height: auto;
    border-radius: 4px;
  }

  .article-card h3 {
    margin: 1rem 0;
  }

  .article-card p {
    font-size: 0.9rem;
  }

  .read-more {
    display: inline-block;
    text-decoration: none;
    margin-top: 1rem;
    color: #007aff;
  }

  .container {
    margin-left: 20px;
  }
</style>
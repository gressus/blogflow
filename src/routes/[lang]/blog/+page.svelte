<script>
  import PostCard from './PostCard.svelte';

  export let data

  let selectedTag = '';

  function filterByTag(tag) {
    selectedTag = tag;
  }

  const translations = {
    en: {
      blogTitle: 'Blog',
    },
    kg: {
      blogTitle: 'Блог',
    },
  };

  $: t = translations[data.lang];  
</script>

<div class="blog-page">
  <h1>{t.blogTitle}</h1>
  <div class="tags">
    <button on:click={() => filterByTag('')} class="tag-button">All</button>
    <button on:click={() => filterByTag('ethics')} class="tag-button">Ethics</button>
    <button on:click={() => filterByTag('future')} class="tag-button">Future</button>
    <button on:click={() => filterByTag('programming')} class="tag-button">Programming</button>
    <button on:click={() => filterByTag('self impovement')} class="tag-button">Self Impovement</button>
    <button on:click={() => filterByTag('dad')} class="tag-button">Dad</button>
    <button on:click={() => filterByTag('humor')} class="tag-button">Humor</button>
  </div>
  <div class="posts">
    {#each data.posts as post (post.title)}
      {#if !selectedTag || post.tags.map(tag => tag.toLowerCase()).includes(selectedTag.toLowerCase())}
        <PostCard {...post} />
      {/if}
    {/each}
  </div>
</div>

<style>
  .blog-page {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
  }

  h1 {
    margin-bottom: 1rem;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 2rem;
  }

  .tag-button {
    background: none;
    border: 1px solid rgb(201, 201, 201);
    border-radius: 5px;
    padding: 0.5rem 1rem;
    cursor: pointer;
    outline: none;
    color: orange;
  }

  .tag-button:hover {
    background-color: #1a1a1a;
    color: #fff;
  }

  :global(html[data-theme='dark'] .tag-button) {
    border-color: #444 !important;
    color: orange;
  }

  :global(html[data-theme='dark'] .tag-button:hover) {
    background-color: #fff;
    color: #1a1a1a;
  }

  .posts {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 1rem;
  }
</style>

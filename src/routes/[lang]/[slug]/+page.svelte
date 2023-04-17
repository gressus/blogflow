<script>
  import { marked } from 'marked';
  import { error } from "@sveltejs/kit";

  export let data

  if (!data.post) {
    throw error(404, "Not found");
  }

</script>

<article>
  {#if data.post.imageUrl}
    <div class="header-image">
      <img src="{`/posts/${data.post.furl}/${data.post.imageUrl}`}" alt="{data.post.title}" loading="lazy"/>
      <div class="gradient-overlay"></div>
      <h1>{data.post.title}</h1>
    </div>
  {:else}
    <h1>{data.post.title}</h1>
  {/if}
  <p>{data.post.date}</p>  
  <div class="content">{@html marked(data.post.content || "")}</div>
</article>

<svelte:head>
  <title>{data.post.title}</title>
  <meta name="description" content="{data.post.excerpt}">
  <meta property="og:title" content="{data.post.title}">
  <meta property="og:description" content="{data.post.excerpt}">
  <meta property="og:image" content="{data.post.imageUrl}">
  <meta property="og:type" content="article">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="{data.post.title}">
  <meta name="twitter:description" content="{data.post.excerpt}">
  <meta name="twitter:image" content="{data.post.imageUrl}">
</svelte:head>

<style>
  article {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
  }

  img {
    max-width: 100%;
    object-fit: cover;
    border-radius: 4px;
  }
  
  .header-image {
    position: relative;
    width: 100%;
    height: 50vh;
    overflow: hidden;
    margin-bottom: 1rem;    
  }

  .header-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }  

  .gradient-overlay {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 50%;
    background-image: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
    border-radius: 4px;
  }

  h1 {
    margin-bottom: 1rem;
    font-size: 2rem;
  }

  .header-image h1 {
    position: absolute;
    bottom: 0;
    left: 0;
    margin: 0;
    padding: 1rem;
    color: #fff;
    font-size: 2.5rem;
    z-index: 1;
  }

  @media (max-width: 767px) {
    .header-image h1 {
      font-size: 1.8rem;
    }
  }  

  .content {
    margin-top: 3rem;
    line-height: 1.75;
  }    
</style>
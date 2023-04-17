<script>
  import VoteSection from './VoteSection.svelte';
  import { marked } from 'marked';
  import { error } from "@sveltejs/kit";

  export let data

  let post = data.post

  if (!post) {
    throw error(404, "Not found");
  }

</script>

<article>
  {#if post.imageUrl}
    <div class="header-image">
      <img src="{`posts/${post.furl}/${post.imageUrl}`}" alt="{post.title}" loading="lazy"/>
      <div class="gradient-overlay"></div>
      <h1>{post.title}</h1>
    </div>
  {:else}
    <h1>{post.title}</h1>
  {/if}
  <ul class="tags">
    {#each post.tags as tag}
      <li>#{tag}</li>
    {/each}
  </ul>    
  <p>{post.date}</p>  
  <div class="content">{@html marked(post.content || "")}</div>
  <VoteSection furl={post.furl} />  
</article>

<svelte:head>
  <title>{post.title}</title>
  <meta name="description" content="{post.excerpt}">
  <meta property="og:title" content="{post.title}">
  <meta property="og:description" content="{post.excerpt}">
  <meta property="og:image" content="{post.imageUrl}">
  <meta property="og:type" content="article">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="{post.title}">
  <meta name="twitter:description" content="{post.excerpt}">
  <meta name="twitter:image" content="{post.imageUrl}">
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

  ul.tags {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  .tags li {
    display: inline-block;
    font-size: smaller;
    font-style: italic;
    margin-right: 5px;
    color: grey;
  }      
</style>
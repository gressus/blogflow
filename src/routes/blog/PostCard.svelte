<script>
  export let title = '';
  export let date = '';
  export let excerpt = '';
  export let imageUrl = '';
  export let furl = '';
  export let starred = false;
  export let tags = [];  
</script>

<div class="post-card">
  {#if imageUrl}
    <img src="{`posts/${furl}/${imageUrl}`}" alt="{title}" width="358" height="201.38" loading="lazy"/>
  {/if}
  <div class="post-info">
    <a href="{furl}">
      <h2>{title}</h2>
      <p class="date">{date}</p>
      <p>{excerpt}</p>
      <ul class="tags">
        {#each tags as tag}
          <li>#{tag}</li>
        {/each}
      </ul>      
    </a>
  </div>
</div>

<style>
  .post-card {
    display: flex;
    flex-direction: column;
    border: 1px solid #ccc;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transition: box-shadow 0.3s ease;
  }

  :global(html[data-theme='dark'] .post-card) {
    border: 1px solid #4e4e4e !important;
  }

  .post-card:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  }

  .post-card img {
    width: 100%;
    object-fit: cover;
    border-radius: 4px;
  }

  .post-info {
    margin-top: 1rem;
  }

  .post-info h2 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  .post-info a {
    color: inherit;
    text-decoration: none;
  }

  .post-info p {
    margin: 0;
  }

  .post-info .date {
    color: grey;
  }

  ul.tags {
    list-style-type: none;
    padding: 0;
    margin: 0;
    margin-top: 10px;
  }

  .tags li {
    display: inline-block;
    font-size: smaller;
    font-style: italic;
    margin-right: 5px;
    color: grey;
  }      
</style>
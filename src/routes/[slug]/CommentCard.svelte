<script>
  export let key;
  export let name;
  export let email;
  export let text;
</script>

<div class="comment-card">
  <h3>{name}</h3>
  <p>{text}</p>
</div>

<style>
  .comment-card {
    border: 1px solid #ccc;
    padding: 1rem;
    margin-bottom: 1rem;
  }

  h3 {
    margin: 0 0 0.5rem 0;
  }

  :global(html[data-theme='dark'] .comment-card) {
    border-color: #444;
  }
</style>

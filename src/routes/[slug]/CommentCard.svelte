<script>
  export let key;
  export let name;
  export let email;
  export let text;
  export let spam;
  export let created_at;

function formatDate(timestamp) {
  const date = new Date(timestamp);

  function pad(number) {
    return number < 10 ? '0' + number : number;
  }

  const day = pad(date.getDate());
  const month = pad(date.getMonth() + 1);
  const year = date.getFullYear();
  const hours = pad(date.getHours());
  const minutes = pad(date.getMinutes());

  return `${day}-${month}-${year} ${hours}:${minutes}`;
}

</script>

<div class="comment-card" class:spam={spam}>
  <h3>{name}</h3>
  <p>{text}</p>
  {#if created_at}
    <div class="date">{formatDate(created_at)}</div>
  {/if}
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

  .comment-card.spam {
    background-color: #ff5555;
  }  

  .date {
    font-size: small;
    color: grey;
  }
</style>

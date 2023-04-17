<script>
  import { fetchJsonPOST } from "$lib/utils.js"
  import { onMount, onDestroy } from 'svelte';

  export let furl;

  let votes = undefined;

  // onMount(async () => {
  //   let url = `/api/v1/post/${furl}`
  //   try {
  //     const response = await fetch(url);

  //     if (response.ok) {
  //       let result = await response.json();
  //       votes = result?.res?.votes || 0
  //     } else {
  //       votes = 0
  //     }    
  //   } catch(e) {
  //     console.error(e)
  //   }
  // });  

  async function upvote() {
    console.log('furl ' + furl);
    votes++;
    let res = await fetchJsonPOST("/api/v1/vote", {
      key: furl,
      isUp: true
    })    
  }

  async function downvote() {
    votes--;
    let res = await fetchJsonPOST("/api/v1/vote", {
      key: furl,
      isUp: false
    })    
  }
</script>

{#if votes || votes === 0}
  <div class="vote-section">
    <button on:click={upvote}>👍</button>
    <span>{votes}</span>
    <button on:click={downvote}>👎</button>
  </div>
{/if}

<style>
  .vote-section {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  button {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
  }
</style>

<script>
  import { fetchJsonPOST } from "$lib/utils.js"
  import { onMount, onDestroy } from 'svelte';
  import localforage from "localforage";

  export let furl;

  let votes = undefined;
  let userVote = null;

  onMount(async () => {
    let url = `/api/v1/post/${furl}`
    try {
      const response = await fetch(url);

      if (response.ok) {
        let result = await response.json();
        votes = result?.res?.votes || 0
      } else {
        votes = 0
      }    
    } catch(e) {
      console.error(e)
    }    

    userVote = await localforage.getItem(furl);
  });  

  async function apiVote(furl, isUp) {
    let res = await fetchJsonPOST("/api/v1/vote", {
      key: furl,
      isUp: isUp
    })    
  }

  async function upvote() {    
    if (userVote === "up") {
    } else {
      if (userVote === "down") {
        userVote = null;
      } else {
        userVote = "up";
      }
      votes++;
      apiVote(furl, true)
    }    
    
    await localforage.setItem(furl, userVote);    
  }

  async function downvote() {
    if (userVote === "down") {
    } else {
      if (userVote === "up") {
        userVote = null;
      } else {
        userVote = "down";
      }
      votes--;
      apiVote(furl, false)
    }

    await localforage.setItem(furl, userVote);    
  }
</script>

{#if votes || votes === 0}
<div class="vote-section">
  <button on:click={upvote} class:active={userVote === "up"}>👍</button>
  <span>{votes}</span>
  <button on:click={downvote} class:active={userVote === "down"}>👎</button>
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

  .active {
    color: blue;
    background-color: blue;
  }  
</style>

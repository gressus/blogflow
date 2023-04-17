<script>
  import CommentCard from './CommentCard.svelte';
  import SendComment from './SendComment.svelte';
  import { fetchJsonPOST } from "$lib/utils.js"
  import { onMount, onDestroy } from 'svelte';  

  export let furl;

  let comments = []

  onMount(async () => {
    let url = `/api/v1/post/${furl}/comments`
    const response = await fetch(url);
    console.log('response ' + JSON.stringify(response));

    if (response.ok) {
      let result = await response.json();
      comments = result?.comments || []
    } else {
      comments = []
    }       
  });    

  function handleCommentSubmitted(event) {
    const newComment = {
      id: comments.length + 1, 
      name: event.detail.name,
      email: event.detail.email,
      text: event.detail.text,
    };
    comments = [...comments, newComment];
  }  
</script>

<div class="comment-section">
  <SendComment furl={furl} on:commentSubmitted="{handleCommentSubmitted}"/>
  <h2>Comments</h2>
  {#each comments as comment (comment.key)}
    <CommentCard {...comment} />
  {/each}
</div>

<style>
  .comment-section {
    margin-top: 2rem;
  }

  h2 {
    margin-bottom: 1rem;
  }
</style>

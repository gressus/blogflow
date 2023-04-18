<script>
  import { fetchJsonPUT } from "$lib/utils.js";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let furl;

  let name = "";
  let email = "";
  let comment = "";
  let isSubmitting = false;

  async function handleSubmit(event) {
    event.preventDefault();

    if (comment.length > 1000) {
      alert("Comment should not exceed 1000 characters.");
      return;
    }

    const formData = {
      name,
      email,
      text: comment,
      created_at: Date.now(),
    };

    dispatch("commentSubmitted", formData);

    isSubmitting = true;
    try {
      let url = `/api/v1/post/${furl}/comments`;
      let res = await fetchJsonPUT(url, formData);
    } catch (e) {
      console.log("e " + JSON.stringify(e));
    }
    isSubmitting = false;

    name = "";
    email = "";
    comment = "";
  }
</script>
<form on:submit="{handleSubmit}" class="send-comment-form">
  <input type="text" placeholder="Your name*" bind:value="{name}" required />
  <input type="email" placeholder="Your email (will be hidden, no one can see it)" bind:value="{email}" />
  <textarea placeholder="Your comment*" bind:value="{comment}" required maxlength="1000"></textarea>
  <button type="submit" disabled="{isSubmitting}">
    {isSubmitting ? "Submitting..." : "Submit Comment"}
  </button>
</form>

<style>
  .send-comment-form {
    display: flex;
    flex-direction: column;
  }

  input,
  textarea {
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    color: black;
  }

  textarea {
    resize: vertical;
    min-height: 100px;
    font-family: 'Courier New', Courier, monospace;
  }

  button {
    cursor: pointer;
    padding: 10px;
    background-color: #007aff;
    color: #fff;
    border: none;
    border-radius: 5px;
    transition: background-color 0.3s;
  }

  button:hover {
    background-color: #0059d9;
  }

  :global(html[data-theme='dark'] textarea), 
  :global(html[data-theme='dark'] input) {
    color: white;
  }

  :global(html[data-theme='dark'] .send-comment-form) {
    color: #ccc;
  }

  :global(html[data-theme='dark'] .send-comment-form input),
  :global(html[data-theme='dark'] .send-comment-form textarea) {
    background-color: #444;
    border-color: #555;
  }

  :global(html[data-theme='dark'] .send-comment-form button) {
    background-color: #444;
    border-color: #555;
    color: orange;
  }

  :global(html[data-theme='dark'] .send-comment-form button:hover) {
    background-color: #555;
    border-color: #666;
  }
</style>
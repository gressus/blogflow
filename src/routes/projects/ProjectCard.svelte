<script>
  export let title;
  export let description;
  export let imageUrl;
  export let furl;
</script>

<div class="project-card">
  <img src="{imageUrl}" alt="{title}" />
  <div class="project-info">
    <h3>{title}</h3>
    <p>{description}</p>
    <!-- <a href="/projects/{furl}" target="_blank" rel="noopener noreferrer">View Project</a> -->
    <a href="/projects/{furl}">View Project</a>
  </div>
</div>

<style>
  .project-card {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border: 1px solid #1a1a1a;
    border-radius: 5px;
    padding: 1rem;
    transition: transform 0.3s ease;
  }

  :global(html[data-theme='dark'] .project-card) {
    border-color: #4e4e4e !important;
    background-color: #333;
    color: #ccc;
  }

  .project-card:hover {
    transform: translateY(-5px);
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 5px;
    object-fit: cover;
  }

  .project-info {
    margin-top: 1rem;
  }

  h3 {
    margin-bottom: 0.5rem;
  }

  a {
    color: #007aff;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
</style>
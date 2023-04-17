<script>
  export let title = 'project title';
  export let description = 'description';
  export let imageUrl = 'https://via.placeholder.com/300x200';
  export let projectUrl = 'url';
</script>

<div class="project-page">
  <div class="header-image" style="background-image: url({imageUrl});">
    <h1>{title}</h1>
  </div>
  <div class="project-content">
    <p>{description}</p>
    <a href="{projectUrl}" target="_blank" rel="noopener noreferrer">View Project</a>
  </div>
</div>

<style>
  .project-page {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
  }

  .header-image {
    position: relative;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 300px;
    border-radius: 5px;
  }

  .header-image h1 {
    position: absolute;
    bottom: 0;
    left: 0;
    margin: 0;
    padding: 1rem;
    color: #fff;
    font-size: 2rem;
    z-index: 1;
  }

  .project-content {
    margin-top: 1rem;
  }

  a {
    color: #007aff;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
</style>

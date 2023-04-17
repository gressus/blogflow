<script>
  import ProjectCard from './ProjectCard.svelte';

  export let data

  let projects = [
    {
      title: 'Project 1',
      description: 'Description for Project 1',
      imageUrl: 'https://via.placeholder.com/300x200',
      // furl: 'https://project1.example.com',
      furl: '1',
    },
    {
      title: 'Project 2',
      description: 'Description for Project 2',
      imageUrl: 'https://via.placeholder.com/300x200',
      furl: '2',
    },
  ];

  const translations = {
    en: {
      projectsTitle: 'Projects',
    },
    kg: {
      projectsTitle: 'Долбоорлор',
    },
  };

  const t = translations[data.lang];
</script>

<div class="projects-page">
  <h1>{t.projectsTitle}</h1>
  <div class="projects">
    {#each projects as project (project.title)}
      <ProjectCard {...project} lang={data.lang}/>
    {/each}
  </div>
</div>

<style>
  .projects-page {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
  }

  h1 {
    margin-bottom: 1rem;
  }

  .projects {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 1rem;
  }
</style>
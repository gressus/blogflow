<script>
  import { marked } from 'marked';

  export let data

  const translations = {
    en: {
      aboutMe: 'About Me',
      text: `
My name is [Your Name], and I am a software developer with a passion for
technology and creating awesome projects. I have been working in the
industry for over X years and have experience with various programming
languages and technologies.

In my free time, I enjoy learning new programming languages, exploring
new technologies, and sharing my knowledge with others through my blog
and social media. I also enjoy traveling, photography, and spending time
with my friends and family.

## Skills
- Programming languages: JavaScript, TypeScript, Python, etc.
- Frameworks: Svelte, React, Angular, etc.
- Version control: Git
- Web development: HTML, CSS, SEO, etc.
- Other skills: problem-solving, teamwork, communication, etc.
`,

    },
    kg: {
      aboutMe: 'Мен жөнүндө',
      text: `
Менин атым [Сиздин ысымыңыз] жана мен абдан жакшы көргөн программалык камсыздоону иштеп чыгуучумун
технология жана укмуштуудай долбоорлорду түзүү. мен иштегем
өнөр X жылдан ашуун жана ар кандай программалоо менен тажрыйбасы бар
тилдер жана технологиялар.

Бош убактымда жаңы программалоо тилдерин үйрөнүүнү, изилдөөнү жактырам
жаңы технологиялар, жана менин блогум аркылуу башкалар менен билимим менен бөлүшүү
жана социалдык медиа. Мен саякаттаганды, сүрөткө түшкөндү жана убакыт өткөргөндү жакшы көрөм
досторум жана үй-бүлөм менен.

## Көндүмдөр
- Программалоо тилдери: JavaScript, TypeScript, Python ж.б.
- Frameworks: Svelte, React, Angular, ж.
- Верцияны башкаруу: Git
- Вебди иштеп чыгуу: HTML, CSS, SEO ж.б.
- Башка көндүмдөр: көйгөйлөрдү чечүү, командада иштөө, баарлашуу ж.б.     
`,
    },
  };

  const t = translations[data.lang];  
</script>

<section class="about-page">
  <h1>{t.aboutMe}</h1>
  <!-- svelte-ignore a11y-img-redundant-alt -->
  <img src="/blog/avatar2.png" alt="Your photo" class="about-photo" />
  {@html marked(t.text)}
</section>

<style>
  .about-page {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
  }

  .about-photo {
    float: left;
    max-width: 200px;
    height: auto;
    margin-right: 1.5rem;
    margin-bottom: 1rem;
    border-radius: 10%;
  }

  h1 {
    margin-bottom: 1rem;
  }
</style>

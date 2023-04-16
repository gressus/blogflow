# Multilingual Svelte Markdown Blog

Welcome to the Multilingual Svelte Markdown Blog, a database-free, user-friendly, and SEO-optimized blogging platform powered by Svelte. This project is designed for creating and managing multilingual blog posts with an intuitive folder structure and responsive mobile-friendly design.

## Live Demo

Check out the working demo at [lazarevsky.com](https://www.lazarevsky.com)

## Features

- Multilingual Markdown blog
- No database required
- User-friendly organization with a /static folder structure
- Frontmatter for specifying post title, creation date, tags, visibility, and homepage display
- Automatic post illustration detection based on the folder name
- Mobile-friendly responsive design with a burger menu
- Posts sorted by date on the main page and within the blog
- Tag support for posts
- Simple autoposting for scheduling posts on specific dates
- SEO optimization with Static Site Generation (SSG)
- Dark and light theme-switching support
- Easy manage your content via github from any device (if use Vercel or similar CD/CI)

## Installation

1. Clone this repository:
```
git clone https://github.com/gressus/blogflow.git
```

2. Navigate to the project directory:
```
cd blogflow
```

3. Install the dependencies:
```
npm install
```

4. Run the development server:
```
npm run dev
```

5. Open your browser and visit `http://localhost:3000`

## Deployment

To deploy the Multilingual Svelte Markdown Blog, follow these steps:

1. Build the project for production:
```
npm run build
```

2. Deploy the `public` folder to your preferred hosting service.

## Contributing

Contributions to the Multilingual Svelte Markdown Blog are welcome. Please create an issue to discuss your proposed changes or create a pull request to submit your improvements.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

A special thanks to the Svelte community and everyone who participated in the Svelte hackathon.

## How to translate to you lang
1. Search "kg" in whole project
2. Change in found .svelte files "kg" to your lang, add translation
3. Change all kg.md files in /static folder
4. Change in hooks.serve.js "kg" to your lang and your sites
5. Change in LanguageToggle.svelte "KG" to your lang and your sites

## Todo
1. Optimize image loading
2. Different image size for preview and for full article
3. Translate project page
4. Move translations to separate t.js file, for more friedly start
5. Add option to change lang via localstorage
6. Add option to full static pregeneration (need change routing to /[lang]/)
7. Add supporting custom themes
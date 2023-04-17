# Multilingual Svelte Markdown Blog

Welcome to the Multilingual Svelte Markdown Blog, a database-free, user-friendly, and SEO-optimized blogging platform powered by Svelte. This project is designed for creating and managing multilingual blog posts with an intuitive folder structure and responsive mobile-friendly design.

## Live Demo

Check out the production demo at [lazarevsky.com](https://www.lazarevsky.com) (with all features + advanced (Vote, Comments, AI auto premoderation))

Simplified demo w/o advanced features at [blogflow-eight.vercel.app](blogflow-eight.vercel.app)

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
- SEO optimization with Server Site Generation (SSG)
- Dark and light theme-switching support
- Easy manage your content via github from any device (if use Vercel or similar CD/CI)
– Two type of i18n: 1) domain-based: site.com & site.kg, 2) path-based: site.org/en & site.org/kg

## Advanced Features (required DB)

– Up & Down voting for post (for this feature, you really need DB, we use for example Deta)
– Comment posts

## Super Advanced Features with AI (integration with chatGPT)

– Very Quick Basic auto moderation via chatGPT (1-5 sec. average)
- Long Advanced SPAM detection (takes 20-60 sec. average, you need Vercel Pro or similar for long background tasks)

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
4. Change in hooks.serve.js "kg" to your lang and your sites (for Domain-based i18n)
5. Change in LanguageToggle.svelte "KG" to your lang and your sites

## Domain-based i18n: site.com & site.kg
Default we have domain-based i18n. One domain is for one language, another domain is for another language.
"Change lang" button redirect from one domain to another.

## Path-based i18n: site.org/en & site.org/kg
If your want change type of i18n to path-based routing, plz, checkout to pathbased-i18n branch

## Set-up up and down voting & comments (really need DB)
In this example we will use deta.space, you can use your own
1. Register on deta.space
2. Open terminal and go to folder /detabd/myblog
3. Write `space login` and `space new`
4. Wait until you project initiated
5. Write `space push`
6. Go to deta.space site go to Builder, go to your project, generate KEY
7. Rename _env to .env and paste key from Deta
8. Uncomment VoteSection and CommentSection in /routes/[slug]/+page.svelte

## Super-advanced (integration with chatGPT)
1. Add to .env VITE_OPENAI_API_KEY= you openai key

## Long Advanced SPAM detection
1. Uncomment block "Advanced SPAM detection" in src/routes/api/v1/post/[furl]/comments/+server.js

## Todo
1. Optimize image loading
2. Different image size for preview and for full article
3. Translate project page
4. Move translations to separate t.js file, for more friedly start
~~5. (done) Add option to change lang via localstorage or via domain (/en)~~
6. Add option to full static pregeneration (only for domain-based i18n, because need change routing to /[lang]/)
7. Add supporting custom themes
~~8. (done) Now we have domain-based i18n, add git-branch to alternative i18n with path (/[lang]/)~~
9. Add meta-tag to all pages (not only for blog one)
10. Set limits: by ip, timing, size
11. Mark post SPAM not only after page reload
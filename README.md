# Multilingual Svelte Markdown Blog (NoDB / DB & AI powered)

Welcome to the Multilingual Svelte Markdown Blog, a database-free, user-friendly, and SEO-optimized blogging platform powered by Svelte. This project is designed for creating and managing multilingual blog posts with an intuitive folder structure and responsive mobile-friendly design.

With DB you obtain additional features like: votes, comments, and two types of auto moderation, powered by AI

## Live Demo

Check out the production demo at [lazarevsky.com](https://www.lazarevsky.com) (with all features + advanced (Vote, Comments, AI auto premoderation: quick and long)). 
This is example of domain-based i18n: `lazarevsky.com` / `igor.kg`

Simplified demo w/o advanced features at [https://blogflow-sveltehack.vercel.app/](https://blogflow-sveltehack.vercel.app/). 

Simplified demo w/o advanced features at [https://blogflow-pathbasedi18n.vercel.app/](https://blogflow-pathbasedi18n.vercel.app/). 
This is example of path-based i18n: `yoursite.org/en` / `yoursite.org/kg`

## Features

- Multilingual Markdown blog
- No database required
- User-friendly organization with a /static folder structure
- Frontmatter for specifying post title, creation date, tags, visibility, and homepage display
- Automatic post illustration detection based on the folder name
- Mobile-friendly responsive design with a burger menu
- Posts sorted by date on the main page and within the blog
- Tag support for posts
- Simple autoposting for scheduling posts on specific dates, no redeployment required
- SEO optimization with Server Site Generation (SSG)
- Dark and light theme-switching support
- Easy manage your content via github from any device (if use Vercel or similar CD/CI)
- Two type of i18n: 1) domain-based: site.com & site.kg, 2) path-based: site.org/en & site.org/kg
- On path-based i18n changes the language of the current page (without redirecting to the home page in another language)

## Advanced Features (required DB)

For this feature and further, you really need DB, we use for example `Deta`:

- Up & Down voting for post 
- Comment posts
- Preventing multiple voting by one user (only front)
- Protection from comments longer than 1000 characters (at the frontend and backend)

## Super Advanced Features with AI (integration with chatGPT)

- Very Quick Basic auto moderation via chatGPT (1-5 sec. average), available on basic Vercel plan or similar. Only need your openai key.

_If a post does not pass basic automatic moderation, it will be shown to the user as added, but will not be saved and will simply disappear when reloading the page_

- Long Advanced SPAM detection (takes 20-60 sec. average, you need Vercel Pro or similar for long background tasks).

_If a post does not pass advanced moderation, it will be shown to the user as added, and will be marked red when reloading the page_

## Small Features
- Block Send button, while submitting
- Auto change meta lang tag for i18n
- Added meta-tags for post page (todo: other pages)
- Dynamically loading comments & votes, after SSG
- Dynamically show or hide cover image for post if present in the folder
- Support different extension for cover image (jpg, jpeg, png)

## How to write post
1. Create folder in `/static/posts` with furl of your post (ex: `my-first-post`)
2. Create `en.md` file (in English)
3. At the top of the file use *frontmatter*:
```
---
title: 'Title of your post'
date: '17.04.2023'
excerpt: 'Short description for your post'
tags: ["ai", "future"]
starred: true
hidden: true
---
```
4. Use `starred: true`, if you want show your post at main page
5. Use `hidden: true`, if you want hide your post at all
6. Create `<lang>.md` in another language
7. Create image cover for your post with name `<furl>.jpg` or `<furl>.png` (ex: `my-first-post.jpg`) in the same folder
8. **Profit!**

## How autoposting 
It's easy. Just create post with `date` in a future.
_No redeployment required!_

So, for example, you can create 7 posts once a week and schedule them. **One deployment a week** 👍

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

5. Open your browser and visit `http://localhost:5173`

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
In demo example we use pair: `en`/`kg` languages (`English` and `Kyrgyz` languages)

1. Search `"kg"` in whole project
2. Change in found .svelte files `"kg"` to your lang, add translation
3. Change all `kg.md` files in `/static` folder
4. Change in `hooks.serve.js` `"kg"` to your lang and your sites (for Domain-based i18n)
5. Change in `LanguageToggle.svelte` `"KG"` to your lang and your sites

## Domain-based i18n: site.com & site.kg
Default we have domain-based i18n. One domain is for one language, another domain is for another language.
"Change lang" button redirect from one domain to another.

## Path-based i18n: site.org/en & site.org/kg
If your want change type of i18n to path-based routing, plz, checkout to `pathbased-i18n` branch

## Set-up up and down voting & comments (really need DB)
In this example we will use deta.space, you can use your own
1. Register on deta.space
2. Open terminal and go to folder `/detabd/myblog`
3. Write `space login` and `space new`
4. Wait until you project initiated
5. Write `space push`
6. Go to deta.space site go to Builder, go to your project, generate KEY
7. Rename `_env` to `.env` and paste key from Deta
8. Uncomment `VoteSection` and `CommentSection` in `/routes/[slug]/+page.svelte`

## Super-advanced (integration with chatGPT): Quck basic auto moderation
1. Add to `.env` `VITE_OPENAI_API_KEY=` you openai key

## Long Advanced SPAM detection
1. Uncomment block "Advanced SPAM detection" in `src/routes/api/v1/post/[furl]/comments/+server.js`
- Note, that long advanced SPAM detection may be timeouted, if chatGPT worked more than 60 sec.
- And this is only premoderation feature, because of not so good, as expected. But may be usefull, as secondary helper for site owner.
- In demo purposes spam comments shows in red. In real production you should hide them, of course.
- Nearly 15:00 GMT is worst time for chatGPT, almost all requests timeouted

## Todo
1. Optimize image loading
2. Different image size for preview and for full article
3. Translate project page
4. Move translations to separate t.js file, for more friedly start
5. ~~(done) Add option to change lang via localstorage or via domain (/en)~~
6. Add option to full static pregeneration (only for domain-based i18n, because need change routing to /[lang]/)
7. Add supporting custom themes
8. ~~(done) Now we have domain-based i18n, add git-branch to alternative i18n with path (/[lang]/)~~
9. Add meta-tag to all pages (not only for blog one)
10. Set server-side limits: by ip, timing, size
11. Visually mark post SPAM not only after page reload
12. If long advanced SPAM detection fails due to timeout – mark this messages as suspicious
13. Some features available only for domain-based i18n (like ai-moderation), but you can just copy files
# Multilingual Svelte Markdown Blog (NoDB / DB & AI-Powered)

Welcome to the Multilingual Svelte Markdown Blog, a database-free, user-friendly, and SEO-optimized blogging platform powered by Svelte. This project is designed for creating and managing multilingual blog posts with an intuitive folder structure and responsive mobile-friendly design.

With DB, you obtain additional features like: votes, comments, and two types of auto-moderation, powered by AI.

## Live Demo

Check out the production demo at [lazarevsky.com](https://www.lazarevsky.com) (with all features + advanced (Vote, Comments, AI auto premoderation: quick and long)).
This is an example of domain-based i18n: `lazarevsky.com` / `igor.kg`

Simplified demo without advanced features at [https://blogflow-sveltehack.vercel.app/](https://blogflow-sveltehack.vercel.app/).

Simplified demo without advanced features at [https://blogflow-pathbasedi18n.vercel.app/](https://blogflow-pathbasedi18n.vercel.app/).
This is an example of path-based i18n: `yoursite.org/en` / `yoursite.org/kg`

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
- Easily manage your content via GitHub from any device (if using Vercel or similar CD/CI)
- Two types of i18n: 1) domain-based: site.com & site.kg, 2) path-based: site.org/en & site.org/kg
- On path-based i18n, changes the language of the current page (without redirecting to the home page in another language)

## Advanced Features (DB required)

For these features and more, you will need a DB. We use `Deta` for example:

- Up & Down voting for posts
- Commenting on posts
- Preventing multiple voting by one user (front-end only)
- Protection from comments longer than 1000 characters (at both the frontend and backend)

## Super Advanced Features with AI (integration with ChatGPT)

- Very Quick Basic auto-moderation via ChatGPT (1-5 sec. average), available on the basic Vercel plan or similar. Only your OpenAI key is needed.

_If a post does not pass basic automatic moderation, it will be shown to the user as added, but will not be saved and will simply disappear upon reloading the page._

- Long Advanced SPAM detection (takes 20-60 sec. average, you need Vercel Pro or similar for long background tasks).

_If a post does not pass advanced moderation, it will be shown to the user as added, and will be marked red when reloading the page._

## Small Features

- Block Send button while submitting
- Auto change meta lang tag for i18n
- Added meta-tags for post pages (todo: other pages)
- Dynamically loading comments & votes, after SSG
- Dynamically show or hide cover image for post if present in the folder
- Support for different cover image extensions (jpg, jpeg, png)

## How to Write a Post
1. Create a folder in `/static/posts` with the URL-friendly name of your post (e.g., `my-first-post`)
2. Create an `en.md` file (in English)
3. At the top of the file, use *frontmatter*:
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
4. Use `starred: true` if you want to show your post on the main page
5. Use `hidden: true` if you want to hide your post entirely
6. Create `<lang>.md` in another language
7. Create an image cover for your post with the name `<furl>.jpg` or `<furl>.png` (e.g., `my-first-post.jpg`) in the same folder
8. **Profit!**

## How Autoposting Works
It's easy. Just create a post with a `date` set in the future.
_No redeployment required!_

For example, you can create 7 posts once a week and schedule them. **One deployment a week** 👍

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

## How to Translate to Your Language

In the demo example, we use the pair: `en`/`kg` languages (`English` and `Kyrgyz` languages).

1. Search for `"kg"` throughout the entire project
2. In the found .svelte files, change `"kg"` to your language and add translations
3. Change all `kg.md` files in the `/static` folder
4. Modify `hooks.serve.js`, replacing `"kg"` with your language and your sites (for domain-based i18n)
5. Change `"KG"` to your language and your sites in `LanguageToggle.svelte`

## Domain-based i18n: site.com & site.kg

By default, we have domain-based i18n. One domain is for one language, and another domain is for another language.
The "Change lang" button redirects from one domain to another.

## Path-based i18n: site.org/en & site.org/kg

If you want to change the type of i18n to path-based routing, please checkout the `pathbased-i18n` branch.

## Set Up Up and Down Voting & Comments (Requires a Database)

In this example, we will use deta.space, but you can use your own.
1. Register on deta.space
2. Open the terminal and go to the folder `/detabd/myblog`
3. Run `space login` and `space new`
4. Wait until your project is initialized
5. Run `space push`
6. Go to the deta.space site, navigate to Builder, go to your project, and generate a KEY
7. Rename `_env` to `.env` and paste the key from Deta
8. Uncomment `VoteSection` and `CommentSection` in `/routes/[slug]/+page.svelte`

## Super-advanced (Integration with chatGPT): Quick Basic Auto Moderation

1. Add your OpenAI key to `.env` as `VITE_OPENAI_API_KEY=`

## Long Advanced SPAM Detection

1. Uncomment the "Advanced SPAM detection" block in `src/routes/api/v1/post/[furl]/comments/+server.js`
- Note that long advanced SPAM detection may timeout if chatGPT takes more than 60 seconds.
- This is only a pre-moderation feature, as it is not as accurate as expected. However, it may be useful as a secondary helper for the site owner.
- In the demo, spam comments are shown in red. In a real production environment, you should hide them, of course.
- Around 15:00 GMT is the worst time for chatGPT, as almost all requests time out.

## Todo

1. Optimize image loading
2. Different image sizes for previews and full articles
3. Translate project page
4. Move translations to a separate t.js file for a more user-friendly start
5. ~~(done) Add option to change lang via localstorage or via domain (/en)~~
6. Add option for full static pregeneration (only for domain-based i18n, as it requires changing routing to /[lang]/)
7. Add support for custom themes
8. ~~(done) Now we have domain-based i18n, add a git branch for alternative i18n with path (/[lang]/)~~
9. Add meta-tags to all pages (not only for blog posts)
10. Set server-side limits: by IP, timing, size
11. Visually mark post SPAM not only after page reload
12. If long advanced SPAM detection fails due to timeout, mark these messages as suspicious
13. Some features are only available for domain-based i18n (like AI moderation), but you can just copy files

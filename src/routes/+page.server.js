import { error } from "@sveltejs/kit";

export async function load({ fetch, locals }) {
  let files = Object.entries(
    import.meta.glob("/static/posts/**/*.md", { eager: true })
  );
  let imageFiles = Object.keys(
    import.meta.glob("/static/posts/**/*.{png,jpg,jpeg}", { eager: true })
  );

  const lang = locals.lang;
  const langPattern = new RegExp(`/${lang}.md$`);

  const filteredAndTransformed = files
    .filter(([path]) => langPattern.test(path))
    .map(([path, fileInfo]) => {
      const furl = path.split("/").slice(-2)[0];

      const matchingImageFile = imageFiles.find((imageFilePath) => {
        const imageFurlWithExtension = imageFilePath.split("/").pop();
        const imageFurl = imageFurlWithExtension
          .split(".")
          .slice(0, -1)
          .join(".");
        return imageFurl === furl;
      });

      const imageUrl = matchingImageFile
        ? matchingImageFile.split("/").pop()
        : undefined;

      return {
        furl,
        ...fileInfo.metadata,
        imageUrl,
      };
    })
    .filter((post) => {
      return !post.hidden;
    })
    .filter((post) => post.starred === true)
    .sort((a, b) => {
      const aDate = new Date(a.date.split(".").reverse().join("-"));
      const bDate = new Date(b.date.split(".").reverse().join("-"));
      return bDate - aDate;
    });  

  return {
    posts: filteredAndTransformed,
    lang: locals.lang,
  };
}
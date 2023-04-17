import { error } from "@sveltejs/kit";
import { parseFrontmatter } from "$lib/utils";

export async function load({ fetch, params, locals }) {
  locals.lang = params.lang;
  const furl = params.slug;
  const lang = locals.lang;

  const response = await fetch(`/posts/${furl}/${lang}.md`);

  if (!response.ok) {
    throw error(404, "Not found");
  }

  const fileContent = await response.text();

  const { metadata, body } = parseFrontmatter(fileContent);

  let imageFiles = Object.keys(
    import.meta.glob("/static/posts/**/*.{png,jpg,jpeg}", { eager: true })
  );
  
  const matchingImageFile = imageFiles.find((imageFilePath) => {
    const imageFurlWithExtension = imageFilePath.split("/").pop();
    const imageFurl = imageFurlWithExtension
      .split(".")
      .slice(0, -1)
      .join(".");
    return imageFurl === furl;
  });

  const imageUrl = matchingImageFile
    ?  matchingImageFile.split("/").pop()
    : undefined;  

  let post = {
      furl,
      ...metadata,
      imageUrl,
      ...{ content: body },
  }  

  return {
    post,
    lang: locals.lang,    
  };
}
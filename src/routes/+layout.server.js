export async function load({ fetch, locals, url }) {
  console.log('url ' + JSON.stringify(url));
  return {
    url: JSON.stringify(url),
    lang: locals.lang,
  };
}
export async function load({ fetch, locals, url, params }) {
  // console.log('url ' + JSON.stringify(url));
  console.log('lang ' + params.lang);
  locals.lang = params.lang
  return {
    url: JSON.stringify(url),
    lang: locals.lang,
  };
}
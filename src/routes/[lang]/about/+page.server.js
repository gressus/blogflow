export async function load({ fetch, params, locals }) {
  locals.lang = params.lang;
  return {
    lang: locals.lang,
  };
}

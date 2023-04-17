export const handle = async ({ event, resolve }) => {
  const url = new URL(event.url);

  switch (url.hostname) {
    case "yoursite.kg":
    case "yoursite.kg":
    case "localhost":
      event.locals.lang = "kg";
      break;
    case "yoursite.com":
      event.locals.lang = "kg";
      break;
    default:
      event.locals.lang = "en";
      break;
  }

  const response = await resolve(event, {});  

  if (event.locals.lang == "kg") {
    if (response.headers.get("content-type")?.startsWith("text/html")) {
      const body = await response.text();
      let newResponse = new Response(
        body.replace('<html lang="en">', '<html lang="kg">'),
        response
      );
      return newResponse;
    }
  }  

  return response;
};
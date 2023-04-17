import grayMatter from "gray-matter";

export function parseFrontmatter(content) {
  const { data: metadata, content: body } = grayMatter(content);
  return { metadata, body };
}

export async function fetchJsonPOST(url, bodyJSON, eventfetch) {
  const f = eventfetch ? eventfetch : fetch;
  const response = await f(url, {
    method: "POST",
    body: JSON.stringify(bodyJSON),
    headers: {
      "content-type": "application/json",
    },
  });

  if (response.ok) {
    let result = await response.json();
    return result;
  } else {
    console.error("fetchJsonPOST");
    console.error("JSON.stringify(result) " + JSON.stringify(response));
    console.error("response.status " + response.status);
    console.error("response.statusText " + response.statusText);
    console.error("response " + response);
    throw response;
  }
}
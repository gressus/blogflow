import grayMatter from "gray-matter";

export function parseFrontmatter(content) {
  const { data: metadata, content: body } = grayMatter(content);
  return { metadata, body };
}
import rss from "@astrojs/rss";
import { formatBlogPosts } from "../lib/utils";

const postImportResult = import.meta.glob("./blog/**/*.md", { eager: true });
const posts = formatBlogPosts(Object.values(postImportResult));

export const get = () =>
  rss({
    title: "Pruthivi’s Blog",
    description: "Blog of a boy named after the planet earth.",
    site: import.meta.env.SITE,
    items: posts.map((post) => ({
      link: post.url,
      title: post.frontmatter.title,
      pubDate: post.frontmatter.date,
      description: post.frontmatter.description,
      customData: `
     <author>Pruthivi Thejan</author>
    `,
    })),
  });

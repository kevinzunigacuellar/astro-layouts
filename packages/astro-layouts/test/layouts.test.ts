import { test, expect } from "vitest";
import { renderMarkdown } from "@astrojs/markdown-remark";
import astroLayouts from "../src/index"

test("adds Base.astro layout to all files in 'src/pages'", async () => {
  const fileURL = new URL("src/pages/index.md", import.meta.url);
  const layoutOptions : Record<string,string> = {
    "pages/*": "/src/layouts/Base.astro",
  };
  const result = await renderMarkdown("# Hello, world!", {
    fileURL,
    remarkPlugins: [[astroLayouts, layoutOptions]],
  });
  
  const pageMetadata = result.vfile.data.astro as { frontmatter: { layout: string } };
  expect(pageMetadata.frontmatter.layout).toBe(layoutOptions["pages/*"]);
});

test("adds BlogLayout.astro layout to all files and subfiles 'src/pages/blog'", async () => {
  const fileURL = new URL("src/pages/blog/index.md", import.meta.url);
  const layoutOptions : Record<string,string> = {
    "pages/blog/**/*": "/src/layouts/BlogLayout.astro",
  };
  const result = await renderMarkdown("# Hello, world!", {
    fileURL,
    remarkPlugins: [[astroLayouts, layoutOptions]],
  });
  const pageMetadata = result.vfile.data.astro as { frontmatter: { layout: string } };
  expect(pageMetadata.frontmatter.layout).toBe(layoutOptions["pages/blog/**/*"])
});

test("adds latests option when globs overlap", async () => {
  const fileURL = new URL("src/pages/blog/foo/index.md", import.meta.url);
  const layoutOptions : Record<string,string> = {
    "pages/**/*": "/src/layouts/Base.astro",
    "pages/blog/**/*": "/src/layouts/BlogLayout.astro",
  };
  const result = await renderMarkdown("# Hello, world!", {
    fileURL,
    remarkPlugins: [[astroLayouts, layoutOptions]],
  });
  const pageMetadata = result.vfile.data.astro as { frontmatter: { layout: string } };
  expect(pageMetadata.frontmatter.layout).toBe(layoutOptions["pages/blog/**/*"])
});

test("adds layout frontmatter to files outside pages", async () => {
  const fileURL = new URL("src/content/index.md", import.meta.url);
  const layoutOptions : Record<string,string> = {
    "content/**/*": "/src/layouts/Base.astro",
  };
  const result = await renderMarkdown("# Hello, world!", {
    fileURL,
    remarkPlugins: [[astroLayouts, layoutOptions]],
  });
  const pageMetadata = result.vfile.data.astro as { frontmatter: { layout: string } };
  expect(pageMetadata.frontmatter.layout).toBe(layoutOptions["content/**/*"])
});
import { test, expect } from "vitest";
import { renderMarkdown } from "@astrojs/markdown-remark";
import plugin from "../index";
import { Metadata } from "../src/types";

const options = {
  default: "/src/layouts/Base.astro",
  blog: "/src/layouts/BlogLayout.astro",
  "blog/foo": "/src/layouts/Custom.astro",
};

test("adds Base.astro layout to all files", async () => {
  const fileURL = new URL("pages/index.md", import.meta.url);
  const result = await renderMarkdown("# Hello, world!", {
    fileURL,
    remarkPlugins: [[plugin, options]],
  });
  const pageMetadata = result.vfile.data.astro as Metadata;
  expect(pageMetadata.frontmatter.layout).toBe(options.default);
});

test("adds BlogLayout.astro layout to 'pages/blog'", async () => {
  const fileURL = new URL("pages/blog/index.md", import.meta.url);
  const result = await renderMarkdown("# Hello, world!", {
    fileURL,
    remarkPlugins: [[plugin, options]],
  });
  const pageMetadata = result.vfile.data.astro as Metadata;
  expect(pageMetadata.frontmatter.layout).toBe(options.blog);
});

test("adds Custom.astro layout to 'pages/blog/foo'", async () => {
  const fileURL = new URL("pages/blog/foo/index.md", import.meta.url);
  const result = await renderMarkdown("# Hello, world!", {
    fileURL,
    remarkPlugins: [[plugin, options]],
  });
  const pageMetadata = result.vfile.data.astro as Metadata;
  expect(pageMetadata.frontmatter.layout).toBe(options["blog/foo"]);
});

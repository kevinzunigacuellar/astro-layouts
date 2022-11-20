import { test, expect } from "vitest";
import { renderMarkdown } from "@astrojs/markdown-remark";
import type { LayoutConfig, Metadata } from "../src/types";
import astroLayouts from "../index";

const layoutOptions : LayoutConfig = {
  default: "/src/layouts/Base.astro",
  blog: "/src/layouts/BlogLayout.astro",
  "blog/foo": "/src/layouts/Custom.astro",
};

test("adds Base.astro layout to all files in 'src/pages'", async () => {
  const fileURL = new URL("pages/index.md", import.meta.url);
  const result = await renderMarkdown("# Hello, world!", {
    fileURL,
    remarkPlugins: [[astroLayouts, layoutOptions]],
  });
  const pageMetadata = result.vfile.data.astro as Metadata;
  expect(pageMetadata.frontmatter.layout).toBe(layoutOptions.default);
});

test("adds BlogLayout.astro layout to 'src/pages/blog'", async () => {
  const fileURL = new URL("pages/blog/index.md", import.meta.url);
  const result = await renderMarkdown("# Hello, world!", {
    fileURL,
    remarkPlugins: [[astroLayouts, layoutOptions]],
  });
  const pageMetadata = result.vfile.data.astro as Metadata;
  expect(pageMetadata.frontmatter.layout).toBe(layoutOptions.blog);
});

test("adds Custom.astro layout to 'src/pages/blog/foo'", async () => {
  const fileURL = new URL("pages/blog/foo/index.md", import.meta.url);
  const result = await renderMarkdown("# Hello, world!", {
    fileURL,
    remarkPlugins: [[astroLayouts, layoutOptions]],
  });
  const pageMetadata = result.vfile.data.astro as Metadata;
  expect(pageMetadata.frontmatter.layout).toBe(layoutOptions["blog/foo"]);
});

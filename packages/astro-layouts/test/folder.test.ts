import { test, expect } from "vitest";
import { renderMarkdown } from "@astrojs/markdown-remark";
import type { LayoutConfig, Metadata } from "../src/types";
import plugin from "../index";

const options : LayoutConfig = {
  folder: "posts",
  default: "/src/layouts/Base.astro",
};

test("adds Base.astro layout to all files in 'src/posts'", async () => {
  const fileURL = new URL("posts/index.md", import.meta.url);
  const result = await renderMarkdown("# Hello, world!", {
    fileURL,
    remarkPlugins: [[plugin, options]],
  });
  const pageMetadata = result.vfile.data.astro as Metadata;
  expect(pageMetadata.frontmatter.layout).toBe(options.default);
});
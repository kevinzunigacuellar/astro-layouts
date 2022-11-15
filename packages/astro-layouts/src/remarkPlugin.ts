import type { LayoutConfig, Metadata } from "./types";
import type { RemarkPlugin } from "@astrojs/markdown-remark"
import { findClosetsMatch } from "./utils/finder";

export const astroLayout : RemarkPlugin = (ops: LayoutConfig) =>  {
  return function (_tree, file) {
    const [fullSlug] = file.history;

    const folderPath = fullSlug
      .replace(file.cwd + "/src/pages/", "")
      .split("/")
      .slice(0, -1)
      .join("/");

    const metadata = file.data.astro as Metadata
    const layoutPath = findClosetsMatch(folderPath, ops);
    metadata.frontmatter.layout = layoutPath;
    }
  };
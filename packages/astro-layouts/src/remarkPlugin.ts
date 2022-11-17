import type { LayoutConfig, Metadata } from "./types";
import type { RemarkPlugin } from "@astrojs/markdown-remark";
import { findClosetsMatch } from "./utils/finder";

export const astroLayout: RemarkPlugin = (ops: LayoutConfig) => {
  return function (_tree, file) {
    const [fullSlug] = file.history;
    ops.folder = ops.folder || "pages";
    // regex to remove the file and folder before pages
    const folderPath = fullSlug
      .replace(new RegExp(`.*\/${ops.folder}\/`), "")
      .split("/")
      .slice(0, -1)
      .join("/");
    delete ops.folder;
    const metadata = file.data.astro as Metadata;
    const layoutPath = findClosetsMatch(folderPath, ops);
    metadata.frontmatter.layout = layoutPath;
  };
};

import type { RemarkPlugin } from "@astrojs/markdown-remark";
import picomatch from "picomatch";

export const astroLayout: RemarkPlugin = (
  options: Record<string, string> = {}
) => {
  return function (_tree, file) {
    const [filePath] = file.history;
    const path = filePath.replace(/.*src\//, "");
    for (const [glob, layoutPath] of Object.entries(options)) {
      if (picomatch.isMatch(path, glob)) {
        const metadata = file.data.astro as { frontmatter: { layout: string } };
        metadata.frontmatter.layout = layoutPath;
      }
    }
  };
};

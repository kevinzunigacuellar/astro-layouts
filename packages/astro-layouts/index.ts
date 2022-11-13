interface LayoutConfig {
  default?: string;
  [key: string]: string | undefined;
}

export default function setFallbackLayout(ops: LayoutConfig) {
  return function (_tree: any, file: any) {
    const [fullSlug]: string = file.history;

    const folderPath = fullSlug
      .replace(file.cwd + "/src/pages/", "")
      .split("/")
      .slice(0, -1)
      .join("/");

    const frontmatter = file.data.astro.frontmatter;
    const layoutPath = frontmatter.layout ?? findClosetsMatch(folderPath, ops);
    frontmatter.layout = layoutPath;
  };
}

function findClosetsMatch(folterPath: string, ops: LayoutConfig) {
  if (folterPath === "") {
    return ops.default;
  }
  if (ops[folterPath]) {
    return ops[folterPath];
  }
  const parent = folterPath.split("/").slice(0, -1).join("/");
  return findClosetsMatch(parent, ops);
}

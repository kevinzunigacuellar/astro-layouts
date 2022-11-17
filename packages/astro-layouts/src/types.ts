export interface LayoutConfig {
  default?: string;
  folder?: string;
  [key: string]: string | undefined;
}

export interface Metadata {
  frontmatter: Record<string, string | undefined>;
}

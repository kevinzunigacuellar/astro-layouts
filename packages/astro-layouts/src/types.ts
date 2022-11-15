export interface LayoutConfig {
  default?: string;
  [key: string]: string | undefined;
}

export interface Metadata {
  frontmatter: Record<string, string | undefined>
}
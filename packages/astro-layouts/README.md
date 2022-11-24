# astro-layouts

Remark plugin to add **folder-based** to your MD and MDX files in Astro 🚀

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/github-eywxmv?file=README.md)

## Installation

Install the package using your favorite package manager:

```bash
npm install astro-layouts
```

## Configuration

### Configuration with MD

Add the plugin to `markdown` options in your `astro.config.mjs` file:

```js
// astro.config.mjs
import astroLayouts from "astro-layouts";

const layoutOptions = {
  "pages/**/*.md": "/src/layouts/Layout.astro",
};

export default defineConfig({
  markdown: {
    remarkPlugins: [[astroLayouts, layoutOptions]],
  },
});
```

### Configuration with MDX

Add the plugin to MDX options in your `astro.config.mjs` file:

```js
// astro.config.mjs
import astroLayouts from "astro-layouts";
import mdx from "@astrojs/mdx";

const layoutOptions = {
  "pages/**/*.mdx": "/src/layouts/Layout.astro",
};

export default defineConfig({
  integrations: [
    mdx({
      remarkPlugins: [[astroLayouts, layoutOptions]],
    }),
  ],
});
```

### Configuration with MDX and MD

Add the plugin to `markdown` options in your `astro.config.mjs` file:

> **Note**
> By default, Astro extends the `markdown` options to MDX when you add mdx integration to your project. Read more about it in the [Astro docs](https://docs.astro.build/en/guides/integrations-guide/mdx/#extendplugins).

```js
// astro.config.mjs
import astroLayouts from "astro-layouts";
import mdx from "@astrojs/mdx";

const layoutOptions = {
  "pages/**/*": "/src/layouts/Layout.astro",
};

export default defineConfig({
  integrations: [mdx()],
  markdown: {
    remarkPlugins: [[astroLayouts, layoutOptions]],
  },
});
```

## API

The options object can have any properties following the pattern:

- The `key` is the glob pattern to match the files
- The `value` is the path to the layout file

```js
{
  // Match all files in the "src/pages/blog" folder
  "pages/blog/**/*": "/src/layouts/BlogLayout.astro",
  // Match all files in the "src/content" folder
  "content/**/*": "/src/layouts/Layout.astro",
  // Match only top-level files in the "src/pages" folder
  "pages/*": "/src/layouts/Layout.astro",
}
```

> **Note**
> If you have aliases defined in your `tsconfig.json` file, you can use them to define a layout path.
>
> ```js
> {
>   // This layout path is using an alias
>   "pages/**/*": "@layouts/Layout.astro",
> }
> ```

## Usage

### Default layout

You can define a default layout for all your files in `src/pages` folder.

```js
{
  "pages/**/*": "/src/layouts/Layout.astro",
}
```

### Folder based layout

You can define a layout for a folder or subfolder

```js
{
  // Match all files in the "src/pages/blog" folder
  "pages/blog/**/*": "/src/layouts/BlogLayout.astro",
  // Match all top-level files in the "src/pages/projects" folder
  "pages/projects/*": "/src/layouts/ProjectLayout.astro",
}
```

### Overriding layouts

You can override any layout defined in the `astro.config.mjs` file by adding a `layout` property to the frontmatter of your file. This will take precedence over any layout defined in the configuration.

```md
# pages/blog/first-post.md
---
layout: /src/layouts/Custom.astro
---
This page is now using the `Custom.astro` layout instead of the `BlogLayout.astro` layout.
```


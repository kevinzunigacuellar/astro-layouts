# astro-layouts

This remark package helps you define **folder-based** and **default** layouts to your `md` and `mdx` files in Astro 🎉!

## Installation

Install the package using your favorite package manager:

```bash
npm install astro-layouts
```

## Getting started

Add the plugin to your `astro.config.mjs` file:

```js
// astro.config.mjs
import astroLayouts from "astro-layouts";

export default defineConfig({
  markdown: {
    remarkPlugins: [
      [
        astroLayouts,
        {
          // add your options here
          default: "/src/layouts/Layout.astro",
          blog: "/src/layouts/BlogLayout.astro",
        },
      ],
    ],
  },
});
```

If you would like to extend this package to work with mdx, you can do so by adding the following to your `astro.config.mjs` file:

```js
// astro.config.mjs
import astroLayouts from "astro-layouts";
import mdx from "@astrojs/mdx";

export default defineConfig({
  markdown: {
    remarkPlugins: [
      [
        astroLayouts,
        {
          default: "/src/layouts/Layout.astro",
          blog: "/src/layouts/BlogLayout.astro",
          "blog/foo": "/src/layouts/FooLayout.astro",
        },
      ],
    ],
  },
  integrations: [ mdx({ extendPlugins: true })],
});
```


## Examples:

### Basics

- Add a default layout to all pages:

```js
// astro.config.mjs
import astroLayouts from "astro-layouts";

export default defineConfig({
  markdown: {
    remarkPlugins: [
      [
        astroLayouts,
        {
          default: "/src/layouts/Layout.astro",
        },
      ],
    ],
  },
});
```

- Add a `BlogLayout.astro` to all pages in the `pages/blog` directory:

```js
// astro.config.mjs
export default defineConfig({
  markdown: {
    remarkPlugins: [
      [
        astroDefaultLayouts,
        {
          blog: "/src/layouts/BlogLayout.astro",
        },
      ],
    ],
  },
});
```

- Add a `FooLayout.astro` to all pages in the `pages/blog/foo` directory:

```js
// astro.config.mjs
export default defineConfig({
  markdown: {
    remarkPlugins: [
      [
        astroDefaultLayouts,
        {
          "blog/foo": "/src/layouts/FooLayout.astro",
        },
      ],
    ],
  },
});
```

- All files will inherit layouts from their closest defined parent directory:

```md
# pages/blog/a/b/custom.md

This page uses the `BlogLayout.astro` layout inherited from the `blog` directory
```

- **Need an override?** Add a specific layout to a single page:

```md
# pages/blog/custom.md
---
layout: "/src/layouts/CustomLayout.astro"
---

This page will use the `CustomLayout.astro` layout instead of the `BlogLayout.astro` layout

```

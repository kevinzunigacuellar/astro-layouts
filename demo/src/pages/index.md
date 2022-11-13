```md
# Welcome to `astro-layouts`

This package helps you define **folder-based** and **default** layouts to your `md` and `mdx` files 🎉!
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

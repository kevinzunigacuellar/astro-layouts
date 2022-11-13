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

## API

### `default`

The `default` option is used to define a default layout for all your files files.

```js
{
  default: "/src/layouts/Layout.astro",
}
```

### Other options

The object can have any other key, which will be used to define a layout for a specific folder.

The `key` is the folder name in pages, and the `value` is the path to the layout file.

```js
{
  blog: "/src/layouts/BlogLayout.astro",
  "blog/foo": "/src/layouts/FooLayout.astro",
  default: "/src/layouts/Layout.astro",
}
```

## Usage 

### Folder-based layouts

To define a folder-based layout, add a new property to the options object with the folder name as the key, and the path to the layout file as the value.

They key will be used to match the folder name in the `pages` directory.

```js
{
  blog: "/src/layouts/BlogLayout.astro",
  "products/foo": "/src/layouts/FooLayout.astro",
}
```

The key can be a nested folder, like `blog/foo`.

> Note:
> All files will inherit layouts from their closest defined parent directory.
> The file `pages/blog/foo/bar.md` will use the layout defined in `blog`.

### Default layout

To define a default layout, add a `default` property to the options object with the path to the layout file as the value.

```js
{
  default: "/src/layouts/Layout.astro",
}
```

## Overriding layouts

You can override the layout defined in the `astro.config.mjs` file by adding a `layout` property to the frontmatter of your markdown file.

```md
# pages/blog/b.md
---
layout: /src/layouts/Custom.astro
---
This page is now using the `Custom.astro` layout instead of the `BlogLayout.astro` layout.
```




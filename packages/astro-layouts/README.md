# astro-layouts

Remark plugin to add **folder-based** and **default** layouts to your MD and MDX files in Astro 🚀

## Installation

Install the package using your favorite package manager:

```bash
npm install astro-layouts
```

## Configuration

Add the plugin to `remarkPlugins` in your `astro.config.mjs`

### Configuration with MD

Add the plugin to `markdown` options in your `astro.config.mjs` file:

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
          blog: "@layouts/BlogLayout.astro", // you can also use an alias
        },
      ],
    ],
  },
});
```

### Configuration with MDX

Add the plugin to MDX options in your `astro.config.mjs` file:

```js
// astro.config.mjs
import astroLayouts from "astro-layouts";
import mdx from "@astrojs/mdx";

export default defineConfig({
  integrations: [
    mdx({
      remarkPlugins: [
        [
          astroLayouts,
          {
            default: "/src/layouts/Layout.astro",
            blog: "@layouts/BlogLayout.astro", // you can also use an alias
          },
        ],
      ],
    }),
  ],
});
```

### Configuration with MDX and MD

Add the plugin to `markdown` options in your `astro.config.mjs` file:

> **Note**
> By default astro will extend the `markdown` options to MDX files when you add mdx to your project. Learn more in the [Astro documentation](https://docs.astro.build/en/guides/integrations-guide/mdx/#extendplugins).

```js
// astro.config.mjs
import astroLayouts from "astro-layouts";
import mdx from "@astrojs/mdx";

export default defineConfig({
  integrations: [mdx()],
  markdown: {
    remarkPlugins: [
      [
        astroLayouts,
        {
          default: "/src/layouts/Layout.astro",
          blog: "@layouts/BlogLayout.astro", // you can also use an alias
        },
      ],
    ],
  },
});
```

## API

The options object can have any properties following the pattern:

- The `key` is the **folder or subfolder path** in pages.
- The `value` is the **layout path**.

```js
{
  blog: "/src/layouts/BlogLayout.astro",
  "products/foo": "@layouts/ProductLayout.astro",
}
```

> **Note**
> If you have aliases defined in your `tsconfig.json` file, you can use them to define a layout path.

### Default layout

`default` is a special key that will be used as a fallback if no other layout is found.

```js
{
  default: "/src/layouts/Layout.astro",
}
```

### Layout inheritance

If you have a layout defined for a folder, all subfolders will inherit the layout.

Using the example bellow, the `BlogLayout.astro` will be used for all files in the `blog` folder and its subfolders.

```js
{
  blog: "@layouts/BlogLayout.astro";
}
```

If you wish to override the layout for a subfolder, you can define a another layout for that subfolder.

```js
{
  blog: "@layouts/BlogLayout.astro",
  "blog/news": "@layouts/CustomLayout.astro"
}
```

### Overriding layouts

You can override any layout defined in the `astro.config.mjs` file by adding a `layout` property to the frontmatter of your file. This will take precedence over any layout defined in the configuration.

```md
# pages/blog/b.md

---

## layout: /src/layouts/Custom.astro

This page is now using the `Custom.astro` layout instead of the `BlogLayout.astro` layout.
```

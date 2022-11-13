import { defineConfig } from "astro/config";
import astroDefaultLayouts from "astro-layouts";
import mdx from "@astrojs/mdx";
import tailwindcss from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  markdown: {
    extendDefaultPlugins: true,
    shikiConfig: {
      theme: "dracula",
      wrap: true,
    },
    remarkPlugins: [
      [
        astroDefaultLayouts,
        {
          blog: "/src/layouts/Blog.astro",
          "blog/custom": "/src/layouts/Custom.astro",
          default: "/src/layouts/Base.astro",
        },
      ],
    ],
  },
  integrations: [
    mdx({
      extendPlugins: true,
    }),
    tailwindcss(),
  ],
});

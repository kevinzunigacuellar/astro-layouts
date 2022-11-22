import { defineConfig } from "astro/config";
import plugin from "astro-layouts";
import mdx from "@astrojs/mdx";

const layoutOptions = {
  "pages/*": "/src/layouts/RedLayout.astro",
  "pages/blog/**/*": "/src/layouts/BlueLayout.astro",
};

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [[plugin, layoutOptions]],
    extendDefaultPlugins: true,
  },
  integrations: [mdx()],
});

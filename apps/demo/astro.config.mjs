import { defineConfig } from 'astro/config';
import plugin from 'astro-layouts'
import mdx from '@astrojs/mdx'

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [[plugin, {
      default: '/src/layouts/RedLayout.astro',
      blog: '@layouts/BlueLayout.astro',
      'blog/bar': '@layouts/PinkLayout.astro',
    }]],
    extendDefaultPlugins: true,
  },
  integrations: [mdx()]
});

import { defineConfig } from 'astro/config';
import plugin from 'astro-layouts'

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [[plugin, {
      default: '/src/layouts/RedLayout.astro',
      blog: '/src/layouts/BlueLayout.astro'
    }]],
    extendDefaultPlugins: true,
  }
});

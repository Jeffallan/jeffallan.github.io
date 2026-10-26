// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://jeffallan.github.io',
  output: 'static',
  integrations: [icon(), sitemap()],
});

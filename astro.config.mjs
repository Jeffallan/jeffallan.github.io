// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://jeffallan.github.io',
  output: 'static',
  integrations: [icon()],
});

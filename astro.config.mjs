// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';
import seoGraph from '@jdevalk/astro-seo-graph/integration';
import { indexNowOptions } from './src/components/site-seo/indexnow.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://jeffallan.github.io',
  output: 'static',
  integrations: [
    icon(),
    sitemap(),
    // Submits changed pages to IndexNow, from the deploy build only (site-seo)
    seoGraph({
      // The docs sites share this domain but deploy separately, so their pages are not in this build
      validateInternalLinks: {
        skip: (href) =>
          /^(https:\/\/jeffallan\.github\.io)?\/(claude-skills|writing-with-agents)\//.test(href),
      },
      indexNow: indexNowOptions('https://jeffallan.github.io'),
    }),
  ],
});

// og:image cards for the hub's pages, at /og/<page>.png (site-seo).
import { ogRoute } from '../../components/site-seo/og.mjs';
import { PAGES } from '../../page-meta';

export const { getStaticPaths, GET } = await ogRoute({
  name: 'Jeff Smolinski',
  pages: Object.fromEntries(
    Object.entries(PAGES).map(([key, p]) => [key, { title: p.card, description: p.description }]),
  ),
});

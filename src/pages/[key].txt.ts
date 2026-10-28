// The IndexNow key file, at https://jeffallan.github.io/<key>.txt. Served from the domain root,
// it lets every site on jeffallan.github.io submit with the same key (site-seo).
import { INDEXNOW_KEY } from '../components/site-seo/indexnow.mjs';

export const getStaticPaths = () => [{ params: { key: INDEXNOW_KEY } }];

export const GET = () =>
  new Response(INDEXNOW_KEY, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });

import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_DxppfH38.mjs';
import { manifest } from './manifest_BiwXrBoD.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/api/search.json.astro.mjs');
const _page4 = () => import('./pages/articles/search.astro.mjs');
const _page5 = () => import('./pages/articles/tag/_---tag_.astro.mjs');
const _page6 = () => import('./pages/articles.astro.mjs');
const _page7 = () => import('./pages/articles/_---slug_.astro.mjs');
const _page8 = () => import('./pages/rss.xml.astro.mjs');
const _page9 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/api/search.json.ts", _page3],
    ["src/pages/articles/search.astro", _page4],
    ["src/pages/articles/tag/[...tag].astro", _page5],
    ["src/pages/articles/index.astro", _page6],
    ["src/pages/articles/[...slug].astro", _page7],
    ["src/pages/rss.xml.js", _page8],
    ["src/pages/index.astro", _page9]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "a4b6261b-a510-41c8-bf0b-9c9ad1bfe65b",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };

import { c as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CrJ7KYZF.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../chunks/MainLayout_BvZsSa4J.mjs';
import { g as getCollection } from '../chunks/_astro_content_DVP7NWPI.mjs';
import { $ as $$BlogCard } from '../chunks/BlogCard_yhoVldiM.mjs';
import { $ as $$SearchForm } from '../chunks/SearchForm_THM1a0kV.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const allBlogArticles = (await getCollection("blog")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Articles, Stories, and More" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-2xl pb-3">All Articles</h1>  ${renderComponent($$result2, "SearchForm", $$SearchForm, {})} <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"> ${allBlogArticles.map((article) => renderTemplate`${renderComponent($$result2, "BlogCard", $$BlogCard, { "article": article })}`)} </div> ` })}`;
}, "C:/Users/pggis/Documents/01_Personal/02_GithubProjects/Blog/src/pages/articles/index.astro", void 0);

const $$file = "C:/Users/pggis/Documents/01_Personal/02_GithubProjects/Blog/src/pages/articles/index.astro";
const $$url = "/articles";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

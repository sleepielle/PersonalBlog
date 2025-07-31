import { a as createAstro, c as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_CrJ7KYZF.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../../chunks/MainLayout_DHm73WoT.mjs';
import { $ as $$BlogCard } from '../../chunks/BlogCard_DwF1mmZF.mjs';
import { $ as $$SearchForm } from '../../chunks/SearchForm_THM1a0kV.mjs';
import { g as getCollection } from '../../chunks/_astro_content_DH3IbMC_.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://your-domain.vercel.app");
const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Search;
  const query = Astro2.url.searchParams.get("query");
  const allBlogArticles = await getCollection("blog");
  const searchResults = allBlogArticles.filter((article) => {
    const titleMatch = article.data.title.toLowerCase().includes(query.toLowerCase());
    const bodyMatch = article.body.toLowerCase().includes(query.toLowerCase());
    const slugMatch = article.slug.toLowerCase().includes(query.toLowerCase());
    return titleMatch || bodyMatch || slugMatch;
  });
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Search Results" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<a href="/articles" class="inline-block bg-gray-100 p-2 mb-5 hover:bg-indigo-500 hover:text-white">All Articles</a> ${renderComponent($$result2, "SearchForm", $$SearchForm, {})} <br> <h1 class="text-2xl pb-3 mt-6">Results for <strong>${query}</strong></h1> <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"> ${searchResults.map((article) => renderTemplate`${renderComponent($$result2, "BlogCard", $$BlogCard, { "article": article })}`)} </div> ` })}`;
}, "C:/Users/pggis/Documents/01_Personal/02_GithubProjects/Blog/src/pages/articles/search.astro", void 0);

const $$file = "C:/Users/pggis/Documents/01_Personal/02_GithubProjects/Blog/src/pages/articles/search.astro";
const $$url = "/articles/search";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Search,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

import { a as createAstro, c as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_CrJ7KYZF.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../../../chunks/MainLayout_DHm73WoT.mjs';
import { g as getCollection } from '../../../chunks/_astro_content_DH3IbMC_.mjs';
import { $ as $$BlogCard } from '../../../chunks/BlogCard_DwF1mmZF.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://your-domain.vercel.app");
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { tag } = Astro2.params;
  if (tag === void 0) {
    throw new Error("Tag is required");
  }
  const allBlogArticles = (await getCollection("blog")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  const tagArticles = allBlogArticles.filter(
    (article) => article.data.tags.includes(tag)
  );
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Articles, Stories, and More" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<a href="/articles" class="inline-block bg-gray-100 p-2 mb-6 hover:bg-indigo-500 hover:text-white">Back To All Articles</a> <h1 class="text-2xl pb-3">#${tag}</h1>  <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"> ${tagArticles.map((article) => renderTemplate`${renderComponent($$result2, "BlogCard", $$BlogCard, { "article": article })}`)} </div> ` })}`;
}, "C:/Users/pggis/Documents/01_Personal/02_GithubProjects/Blog/src/pages/articles/tag/[...tag].astro", void 0);

const $$file = "C:/Users/pggis/Documents/01_Personal/02_GithubProjects/Blog/src/pages/articles/tag/[...tag].astro";
const $$url = "/articles/tag/[...tag]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

import { a as createAstro, c as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_CrJ7KYZF.mjs';
import 'kleur/colors';
import { $ as $$MainLayout, f as formatDate } from '../../chunks/MainLayout_BvZsSa4J.mjs';
import { g as getCollection } from '../../chunks/_astro_content_DVP7NWPI.mjs';
import { $ as $$Tags } from '../../chunks/Tags_BceEeX_n.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://example.com");
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { slug } = Astro2.params;
  const allBlogEntries = await getCollection("blog");
  const entry = allBlogEntries.find((entry2) => entry2.slug === slug);
  if (!entry) {
    return Astro2.redirect("/404");
  }
  const { Content } = await entry.render();
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<a href="/articles" class="inline-block bg-gray-100 p-2 mb-6 hover:bg-indigo-500 hover:text-white">Back To All Articles</a> <article> <h1>${entry.data.title}</h1> <h3>Written by ${entry.data.author} on ${formatDate(entry.data.pubDate)}</h3> ${renderComponent($$result2, "Tags", $$Tags, { "tags": entry.data.tags })} <img${addAttribute("/images/" + entry.data.image, "src")} alt="Article image" class="my-6 w-full h-auto rounded-xl mb-6"> ${renderComponent($$result2, "Content", Content, {})} </article> ` })} `;
}, "C:/Users/pggis/Documents/01_Personal/02_GithubProjects/Blog/src/pages/articles/[...slug].astro", void 0);

const $$file = "C:/Users/pggis/Documents/01_Personal/02_GithubProjects/Blog/src/pages/articles/[...slug].astro";
const $$url = "/articles/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

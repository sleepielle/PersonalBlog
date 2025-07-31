/* empty css                                    */
import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_6MF-LJoH.mjs';
import 'kleur/colors';
import { a as getEntry, $ as $$MainLayout, f as formatDate } from '../../chunks/MainLayout_MuztaTNj.mjs';
import { $ as $$Tags } from '../../chunks/Tags_BWj7CI-O.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { slug } = Astro2.params;
  if (slug === void 0) {
    throw new Error("Slug is required");
  }
  const entry = await getEntry("blog", slug);
  if (entry === void 0) {
    return Astro2.redirect("/404");
  }
  const { Content } = await entry.render();
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<a href="/articles" class="inline-block bg-gray-100 p-2 mb-6 hover:bg-indigo-500 hover:text-white">Back To Articles</a> <article> <h1 class="text-4xl font-bold mb-2"> ${entry.data.title}</h1> <h3 class="text-lg mb-2">Written by ${entry.data.author} on ${formatDate(entry.data.pubDate)}</h3> ${renderComponent($$result2, "Tags", $$Tags, { "tags": entry.data.tags })} <img${addAttribute("/images/" + entry.data.image, "src")} alt="Article Image" class="w-full h-auto rounded-xl my-6"> ${renderComponent($$result2, "Content", Content, {})} </article> ` })} `;
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

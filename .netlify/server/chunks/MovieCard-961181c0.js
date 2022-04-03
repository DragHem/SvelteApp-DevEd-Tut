var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  M: () => MovieCard
});
module.exports = __toCommonJS(stdin_exports);
var import_index_09c50e7e = require("./index-09c50e7e.js");
var MovieCard_svelte_svelte_type_style_lang = "";
const css = {
  code: "img.svelte-9pqnvi{width:100%;height:30vh;object-fit:cover;border-radius:1rem;margin-bottom:1rem}h2.svelte-9pqnvi{font-size:0.9rem}.description.svelte-9pqnvi{height:5vh}p.svelte-9pqnvi{font-size:0.7rem}.movie-card.svelte-9pqnvi{display:flex;flex-direction:column;justify-content:space-around;padding:1rem}",
  map: null
};
const MovieCard = (0, import_index_09c50e7e.c)(($$result, $$props, $$bindings, slots) => {
  let { movie } = $$props;
  if ($$props.movie === void 0 && $$bindings.movie && movie !== void 0)
    $$bindings.movie(movie);
  $$result.css.add(css);
  return `<div class="${"movie-card svelte-9pqnvi"}"><a sveltekit:prefetch sveltekit:noscroll${(0, import_index_09c50e7e.b)("href", "/movie/" + movie.id, 0)}><img${(0, import_index_09c50e7e.b)("src", "https://image.tmdb.org/t/p/w500" + movie.poster_path, 0)}${(0, import_index_09c50e7e.b)("alt", movie.title, 0)} class="${"svelte-9pqnvi"}"></a>
	<div class="${"description svelte-9pqnvi"}"><h2 class="${"svelte-9pqnvi"}">${(0, import_index_09c50e7e.e)(movie.title)}</h2>
		<p class="${"svelte-9pqnvi"}">${(0, import_index_09c50e7e.e)(movie.release_date)}</p></div>
</div>`;
});

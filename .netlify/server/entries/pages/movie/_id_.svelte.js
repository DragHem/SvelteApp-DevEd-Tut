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
  default: () => U5Bidu5D,
  load: () => load
});
module.exports = __toCommonJS(stdin_exports);
var import_index_09c50e7e = require("../../../chunks/index-09c50e7e.js");
var _id__svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-vv22ta{padding:1rem 0rem 2rem}p.svelte-vv22ta{padding:1rem 0rem}img.svelte-vv22ta{width:100%;border-radius:1rem}.movie-details.svelte-vv22ta{margin:2rem 20%}span.svelte-vv22ta{font-weight:bold}",
  map: null
};
async function load({ fetch, params }) {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=d5c35e51c81488b19da7c1f572507a3d&language=pl-PL`);
  const movieDetail = await res.json();
  if (res.ok) {
    return { props: { movieDetail } };
  }
}
const U5Bidu5D = (0, import_index_09c50e7e.c)(($$result, $$props, $$bindings, slots) => {
  let { movieDetail } = $$props;
  if ($$props.movieDetail === void 0 && $$bindings.movieDetail && movieDetail !== void 0)
    $$bindings.movieDetail(movieDetail);
  $$result.css.add(css);
  return `<div class="${"movie-details svelte-vv22ta"}"><div class="${"img-container"}"><img${(0, import_index_09c50e7e.b)("src", "https://image.tmdb.org/t/p/original" + movieDetail.backdrop_path, 0)}${(0, import_index_09c50e7e.b)("alt", movieDetail.title, 0)} class="${"svelte-vv22ta"}"></div>
	<div class="${"txt-container"}"><h1 class="${"svelte-vv22ta"}">${(0, import_index_09c50e7e.e)(movieDetail.title)}</h1></div>
	<p class="${"overview svelte-vv22ta"}">${(0, import_index_09c50e7e.e)(movieDetail.overview)}</p>
	<p class="${"svelte-vv22ta"}"><span class="${"svelte-vv22ta"}">Data wydania: </span>
		${(0, import_index_09c50e7e.e)(movieDetail.release_date)} <br>
		<span class="${"svelte-vv22ta"}">Bud\u017Cet:</span>
		${(0, import_index_09c50e7e.e)(movieDetail.budget === 0 ? "Brak informacji" : `${movieDetail.budget}$`)} <br>
		<span class="${"svelte-vv22ta"}">Ocena: </span>
		${(0, import_index_09c50e7e.e)(movieDetail.vote_average)} <br>
		<span class="${"svelte-vv22ta"}">D\u0142ugo\u015B\u0107 trwania: </span>
		${(0, import_index_09c50e7e.e)(movieDetail.runtime)} minut
	</p>
</div>`;
});

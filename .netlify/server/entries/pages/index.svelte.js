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
  default: () => Routes,
  load: () => load
});
module.exports = __toCommonJS(stdin_exports);
var import_index_09c50e7e = require("../../chunks/index-09c50e7e.js");
var import_MovieCard_961181c0 = require("../../chunks/MovieCard-961181c0.js");
var PopularMovies_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "h3.svelte-1oywbhk{padding:0 1rem}.popular-movies.svelte-1oywbhk{display:grid;grid-template-columns:repeat(auto-fit, minmax(250px, 1fr));grid-column-gap:1rem;grid-row-gap:2rem}",
  map: null
};
const PopularMovies = (0, import_index_09c50e7e.c)(($$result, $$props, $$bindings, slots) => {
  let { popular } = $$props;
  if ($$props.popular === void 0 && $$bindings.popular && popular !== void 0)
    $$bindings.popular(popular);
  $$result.css.add(css$1);
  return `<h3 class="${"svelte-1oywbhk"}">Popularne Filmy!</h3>
<div class="${"popular-movies svelte-1oywbhk"}">${(0, import_index_09c50e7e.a)(popular, (movie) => {
    return `${(0, import_index_09c50e7e.v)(import_MovieCard_961181c0.M, "MovieCard").$$render($$result, { movie }, {}, {})}`;
  })}
</div>`;
});
var SearchMovies_svelte_svelte_type_style_lang = "";
const css = {
  code: ".search.svelte-1qk150n{position:relative;width:30%;margin:1rem}button.svelte-1qk150n{font-size:0.7rem;padding:0rem 1rem;background-color:rgb(96, 110, 201);color:white;font-weight:bold;border:none;position:absolute;bottom:50%;right:0;transform:translate(0, 50%);height:100%;border-top-right-radius:10px;border-bottom-right-radius:10px;cursor:pointer}input.svelte-1qk150n{width:100%;border:none;font-size:1rem;font-family:'Roboto', sans-serif;outline:none;color:rgb(255, 255, 255);padding:0.5rem 0.1rem;transition:background 0.75s ease-out;font-weight:bold;background-color:rgb(63, 63, 63);border-radius:10px;padding:1rem}label.svelte-1qk150n{position:absolute;font-size:0.8rem;top:50%;left:0;transform:translate(0, -50%);pointer-events:none;color:white;padding:0rem 1rem}input.selected.svelte-1qk150n{background-color:rgb(50, 50, 50)}",
  map: null
};
const SearchMovies = (0, import_index_09c50e7e.c)(($$result, $$props, $$bindings, slots) => {
  let inputValue = "";
  $$result.css.add(css);
  return `<form class="${"search svelte-1qk150n"}">${`<label for="${"search_movie"}" class="${"svelte-1qk150n"}">Szukaj film\xF3w
		</label>`}

	<input type="${"text"}" id="${"search_movie"}" class="${(0, import_index_09c50e7e.e)((0, import_index_09c50e7e.n)("")) + " svelte-1qk150n"}"${(0, import_index_09c50e7e.b)("value", inputValue, 0)}>

	${``}
</form>`;
});
async function load({ fetch }) {
  const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=d5c35e51c81488b19da7c1f572507a3d&language=pl-PL&page=1`);
  const data = await res.json();
  if (res.ok) {
    return { props: { popular: data.results } };
  }
}
const Routes = (0, import_index_09c50e7e.c)(($$result, $$props, $$bindings, slots) => {
  let { popular } = $$props;
  if ($$props.popular === void 0 && $$bindings.popular && popular !== void 0)
    $$bindings.popular(popular);
  return `<section>${(0, import_index_09c50e7e.v)(SearchMovies, "SearchMovies").$$render($$result, {}, {}, {})}
	${(0, import_index_09c50e7e.v)(PopularMovies, "PopularMovies").$$render($$result, { popular }, {}, {})}</section>`;
});

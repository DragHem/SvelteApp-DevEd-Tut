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
var import_MovieCard_961181c0 = require("../../../chunks/MovieCard-961181c0.js");
var _id__svelte_svelte_type_style_lang = "";
const css = {
  code: ".searched-movies.svelte-1s5zv7c{display:grid;grid-template-columns:repeat(auto-fit, minmax(250px, 1fr));grid-column-gap:1rem;grid-row-gap:2rem;height:20vh}",
  map: null
};
async function load({ fetch, params }) {
  const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=d5c35e51c81488b19da7c1f572507a3d&language=pl-PL&query=${params.id}&page=1&include_adult=false`);
  const data = await res.json();
  if (res.ok) {
    return { props: { searchMovie: data.results } };
  }
}
const U5Bidu5D = (0, import_index_09c50e7e.c)(($$result, $$props, $$bindings, slots) => {
  let { searchMovie } = $$props;
  if ($$props.searchMovie === void 0 && $$bindings.searchMovie && searchMovie !== void 0)
    $$bindings.searchMovie(searchMovie);
  $$result.css.add(css);
  return `<div class="${"searched-movies svelte-1s5zv7c"}">${(0, import_index_09c50e7e.a)(searchMovie, (movie) => {
    return `${(0, import_index_09c50e7e.v)(import_MovieCard_961181c0.M, "MovieCard").$$render($$result, { movie }, {}, {})}`;
  })}
</div>`;
});

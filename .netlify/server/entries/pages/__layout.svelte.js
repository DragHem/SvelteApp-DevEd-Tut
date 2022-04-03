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
  default: () => _layout
});
module.exports = __toCommonJS(stdin_exports);
var import_index_09c50e7e = require("../../chunks/index-09c50e7e.js");
var global = "@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');\r\n* {\r\n	margin: 0;\r\n	padding: 0;\r\n	box-sizing: border-box;\r\n	font-family: 'Roboto', sans-serif;\r\n}\r\nbody {\r\n	margin: 0 10%;\r\n}\r\n";
var Nav_svelte_svelte_type_style_lang = "";
const css = {
  code: "nav.svelte-17bxm9j{display:flex;min-height:10vh;align-items:center;justify-content:center}a.svelte-17bxm9j{font-size:1rem;font-weight:bold;font-family:'Roboto', sans-serif;color:black;text-decoration:none}",
  map: null
};
const Nav = (0, import_index_09c50e7e.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<nav class="${"svelte-17bxm9j"}"><a href="${"/"}" class="${"svelte-17bxm9j"}">Baza Film\xF3w</a>
</nav>`;
});
const _layout = (0, import_index_09c50e7e.c)(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Mobie DB</title>`, ""}`, ""}

${(0, import_index_09c50e7e.v)(Nav, "Nav").$$render($$result, {}, {}, {})}
${slots.default ? slots.default({}) : ``}`;
});

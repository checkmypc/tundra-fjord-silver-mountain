import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { Y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { B as searchProducts, i as ProductRow, j as useI18n, o as PageHero, u as Route$8 } from "./router-fA54dPWS.mjs";
import { t as Input } from "./input-FwlNuia2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/search-YrqwImkb.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SearchPage() {
	const { t } = useI18n();
	const { q: initial } = Route$8.useSearch();
	const [q, setQ] = (0, import_react.useState)(initial);
	const rows = (0, import_react.useMemo)(() => searchProducts(q), [q]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: t("ui.search"),
		title: t("nav.search"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
			autoFocus: true,
			value: q,
			placeholder: t("search.placeholder"),
			onChange: (e) => setQ(e.target.value),
			className: "max-w-lg"
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-6xl px-4 py-8",
		children: q.trim() === "" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted",
			children: t("search.empty")
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-border)]",
			children: rows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "p-10 text-center text-sm text-muted",
				children: t("ui.noResults")
			}) : rows.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductRow, { product: p }, p.id))
		})
	})] });
}
//#endregion
export { SearchPage as component };

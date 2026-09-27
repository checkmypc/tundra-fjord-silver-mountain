import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { Y as require_jsx_runtime, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { I as categoryLabel, L as lowestOffer, N as CATEGORY_ORDER, P as catalog, a as Badge, d as Route$12, j as useI18n, k as dh, o as PageHero, z as productsByCategory } from "./router-fA54dPWS.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/compare-NihSXXyw.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ComparePage() {
	const { t } = useI18n();
	const { category = "gpu" } = Route$12.useSearch();
	const rows = (0, import_react.useMemo)(() => {
		return [...productsByCategory(category)].sort((a, b) => a.best_price - b.best_price);
	}, [category]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: t("nav.compare"),
		title: t("ui.lowest"),
		description: t("cat.desc")
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-5 flex flex-wrap gap-2",
				children: CATEGORY_ORDER.map((slug) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/compare",
					search: { category: slug },
					className: `rounded-full px-3 py-2 text-sm ${slug === category ? "bg-primary text-primary-fg" : "bg-surface shadow-[var(--shadow-border)]"}`,
					children: categoryLabel(slug)
				}, slug))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-x-auto rounded-xl bg-surface shadow-[var(--shadow-border)]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full min-w-[640px] text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
						className: "text-start text-xs tracking-wider text-muted uppercase",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-b border-border",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-4 py-3 text-start",
									children: "Product"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-4 py-3 text-start",
									children: "Store"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-4 py-3 text-start",
									children: "City"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-4 py-3 text-end",
									children: t("ui.lowest")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { className: "px-4 py-3" })
							]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: rows.map((p) => {
						const o = lowestOffer(p);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-b border-border last:border-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-4 py-3",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/products/$id",
										params: { id: p.id },
										className: "font-medium hover:text-primary",
										children: p.name
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-4 py-3",
									children: o?.store ?? "—"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-4 py-3 text-muted",
									children: o?.city ?? "—"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
									className: "px-4 py-3 text-end",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display font-semibold tabular-nums ltr-isolate",
										children: dh(p.best_price)
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										tone: "primary",
										className: "ms-2",
										children: t("ui.lowest")
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-4 py-3 text-end",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/products/$id",
										params: { id: p.id },
										className: "text-primary",
										children: t("ui.viewOffer")
									})
								})
							]
						}, p.id);
					}) })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-xs text-muted",
				children: [
					t("data.banner"),
					" ",
					catalog.stores.length,
					" ",
					t("ui.stores"),
					"."
				]
			})
		]
	})] });
}
//#endregion
export { ComparePage as component };

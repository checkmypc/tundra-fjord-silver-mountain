import { Y as require_jsx_runtime, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { P as catalog, a as Badge, j as useI18n, k as dh, o as PageHero } from "./router-fA54dPWS.mjs";
import { t as Card } from "./card-DAYd47YE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/deals-CXv-GWa5.js
var import_jsx_runtime = require_jsx_runtime();
function DealsPage() {
	const { t } = useI18n();
	const deals = [...catalog.products].map((p) => ({
		...p,
		save: p.msrp - p.best_price
	})).filter((p) => p.save > 0).sort((a, b) => b.save - a.save);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: t("nav.deals"),
		title: t("nav.deals"),
		description: t("data.banner")
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto grid max-w-6xl gap-4 px-4 py-8 sm:grid-cols-2 lg:grid-cols-3",
		children: deals.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/products/$id",
			params: { id: p.id },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "h-full rounded-2xl p-4 transition-[box-shadow] hover:shadow-[var(--shadow-border-hover)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: p.image,
							alt: "",
							className: "h-16 object-contain"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
							tone: "ok",
							children: ["-", dh(p.save)]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-3 font-medium",
						children: p.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted line-through ltr-isolate",
						children: dh(p.msrp)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-xl font-semibold tabular-nums ltr-isolate",
						children: dh(p.best_price)
					})
				]
			})
		}, p.id))
	})] });
}
//#endregion
export { DealsPage as component };

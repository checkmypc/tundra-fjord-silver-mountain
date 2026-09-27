import { Y as require_jsx_runtime, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { j as useI18n, o as PageHero } from "./router-fA54dPWS.mjs";
import { t as Card } from "./card-DAYd47YE.mjs";
import { t as GUIDES } from "./guides-CSBH9fD_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/guides.index-C1x_p9ql.js
var import_jsx_runtime = require_jsx_runtime();
function GuidesPage() {
	const { t, lang } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: t("nav.guides"),
		title: t("nav.guides"),
		description: "Short, Morocco-specific buying notes — not generic Reddit recaps."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto grid max-w-6xl gap-4 px-4 py-8 sm:grid-cols-2",
		children: GUIDES.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/guides/$slug",
			params: { slug: g.slug },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "h-full rounded-2xl p-5 transition-[box-shadow] hover:shadow-[var(--shadow-border-hover)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-semibold tracking-wider text-primary uppercase",
						children: g.pillar
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-lg font-semibold",
						children: g.title[lang]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: g.excerpt[lang]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-xs text-muted",
						children: [g.minutes, " min"]
					})
				]
			})
		}, g.slug))
	})] });
}
//#endregion
export { GuidesPage as component };

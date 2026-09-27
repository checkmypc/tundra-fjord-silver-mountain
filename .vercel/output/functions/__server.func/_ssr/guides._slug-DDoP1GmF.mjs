import { J as notFound, Y as require_jsx_runtime, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { E as Button, j as useI18n, l as Route$5, o as PageHero } from "./router-fA54dPWS.mjs";
import { n as guideBySlug } from "./guides-CSBH9fD_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/guides._slug-DDoP1GmF.js
var import_jsx_runtime = require_jsx_runtime();
function GuidePage() {
	const { slug } = Route$5.useParams();
	const g = guideBySlug(slug);
	const { lang, t } = useI18n();
	if (!g) throw notFound();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: g.pillar,
		title: g.title[lang],
		description: g.excerpt[lang]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "mx-auto max-w-2xl px-4 py-10",
		children: [g.body[lang].map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-4 text-base leading-7 text-fg",
			children: p
		}, p.slice(0, 24))), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 flex flex-wrap gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/inspection",
					children: t("cta.btn")
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				variant: "secondary",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/guides",
					children: t("nav.guides")
				})
			})]
		})]
	})] });
}
//#endregion
export { GuidePage as component };

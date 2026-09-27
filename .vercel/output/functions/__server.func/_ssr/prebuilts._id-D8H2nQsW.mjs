import { J as notFound, Y as require_jsx_runtime, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { E as Button, T as useBuild, a as Badge, j as useI18n, k as dh, o as PageHero, s as Route$3 } from "./router-fA54dPWS.mjs";
import { t as Card } from "./card-DAYd47YE.mjs";
import { n as prebuiltById } from "./prebuilts-BrEe6Czj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/prebuilts._id-D8H2nQsW.js
var import_jsx_runtime = require_jsx_runtime();
function PrebuiltDetail() {
	const { id } = Route$3.useParams();
	const b = prebuiltById(id);
	const { t } = useI18n();
	const add = useBuild((s) => s.add);
	if (!b) throw notFound();
	function loadBuild() {
		b.parts.forEach((p) => add(p.id, p.category));
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageHero, {
		eyebrow: b.store,
		title: b.title,
		description: `${b.city} · ${b.format}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-center gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-4xl font-semibold tabular-nums ltr-isolate",
				children: dh(b.price)
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
				tone: b.condition === "used" ? "warn" : "ok",
				children: b.condition === "used" ? t("ui.used") : t("ui.new")
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-5 flex flex-wrap gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				onClick: loadBuild,
				children: t("nav.builder")
			}), b.condition === "used" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				variant: "soft",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/inspection",
					children: t("nav.inspection")
				})
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				variant: "soft",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/assembly",
					children: t("ui.requestAssembly")
				})
			})]
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid max-w-6xl gap-6 px-4 py-8 lg:grid-cols-[1fr_1.1fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
			className: "grid place-items-center rounded-2xl p-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: b.image,
				alt: "",
				className: "h-56 object-contain"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "rounded-2xl p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-3 font-display text-lg font-semibold",
					children: "Parts"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "divide-y divide-border",
					children: b.parts.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center justify-between gap-3 py-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/products/$id",
							params: { id: p.id },
							className: "text-sm hover:text-primary",
							children: p.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm tabular-nums text-muted ltr-isolate",
							children: dh(b.condition === "used" ? p.used_price : p.best_price)
						})]
					}, p.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-xs text-muted",
					children: t("data.banner")
				})
			]
		})]
	})] });
}
//#endregion
export { PrebuiltDetail as component };

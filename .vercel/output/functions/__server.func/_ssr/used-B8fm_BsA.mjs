import { Y as require_jsx_runtime, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { E as Button, a as Badge, j as useI18n, k as dh, o as PageHero } from "./router-fA54dPWS.mjs";
import { t as Card } from "./card-DAYd47YE.mjs";
import { n as USED_LISTINGS } from "./used-CAaBouj7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/used-B8fm_BsA.js
var import_jsx_runtime = require_jsx_runtime();
function tone(v) {
	if (v === "BUY") return "ok";
	if (v === "NEGOTIATE") return "warn";
	if (v === "DONT") return "danger";
	return "neutral";
}
function UsedPage() {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: t("nav.used"),
		title: t("nav.used"),
		description: "Sample used listings with inspection status. Always request a check before transferring money.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			asChild: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/inspection",
				children: t("cta.btn")
			})
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto grid max-w-6xl gap-4 px-4 py-8 md:grid-cols-2",
		children: USED_LISTINGS.map((u) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "rounded-2xl p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-lg font-semibold",
						children: u.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-muted",
						children: [
							u.city,
							" · ",
							u.condition
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						tone: u.inspected ? tone(u.verdict) : "neutral",
						children: u.inspected ? u.verdict : "Not inspected"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 font-display text-2xl font-semibold tabular-nums ltr-isolate",
					children: dh(u.asking)
				}),
				u.fairValue > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs text-muted",
					children: ["Fair value (estimate) ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "ltr-isolate",
						children: dh(u.fairValue)
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-3 space-y-1 text-sm text-muted ltr-isolate",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: u.cpu }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: u.gpu }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							u.ram,
							" · ",
							u.storage
						] })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm",
					children: u.notes
				}),
				u.temps && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-xs text-muted",
					children: [
						"CPU load ",
						u.temps.cpu,
						"° · GPU ",
						u.temps.gpu,
						"°",
						u.ssdHealth != null ? ` · SSD ${u.ssdHealth}%` : ""
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex gap-2",
					children: [u.inspected && u.id === "used-casa-4060" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "secondary",
						size: "sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/reports/$id",
							params: { id: "rep-4060" },
							children: "Report"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/inspection",
							children: t("nav.inspection")
						})
					})]
				})
			]
		}, u.id))
	})] });
}
//#endregion
export { UsedPage as component };

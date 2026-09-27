import { Y as require_jsx_runtime, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { E as Button, a as Badge, j as useI18n, k as dh, o as PageHero, v as INSPECTION } from "./router-fA54dPWS.mjs";
import { t as Card } from "./card-DAYd47YE.mjs";
import { t as BookingForm } from "./booking-form-CMAv1lQ6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/inspection-CQgQOnS1.js
var import_jsx_runtime = require_jsx_runtime();
function InspectionPage() {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: t("nav.inspection"),
		title: t("svc.inspect"),
		description: t("svc.inspectDesc"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "text-sm text-muted",
			children: [
				t("svc.from"),
				" ",
				dh(INSPECTION.agadirPrice),
				" Agadir · ",
				dh(INSPECTION.basePrice),
				" Casablanca / Rabat. ",
				INSPECTION.travelNote
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid max-w-6xl gap-6 px-4 py-8 lg:grid-cols-[1.1fr_.9fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-3 sm:grid-cols-3",
					children: INSPECTION.verdicts.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "rounded-xl p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							tone: v.id === "BUY" ? "ok" : v.id === "DONT" ? "danger" : "warn",
							children: v.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: v.hint
						})]
					}, v.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "rounded-2xl p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-lg font-semibold",
							children: "Checklist"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 grid gap-2 sm:grid-cols-2",
							children: INSPECTION.checklist.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "text-sm text-muted",
								children: c
							}, c))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-xs text-muted",
							children: INSPECTION.turnaround
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "soft",
							className: "mt-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/reports/$id",
								params: { id: "rep-4060" },
								children: "Sample report"
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-3 sm:grid-cols-2",
					children: INSPECTION.packages.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "rounded-xl p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-medium",
								children: p.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-xl font-semibold tabular-nums",
								children: dh(p.price)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted",
								children: p.duration
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-2 space-y-1 text-sm text-muted",
								children: p.includes.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: i }, i))
							})
						]
					}, p.id))
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mb-3 font-display text-lg font-semibold",
			children: t("nav.book")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookingForm, {
			kind: "inspection",
			packages: INSPECTION.packages,
			extra: "listing"
		})] })]
	})] });
}
//#endregion
export { InspectionPage as component };

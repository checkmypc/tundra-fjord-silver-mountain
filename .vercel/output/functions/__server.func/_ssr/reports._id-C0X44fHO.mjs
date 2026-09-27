import { J as notFound, Y as require_jsx_runtime, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { E as Button, a as Badge, k as dh, n as Route, o as PageHero } from "./router-fA54dPWS.mjs";
import { t as Card } from "./card-DAYd47YE.mjs";
import { t as SAMPLE_REPORT } from "./used-CAaBouj7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/reports._id-C0X44fHO.js
var import_jsx_runtime = require_jsx_runtime();
function ReportPage() {
	const { id } = Route.useParams();
	if (id !== SAMPLE_REPORT.id) throw notFound();
	const r = SAMPLE_REPORT;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Verified inspection",
		title: "Sample report · RTX 4060 tower",
		description: `${r.city} · ${r.date} · Tech ${r.technician}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-center gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
				tone: "warn",
				children: r.verdict
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "text-sm text-muted",
				children: [
					"Asking ",
					dh(r.asking),
					" · Fair ",
					dh(r.fairValue),
					" · Offer ",
					dh(r.suggestOffer)
				]
			})]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid max-w-6xl gap-4 px-4 py-8 lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "rounded-2xl p-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-3 font-display font-semibold",
				children: "Hardware"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("table", {
				className: "w-full text-sm",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: r.hardware.map(([k, v, n]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "border-b border-border last:border-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "py-2 pe-3 text-start text-muted",
							children: k
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "py-2 ltr-isolate",
							children: v
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "py-2 text-end text-xs text-muted",
							children: n
						})
					]
				}, k)) })
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "rounded-2xl p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mb-3 font-display font-semibold",
						children: "Temperatures"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-2 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-lg bg-surface-2 p-3",
								children: [
									"CPU idle ",
									r.temps.cpuIdle,
									"°"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-lg bg-surface-2 p-3",
								children: [
									"CPU load ",
									r.temps.cpuLoad,
									"°"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-lg bg-surface-2 p-3",
								children: [
									"GPU idle ",
									r.temps.gpuIdle,
									"°"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-lg bg-surface-2 p-3",
								children: [
									"GPU load ",
									r.temps.gpuLoad,
									"°"
								]
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "rounded-2xl p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mb-3 font-display font-semibold",
						children: "Issues"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "list-disc ps-4 text-sm text-muted",
						children: r.issues.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: i }, i))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/inspection",
						children: "Book the same check"
					})
				})
			]
		})]
	})] });
}
//#endregion
export { ReportPage as component };

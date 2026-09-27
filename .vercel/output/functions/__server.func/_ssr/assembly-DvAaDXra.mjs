import { Y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { j as useI18n, k as dh, m as ASSEMBLY, o as PageHero, p as Route$15 } from "./router-fA54dPWS.mjs";
import { t as Card } from "./card-DAYd47YE.mjs";
import { t as BookingForm } from "./booking-form-CMAv1lQ6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/assembly-DvAaDXra.js
var import_jsx_runtime = require_jsx_runtime();
function AssemblyPage() {
	const { t } = useI18n();
	const { total } = Route$15.useSearch();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: t("nav.assembly"),
		title: t("svc.assemble"),
		description: t("svc.assembleDesc"),
		children: total && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "text-sm",
			children: ["Builder total ", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "font-display font-semibold tabular-nums ltr-isolate",
				children: [Number(total).toLocaleString("fr-MA"), " DH"]
			})]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid max-w-6xl gap-6 px-4 py-8 lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-3",
			children: [ASSEMBLY.packages.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "rounded-2xl p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-baseline justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-lg font-semibold",
							children: p.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-xl font-semibold tabular-nums",
							children: dh(p.price)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted",
						children: p.duration
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 space-y-1 text-sm",
						children: p.includes.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: i }, i))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-xs text-muted",
						children: ["Not included: ", p.excludes.join(" · ")]
					})
				]
			}, p.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted",
				children: ASSEMBLY.note
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mb-3 font-display text-lg font-semibold",
			children: t("ui.requestAssembly")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookingForm, {
			kind: "assembly",
			packages: ASSEMBLY.packages,
			extra: "machine"
		})] })]
	})] });
}
//#endregion
export { AssemblyPage as component };

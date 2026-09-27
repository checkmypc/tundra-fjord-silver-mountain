import { Y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { g as CLEANING, j as useI18n, k as dh, o as PageHero } from "./router-fA54dPWS.mjs";
import { t as Card } from "./card-DAYd47YE.mjs";
import { t as BookingForm } from "./booking-form-CMAv1lQ6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cleaning-w3VAxONF.js
var import_jsx_runtime = require_jsx_runtime();
function CleaningPage() {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: t("nav.cleaning"),
		title: t("svc.clean"),
		description: t("svc.cleanDesc")
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid max-w-6xl gap-6 px-4 py-8 lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-3 sm:grid-cols-2",
			children: [CLEANING.packages.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "rounded-2xl p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display font-semibold",
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
						className: "mt-3 space-y-1 text-sm text-muted",
						children: p.includes.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: i }, i))
					})
				]
			}, p.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "sm:col-span-2 text-xs text-muted",
				children: CLEANING.safety
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mb-3 font-display text-lg font-semibold",
			children: t("nav.book")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookingForm, {
			kind: "cleaning",
			packages: CLEANING.packages,
			extra: "machine"
		})] })]
	})] });
}
//#endregion
export { CleaningPage as component };

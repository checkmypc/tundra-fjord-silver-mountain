import { Y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as CONTACT, j as useI18n, o as PageHero } from "./router-fA54dPWS.mjs";
import { t as Card } from "./card-DAYd47YE.mjs";
import { t as BookingForm } from "./booking-form-CMAv1lQ6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-C80nqu-p.js
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: t("nav.contact"),
		title: t("nav.contact"),
		description: `${CONTACT.hours} · ${CONTACT.cities.join(" · ")}`
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid max-w-6xl gap-6 px-4 py-8 lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "rounded-2xl p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold tracking-wider text-muted uppercase",
						children: "Email"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "text-primary",
						href: `mailto:${CONTACT.email}`,
						children: CONTACT.email
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-xs font-semibold tracking-wider text-muted uppercase",
						children: "Social"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-1 flex flex-col gap-1 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: CONTACT.instagram,
								className: "hover:text-primary",
								children: "Instagram"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: CONTACT.tiktok,
								className: "hover:text-primary",
								children: "TikTok"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: CONTACT.facebook,
								className: "hover:text-primary",
								children: "Facebook"
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: t("foot.legal")
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookingForm, {
			kind: "inspection",
			extra: "listing"
		})]
	})] });
}
//#endregion
export { ContactPage as component };

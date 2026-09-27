import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { Y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { V as readBookings, o as PageHero } from "./router-fA54dPWS.mjs";
import { t as Card } from "./card-DAYd47YE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-kvQpDa9I.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AdminPage() {
	const [rows, setRows] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => setRows(readBookings()), []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Ops",
		title: "Local requests",
		description: "Bookings stay in this browser (no backend). Export by copy. Replace with a real inbox before launch."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-6xl px-4 py-8",
		children: rows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted",
			children: "No requests yet."
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-3",
			children: rows.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "rounded-xl p-4 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: "uppercase",
							children: b.kind
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted",
							children: new Date(b.createdAt).toLocaleString("fr-MA")
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1",
						children: [
							b.name,
							" · ",
							b.phone,
							" · ",
							b.city
						]
					}),
					b.packageId && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted",
						children: b.packageId
					}),
					b.listingUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "break-all text-muted",
						children: b.listingUrl
					}),
					b.notes && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1",
						children: b.notes
					})
				]
			}, b.id))
		})
	})] });
}
//#endregion
export { AdminPage as component };

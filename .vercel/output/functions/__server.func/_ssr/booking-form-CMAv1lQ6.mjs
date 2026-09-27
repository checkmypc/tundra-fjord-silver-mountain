import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { Y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { E as Button, H as saveBooking, O as cn, U as whatsappHref, h as CITIES, j as useI18n } from "./router-fA54dPWS.mjs";
import { t as Input } from "./input-FwlNuia2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/booking-form-CMAv1lQ6.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Label({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: cn("mb-1.5 block text-sm font-medium text-fg", className),
		...props
	});
}
var Textarea = (0, import_react.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
	ref,
	className: cn("flex min-h-28 w-full rounded-md bg-surface px-3 py-2.5 text-sm text-fg shadow-[var(--shadow-border)] placeholder:text-muted outline-none focus-visible:shadow-[var(--shadow-border-hover)]", className),
	...props
}));
Textarea.displayName = "Textarea";
function BookingForm({ kind, packages, extra }) {
	const { t } = useI18n();
	const [sent, setSent] = (0, import_react.useState)(null);
	const [wa, setWa] = (0, import_react.useState)(null);
	function onSubmit(e) {
		e.preventDefault();
		const fd = new FormData(e.currentTarget);
		const booking = saveBooking({
			kind,
			name: String(fd.get("name") || ""),
			phone: String(fd.get("phone") || ""),
			city: String(fd.get("city") || ""),
			packageId: String(fd.get("package") || packages?.[0]?.id || ""),
			notes: String(fd.get("notes") || ""),
			listingUrl: String(fd.get("listing") || ""),
			machineType: String(fd.get("machine") || "")
		});
		const text = [
			`CHECKMYPC — ${kind}`,
			`${booking.name} · ${booking.city}`,
			booking.packageId,
			booking.listingUrl,
			booking.notes
		].filter(Boolean).join("\n");
		setWa(whatsappHref(booking.phone, text));
		setSent(booking.id);
	}
	if (sent) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl bg-surface p-6 shadow-[var(--shadow-border)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-lg font-semibold",
				children: t("book.sent")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1 text-sm text-muted",
				children: ["Ref ", sent]
			}),
			wa && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				className: "mt-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: wa,
					target: "_blank",
					rel: "noreferrer",
					children: "WhatsApp"
				})
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		className: "grid gap-4 rounded-xl bg-surface p-5 shadow-[var(--shadow-border)] sm:grid-cols-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				htmlFor: "name",
				children: t("book.name")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				id: "name",
				name: "name",
				required: true,
				autoComplete: "name"
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				htmlFor: "phone",
				children: t("book.phone")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				id: "phone",
				name: "phone",
				required: true,
				inputMode: "tel",
				placeholder: "06…"
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				htmlFor: "city",
				children: t("book.city")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
				id: "city",
				name: "city",
				className: "flex h-11 w-full rounded-md bg-bg px-3 text-sm shadow-[var(--shadow-border)]",
				defaultValue: CITIES[0],
				children: [CITIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: c }, c)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Other (quote travel)" })]
			})] }),
			packages && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				htmlFor: "package",
				children: t("book.package")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
				id: "package",
				name: "package",
				className: "flex h-11 w-full rounded-md bg-bg px-3 text-sm shadow-[var(--shadow-border)]",
				defaultValue: packages[0]?.id,
				children: packages.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
					value: p.id,
					children: [
						p.name,
						" — ",
						p.price,
						" DH"
					]
				}, p.id))
			})] }),
			extra === "machine" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				htmlFor: "machine",
				children: t("book.machine")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
				id: "machine",
				name: "machine",
				className: "flex h-11 w-full rounded-md bg-bg px-3 text-sm shadow-[var(--shadow-border)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
					value: "desktop",
					children: t("book.desktop")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
					value: "laptop",
					children: t("book.laptop")
				})]
			})] }),
			extra === "listing" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "sm:col-span-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "listing",
					children: t("book.listing")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "listing",
					name: "listing",
					placeholder: "https://"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "sm:col-span-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "notes",
					children: t("book.notes")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					id: "notes",
					name: "notes"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "sm:col-span-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					children: t("book.submit")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-xs text-muted",
					children: [t("est"), " · Casablanca / Rabat / Agadir"]
				})]
			})
		]
	});
}
//#endregion
export { BookingForm as t };

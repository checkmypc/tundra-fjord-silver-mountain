import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { Y as require_jsx_runtime, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Badge, c as Route$4, j as useI18n, k as dh, o as PageHero } from "./router-fA54dPWS.mjs";
import { t as Card } from "./card-DAYd47YE.mjs";
import { r as prebuilts, t as BUDGET_BRACKETS } from "./prebuilts-BrEe6Czj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/prebuilts.index-nomqeUyM.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function PrebuiltsPage() {
	const { t } = useI18n();
	const search = Route$4.useSearch();
	const all = prebuilts();
	const [bracket, setBracket] = (0, import_react.useState)(search.budget ?? null);
	const [store, setStore] = (0, import_react.useState)("");
	const [gpu, setGpu] = (0, import_react.useState)("");
	const [condition, setCondition] = (0, import_react.useState)("");
	const [sort, setSort] = (0, import_react.useState)("price-asc");
	const stores = [...new Set(all.map((b) => b.store))];
	const gpus = [...new Set(all.map((b) => b.gpu))];
	const rows = (0, import_react.useMemo)(() => {
		return all.filter((b) => {
			if (bracket) {
				const br = BUDGET_BRACKETS.find((x) => x.id === bracket);
				if (br && (b.price < br.min || b.price > br.max)) return false;
			}
			if (search.city && b.city !== search.city) return false;
			if (store && b.store !== store) return false;
			if (gpu && b.gpu !== gpu) return false;
			if (condition && b.condition !== condition) return false;
			return true;
		}).sort((a, b) => sort === "price-desc" ? b.price - a.price : a.price - b.price);
	}, [
		all,
		bracket,
		store,
		gpu,
		condition,
		sort,
		search.city
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: t("nav.prebuilts"),
		title: t("pre.title"),
		description: t("pre.desc")
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-3 flex flex-wrap gap-2",
				children: BUDGET_BRACKETS.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setBracket((cur) => cur === b.id ? null : b.id),
					className: `rounded-full px-3 py-2 text-sm ${bracket === b.id ? "bg-primary text-primary-fg" : "bg-surface shadow-[var(--shadow-border)]"}`,
					children: b.label
				}, b.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-6 grid grid-cols-2 gap-2 sm:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						className: "h-11 rounded-md bg-surface px-2 text-sm shadow-[var(--shadow-border)]",
						value: store,
						onChange: (e) => setStore(e.target.value),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "",
							children: "Stores"
						}), stores.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: s }, s))]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						className: "h-11 rounded-md bg-surface px-2 text-sm shadow-[var(--shadow-border)]",
						value: gpu,
						onChange: (e) => setGpu(e.target.value),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "",
							children: "GPU"
						}), gpus.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: s }, s))]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						className: "h-11 rounded-md bg-surface px-2 text-sm shadow-[var(--shadow-border)]",
						value: condition,
						onChange: (e) => setCondition(e.target.value),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
								value: "",
								children: [
									t("ui.new"),
									" & ",
									t("ui.used")
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "new",
								children: t("ui.new")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "used",
								children: t("ui.used")
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						className: "h-11 rounded-md bg-surface px-2 text-sm shadow-[var(--shadow-border)]",
						value: sort,
						onChange: (e) => setSort(e.target.value),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "price-asc",
							children: t("ui.sort.priceAsc")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "price-desc",
							children: t("ui.sort.priceDesc")
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mb-4 text-sm font-medium",
				children: [
					rows.length,
					" ",
					t("ui.systems")
				]
			}),
			rows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "rounded-xl bg-surface p-10 text-center text-muted",
				children: t("ui.noSystem")
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: rows.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/prebuilts/$id",
					params: { id: b.id },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "h-full rounded-2xl p-3 transition-[box-shadow] hover:shadow-[var(--shadow-border-hover)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative grid h-40 place-items-center rounded-lg bg-surface-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: b.image,
										alt: "",
										className: "h-28 object-contain"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										className: "absolute start-2 top-2",
										tone: b.condition === "used" ? "warn" : "ok",
										children: b.condition === "used" ? t("ui.used") : t("ui.new")
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "absolute end-2 top-2 rounded-md bg-surface px-2 py-1 text-[11px] font-semibold",
										children: b.store
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 font-medium",
								children: b.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-muted ltr-isolate",
								children: [
									b.cpu,
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									b.gpu,
									" · ",
									b.ram
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 font-display text-xl font-semibold tabular-nums ltr-isolate",
								children: dh(b.price)
							})
						]
					})
				}, b.id))
			})
		]
	})] });
}
//#endregion
export { PrebuiltsPage as component };

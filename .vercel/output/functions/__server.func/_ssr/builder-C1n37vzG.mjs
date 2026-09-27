import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { Y as require_jsx_runtime, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { C as decodeBuild, E as Button, I as categoryLabel, M as BUILDER_SLOTS, S as compatibility, T as useBuild, a as Badge, b as buildItems, f as Route$14, j as useI18n, k as dh, o as PageHero, w as encodeBuild, x as buildTotal, z as productsByCategory } from "./router-fA54dPWS.mjs";
import { t as Card } from "./card-DAYd47YE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/builder-C1n37vzG.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function BuilderPage() {
	const { t } = useI18n();
	const { build } = Route$14.useSearch();
	const slots = useBuild((s) => s.slots);
	const add = useBuild((s) => s.add);
	const remove = useBuild((s) => s.remove);
	const clear = useBuild((s) => s.clear);
	const replace = useBuild((s) => s.replace);
	(0, import_react.useEffect)(() => {
		if (!build) return;
		const decoded = decodeBuild(build);
		if (decoded) replace(decoded);
	}, [build, replace]);
	const items = buildItems(slots);
	const total = buildTotal(items);
	const used = buildTotal(items, true);
	const c = compatibility(items);
	function share() {
		const url = `${window.location.origin}/builder?build=${encodeURIComponent(encodeBuild(slots))}`;
		navigator.clipboard?.writeText(url).then(() => toast.success(t("ui.copied")), () => toast.message(url));
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: t("nav.builder"),
		title: t("hero.builder"),
		description: t("ui.pickParts")
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid max-w-6xl gap-6 px-4 py-8 lg:grid-cols-[1.25fr_.75fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "rounded-2xl p-2 sm:p-4",
			children: [BUILDER_SLOTS.map((slot) => {
				const selected = slots[slot]?.id ?? "";
				const parts = productsByCategory(slot);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-2 border-b border-border px-2 py-4 last:border-0 sm:grid-cols-[140px_1fr_auto] sm:items-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-sm font-medium",
							htmlFor: `slot-${slot}`,
							children: categoryLabel(slot)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							id: `slot-${slot}`,
							className: "h-11 w-full rounded-md bg-bg px-2 text-sm shadow-[var(--shadow-border)]",
							value: selected,
							onChange: (e) => {
								if (!e.target.value) remove(slot);
								else add(e.target.value, slot);
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								children: t("ui.choose")
							}), parts.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
								value: p.id,
								children: [
									p.name,
									" — ",
									dh(p.best_price)
								]
							}, p.id))]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/products",
							search: { category: slot },
							className: "text-sm font-medium text-primary",
							children: t("ui.browse")
						})
					]
				}, slot);
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-2 p-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: share,
					children: t("ui.share")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "secondary",
					onClick: clear,
					children: t("ui.clear")
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
			className: "h-max lg:sticky lg:top-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "rounded-2xl p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold tracking-wider text-muted uppercase",
						children: t("ui.total")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-3xl font-semibold tabular-nums ltr-isolate",
						children: dh(total)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 grid grid-cols-2 gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-lg bg-surface-2 p-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] text-muted",
									children: t("ui.usedEst")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-semibold tabular-nums ltr-isolate",
									children: dh(used)
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-lg bg-surface-2 p-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] text-muted",
									children: t("ui.power")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "font-semibold tabular-nums",
									children: [c.draw, "W"]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-lg bg-surface-2 p-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] text-muted",
									children: t("ui.psu")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-semibold tabular-nums",
									children: c.rec ? `${c.rec}W+` : "—"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-lg bg-surface-2 p-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] text-muted",
									children: t("ui.parts")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "font-semibold",
									children: [
										items.length,
										" / ",
										BUILDER_SLOTS.length
									]
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-5 mb-2 font-display font-semibold",
						children: t("ui.compat")
					}),
					c.checks.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: t("ui.pickParts")
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-2",
						children: c.checks.map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start justify-between gap-2 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: k.title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								tone: k.level === "pass" ? "ok" : k.level === "warn" ? "warn" : "danger",
								children: k.detail
							})]
						}, k.title))
					}),
					total >= 3e3 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 rounded-lg bg-surface-2 p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium",
							children: t("ui.assembleCta")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							className: "mt-3 w-full",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/assembly",
								search: {
									from: "builder",
									total: String(total)
								},
								children: t("ui.requestAssembly")
							})
						})]
					})
				]
			})
		})]
	})] });
}
//#endregion
export { BuilderPage as component };

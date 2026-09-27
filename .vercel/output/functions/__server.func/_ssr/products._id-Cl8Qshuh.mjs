import { J as notFound, Y as require_jsx_runtime, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as Bell, f as BellOff } from "../_libs/lucide-react.mjs";
import { A as freshness, D as ago, E as Button, L as lowestOffer, R as productById, T as useBuild, a as Badge, j as useI18n, k as dh, o as PageHero, r as Route$1 } from "./router-fA54dPWS.mjs";
import { t as Card } from "./card-DAYd47YE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products._id-Cl8Qshuh.js
var import_jsx_runtime = require_jsx_runtime();
function sparkPath(history) {
	if (history.length < 2) return "";
	const w = 560;
	const h = 160;
	const prices = history.map((x) => x.p);
	const min = Math.min(...prices);
	const span = Math.max(...prices) - min || 1;
	return history.map((pt, i) => {
		const x = i / (history.length - 1) * w;
		const y = h - (pt.p - min) / span * 144 - 8;
		return `${i === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`;
	}).join(" ");
}
function ProductPage() {
	const { id } = Route$1.useParams();
	const p = productById(id);
	const { t } = useI18n();
	const add = useBuild((s) => s.add);
	const slots = useBuild((s) => s.slots);
	const alerts = useBuild((s) => s.alerts);
	const toggleWatch = useBuild((s) => s.toggleWatch);
	if (!p) throw notFound();
	const offer = lowestOffer(p);
	const inBuild = slots[p.category]?.id === p.id;
	const watching = alerts.includes(p.id);
	const path = sparkPath(p.history);
	const sorted = [...p.offers].sort((a, b) => a.price - b.price);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageHero, {
			eyebrow: p.brand,
			title: p.name,
			description: `${p.store_count} ${t("ui.stores")} · ${t("ui.demo")}`,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-end gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted",
					children: t("ui.best")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-4xl font-semibold tabular-nums ltr-isolate",
					children: dh(p.best_price)
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-sm text-muted",
					children: [
						t("ui.msrp"),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "ltr-isolate",
							children: dh(p.msrp)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						t("ui.usedPrice"),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "ltr-isolate",
							children: dh(p.used_price)
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 flex flex-wrap gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						onClick: () => add(p.id, p.category),
						children: inBuild ? t("ui.inBuild") : t("ui.addBuild")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "secondary",
						onClick: () => toggleWatch(p.id),
						children: [watching ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BellOff, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "size-4" }), watching ? t("ui.watching") : t("ui.watch")]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "soft",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/compare",
							search: { category: p.category },
							children: t("nav.compare")
						})
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-6 px-4 py-8 lg:grid-cols-[1fr_1.15fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
				className: "grid place-items-center rounded-2xl p-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: p.image,
					alt: "",
					className: "h-64 w-full object-contain"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "rounded-2xl p-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between border-b border-border px-5 py-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-lg font-semibold",
							children: t("ui.offers")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							tone: "primary",
							children: t("ui.lowest")
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: sorted.map((o, i) => {
						const fresh = freshness(o.checked_minutes_ago);
						const isLow = offer && o.store === offer.store && o.price === offer.price;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "grid grid-cols-[1fr_auto] items-center gap-3 border-b border-border px-5 py-3 last:border-0 sm:grid-cols-[1fr_auto_auto]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-medium",
										children: o.store
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs text-muted",
										children: [
											o.city,
											" · ",
											ago(o.checked_minutes_ago, t)
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										tone: fresh === "live" ? "ok" : fresh === "recent" ? "primary" : "warn",
										className: "mt-1",
										children: t(`ui.${fresh === "stale" ? "stale" : fresh === "live" ? "live" : "recent"}`)
									})
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-end",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-display font-semibold tabular-nums ltr-isolate",
											children: dh(o.price)
										}),
										isLow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[11px] font-semibold text-primary",
											children: t("ui.lowest")
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[11px] text-muted",
											children: t(`ui.stock.${o.stock.replace("in_stock", "in").replace("low_stock", "low").replace("out_of_stock", "out")}`)
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "col-span-2 inline-flex h-11 items-center justify-center rounded-md bg-surface-2 px-3 text-sm font-medium sm:col-span-1",
									href: o.url.startsWith("http") ? o.url : void 0,
									onClick: (e) => {
										if (!o.url.startsWith("http")) e.preventDefault();
									},
									"aria-disabled": !o.url.startsWith("http"),
									children: t("ui.viewOffer")
								})
							]
						}, `${o.store}-${i}`);
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "px-5 py-3 text-xs text-muted",
						children: t("data.banner")
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-6 px-4 pb-12 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "rounded-2xl p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-3 font-display text-lg font-semibold",
					children: t("ui.specs")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("table", {
					className: "w-full text-sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: Object.entries(p.specs).map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-b border-border last:border-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "py-2 pe-4 text-start font-medium text-muted",
							children: k
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "py-2 ltr-isolate",
							children: v
						})]
					}, k)) })
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "rounded-2xl p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mb-3 font-display text-lg font-semibold",
						children: t("ui.history")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
						viewBox: "0 0 560 160",
						className: "w-full",
						role: "img",
						"aria-label": "Price history",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: path,
							fill: "none",
							stroke: "var(--primary)",
							strokeWidth: "2.4"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 flex justify-between text-xs text-muted",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: p.history[0]?.d }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: p.history.at(-1)?.d })]
					})
				]
			})]
		})
	] });
}
//#endregion
export { ProductPage as component };

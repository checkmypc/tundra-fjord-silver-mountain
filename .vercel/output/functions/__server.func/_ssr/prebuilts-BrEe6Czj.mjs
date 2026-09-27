import { R as productById } from "./router-fA54dPWS.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/prebuilts-BrEe6Czj.js
var RECIPES = [
	{
		id: "pb-esports",
		title: "Starter eSports",
		parts: [
			"ryzen-5-5600",
			"msi-b550m-pro-vdh",
			"corsair-16gb-ddr4",
			"kingston-nv2-1tb",
			"rtx-3060-12gb",
			"corsair-cv650",
			"dp-matrexx-40",
			"dp-ak400"
		],
		condition: "new",
		store: "Setup Game",
		city: "Casablanca"
	},
	{
		id: "pb-1080",
		title: "1080p Gaming Rig",
		parts: [
			"i5-12400f",
			"msi-b760m",
			"corsair-16gb-ddr4",
			"kingston-nv2-1tb",
			"rtx-4060-8gb",
			"corsair-cv650",
			"msi-mag-forge",
			"dp-ak400"
		],
		condition: "new",
		store: "PC Gamer Maroc",
		city: "Rabat"
	},
	{
		id: "pb-creator",
		title: "Ryzen Creator Station",
		parts: [
			"ryzen-7-5700x",
			"msi-b550m-pro-vdh",
			"gskill-32gb-ddr5",
			"samsung-990-1tb",
			"rx-7600-8gb",
			"msi-a750",
			"corsair-4000d",
			"dp-ls520"
		],
		condition: "new",
		store: "UltraPC",
		city: "Casablanca"
	},
	{
		id: "pb-1440",
		title: "1440p Performance",
		parts: [
			"ryzen-5-7600",
			"asus-b650m-ddr5",
			"gskill-32gb-ddr5",
			"samsung-990-1tb",
			"rtx-4070-12gb",
			"corsair-rm850",
			"corsair-4000d",
			"corsair-h100i"
		],
		condition: "new",
		store: "Matrix Informatique",
		city: "Marrakech"
	},
	{
		id: "pb-office",
		title: "Budget Office PC",
		parts: [
			"i5-12400f",
			"msi-b760m",
			"corsair-16gb-ddr4",
			"kingston-nv2-1tb",
			"corsair-cv650",
			"dp-matrexx-40",
			"dp-ak400"
		],
		condition: "used",
		store: "Iris Tech",
		city: "Tanger"
	},
	{
		id: "pb-used-gaming",
		title: "Used Gaming Deal",
		parts: [
			"ryzen-5-5600",
			"msi-b550m-pro-vdh",
			"corsair-16gb-ddr4",
			"seagate-2tb-hdd",
			"rtx-3060-12gb",
			"corsair-cv650",
			"dp-matrexx-40"
		],
		condition: "used",
		store: "Avito listing",
		city: "Casablanca"
	}
];
function pick(parts, cat) {
	return parts.find((p) => p.category === cat);
}
var BUDGET_BRACKETS = [
	{
		id: "under5",
		label: "< 5,000 DH",
		min: 0,
		max: 4999
	},
	{
		id: "5to7",
		label: "5,000 – 7,000 DH",
		min: 5e3,
		max: 6999
	},
	{
		id: "7to10",
		label: "7,000 – 10,000 DH",
		min: 7e3,
		max: 9999
	},
	{
		id: "10plus",
		label: "10,000 DH+",
		min: 1e4,
		max: 999999
	}
];
function prebuilts() {
	return RECIPES.map((r) => {
		const parts = r.parts.map((id) => productById(id)).filter((p) => Boolean(p));
		const used = r.condition === "used";
		const price = parts.reduce((a, p) => a + (used ? p.used_price : p.best_price), 0);
		const gpu = pick(parts, "gpu");
		const cpu = pick(parts, "cpu");
		const cs = pick(parts, "case");
		return {
			id: r.id,
			title: r.title,
			parts,
			price,
			condition: r.condition,
			store: r.store,
			city: r.city,
			gpu: gpu ? gpu.specs.Chipset || gpu.name : "Integrated",
			cpu: cpu?.name ?? "—",
			ram: pick(parts, "ram")?.name ?? "—",
			storage: pick(parts, "storage")?.name ?? "—",
			motherboard: pick(parts, "motherboard")?.name ?? "—",
			psu: pick(parts, "psu")?.name ?? "—",
			format: cs?.specs["Form factor"] === "ATX" ? "Mid Tower" : "Micro-ATX",
			image: (gpu || parts[0])?.image ?? "/parts/gpu.svg"
		};
	});
}
function prebuiltById(id) {
	return prebuilts().find((p) => p.id === id);
}
//#endregion
export { prebuiltById as n, prebuilts as r, BUDGET_BRACKETS as t };

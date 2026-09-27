import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { S as useRouter, Y as require_jsx_runtime, _ as Outlet, b as createRootRoute, f as Scripts, g as createRouter, m as useRouterState, p as HeadContent, v as lazyRouteComponent, x as Link, y as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { t as create } from "../_libs/zustand.mjs";
import { c as Moon, i as Sun, l as Menu, r as TriangleAlert, s as Search, t as X } from "../_libs/lucide-react.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/bookings-Cbk0m0pF.js
var KEY = "cmp.bookings.v1";
var ALERT_KEY = "cmp.alerts.v1";
function readBookings() {
	try {
		return JSON.parse(localStorage.getItem(KEY) || "[]");
	} catch {
		return [];
	}
}
function saveBooking(b) {
	const full = {
		...b,
		id: `bk-${Date.now()}`,
		createdAt: (/* @__PURE__ */ new Date()).toISOString()
	};
	const all = [full, ...readBookings()];
	localStorage.setItem(KEY, JSON.stringify(all));
	return full;
}
function readAlerts() {
	try {
		return JSON.parse(localStorage.getItem(ALERT_KEY) || "[]");
	} catch {
		return [];
	}
}
function toggleAlert(id) {
	const cur = readAlerts();
	const next = cur.includes(id) ? cur.filter((x) => x !== id) : [...cur, id];
	localStorage.setItem(ALERT_KEY, JSON.stringify(next));
	return next;
}
function whatsappHref(phone, text) {
	const digits = phone.replace(/[^\d]/g, "");
	const msg = encodeURIComponent(text);
	if (digits.length >= 9) return `https://wa.me/${digits}?text=${msg}`;
	return `https://wa.me/?text=${msg}`;
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/catalog-DxagDsxE.js
var catalog = {
	currency: "MAD",
	currency_symbol: "DH",
	generated: "2026-09-19",
	categories: [
		{
			"slug": "cpu",
			"label": "Processors",
			"icon": "assets/parts/cpu.svg",
			"image": "/parts/cpu.svg"
		},
		{
			"slug": "cooler",
			"label": "CPU Coolers",
			"icon": "assets/parts/cooler.svg",
			"image": "/parts/cooler.svg"
		},
		{
			"slug": "motherboard",
			"label": "Motherboards",
			"icon": "assets/parts/motherboard.svg",
			"image": "/parts/motherboard.svg"
		},
		{
			"slug": "ram",
			"label": "Memory (RAM)",
			"icon": "assets/parts/ram.svg",
			"image": "/parts/ram.svg"
		},
		{
			"slug": "storage",
			"label": "Storage",
			"icon": "assets/parts/ssd.svg",
			"image": "/parts/ssd.svg"
		},
		{
			"slug": "gpu",
			"label": "Graphics Cards",
			"icon": "assets/parts/gpu.svg",
			"image": "/parts/gpu.svg"
		},
		{
			"slug": "psu",
			"label": "Power Supplies",
			"icon": "assets/parts/psu.svg",
			"image": "/parts/psu.svg"
		},
		{
			"slug": "case",
			"label": "PC Cases",
			"icon": "assets/parts/case.svg",
			"image": "/parts/case.svg"
		},
		{
			"slug": "display",
			"label": "Displays",
			"icon": "assets/parts/gpu.svg",
			"image": "/parts/gpu.svg"
		},
		{
			"slug": "peripheral",
			"label": "Peripherals",
			"icon": "assets/parts/case.svg",
			"image": "/parts/case.svg"
		}
	],
	stores: [
		{
			"name": "Setup Game",
			"city": "Casablanca"
		},
		{
			"name": "PC Gamer Maroc",
			"city": "Rabat"
		},
		{
			"name": "UltraPC",
			"city": "Casablanca"
		},
		{
			"name": "Matrix Informatique",
			"city": "Marrakech"
		},
		{
			"name": "Iris Tech",
			"city": "Tanger"
		},
		{
			"name": "Jumia MA",
			"city": "Online"
		}
	],
	products: [
		{
			"id": "ryzen-5-5600",
			"category": "cpu",
			"name": "AMD Ryzen 5 5600",
			"brand": "AMD",
			"image": "/parts/cpu.svg",
			"msrp": 799,
			"best_price": 760,
			"used_price": 520,
			"in_stock": true,
			"store_count": 4,
			"power_draw": 90,
			"specs": {
				"Socket": "AM4",
				"Cores": "6",
				"Threads": "12",
				"Boost": "4.4 GHz",
				"TDP": "65W",
				"Integrated graphics": "No"
			},
			"offers": [
				{
					"store": "Matrix Informatique",
					"city": "Marrakech",
					"price": 760,
					"stock": "in_stock",
					"checked_minutes_ago": 12,
					"url": "#offer-matrix-informatique-1"
				},
				{
					"store": "Setup Game",
					"city": "Casablanca",
					"price": 760,
					"stock": "in_stock",
					"checked_minutes_ago": 45,
					"url": "#offer-setup-game-2"
				},
				{
					"store": "Iris Tech",
					"city": "Tanger",
					"price": 770,
					"stock": "in_stock",
					"checked_minutes_ago": 420,
					"url": "#offer-iris-tech-3"
				},
				{
					"store": "PC Gamer Maroc",
					"city": "Rabat",
					"price": 880,
					"stock": "in_stock",
					"checked_minutes_ago": 420,
					"url": "#offer-pc-gamer-maroc-0"
				}
			],
			"history": [
				{
					"d": "2026-06-27",
					"p": 830
				},
				{
					"d": "2026-07-04",
					"p": 830
				},
				{
					"d": "2026-07-11",
					"p": 840
				},
				{
					"d": "2026-07-18",
					"p": 840
				},
				{
					"d": "2026-07-25",
					"p": 830
				},
				{
					"d": "2026-08-01",
					"p": 840
				},
				{
					"d": "2026-08-08",
					"p": 820
				},
				{
					"d": "2026-08-15",
					"p": 830
				},
				{
					"d": "2026-08-22",
					"p": 820
				},
				{
					"d": "2026-08-29",
					"p": 810
				},
				{
					"d": "2026-09-05",
					"p": 790
				},
				{
					"d": "2026-09-12",
					"p": 780
				},
				{
					"d": "2026-09-19",
					"p": 790
				}
			]
		},
		{
			"id": "ryzen-5-7600",
			"category": "cpu",
			"name": "AMD Ryzen 5 7600",
			"brand": "AMD",
			"image": "/parts/cpu.svg",
			"msrp": 1999,
			"best_price": 2030,
			"used_price": 1380,
			"in_stock": true,
			"store_count": 3,
			"power_draw": 90,
			"specs": {
				"Socket": "AM5",
				"Cores": "6",
				"Threads": "12",
				"Boost": "5.1 GHz",
				"TDP": "65W",
				"Integrated graphics": "Yes"
			},
			"offers": [
				{
					"store": "Setup Game",
					"city": "Casablanca",
					"price": 2030,
					"stock": "in_stock",
					"checked_minutes_ago": 12,
					"url": "#offer-setup-game-0"
				},
				{
					"store": "Iris Tech",
					"city": "Tanger",
					"price": 2100,
					"stock": "in_stock",
					"checked_minutes_ago": 180,
					"url": "#offer-iris-tech-1"
				},
				{
					"store": "PC Gamer Maroc",
					"city": "Rabat",
					"price": 2150,
					"stock": "in_stock",
					"checked_minutes_ago": 90,
					"url": "#offer-pc-gamer-maroc-2"
				}
			],
			"history": [
				{
					"d": "2026-06-27",
					"p": 2240
				},
				{
					"d": "2026-07-04",
					"p": 2210
				},
				{
					"d": "2026-07-11",
					"p": 2180
				},
				{
					"d": "2026-07-18",
					"p": 2140
				},
				{
					"d": "2026-07-25",
					"p": 2150
				},
				{
					"d": "2026-08-01",
					"p": 2110
				},
				{
					"d": "2026-08-08",
					"p": 2080
				},
				{
					"d": "2026-08-15",
					"p": 2070
				},
				{
					"d": "2026-08-22",
					"p": 2040
				},
				{
					"d": "2026-08-29",
					"p": 2030
				},
				{
					"d": "2026-09-05",
					"p": 2030
				},
				{
					"d": "2026-09-12",
					"p": 1980
				},
				{
					"d": "2026-09-19",
					"p": 1980
				}
			]
		},
		{
			"id": "ryzen-7-5700x",
			"category": "cpu",
			"name": "AMD Ryzen 7 5700X",
			"brand": "AMD",
			"image": "/parts/cpu.svg",
			"msrp": 1450,
			"best_price": 1460,
			"used_price": 990,
			"in_stock": true,
			"store_count": 3,
			"power_draw": 90,
			"specs": {
				"Socket": "AM4",
				"Cores": "8",
				"Threads": "16",
				"Boost": "4.6 GHz",
				"TDP": "65W",
				"Integrated graphics": "No"
			},
			"offers": [
				{
					"store": "Matrix Informatique",
					"city": "Marrakech",
					"price": 1460,
					"stock": "in_stock",
					"checked_minutes_ago": 180,
					"url": "#offer-matrix-informatique-2"
				},
				{
					"store": "UltraPC",
					"city": "Casablanca",
					"price": 1490,
					"stock": "out_of_stock",
					"checked_minutes_ago": 12,
					"url": "#offer-ultrapc-0"
				},
				{
					"store": "PC Gamer Maroc",
					"city": "Rabat",
					"price": 1580,
					"stock": "in_stock",
					"checked_minutes_ago": 90,
					"url": "#offer-pc-gamer-maroc-1"
				}
			],
			"history": [
				{
					"d": "2026-06-27",
					"p": 1610
				},
				{
					"d": "2026-07-04",
					"p": 1630
				},
				{
					"d": "2026-07-11",
					"p": 1650
				},
				{
					"d": "2026-07-18",
					"p": 1640
				},
				{
					"d": "2026-07-25",
					"p": 1640
				},
				{
					"d": "2026-08-01",
					"p": 1600
				},
				{
					"d": "2026-08-08",
					"p": 1610
				},
				{
					"d": "2026-08-15",
					"p": 1610
				},
				{
					"d": "2026-08-22",
					"p": 1640
				},
				{
					"d": "2026-08-29",
					"p": 1650
				},
				{
					"d": "2026-09-05",
					"p": 1630
				},
				{
					"d": "2026-09-12",
					"p": 1610
				},
				{
					"d": "2026-09-19",
					"p": 1610
				}
			]
		},
		{
			"id": "i5-12400f",
			"category": "cpu",
			"name": "Intel Core i5-12400F",
			"brand": "Intel",
			"image": "/parts/cpu.svg",
			"msrp": 1190,
			"best_price": 1160,
			"used_price": 790,
			"in_stock": true,
			"store_count": 2,
			"power_draw": 90,
			"specs": {
				"Socket": "LGA1700",
				"Cores": "6",
				"Threads": "12",
				"Boost": "4.4 GHz",
				"TDP": "65W",
				"Integrated graphics": "No"
			},
			"offers": [{
				"store": "Matrix Informatique",
				"city": "Marrakech",
				"price": 1160,
				"stock": "in_stock",
				"checked_minutes_ago": 12,
				"url": "#offer-matrix-informatique-0"
			}, {
				"store": "UltraPC",
				"city": "Casablanca",
				"price": 1170,
				"stock": "in_stock",
				"checked_minutes_ago": 1440,
				"url": "#offer-ultrapc-1"
			}],
			"history": [
				{
					"d": "2026-06-27",
					"p": 1270
				},
				{
					"d": "2026-07-04",
					"p": 1280
				},
				{
					"d": "2026-07-11",
					"p": 1250
				},
				{
					"d": "2026-07-18",
					"p": 1240
				},
				{
					"d": "2026-07-25",
					"p": 1240
				},
				{
					"d": "2026-08-01",
					"p": 1250
				},
				{
					"d": "2026-08-08",
					"p": 1260
				},
				{
					"d": "2026-08-15",
					"p": 1270
				},
				{
					"d": "2026-08-22",
					"p": 1260
				},
				{
					"d": "2026-08-29",
					"p": 1250
				},
				{
					"d": "2026-09-05",
					"p": 1230
				},
				{
					"d": "2026-09-12",
					"p": 1240
				},
				{
					"d": "2026-09-19",
					"p": 1260
				}
			]
		},
		{
			"id": "i5-13400f",
			"category": "cpu",
			"name": "Intel Core i5-13400F",
			"brand": "Intel",
			"image": "/parts/cpu.svg",
			"msrp": 1690,
			"best_price": 1590,
			"used_price": 1080,
			"in_stock": true,
			"store_count": 3,
			"power_draw": 90,
			"specs": {
				"Socket": "LGA1700",
				"Cores": "10",
				"Threads": "16",
				"Boost": "4.6 GHz",
				"TDP": "65W",
				"Integrated graphics": "No"
			},
			"offers": [
				{
					"store": "Iris Tech",
					"city": "Tanger",
					"price": 1590,
					"stock": "in_stock",
					"checked_minutes_ago": 90,
					"url": "#offer-iris-tech-2"
				},
				{
					"store": "Setup Game",
					"city": "Casablanca",
					"price": 1670,
					"stock": "in_stock",
					"checked_minutes_ago": 180,
					"url": "#offer-setup-game-0"
				},
				{
					"store": "PC Gamer Maroc",
					"city": "Rabat",
					"price": 1870,
					"stock": "in_stock",
					"checked_minutes_ago": 90,
					"url": "#offer-pc-gamer-maroc-1"
				}
			],
			"history": [
				{
					"d": "2026-06-27",
					"p": 1880
				},
				{
					"d": "2026-07-04",
					"p": 1840
				},
				{
					"d": "2026-07-11",
					"p": 1860
				},
				{
					"d": "2026-07-18",
					"p": 1880
				},
				{
					"d": "2026-07-25",
					"p": 1880
				},
				{
					"d": "2026-08-01",
					"p": 1890
				},
				{
					"d": "2026-08-08",
					"p": 1880
				},
				{
					"d": "2026-08-15",
					"p": 1900
				},
				{
					"d": "2026-08-22",
					"p": 1920
				},
				{
					"d": "2026-08-29",
					"p": 1930
				},
				{
					"d": "2026-09-05",
					"p": 1920
				},
				{
					"d": "2026-09-12",
					"p": 1910
				},
				{
					"d": "2026-09-19",
					"p": 1890
				}
			]
		},
		{
			"id": "dp-ak400",
			"category": "cooler",
			"name": "Deepcool AK400",
			"brand": "Deepcool",
			"image": "/parts/cooler.svg",
			"msrp": 299,
			"best_price": 300,
			"used_price": 200,
			"in_stock": true,
			"store_count": 5,
			"power_draw": 5,
			"specs": {
				"Water cooled": "No",
				"Socket": "AM4 / AM5 / LGA1700",
				"Fan RPM": "1850 RPM",
				"Noise level": "29 dBA",
				"Height": "155 mm",
				"Radiator size": "—"
			},
			"offers": [
				{
					"store": "Matrix Informatique",
					"city": "Marrakech",
					"price": 300,
					"stock": "in_stock",
					"checked_minutes_ago": 12,
					"url": "#offer-matrix-informatique-1"
				},
				{
					"store": "Setup Game",
					"city": "Casablanca",
					"price": 310,
					"stock": "in_stock",
					"checked_minutes_ago": 90,
					"url": "#offer-setup-game-2"
				},
				{
					"store": "Iris Tech",
					"city": "Tanger",
					"price": 320,
					"stock": "in_stock",
					"checked_minutes_ago": 45,
					"url": "#offer-iris-tech-3"
				},
				{
					"store": "UltraPC",
					"city": "Casablanca",
					"price": 320,
					"stock": "in_stock",
					"checked_minutes_ago": 90,
					"url": "#offer-ultrapc-4"
				},
				{
					"store": "Jumia MA",
					"city": "Online",
					"price": 340,
					"stock": "in_stock",
					"checked_minutes_ago": 12,
					"url": "#offer-jumia-ma-0"
				}
			],
			"history": [
				{
					"d": "2026-06-27",
					"p": 350
				},
				{
					"d": "2026-07-04",
					"p": 350
				},
				{
					"d": "2026-07-11",
					"p": 340
				},
				{
					"d": "2026-07-18",
					"p": 340
				},
				{
					"d": "2026-07-25",
					"p": 340
				},
				{
					"d": "2026-08-01",
					"p": 340
				},
				{
					"d": "2026-08-08",
					"p": 340
				},
				{
					"d": "2026-08-15",
					"p": 330
				},
				{
					"d": "2026-08-22",
					"p": 330
				},
				{
					"d": "2026-08-29",
					"p": 330
				},
				{
					"d": "2026-09-05",
					"p": 330
				},
				{
					"d": "2026-09-12",
					"p": 330
				},
				{
					"d": "2026-09-19",
					"p": 330
				}
			]
		},
		{
			"id": "dp-ls520",
			"category": "cooler",
			"name": "Deepcool LS520 240mm",
			"brand": "Deepcool",
			"image": "/parts/cooler.svg",
			"msrp": 899,
			"best_price": 900,
			"used_price": 610,
			"in_stock": true,
			"store_count": 3,
			"power_draw": 5,
			"specs": {
				"Water cooled": "Yes",
				"Socket": "AM4 / AM5 / LGA1700",
				"Fan RPM": "2250 RPM",
				"Noise level": "32 dBA",
				"Height": "—",
				"Radiator size": "240 mm"
			},
			"offers": [
				{
					"store": "UltraPC",
					"city": "Casablanca",
					"price": 900,
					"stock": "in_stock",
					"checked_minutes_ago": 12,
					"url": "#offer-ultrapc-1"
				},
				{
					"store": "Iris Tech",
					"city": "Tanger",
					"price": 970,
					"stock": "out_of_stock",
					"checked_minutes_ago": 420,
					"url": "#offer-iris-tech-0"
				},
				{
					"store": "PC Gamer Maroc",
					"city": "Rabat",
					"price": 970,
					"stock": "in_stock",
					"checked_minutes_ago": 90,
					"url": "#offer-pc-gamer-maroc-2"
				}
			],
			"history": [
				{
					"d": "2026-06-27",
					"p": 1040
				},
				{
					"d": "2026-07-04",
					"p": 1020
				},
				{
					"d": "2026-07-11",
					"p": 1020
				},
				{
					"d": "2026-07-18",
					"p": 1010
				},
				{
					"d": "2026-07-25",
					"p": 1010
				},
				{
					"d": "2026-08-01",
					"p": 1010
				},
				{
					"d": "2026-08-08",
					"p": 1020
				},
				{
					"d": "2026-08-15",
					"p": 1020
				},
				{
					"d": "2026-08-22",
					"p": 1010
				},
				{
					"d": "2026-08-29",
					"p": 990
				},
				{
					"d": "2026-09-05",
					"p": 980
				},
				{
					"d": "2026-09-12",
					"p": 990
				},
				{
					"d": "2026-09-19",
					"p": 970
				}
			]
		},
		{
			"id": "corsair-h100i",
			"category": "cooler",
			"name": "Corsair iCUE H100i Elite",
			"brand": "Corsair",
			"image": "/parts/cooler.svg",
			"msrp": 1590,
			"best_price": 1530,
			"used_price": 1040,
			"in_stock": true,
			"store_count": 5,
			"power_draw": 5,
			"specs": {
				"Water cooled": "Yes",
				"Socket": "AM4 / AM5 / LGA1700",
				"Fan RPM": "2400 RPM",
				"Noise level": "36 dBA",
				"Height": "—",
				"Radiator size": "240 mm"
			},
			"offers": [
				{
					"store": "PC Gamer Maroc",
					"city": "Rabat",
					"price": 1530,
					"stock": "in_stock",
					"checked_minutes_ago": 90,
					"url": "#offer-pc-gamer-maroc-3"
				},
				{
					"store": "Jumia MA",
					"city": "Online",
					"price": 1560,
					"stock": "in_stock",
					"checked_minutes_ago": 420,
					"url": "#offer-jumia-ma-4"
				},
				{
					"store": "UltraPC",
					"city": "Casablanca",
					"price": 1580,
					"stock": "in_stock",
					"checked_minutes_ago": 90,
					"url": "#offer-ultrapc-0"
				},
				{
					"store": "Setup Game",
					"city": "Casablanca",
					"price": 1640,
					"stock": "out_of_stock",
					"checked_minutes_ago": 90,
					"url": "#offer-setup-game-1"
				},
				{
					"store": "Iris Tech",
					"city": "Tanger",
					"price": 1800,
					"stock": "in_stock",
					"checked_minutes_ago": 45,
					"url": "#offer-iris-tech-2"
				}
			],
			"history": [
				{
					"d": "2026-06-27",
					"p": 1830
				},
				{
					"d": "2026-07-04",
					"p": 1830
				},
				{
					"d": "2026-07-11",
					"p": 1840
				},
				{
					"d": "2026-07-18",
					"p": 1800
				},
				{
					"d": "2026-07-25",
					"p": 1810
				},
				{
					"d": "2026-08-01",
					"p": 1830
				},
				{
					"d": "2026-08-08",
					"p": 1840
				},
				{
					"d": "2026-08-15",
					"p": 1850
				},
				{
					"d": "2026-08-22",
					"p": 1840
				},
				{
					"d": "2026-08-29",
					"p": 1810
				},
				{
					"d": "2026-09-05",
					"p": 1820
				},
				{
					"d": "2026-09-12",
					"p": 1800
				},
				{
					"d": "2026-09-19",
					"p": 1810
				}
			]
		},
		{
			"id": "msi-b550m-pro-vdh",
			"category": "motherboard",
			"name": "MSI B550M PRO-VDH WIFI",
			"brand": "MSI",
			"image": "/parts/motherboard.svg",
			"msrp": 999,
			"best_price": 970,
			"used_price": 660,
			"in_stock": true,
			"store_count": 5,
			"power_draw": 30,
			"specs": {
				"Socket": "AM4",
				"Form factor": "Micro-ATX",
				"Memory type": "DDR4",
				"Memory slots": "4",
				"M.2 slots": "2",
				"Wi-Fi": "Yes"
			},
			"offers": [
				{
					"store": "Matrix Informatique",
					"city": "Marrakech",
					"price": 970,
					"stock": "in_stock",
					"checked_minutes_ago": 45,
					"url": "#offer-matrix-informatique-0"
				},
				{
					"store": "Setup Game",
					"city": "Casablanca",
					"price": 970,
					"stock": "low_stock",
					"checked_minutes_ago": 180,
					"url": "#offer-setup-game-2"
				},
				{
					"store": "Iris Tech",
					"city": "Tanger",
					"price": 1050,
					"stock": "in_stock",
					"checked_minutes_ago": 1440,
					"url": "#offer-iris-tech-4"
				},
				{
					"store": "Jumia MA",
					"city": "Online",
					"price": 1060,
					"stock": "in_stock",
					"checked_minutes_ago": 1440,
					"url": "#offer-jumia-ma-1"
				},
				{
					"store": "UltraPC",
					"city": "Casablanca",
					"price": 1070,
					"stock": "in_stock",
					"checked_minutes_ago": 420,
					"url": "#offer-ultrapc-3"
				}
			],
			"history": [
				{
					"d": "2026-06-27",
					"p": 1130
				},
				{
					"d": "2026-07-04",
					"p": 1140
				},
				{
					"d": "2026-07-11",
					"p": 1130
				},
				{
					"d": "2026-07-18",
					"p": 1140
				},
				{
					"d": "2026-07-25",
					"p": 1150
				},
				{
					"d": "2026-08-01",
					"p": 1130
				},
				{
					"d": "2026-08-08",
					"p": 1110
				},
				{
					"d": "2026-08-15",
					"p": 1100
				},
				{
					"d": "2026-08-22",
					"p": 1080
				},
				{
					"d": "2026-08-29",
					"p": 1080
				},
				{
					"d": "2026-09-05",
					"p": 1070
				},
				{
					"d": "2026-09-12",
					"p": 1060
				},
				{
					"d": "2026-09-19",
					"p": 1040
				}
			]
		},
		{
			"id": "asus-b650m-ddr5",
			"category": "motherboard",
			"name": "ASUS PRIME B650M-A",
			"brand": "Asus",
			"image": "/parts/motherboard.svg",
			"msrp": 1799,
			"best_price": 1700,
			"used_price": 1160,
			"in_stock": true,
			"store_count": 4,
			"power_draw": 30,
			"specs": {
				"Socket": "AM5",
				"Form factor": "Micro-ATX",
				"Memory type": "DDR5",
				"Memory slots": "4",
				"M.2 slots": "2",
				"Wi-Fi": "No"
			},
			"offers": [
				{
					"store": "Iris Tech",
					"city": "Tanger",
					"price": 1700,
					"stock": "in_stock",
					"checked_minutes_ago": 45,
					"url": "#offer-iris-tech-1"
				},
				{
					"store": "Matrix Informatique",
					"city": "Marrakech",
					"price": 1740,
					"stock": "in_stock",
					"checked_minutes_ago": 420,
					"url": "#offer-matrix-informatique-0"
				},
				{
					"store": "UltraPC",
					"city": "Casablanca",
					"price": 1750,
					"stock": "in_stock",
					"checked_minutes_ago": 1440,
					"url": "#offer-ultrapc-3"
				},
				{
					"store": "Jumia MA",
					"city": "Online",
					"price": 1910,
					"stock": "low_stock",
					"checked_minutes_ago": 45,
					"url": "#offer-jumia-ma-2"
				}
			],
			"history": [
				{
					"d": "2026-06-27",
					"p": 1860
				},
				{
					"d": "2026-07-04",
					"p": 1860
				},
				{
					"d": "2026-07-11",
					"p": 1860
				},
				{
					"d": "2026-07-18",
					"p": 1850
				},
				{
					"d": "2026-07-25",
					"p": 1860
				},
				{
					"d": "2026-08-01",
					"p": 1880
				},
				{
					"d": "2026-08-08",
					"p": 1830
				},
				{
					"d": "2026-08-15",
					"p": 1800
				},
				{
					"d": "2026-08-22",
					"p": 1760
				},
				{
					"d": "2026-08-29",
					"p": 1720
				},
				{
					"d": "2026-09-05",
					"p": 1710
				},
				{
					"d": "2026-09-12",
					"p": 1670
				},
				{
					"d": "2026-09-19",
					"p": 1690
				}
			]
		},
		{
			"id": "msi-b760m",
			"category": "motherboard",
			"name": "MSI PRO B760M-A",
			"brand": "MSI",
			"image": "/parts/motherboard.svg",
			"msrp": 1690,
			"best_price": 1660,
			"used_price": 1130,
			"in_stock": true,
			"store_count": 2,
			"power_draw": 30,
			"specs": {
				"Socket": "LGA1700",
				"Form factor": "Micro-ATX",
				"Memory type": "DDR4",
				"Memory slots": "4",
				"M.2 slots": "2",
				"Wi-Fi": "No"
			},
			"offers": [{
				"store": "UltraPC",
				"city": "Casablanca",
				"price": 1660,
				"stock": "in_stock",
				"checked_minutes_ago": 420,
				"url": "#offer-ultrapc-1"
			}, {
				"store": "Matrix Informatique",
				"city": "Marrakech",
				"price": 1800,
				"stock": "in_stock",
				"checked_minutes_ago": 420,
				"url": "#offer-matrix-informatique-0"
			}],
			"history": [
				{
					"d": "2026-06-27",
					"p": 1870
				},
				{
					"d": "2026-07-04",
					"p": 1900
				},
				{
					"d": "2026-07-11",
					"p": 1900
				},
				{
					"d": "2026-07-18",
					"p": 1920
				},
				{
					"d": "2026-07-25",
					"p": 1950
				},
				{
					"d": "2026-08-01",
					"p": 1920
				},
				{
					"d": "2026-08-08",
					"p": 1910
				},
				{
					"d": "2026-08-15",
					"p": 1940
				},
				{
					"d": "2026-08-22",
					"p": 1950
				},
				{
					"d": "2026-08-29",
					"p": 1910
				},
				{
					"d": "2026-09-05",
					"p": 1880
				},
				{
					"d": "2026-09-12",
					"p": 1860
				},
				{
					"d": "2026-09-19",
					"p": 1820
				}
			]
		},
		{
			"id": "corsair-16gb-ddr4",
			"category": "ram",
			"name": "Corsair Vengeance LPX 16GB",
			"brand": "Corsair",
			"image": "/parts/ram.svg",
			"msrp": 499,
			"best_price": 480,
			"used_price": 330,
			"in_stock": true,
			"store_count": 3,
			"power_draw": 10,
			"specs": {
				"Memory type": "DDR4",
				"Capacity": "16 GB",
				"Modules": "2 x 8 GB",
				"Speed": "3200 MHz",
				"CAS latency": "CL16",
				"RGB": "No"
			},
			"offers": [
				{
					"store": "PC Gamer Maroc",
					"city": "Rabat",
					"price": 480,
					"stock": "low_stock",
					"checked_minutes_ago": 180,
					"url": "#offer-pc-gamer-maroc-2"
				},
				{
					"store": "Matrix Informatique",
					"city": "Marrakech",
					"price": 540,
					"stock": "low_stock",
					"checked_minutes_ago": 45,
					"url": "#offer-matrix-informatique-0"
				},
				{
					"store": "Setup Game",
					"city": "Casablanca",
					"price": 560,
					"stock": "in_stock",
					"checked_minutes_ago": 90,
					"url": "#offer-setup-game-1"
				}
			],
			"history": [
				{
					"d": "2026-06-27",
					"p": 540
				},
				{
					"d": "2026-07-04",
					"p": 540
				},
				{
					"d": "2026-07-11",
					"p": 530
				},
				{
					"d": "2026-07-18",
					"p": 540
				},
				{
					"d": "2026-07-25",
					"p": 550
				},
				{
					"d": "2026-08-01",
					"p": 540
				},
				{
					"d": "2026-08-08",
					"p": 530
				},
				{
					"d": "2026-08-15",
					"p": 530
				},
				{
					"d": "2026-08-22",
					"p": 520
				},
				{
					"d": "2026-08-29",
					"p": 510
				},
				{
					"d": "2026-09-05",
					"p": 510
				},
				{
					"d": "2026-09-12",
					"p": 510
				},
				{
					"d": "2026-09-19",
					"p": 500
				}
			]
		},
		{
			"id": "gskill-32gb-ddr5",
			"category": "ram",
			"name": "G.Skill Trident Z5 32GB",
			"brand": "G.Skill",
			"image": "/parts/ram.svg",
			"msrp": 1199,
			"best_price": 1190,
			"used_price": 810,
			"in_stock": true,
			"store_count": 5,
			"power_draw": 10,
			"specs": {
				"Memory type": "DDR5",
				"Capacity": "32 GB",
				"Modules": "2 x 16 GB",
				"Speed": "6000 MHz",
				"CAS latency": "CL30",
				"RGB": "Yes"
			},
			"offers": [
				{
					"store": "Jumia MA",
					"city": "Online",
					"price": 1190,
					"stock": "out_of_stock",
					"checked_minutes_ago": 45,
					"url": "#offer-jumia-ma-2"
				},
				{
					"store": "PC Gamer Maroc",
					"city": "Rabat",
					"price": 1190,
					"stock": "in_stock",
					"checked_minutes_ago": 180,
					"url": "#offer-pc-gamer-maroc-3"
				},
				{
					"store": "Matrix Informatique",
					"city": "Marrakech",
					"price": 1250,
					"stock": "in_stock",
					"checked_minutes_ago": 45,
					"url": "#offer-matrix-informatique-0"
				},
				{
					"store": "UltraPC",
					"city": "Casablanca",
					"price": 1330,
					"stock": "in_stock",
					"checked_minutes_ago": 90,
					"url": "#offer-ultrapc-4"
				},
				{
					"store": "Setup Game",
					"city": "Casablanca",
					"price": 1360,
					"stock": "in_stock",
					"checked_minutes_ago": 90,
					"url": "#offer-setup-game-1"
				}
			],
			"history": [
				{
					"d": "2026-06-27",
					"p": 1310
				},
				{
					"d": "2026-07-04",
					"p": 1300
				},
				{
					"d": "2026-07-11",
					"p": 1300
				},
				{
					"d": "2026-07-18",
					"p": 1280
				},
				{
					"d": "2026-07-25",
					"p": 1260
				},
				{
					"d": "2026-08-01",
					"p": 1270
				},
				{
					"d": "2026-08-08",
					"p": 1250
				},
				{
					"d": "2026-08-15",
					"p": 1260
				},
				{
					"d": "2026-08-22",
					"p": 1250
				},
				{
					"d": "2026-08-29",
					"p": 1220
				},
				{
					"d": "2026-09-05",
					"p": 1190
				},
				{
					"d": "2026-09-12",
					"p": 1170
				},
				{
					"d": "2026-09-19",
					"p": 1170
				}
			]
		},
		{
			"id": "kingston-16gb-ddr5",
			"category": "ram",
			"name": "Kingston Fury Beast 16GB",
			"brand": "Kingston",
			"image": "/parts/ram.svg",
			"msrp": 699,
			"best_price": 680,
			"used_price": 460,
			"in_stock": true,
			"store_count": 3,
			"power_draw": 10,
			"specs": {
				"Memory type": "DDR5",
				"Capacity": "16 GB",
				"Modules": "2 x 8 GB",
				"Speed": "5200 MHz",
				"CAS latency": "CL40",
				"RGB": "No"
			},
			"offers": [
				{
					"store": "Jumia MA",
					"city": "Online",
					"price": 680,
					"stock": "in_stock",
					"checked_minutes_ago": 45,
					"url": "#offer-jumia-ma-2"
				},
				{
					"store": "Setup Game",
					"city": "Casablanca",
					"price": 720,
					"stock": "in_stock",
					"checked_minutes_ago": 420,
					"url": "#offer-setup-game-0"
				},
				{
					"store": "UltraPC",
					"city": "Casablanca",
					"price": 720,
					"stock": "out_of_stock",
					"checked_minutes_ago": 420,
					"url": "#offer-ultrapc-1"
				}
			],
			"history": [
				{
					"d": "2026-06-27",
					"p": 830
				},
				{
					"d": "2026-07-04",
					"p": 820
				},
				{
					"d": "2026-07-11",
					"p": 800
				},
				{
					"d": "2026-07-18",
					"p": 810
				},
				{
					"d": "2026-07-25",
					"p": 810
				},
				{
					"d": "2026-08-01",
					"p": 810
				},
				{
					"d": "2026-08-08",
					"p": 800
				},
				{
					"d": "2026-08-15",
					"p": 790
				},
				{
					"d": "2026-08-22",
					"p": 790
				},
				{
					"d": "2026-08-29",
					"p": 780
				},
				{
					"d": "2026-09-05",
					"p": 790
				},
				{
					"d": "2026-09-12",
					"p": 800
				},
				{
					"d": "2026-09-19",
					"p": 780
				}
			]
		},
		{
			"id": "kingston-nv2-1tb",
			"category": "storage",
			"name": "Kingston NV2 1TB NVMe",
			"brand": "Kingston",
			"image": "/parts/ssd.svg",
			"msrp": 649,
			"best_price": 640,
			"used_price": 440,
			"in_stock": true,
			"store_count": 2,
			"power_draw": 8,
			"specs": {
				"Type": "NVMe SSD",
				"Capacity": "1 TB",
				"Interface": "PCIe 4.0 x4",
				"Read speed": "3500 MB/s",
				"Form factor": "M.2 2280"
			},
			"offers": [{
				"store": "Iris Tech",
				"city": "Tanger",
				"price": 640,
				"stock": "in_stock",
				"checked_minutes_ago": 1440,
				"url": "#offer-iris-tech-1"
			}, {
				"store": "Jumia MA",
				"city": "Online",
				"price": 680,
				"stock": "in_stock",
				"checked_minutes_ago": 180,
				"url": "#offer-jumia-ma-0"
			}],
			"history": [
				{
					"d": "2026-06-27",
					"p": 740
				},
				{
					"d": "2026-07-04",
					"p": 740
				},
				{
					"d": "2026-07-11",
					"p": 750
				},
				{
					"d": "2026-07-18",
					"p": 740
				},
				{
					"d": "2026-07-25",
					"p": 740
				},
				{
					"d": "2026-08-01",
					"p": 740
				},
				{
					"d": "2026-08-08",
					"p": 750
				},
				{
					"d": "2026-08-15",
					"p": 740
				},
				{
					"d": "2026-08-22",
					"p": 750
				},
				{
					"d": "2026-08-29",
					"p": 750
				},
				{
					"d": "2026-09-05",
					"p": 750
				},
				{
					"d": "2026-09-12",
					"p": 740
				},
				{
					"d": "2026-09-19",
					"p": 730
				}
			]
		},
		{
			"id": "samsung-990-1tb",
			"category": "storage",
			"name": "Samsung 990 EVO 1TB",
			"brand": "Samsung",
			"image": "/parts/ssd.svg",
			"msrp": 1090,
			"best_price": 1040,
			"used_price": 710,
			"in_stock": true,
			"store_count": 2,
			"power_draw": 8,
			"specs": {
				"Type": "NVMe SSD",
				"Capacity": "1 TB",
				"Interface": "PCIe 4.0 x4",
				"Read speed": "5000 MB/s",
				"Form factor": "M.2 2280"
			},
			"offers": [{
				"store": "PC Gamer Maroc",
				"city": "Rabat",
				"price": 1040,
				"stock": "low_stock",
				"checked_minutes_ago": 90,
				"url": "#offer-pc-gamer-maroc-0"
			}, {
				"store": "Setup Game",
				"city": "Casablanca",
				"price": 1120,
				"stock": "in_stock",
				"checked_minutes_ago": 1440,
				"url": "#offer-setup-game-1"
			}],
			"history": [
				{
					"d": "2026-06-27",
					"p": 1270
				},
				{
					"d": "2026-07-04",
					"p": 1280
				},
				{
					"d": "2026-07-11",
					"p": 1260
				},
				{
					"d": "2026-07-18",
					"p": 1240
				},
				{
					"d": "2026-07-25",
					"p": 1220
				},
				{
					"d": "2026-08-01",
					"p": 1220
				},
				{
					"d": "2026-08-08",
					"p": 1190
				},
				{
					"d": "2026-08-15",
					"p": 1180
				},
				{
					"d": "2026-08-22",
					"p": 1170
				},
				{
					"d": "2026-08-29",
					"p": 1180
				},
				{
					"d": "2026-09-05",
					"p": 1200
				},
				{
					"d": "2026-09-12",
					"p": 1200
				},
				{
					"d": "2026-09-19",
					"p": 1180
				}
			]
		},
		{
			"id": "seagate-2tb-hdd",
			"category": "storage",
			"name": "Seagate BarraCuda 2TB",
			"brand": "Seagate",
			"image": "/parts/ssd.svg",
			"msrp": 549,
			"best_price": 530,
			"used_price": 360,
			"in_stock": true,
			"store_count": 4,
			"power_draw": 8,
			"specs": {
				"Type": "HDD",
				"Capacity": "2 TB",
				"Interface": "SATA III",
				"Read speed": "190 MB/s",
				"Form factor": "3.5\""
			},
			"offers": [
				{
					"store": "Setup Game",
					"city": "Casablanca",
					"price": 530,
					"stock": "in_stock",
					"checked_minutes_ago": 180,
					"url": "#offer-setup-game-3"
				},
				{
					"store": "PC Gamer Maroc",
					"city": "Rabat",
					"price": 550,
					"stock": "in_stock",
					"checked_minutes_ago": 90,
					"url": "#offer-pc-gamer-maroc-0"
				},
				{
					"store": "UltraPC",
					"city": "Casablanca",
					"price": 570,
					"stock": "in_stock",
					"checked_minutes_ago": 420,
					"url": "#offer-ultrapc-1"
				},
				{
					"store": "Jumia MA",
					"city": "Online",
					"price": 600,
					"stock": "in_stock",
					"checked_minutes_ago": 12,
					"url": "#offer-jumia-ma-2"
				}
			],
			"history": [
				{
					"d": "2026-06-27",
					"p": 570
				},
				{
					"d": "2026-07-04",
					"p": 560
				},
				{
					"d": "2026-07-11",
					"p": 560
				},
				{
					"d": "2026-07-18",
					"p": 550
				},
				{
					"d": "2026-07-25",
					"p": 560
				},
				{
					"d": "2026-08-01",
					"p": 560
				},
				{
					"d": "2026-08-08",
					"p": 560
				},
				{
					"d": "2026-08-15",
					"p": 560
				},
				{
					"d": "2026-08-22",
					"p": 560
				},
				{
					"d": "2026-08-29",
					"p": 550
				},
				{
					"d": "2026-09-05",
					"p": 560
				},
				{
					"d": "2026-09-12",
					"p": 550
				},
				{
					"d": "2026-09-19",
					"p": 550
				}
			]
		},
		{
			"id": "rtx-4060-8gb",
			"category": "gpu",
			"name": "MSI GeForce RTX 4060 Ventus 8GB",
			"brand": "MSI",
			"image": "/parts/gpu.svg",
			"msrp": 3499,
			"best_price": 3800,
			"used_price": 2580,
			"in_stock": true,
			"store_count": 3,
			"power_draw": 115,
			"specs": {
				"Chipset": "RTX 4060",
				"Memory": "8 GB GDDR6",
				"Length": "199 mm",
				"TDP": "115W",
				"Power connectors": "1 x 8-pin",
				"Outputs": "3x DP, 1x HDMI"
			},
			"offers": [
				{
					"store": "Setup Game",
					"city": "Casablanca",
					"price": 3800,
					"stock": "low_stock",
					"checked_minutes_ago": 45,
					"url": "#offer-setup-game-0"
				},
				{
					"store": "Matrix Informatique",
					"city": "Marrakech",
					"price": 3870,
					"stock": "low_stock",
					"checked_minutes_ago": 1440,
					"url": "#offer-matrix-informatique-2"
				},
				{
					"store": "Iris Tech",
					"city": "Tanger",
					"price": 3930,
					"stock": "low_stock",
					"checked_minutes_ago": 420,
					"url": "#offer-iris-tech-1"
				}
			],
			"history": [
				{
					"d": "2026-06-27",
					"p": 3970
				},
				{
					"d": "2026-07-04",
					"p": 3980
				},
				{
					"d": "2026-07-11",
					"p": 3990
				},
				{
					"d": "2026-07-18",
					"p": 3920
				},
				{
					"d": "2026-07-25",
					"p": 3830
				},
				{
					"d": "2026-08-01",
					"p": 3760
				},
				{
					"d": "2026-08-08",
					"p": 3720
				},
				{
					"d": "2026-08-15",
					"p": 3640
				},
				{
					"d": "2026-08-22",
					"p": 3670
				},
				{
					"d": "2026-08-29",
					"p": 3660
				},
				{
					"d": "2026-09-05",
					"p": 3660
				},
				{
					"d": "2026-09-12",
					"p": 3660
				},
				{
					"d": "2026-09-19",
					"p": 3670
				}
			]
		},
		{
			"id": "rtx-4070-12gb",
			"category": "gpu",
			"name": "ASUS Dual RTX 4070 12GB",
			"brand": "Asus",
			"image": "/parts/gpu.svg",
			"msrp": 6790,
			"best_price": 6700,
			"used_price": 4560,
			"in_stock": true,
			"store_count": 5,
			"power_draw": 200,
			"specs": {
				"Chipset": "RTX 4070",
				"Memory": "12 GB GDDR6X",
				"Length": "227 mm",
				"TDP": "200W",
				"Power connectors": "1 x 8-pin",
				"Outputs": "3x DP, 1x HDMI"
			},
			"offers": [
				{
					"store": "Matrix Informatique",
					"city": "Marrakech",
					"price": 6700,
					"stock": "low_stock",
					"checked_minutes_ago": 45,
					"url": "#offer-matrix-informatique-2"
				},
				{
					"store": "Setup Game",
					"city": "Casablanca",
					"price": 7030,
					"stock": "low_stock",
					"checked_minutes_ago": 90,
					"url": "#offer-setup-game-1"
				},
				{
					"store": "UltraPC",
					"city": "Casablanca",
					"price": 7280,
					"stock": "in_stock",
					"checked_minutes_ago": 1440,
					"url": "#offer-ultrapc-0"
				},
				{
					"store": "Iris Tech",
					"city": "Tanger",
					"price": 7390,
					"stock": "out_of_stock",
					"checked_minutes_ago": 180,
					"url": "#offer-iris-tech-3"
				},
				{
					"store": "Jumia MA",
					"city": "Online",
					"price": 7530,
					"stock": "in_stock",
					"checked_minutes_ago": 1440,
					"url": "#offer-jumia-ma-4"
				}
			],
			"history": [
				{
					"d": "2026-06-27",
					"p": 7170
				},
				{
					"d": "2026-07-04",
					"p": 7170
				},
				{
					"d": "2026-07-11",
					"p": 7040
				},
				{
					"d": "2026-07-18",
					"p": 7040
				},
				{
					"d": "2026-07-25",
					"p": 6960
				},
				{
					"d": "2026-08-01",
					"p": 6960
				},
				{
					"d": "2026-08-08",
					"p": 6980
				},
				{
					"d": "2026-08-15",
					"p": 6980
				},
				{
					"d": "2026-08-22",
					"p": 6840
				},
				{
					"d": "2026-08-29",
					"p": 6800
				},
				{
					"d": "2026-09-05",
					"p": 6770
				},
				{
					"d": "2026-09-12",
					"p": 6860
				},
				{
					"d": "2026-09-19",
					"p": 6720
				}
			]
		},
		{
			"id": "rx-7600-8gb",
			"category": "gpu",
			"name": "Sapphire Pulse RX 7600 8GB",
			"brand": "Sapphire",
			"image": "/parts/gpu.svg",
			"msrp": 3099,
			"best_price": 3200,
			"used_price": 2180,
			"in_stock": true,
			"store_count": 3,
			"power_draw": 165,
			"specs": {
				"Chipset": "RX 7600",
				"Memory": "8 GB GDDR6",
				"Length": "204 mm",
				"TDP": "165W",
				"Power connectors": "1 x 8-pin",
				"Outputs": "2x DP, 2x HDMI"
			},
			"offers": [
				{
					"store": "UltraPC",
					"city": "Casablanca",
					"price": 3040,
					"stock": "out_of_stock",
					"checked_minutes_ago": 180,
					"url": "#offer-ultrapc-2"
				},
				{
					"store": "Matrix Informatique",
					"city": "Marrakech",
					"price": 3200,
					"stock": "in_stock",
					"checked_minutes_ago": 420,
					"url": "#offer-matrix-informatique-1"
				},
				{
					"store": "Jumia MA",
					"city": "Online",
					"price": 3350,
					"stock": "in_stock",
					"checked_minutes_ago": 180,
					"url": "#offer-jumia-ma-0"
				}
			],
			"history": [
				{
					"d": "2026-06-27",
					"p": 3210
				},
				{
					"d": "2026-07-04",
					"p": 3230
				},
				{
					"d": "2026-07-11",
					"p": 3280
				},
				{
					"d": "2026-07-18",
					"p": 3260
				},
				{
					"d": "2026-07-25",
					"p": 3210
				},
				{
					"d": "2026-08-01",
					"p": 3160
				},
				{
					"d": "2026-08-08",
					"p": 3200
				},
				{
					"d": "2026-08-15",
					"p": 3140
				},
				{
					"d": "2026-08-22",
					"p": 3140
				},
				{
					"d": "2026-08-29",
					"p": 3080
				},
				{
					"d": "2026-09-05",
					"p": 3060
				},
				{
					"d": "2026-09-12",
					"p": 3100
				},
				{
					"d": "2026-09-19",
					"p": 3040
				}
			]
		},
		{
			"id": "rtx-3060-12gb",
			"category": "gpu",
			"name": "Gigabyte RTX 3060 12GB",
			"brand": "Gigabyte",
			"image": "/parts/gpu.svg",
			"msrp": 2790,
			"best_price": 2850,
			"used_price": 1940,
			"in_stock": true,
			"store_count": 4,
			"power_draw": 170,
			"specs": {
				"Chipset": "RTX 3060",
				"Memory": "12 GB GDDR6",
				"Length": "242 mm",
				"TDP": "170W",
				"Power connectors": "1 x 8-pin",
				"Outputs": "2x DP, 2x HDMI"
			},
			"offers": [
				{
					"store": "UltraPC",
					"city": "Casablanca",
					"price": 2710,
					"stock": "out_of_stock",
					"checked_minutes_ago": 1440,
					"url": "#offer-ultrapc-1"
				},
				{
					"store": "Matrix Informatique",
					"city": "Marrakech",
					"price": 2850,
					"stock": "in_stock",
					"checked_minutes_ago": 12,
					"url": "#offer-matrix-informatique-3"
				},
				{
					"store": "PC Gamer Maroc",
					"city": "Rabat",
					"price": 2870,
					"stock": "in_stock",
					"checked_minutes_ago": 45,
					"url": "#offer-pc-gamer-maroc-2"
				},
				{
					"store": "Setup Game",
					"city": "Casablanca",
					"price": 3120,
					"stock": "in_stock",
					"checked_minutes_ago": 12,
					"url": "#offer-setup-game-0"
				}
			],
			"history": [
				{
					"d": "2026-06-27",
					"p": 3150
				},
				{
					"d": "2026-07-04",
					"p": 3170
				},
				{
					"d": "2026-07-11",
					"p": 3190
				},
				{
					"d": "2026-07-18",
					"p": 3130
				},
				{
					"d": "2026-07-25",
					"p": 3170
				},
				{
					"d": "2026-08-01",
					"p": 3180
				},
				{
					"d": "2026-08-08",
					"p": 3210
				},
				{
					"d": "2026-08-15",
					"p": 3170
				},
				{
					"d": "2026-08-22",
					"p": 3140
				},
				{
					"d": "2026-08-29",
					"p": 3110
				},
				{
					"d": "2026-09-05",
					"p": 3150
				},
				{
					"d": "2026-09-12",
					"p": 3150
				},
				{
					"d": "2026-09-19",
					"p": 3120
				}
			]
		},
		{
			"id": "corsair-cv650",
			"category": "psu",
			"name": "Corsair CV650 650W",
			"brand": "Corsair",
			"image": "/parts/psu.svg",
			"msrp": 649,
			"best_price": 640,
			"used_price": 440,
			"in_stock": true,
			"store_count": 5,
			"power_draw": 0,
			"specs": {
				"Wattage": "650 W",
				"Efficiency": "80+ Bronze",
				"Modular": "No",
				"Form factor": "ATX",
				"PCIe connectors": "2"
			},
			"offers": [
				{
					"store": "Setup Game",
					"city": "Casablanca",
					"price": 640,
					"stock": "in_stock",
					"checked_minutes_ago": 420,
					"url": "#offer-setup-game-1"
				},
				{
					"store": "Jumia MA",
					"city": "Online",
					"price": 650,
					"stock": "low_stock",
					"checked_minutes_ago": 180,
					"url": "#offer-jumia-ma-2"
				},
				{
					"store": "Matrix Informatique",
					"city": "Marrakech",
					"price": 660,
					"stock": "low_stock",
					"checked_minutes_ago": 420,
					"url": "#offer-matrix-informatique-4"
				},
				{
					"store": "UltraPC",
					"city": "Casablanca",
					"price": 720,
					"stock": "in_stock",
					"checked_minutes_ago": 45,
					"url": "#offer-ultrapc-0"
				},
				{
					"store": "Iris Tech",
					"city": "Tanger",
					"price": 720,
					"stock": "low_stock",
					"checked_minutes_ago": 1440,
					"url": "#offer-iris-tech-3"
				}
			],
			"history": [
				{
					"d": "2026-06-27",
					"p": 730
				},
				{
					"d": "2026-07-04",
					"p": 710
				},
				{
					"d": "2026-07-11",
					"p": 710
				},
				{
					"d": "2026-07-18",
					"p": 710
				},
				{
					"d": "2026-07-25",
					"p": 710
				},
				{
					"d": "2026-08-01",
					"p": 710
				},
				{
					"d": "2026-08-08",
					"p": 700
				},
				{
					"d": "2026-08-15",
					"p": 690
				},
				{
					"d": "2026-08-22",
					"p": 700
				},
				{
					"d": "2026-08-29",
					"p": 680
				},
				{
					"d": "2026-09-05",
					"p": 680
				},
				{
					"d": "2026-09-12",
					"p": 670
				},
				{
					"d": "2026-09-19",
					"p": 660
				}
			]
		},
		{
			"id": "msi-a750",
			"category": "psu",
			"name": "MSI MAG A750BN 750W",
			"brand": "MSI",
			"image": "/parts/psu.svg",
			"msrp": 949,
			"best_price": 980,
			"used_price": 670,
			"in_stock": true,
			"store_count": 4,
			"power_draw": 0,
			"specs": {
				"Wattage": "750 W",
				"Efficiency": "80+ Bronze",
				"Modular": "No",
				"Form factor": "ATX",
				"PCIe connectors": "4"
			},
			"offers": [
				{
					"store": "Iris Tech",
					"city": "Tanger",
					"price": 980,
					"stock": "in_stock",
					"checked_minutes_ago": 180,
					"url": "#offer-iris-tech-3"
				},
				{
					"store": "Matrix Informatique",
					"city": "Marrakech",
					"price": 1e3,
					"stock": "in_stock",
					"checked_minutes_ago": 45,
					"url": "#offer-matrix-informatique-0"
				},
				{
					"store": "PC Gamer Maroc",
					"city": "Rabat",
					"price": 1010,
					"stock": "in_stock",
					"checked_minutes_ago": 420,
					"url": "#offer-pc-gamer-maroc-1"
				},
				{
					"store": "UltraPC",
					"city": "Casablanca",
					"price": 1060,
					"stock": "in_stock",
					"checked_minutes_ago": 45,
					"url": "#offer-ultrapc-2"
				}
			],
			"history": [
				{
					"d": "2026-06-27",
					"p": 1040
				},
				{
					"d": "2026-07-04",
					"p": 1020
				},
				{
					"d": "2026-07-11",
					"p": 1010
				},
				{
					"d": "2026-07-18",
					"p": 1e3
				},
				{
					"d": "2026-07-25",
					"p": 990
				},
				{
					"d": "2026-08-01",
					"p": 980
				},
				{
					"d": "2026-08-08",
					"p": 990
				},
				{
					"d": "2026-08-15",
					"p": 970
				},
				{
					"d": "2026-08-22",
					"p": 950
				},
				{
					"d": "2026-08-29",
					"p": 960
				},
				{
					"d": "2026-09-05",
					"p": 950
				},
				{
					"d": "2026-09-12",
					"p": 950
				},
				{
					"d": "2026-09-19",
					"p": 940
				}
			]
		},
		{
			"id": "corsair-rm850",
			"category": "psu",
			"name": "Corsair RM850e 850W",
			"brand": "Corsair",
			"image": "/parts/psu.svg",
			"msrp": 1690,
			"best_price": 1620,
			"used_price": 1100,
			"in_stock": true,
			"store_count": 4,
			"power_draw": 0,
			"specs": {
				"Wattage": "850 W",
				"Efficiency": "80+ Gold",
				"Modular": "Full",
				"Form factor": "ATX",
				"PCIe connectors": "4"
			},
			"offers": [
				{
					"store": "Matrix Informatique",
					"city": "Marrakech",
					"price": 1620,
					"stock": "low_stock",
					"checked_minutes_ago": 180,
					"url": "#offer-matrix-informatique-2"
				},
				{
					"store": "PC Gamer Maroc",
					"city": "Rabat",
					"price": 1720,
					"stock": "in_stock",
					"checked_minutes_ago": 90,
					"url": "#offer-pc-gamer-maroc-3"
				},
				{
					"store": "Setup Game",
					"city": "Casablanca",
					"price": 1760,
					"stock": "in_stock",
					"checked_minutes_ago": 45,
					"url": "#offer-setup-game-1"
				},
				{
					"store": "UltraPC",
					"city": "Casablanca",
					"price": 1780,
					"stock": "in_stock",
					"checked_minutes_ago": 1440,
					"url": "#offer-ultrapc-0"
				}
			],
			"history": [
				{
					"d": "2026-06-27",
					"p": 1980
				},
				{
					"d": "2026-07-04",
					"p": 1930
				},
				{
					"d": "2026-07-11",
					"p": 1880
				},
				{
					"d": "2026-07-18",
					"p": 1890
				},
				{
					"d": "2026-07-25",
					"p": 1910
				},
				{
					"d": "2026-08-01",
					"p": 1900
				},
				{
					"d": "2026-08-08",
					"p": 1900
				},
				{
					"d": "2026-08-15",
					"p": 1850
				},
				{
					"d": "2026-08-22",
					"p": 1830
				},
				{
					"d": "2026-08-29",
					"p": 1850
				},
				{
					"d": "2026-09-05",
					"p": 1870
				},
				{
					"d": "2026-09-12",
					"p": 1890
				},
				{
					"d": "2026-09-19",
					"p": 1910
				}
			]
		},
		{
			"id": "dp-matrexx-40",
			"category": "case",
			"name": "Deepcool Matrexx 40",
			"brand": "Deepcool",
			"image": "/parts/case.svg",
			"msrp": 449,
			"best_price": 500,
			"used_price": 340,
			"in_stock": true,
			"store_count": 3,
			"power_draw": 6,
			"specs": {
				"Form factor": "Micro-ATX",
				"Side panel": "Tempered glass",
				"Max GPU length": "320 mm",
				"Max cooler height": "165 mm",
				"Included fans": "1"
			},
			"offers": [
				{
					"store": "Setup Game",
					"city": "Casablanca",
					"price": 440,
					"stock": "out_of_stock",
					"checked_minutes_ago": 12,
					"url": "#offer-setup-game-0"
				},
				{
					"store": "Iris Tech",
					"city": "Tanger",
					"price": 500,
					"stock": "low_stock",
					"checked_minutes_ago": 12,
					"url": "#offer-iris-tech-2"
				},
				{
					"store": "PC Gamer Maroc",
					"city": "Rabat",
					"price": 510,
					"stock": "low_stock",
					"checked_minutes_ago": 1440,
					"url": "#offer-pc-gamer-maroc-1"
				}
			],
			"history": [
				{
					"d": "2026-06-27",
					"p": 490
				},
				{
					"d": "2026-07-04",
					"p": 490
				},
				{
					"d": "2026-07-11",
					"p": 490
				},
				{
					"d": "2026-07-18",
					"p": 490
				},
				{
					"d": "2026-07-25",
					"p": 490
				},
				{
					"d": "2026-08-01",
					"p": 490
				},
				{
					"d": "2026-08-08",
					"p": 480
				},
				{
					"d": "2026-08-15",
					"p": 470
				},
				{
					"d": "2026-08-22",
					"p": 470
				},
				{
					"d": "2026-08-29",
					"p": 470
				},
				{
					"d": "2026-09-05",
					"p": 460
				},
				{
					"d": "2026-09-12",
					"p": 450
				},
				{
					"d": "2026-09-19",
					"p": 450
				}
			]
		},
		{
			"id": "msi-mag-forge",
			"category": "case",
			"name": "MSI MAG Forge 100R",
			"brand": "MSI",
			"image": "/parts/case.svg",
			"msrp": 699,
			"best_price": 700,
			"used_price": 480,
			"in_stock": true,
			"store_count": 3,
			"power_draw": 6,
			"specs": {
				"Form factor": "ATX",
				"Side panel": "Tempered glass",
				"Max GPU length": "330 mm",
				"Max cooler height": "160 mm",
				"Included fans": "4"
			},
			"offers": [
				{
					"store": "UltraPC",
					"city": "Casablanca",
					"price": 700,
					"stock": "in_stock",
					"checked_minutes_ago": 90,
					"url": "#offer-ultrapc-1"
				},
				{
					"store": "PC Gamer Maroc",
					"city": "Rabat",
					"price": 750,
					"stock": "low_stock",
					"checked_minutes_ago": 180,
					"url": "#offer-pc-gamer-maroc-2"
				},
				{
					"store": "Matrix Informatique",
					"city": "Marrakech",
					"price": 770,
					"stock": "in_stock",
					"checked_minutes_ago": 420,
					"url": "#offer-matrix-informatique-0"
				}
			],
			"history": [
				{
					"d": "2026-06-27",
					"p": 780
				},
				{
					"d": "2026-07-04",
					"p": 760
				},
				{
					"d": "2026-07-11",
					"p": 750
				},
				{
					"d": "2026-07-18",
					"p": 750
				},
				{
					"d": "2026-07-25",
					"p": 730
				},
				{
					"d": "2026-08-01",
					"p": 720
				},
				{
					"d": "2026-08-08",
					"p": 730
				},
				{
					"d": "2026-08-15",
					"p": 730
				},
				{
					"d": "2026-08-22",
					"p": 710
				},
				{
					"d": "2026-08-29",
					"p": 700
				},
				{
					"d": "2026-09-05",
					"p": 700
				},
				{
					"d": "2026-09-12",
					"p": 690
				},
				{
					"d": "2026-09-19",
					"p": 690
				}
			]
		},
		{
			"id": "corsair-4000d",
			"category": "case",
			"name": "Corsair 4000D Airflow",
			"brand": "Corsair",
			"image": "/parts/case.svg",
			"msrp": 1090,
			"best_price": 1070,
			"used_price": 730,
			"in_stock": true,
			"store_count": 4,
			"power_draw": 6,
			"specs": {
				"Form factor": "ATX",
				"Side panel": "Tempered glass",
				"Max GPU length": "360 mm",
				"Max cooler height": "170 mm",
				"Included fans": "2"
			},
			"offers": [
				{
					"store": "Iris Tech",
					"city": "Tanger",
					"price": 1070,
					"stock": "in_stock",
					"checked_minutes_ago": 90,
					"url": "#offer-iris-tech-3"
				},
				{
					"store": "Jumia MA",
					"city": "Online",
					"price": 1110,
					"stock": "in_stock",
					"checked_minutes_ago": 90,
					"url": "#offer-jumia-ma-0"
				},
				{
					"store": "UltraPC",
					"city": "Casablanca",
					"price": 1130,
					"stock": "in_stock",
					"checked_minutes_ago": 45,
					"url": "#offer-ultrapc-2"
				},
				{
					"store": "Matrix Informatique",
					"city": "Marrakech",
					"price": 1190,
					"stock": "in_stock",
					"checked_minutes_ago": 45,
					"url": "#offer-matrix-informatique-1"
				}
			],
			"history": [
				{
					"d": "2026-06-27",
					"p": 1150
				},
				{
					"d": "2026-07-04",
					"p": 1150
				},
				{
					"d": "2026-07-11",
					"p": 1160
				},
				{
					"d": "2026-07-18",
					"p": 1160
				},
				{
					"d": "2026-07-25",
					"p": 1170
				},
				{
					"d": "2026-08-01",
					"p": 1140
				},
				{
					"d": "2026-08-08",
					"p": 1140
				},
				{
					"d": "2026-08-15",
					"p": 1150
				},
				{
					"d": "2026-08-22",
					"p": 1130
				},
				{
					"d": "2026-08-29",
					"p": 1100
				},
				{
					"d": "2026-09-05",
					"p": 1100
				},
				{
					"d": "2026-09-12",
					"p": 1090
				},
				{
					"d": "2026-09-19",
					"p": 1090
				}
			]
		},
		{
			"id": "aoc-24g2",
			"category": "display",
			"name": "AOC 24G2SP 24\" 165Hz",
			"brand": "AOC",
			"image": "/parts/gpu.svg",
			"msrp": 1790,
			"best_price": 1800,
			"used_price": 1220,
			"in_stock": true,
			"store_count": 3,
			"power_draw": 0,
			"specs": {
				"Screen size": "24\"",
				"Resolution": "1920 x 1080",
				"Refresh rate": "165 Hz",
				"Panel type": "IPS",
				"Response time": "1 ms"
			},
			"offers": [
				{
					"store": "Jumia MA",
					"city": "Online",
					"price": 1800,
					"stock": "in_stock",
					"checked_minutes_ago": 420,
					"url": "#offer-jumia-ma-1"
				},
				{
					"store": "Matrix Informatique",
					"city": "Marrakech",
					"price": 1940,
					"stock": "out_of_stock",
					"checked_minutes_ago": 45,
					"url": "#offer-matrix-informatique-0"
				},
				{
					"store": "UltraPC",
					"city": "Casablanca",
					"price": 1950,
					"stock": "in_stock",
					"checked_minutes_ago": 1440,
					"url": "#offer-ultrapc-2"
				}
			],
			"history": [
				{
					"d": "2026-06-27",
					"p": 2060
				},
				{
					"d": "2026-07-04",
					"p": 2090
				},
				{
					"d": "2026-07-11",
					"p": 2080
				},
				{
					"d": "2026-07-18",
					"p": 2030
				},
				{
					"d": "2026-07-25",
					"p": 1990
				},
				{
					"d": "2026-08-01",
					"p": 1940
				},
				{
					"d": "2026-08-08",
					"p": 1930
				},
				{
					"d": "2026-08-15",
					"p": 1950
				},
				{
					"d": "2026-08-22",
					"p": 1940
				},
				{
					"d": "2026-08-29",
					"p": 1950
				},
				{
					"d": "2026-09-05",
					"p": 1940
				},
				{
					"d": "2026-09-12",
					"p": 1950
				},
				{
					"d": "2026-09-19",
					"p": 1920
				}
			]
		},
		{
			"id": "msi-g274f",
			"category": "display",
			"name": "MSI G274F 27\" 180Hz",
			"brand": "MSI",
			"image": "/parts/gpu.svg",
			"msrp": 2290,
			"best_price": 2320,
			"used_price": 1580,
			"in_stock": true,
			"store_count": 5,
			"power_draw": 0,
			"specs": {
				"Screen size": "27\"",
				"Resolution": "1920 x 1080",
				"Refresh rate": "180 Hz",
				"Panel type": "IPS",
				"Response time": "1 ms"
			},
			"offers": [
				{
					"store": "Jumia MA",
					"city": "Online",
					"price": 2320,
					"stock": "low_stock",
					"checked_minutes_ago": 12,
					"url": "#offer-jumia-ma-1"
				},
				{
					"store": "PC Gamer Maroc",
					"city": "Rabat",
					"price": 2370,
					"stock": "low_stock",
					"checked_minutes_ago": 12,
					"url": "#offer-pc-gamer-maroc-4"
				},
				{
					"store": "Setup Game",
					"city": "Casablanca",
					"price": 2400,
					"stock": "in_stock",
					"checked_minutes_ago": 90,
					"url": "#offer-setup-game-0"
				},
				{
					"store": "Matrix Informatique",
					"city": "Marrakech",
					"price": 2440,
					"stock": "in_stock",
					"checked_minutes_ago": 1440,
					"url": "#offer-matrix-informatique-2"
				},
				{
					"store": "Iris Tech",
					"city": "Tanger",
					"price": 2500,
					"stock": "in_stock",
					"checked_minutes_ago": 12,
					"url": "#offer-iris-tech-3"
				}
			],
			"history": [
				{
					"d": "2026-06-27",
					"p": 2480
				},
				{
					"d": "2026-07-04",
					"p": 2500
				},
				{
					"d": "2026-07-11",
					"p": 2470
				},
				{
					"d": "2026-07-18",
					"p": 2440
				},
				{
					"d": "2026-07-25",
					"p": 2470
				},
				{
					"d": "2026-08-01",
					"p": 2470
				},
				{
					"d": "2026-08-08",
					"p": 2440
				},
				{
					"d": "2026-08-15",
					"p": 2440
				},
				{
					"d": "2026-08-22",
					"p": 2410
				},
				{
					"d": "2026-08-29",
					"p": 2380
				},
				{
					"d": "2026-09-05",
					"p": 2320
				},
				{
					"d": "2026-09-12",
					"p": 2330
				},
				{
					"d": "2026-09-19",
					"p": 2360
				}
			]
		},
		{
			"id": "logi-g502",
			"category": "peripheral",
			"name": "Logitech G502 HERO",
			"brand": "Logitech",
			"image": "/parts/case.svg",
			"msrp": 599,
			"best_price": 580,
			"used_price": 390,
			"in_stock": true,
			"store_count": 2,
			"power_draw": 2,
			"specs": {
				"Type": "Mouse",
				"Connection": "Wired",
				"DPI": "25600",
				"Buttons": "11",
				"RGB": "Yes"
			},
			"offers": [{
				"store": "Setup Game",
				"city": "Casablanca",
				"price": 580,
				"stock": "low_stock",
				"checked_minutes_ago": 180,
				"url": "#offer-setup-game-0"
			}, {
				"store": "PC Gamer Maroc",
				"city": "Rabat",
				"price": 680,
				"stock": "in_stock",
				"checked_minutes_ago": 90,
				"url": "#offer-pc-gamer-maroc-1"
			}],
			"history": [
				{
					"d": "2026-06-27",
					"p": 700
				},
				{
					"d": "2026-07-04",
					"p": 690
				},
				{
					"d": "2026-07-11",
					"p": 690
				},
				{
					"d": "2026-07-18",
					"p": 670
				},
				{
					"d": "2026-07-25",
					"p": 680
				},
				{
					"d": "2026-08-01",
					"p": 670
				},
				{
					"d": "2026-08-08",
					"p": 670
				},
				{
					"d": "2026-08-15",
					"p": 660
				},
				{
					"d": "2026-08-22",
					"p": 650
				},
				{
					"d": "2026-08-29",
					"p": 650
				},
				{
					"d": "2026-09-05",
					"p": 650
				},
				{
					"d": "2026-09-12",
					"p": 650
				},
				{
					"d": "2026-09-19",
					"p": 650
				}
			]
		},
		{
			"id": "redragon-k552",
			"category": "peripheral",
			"name": "Redragon K552 Mechanical",
			"brand": "Redragon",
			"image": "/parts/case.svg",
			"msrp": 349,
			"best_price": 360,
			"used_price": 240,
			"in_stock": true,
			"store_count": 3,
			"power_draw": 2,
			"specs": {
				"Type": "Keyboard",
				"Connection": "Wired",
				"Switch": "Blue",
				"Layout": "TKL",
				"RGB": "Yes"
			},
			"offers": [
				{
					"store": "Matrix Informatique",
					"city": "Marrakech",
					"price": 360,
					"stock": "in_stock",
					"checked_minutes_ago": 180,
					"url": "#offer-matrix-informatique-0"
				},
				{
					"store": "PC Gamer Maroc",
					"city": "Rabat",
					"price": 370,
					"stock": "in_stock",
					"checked_minutes_ago": 180,
					"url": "#offer-pc-gamer-maroc-1"
				},
				{
					"store": "Iris Tech",
					"city": "Tanger",
					"price": 390,
					"stock": "out_of_stock",
					"checked_minutes_ago": 90,
					"url": "#offer-iris-tech-2"
				}
			],
			"history": [
				{
					"d": "2026-06-27",
					"p": 390
				},
				{
					"d": "2026-07-04",
					"p": 380
				},
				{
					"d": "2026-07-11",
					"p": 390
				},
				{
					"d": "2026-07-18",
					"p": 390
				},
				{
					"d": "2026-07-25",
					"p": 390
				},
				{
					"d": "2026-08-01",
					"p": 380
				},
				{
					"d": "2026-08-08",
					"p": 380
				},
				{
					"d": "2026-08-15",
					"p": 380
				},
				{
					"d": "2026-08-22",
					"p": 380
				},
				{
					"d": "2026-08-29",
					"p": 370
				},
				{
					"d": "2026-09-05",
					"p": 380
				},
				{
					"d": "2026-09-12",
					"p": 380
				},
				{
					"d": "2026-09-19",
					"p": 380
				}
			]
		}
	],
	dataStatus: "demo",
	dataNote: "Sample Moroccan store prices for demonstration. Not a live feed. Generated 2026-09-19."
};
var CATEGORY_ORDER = [
	"cpu",
	"cooler",
	"motherboard",
	"ram",
	"storage",
	"gpu",
	"psu",
	"case",
	"display",
	"peripheral"
];
var BUILDER_SLOTS = [
	"cpu",
	"cooler",
	"motherboard",
	"ram",
	"storage",
	"gpu",
	"psu",
	"case"
];
var byIdMap = new Map(catalog.products.map((p) => [p.id, p]));
function productById(id) {
	return byIdMap.get(id);
}
function productsByCategory(slug) {
	return catalog.products.filter((p) => p.category === slug);
}
function categoryLabel(slug) {
	return catalog.categories.find((c) => c.slug === slug)?.label ?? slug;
}
function categoryImage(slug) {
	return catalog.categories.find((x) => x.slug === slug)?.image || `/parts/${slug === "storage" ? "ssd" : slug}.svg`;
}
function lowestOffer(p) {
	const inStock = p.offers.filter((o) => o.stock !== "out_of_stock");
	return [...inStock.length ? inStock : p.offers].sort((a, b) => a.price - b.price)[0];
}
function searchProducts(q) {
	const s = q.trim().toLowerCase();
	if (!s) return [];
	return catalog.products.filter((p) => {
		return `${p.name} ${p.brand} ${p.category} ${Object.values(p.specs).join(" ")}`.toLowerCase().includes(s);
	});
}
var DATA_GENERATED = catalog.generated;
catalog.dataNote;
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/i18n-CXV2OtAY.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var LANGS = [
	{
		id: "en",
		label: "English"
	},
	{
		id: "fr",
		label: "Français"
	},
	{
		id: "ar",
		label: "العربية"
	}
];
var DICT = {
	en: {
		"brand.slogan": "Check before you buy.",
		"brand.darija": "شيّك قبل ما تشري.",
		"nav.home": "Home",
		"nav.components": "Components",
		"nav.compare": "Price comparison",
		"nav.builder": "PC Builder",
		"nav.prebuilts": "Prebuilt PCs",
		"nav.used": "Used PCs",
		"nav.services": "Services",
		"nav.inspection": "Inspection",
		"nav.assembly": "Assembly",
		"nav.cleaning": "Cleaning",
		"nav.guides": "Guides",
		"nav.deals": "Deals",
		"nav.contact": "Contact",
		"nav.search": "Search components",
		"nav.book": "Book a check",
		"nav.menu": "Menu",
		"nav.mybuild": "My build",
		"hero.eyebrow": "Morocco · PC decisions, not PC shops",
		"hero.title": "Check before you buy.",
		"hero.sub": "Compare Moroccan hardware prices, check compatibility, then book inspection, assembly or cleaning. We help you decide — we don't push a SKU.",
		"hero.builder": "Open PC Builder",
		"hero.inspect": "Inspect a used PC",
		"hero.compare": "Compare prices",
		"hero.badge": "CHECK · COMPARE · BUILD · CLEAN · INSPECT · BUY",
		"data.banner": "Sample store prices for demonstration — not a live feed.",
		"data.last": "Last generated",
		"cat.title": "Shop by component",
		"cat.desc": "Ten categories. Lowest listed offer highlighted in DH.",
		"cat.all": "Full catalogue",
		"flow.title": "How CHECKMYPC works",
		"svc.title": "Three services. One standard.",
		"svc.desc": "Launch cities: Casablanca, Rabat, Agadir. Documented results, not verbal opinions.",
		"svc.inspect": "Used PC inspection",
		"svc.inspectDesc": "A technician visits the seller, tests the machine, and sends a BUY / NEGOTIATE / DON'T BUY report.",
		"svc.assemble": "Custom assembly",
		"svc.assembleDesc": "We verify parts, build, cable-manage, flash BIOS, install drivers and stress-test.",
		"svc.clean": "Cleaning & thermal",
		"svc.cleanDesc": "Dust-out, paste refresh and temperature proof — before/after documented.",
		"svc.from": "From",
		"pre.title": "Ready-made systems",
		"pre.desc": "Built from the same catalogue. Filter by budget, GPU, store or condition.",
		"pre.all": "Browse prebuilts",
		"trust.title": "Trust, written down",
		"trust.1": "Inspection reports with photos, temps and a verdict",
		"trust.2": "Prices labelled live / recent / demo — never mixed",
		"trust.3": "Compatibility checked before you spend",
		"trust.4": "Affiliate and sponsored listings disclosed",
		"cta.title": "Found a used PC on Avito?",
		"cta.sub": "Don't transfer the money until someone has actually opened it.",
		"cta.btn": "Request inspection",
		"foot.tag": "Moroccan PC buying, building and inspection.",
		"foot.platform": "Platform",
		"foot.services": "Services",
		"foot.cities": "Launch cities",
		"foot.legal": "Prices are demonstration data unless marked live. Inspection does not replace a manufacturer warranty.",
		"ui.filters": "Filters",
		"ui.close": "Close",
		"ui.stores": "stores",
		"ui.search": "Search",
		"ui.minAgo": "min ago",
		"ui.hAgo": "h ago",
		"ui.dAgo": "d ago",
		"ui.lowest": "Lowest price",
		"ui.viewOffer": "View offer",
		"ui.addBuild": "Add to build",
		"ui.inBuild": "In build",
		"ui.watch": "Watch price",
		"ui.watching": "Watching",
		"ui.demo": "Demo data",
		"ui.live": "Checked < 1h",
		"ui.recent": "Recently checked",
		"ui.stale": "Stale listing",
		"ui.stock.in": "In stock",
		"ui.stock.low": "Low stock",
		"ui.stock.out": "Out of stock",
		"ui.sort.priceAsc": "Price: low to high",
		"ui.sort.priceDesc": "Price: high to low",
		"ui.sort.stores": "Most stores",
		"ui.sort.name": "Name A → Z",
		"ui.results": "results",
		"ui.noResults": "No parts match these filters.",
		"ui.budget": "Max budget",
		"ui.brand": "Brand",
		"ui.category": "Category",
		"ui.allCats": "All categories",
		"ui.new": "New",
		"ui.used": "Used",
		"ui.systems": "systems",
		"ui.noSystem": "No systems in this bracket.",
		"ui.choose": "Choose a part",
		"ui.browse": "Browse",
		"ui.copied": "Build link copied",
		"ui.pickParts": "Pick parts to run compatibility checks.",
		"ui.share": "Share build",
		"ui.clear": "Clear build",
		"ui.assembleCta": "Want us to assemble it?",
		"ui.requestAssembly": "Request assembly",
		"ui.total": "Total",
		"ui.usedEst": "Used estimate",
		"ui.power": "Estimated power",
		"ui.psu": "Recommended PSU",
		"ui.parts": "Parts chosen",
		"ui.compat": "Compatibility",
		"ui.offers": "Store offers",
		"ui.specs": "Specifications",
		"ui.history": "Price history",
		"ui.best": "Best listed",
		"ui.msrp": "List price",
		"ui.usedPrice": "Used estimate",
		"book.name": "Your name",
		"book.phone": "WhatsApp number",
		"book.city": "City",
		"book.notes": "Notes",
		"book.submit": "Send request",
		"book.sent": "Request saved. We'll confirm on WhatsApp.",
		"book.package": "Package",
		"book.listing": "Listing URL (Avito / Facebook)",
		"book.machine": "Machine type",
		"book.desktop": "Desktop",
		"book.laptop": "Laptop",
		"theme.light": "Light",
		"theme.dark": "Dark",
		"search.empty": "Type a part name, GPU or store.",
		"search.placeholder": "RTX 4060, Ryzen 5, Kingston…",
		"est": "Estimate"
	},
	fr: {
		"brand.slogan": "Vérifiez avant d'acheter.",
		"brand.darija": "شيّك قبل ما تشري.",
		"nav.home": "Accueil",
		"nav.components": "Composants",
		"nav.compare": "Comparateur",
		"nav.builder": "Configurateur",
		"nav.prebuilts": "PC montés",
		"nav.used": "PC d'occasion",
		"nav.services": "Services",
		"nav.inspection": "Inspection",
		"nav.assembly": "Montage",
		"nav.cleaning": "Nettoyage",
		"nav.guides": "Guides",
		"nav.deals": "Bons plans",
		"nav.contact": "Contact",
		"nav.search": "Rechercher un composant",
		"nav.book": "Réserver un check",
		"nav.menu": "Menu",
		"nav.mybuild": "Ma config",
		"hero.eyebrow": "Maroc · Des décisions PC, pas une boutique",
		"hero.title": "Vérifiez avant d'acheter.",
		"hero.sub": "Comparez les prix hardware au Maroc, vérifiez la compatibilité, puis réservez inspection, montage ou nettoyage.",
		"hero.builder": "Ouvrir le configurateur",
		"hero.inspect": "Inspecter un PC d'occasion",
		"hero.compare": "Comparer les prix",
		"hero.badge": "CHECK · COMPARE · BUILD · CLEAN · INSPECT · BUY",
		"data.banner": "Prix magasins d'exemple — pas un flux en direct.",
		"data.last": "Généré le",
		"cat.title": "Par composant",
		"cat.desc": "Dix catégories. Meilleure offre listée en DH.",
		"cat.all": "Catalogue complet",
		"flow.title": "Comment CHECKMYPC fonctionne",
		"svc.title": "Trois services. Un standard.",
		"svc.desc": "Villes de lancement : Casablanca, Rabat, Agadir. Résultats documentés.",
		"svc.inspect": "Inspection PC d'occasion",
		"svc.inspectDesc": "Un technicien visite le vendeur, teste la machine et envoie un rapport ACHETER / NÉGOCIER / ÉVITER.",
		"svc.assemble": "Montage sur mesure",
		"svc.assembleDesc": "Vérification, assemblage, câblage, BIOS, drivers et stress test.",
		"svc.clean": "Nettoyage & pâte thermique",
		"svc.cleanDesc": "Dépoussiérage, pâte neuve et preuve de températures — avant/après.",
		"svc.from": "À partir de",
		"pre.title": "Configs prêtes",
		"pre.desc": "Filtrez par budget, GPU, magasin ou état.",
		"pre.all": "Voir les PC montés",
		"trust.title": "La confiance, par écrit",
		"trust.1": "Rapports d'inspection avec photos, températures et verdict",
		"trust.2": "Prix étiquetés live / récent / démo — jamais mélangés",
		"trust.3": "Compatibilité vérifiée avant l'achat",
		"trust.4": "Affiliations et placements sponsorisés indiqués",
		"cta.title": "Un PC d'occasion sur Avito ?",
		"cta.sub": "Ne versez rien tant que quelqu'un n'a pas ouvert la machine.",
		"cta.btn": "Demander une inspection",
		"foot.tag": "Achat, montage et inspection PC au Maroc.",
		"foot.platform": "Plateforme",
		"foot.services": "Services",
		"foot.cities": "Villes",
		"foot.legal": "Les prix sont des données de démonstration sauf mention live. L'inspection ne remplace pas une garantie constructeur.",
		"ui.filters": "Filtres",
		"ui.close": "Fermer",
		"ui.stores": "magasins",
		"ui.search": "Recherche",
		"ui.minAgo": "min",
		"ui.hAgo": "h",
		"ui.dAgo": "j",
		"ui.lowest": "Meilleur prix",
		"ui.viewOffer": "Voir l'offre",
		"ui.addBuild": "Ajouter à la config",
		"ui.inBuild": "Dans la config",
		"ui.watch": "Alerte prix",
		"ui.watching": "Suivi",
		"ui.demo": "Données démo",
		"ui.live": "Vérifié < 1h",
		"ui.recent": "Récemment vérifié",
		"ui.stale": "Annonce ancienne",
		"ui.stock.in": "En stock",
		"ui.stock.low": "Stock faible",
		"ui.stock.out": "Rupture",
		"ui.sort.priceAsc": "Prix croissant",
		"ui.sort.priceDesc": "Prix décroissant",
		"ui.sort.stores": "Plus de magasins",
		"ui.sort.name": "Nom A → Z",
		"ui.results": "résultats",
		"ui.noResults": "Aucun composant ne correspond.",
		"ui.budget": "Budget max",
		"ui.brand": "Marque",
		"ui.category": "Catégorie",
		"ui.allCats": "Toutes les catégories",
		"ui.new": "Neuf",
		"ui.used": "Occasion",
		"ui.systems": "configs",
		"ui.noSystem": "Aucune config dans cette tranche.",
		"ui.choose": "Choisir une pièce",
		"ui.browse": "Parcourir",
		"ui.copied": "Lien copié",
		"ui.pickParts": "Choisissez des pièces pour la compatibilité.",
		"ui.share": "Partager",
		"ui.clear": "Vider",
		"ui.assembleCta": "On le monte pour vous ?",
		"ui.requestAssembly": "Demander le montage",
		"ui.total": "Total",
		"ui.usedEst": "Estimation occasion",
		"ui.power": "Puissance estimée",
		"ui.psu": "PSU recommandé",
		"ui.parts": "Pièces",
		"ui.compat": "Compatibilité",
		"ui.offers": "Offres",
		"ui.specs": "Caractéristiques",
		"ui.history": "Historique",
		"ui.best": "Meilleur listé",
		"ui.msrp": "Prix affiché",
		"ui.usedPrice": "Estimation occasion",
		"book.name": "Votre nom",
		"book.phone": "Numéro WhatsApp",
		"book.city": "Ville",
		"book.notes": "Notes",
		"book.submit": "Envoyer",
		"book.sent": "Demande enregistrée. Confirmation sur WhatsApp.",
		"book.package": "Formule",
		"book.listing": "Lien de l'annonce (Avito / Facebook)",
		"book.machine": "Type de machine",
		"book.desktop": "Tour",
		"book.laptop": "Portable",
		"theme.light": "Clair",
		"theme.dark": "Sombre",
		"search.empty": "Nom de pièce, GPU ou magasin.",
		"search.placeholder": "RTX 4060, Ryzen 5, Kingston…",
		"est": "Estimation"
	},
	ar: {
		"brand.slogan": "شيّك قبل ما تشري.",
		"brand.darija": "شيّك قبل ما تشري.",
		"nav.home": "الرئيسية",
		"nav.components": "المكونات",
		"nav.compare": "مقارنة الأسعار",
		"nav.builder": "تجميع PC",
		"nav.prebuilts": "أجهزة جاهزة",
		"nav.used": "مستعمل",
		"nav.services": "الخدمات",
		"nav.inspection": "فحص",
		"nav.assembly": "تجميع",
		"nav.cleaning": "تنظيف",
		"nav.guides": "أدلة",
		"nav.deals": "عروض",
		"nav.contact": "اتصال",
		"nav.search": "بحث عن قطعة",
		"nav.book": "احجز فحص",
		"nav.menu": "القائمة",
		"nav.mybuild": "تجميعك",
		"hero.eyebrow": "المغرب · قرارات PC، ماشي غير محل",
		"hero.title": "شيّك قبل ما تشري.",
		"hero.sub": "قارن أسعار القطع فالمغرب، تأكد من التوافق، و احجز فحص أو تجميع أو تنظيف. كنعاونوك تقرر — ما كنبيعوش عشوائياً.",
		"hero.builder": "افتح المجمّع",
		"hero.inspect": "فحص PC مستعمل",
		"hero.compare": "قارن الأسعار",
		"hero.badge": "CHECK · COMPARE · BUILD · CLEAN · INSPECT · BUY",
		"data.banner": "أسعار تجريبية للمتاجر — ليست بث مباشر.",
		"data.last": "آخر تحديث",
		"cat.title": "حسب المكوّن",
		"cat.desc": "عشر فئات. أقل سعر مدرج بالدرهم.",
		"cat.all": "الكتالوج كامل",
		"flow.title": "كيفاش خدامة CHECKMYPC",
		"svc.title": "ثلاث خدمات. معيار واحد.",
		"svc.desc": "مدن الإطلاق: الدار البيضاء، الرباط، أكادير. نتائج موثّقة.",
		"svc.inspect": "فحص PC مستعمل",
		"svc.inspectDesc": "التقني كيزور البائع، كيجرب الجهاز، و كيصيفط تقرير: شري / فاوض / ما تشريش.",
		"svc.assemble": "تجميع احترافي",
		"svc.assembleDesc": "تحقق من القطع، تجميع، كابلات، BIOS، درايفرات و اختبار ضغط.",
		"svc.clean": "تنظيف و معجون حراري",
		"svc.cleanDesc": "غبرة، معجون جديد، و إثبات الحرارة — قبل و بعد.",
		"svc.from": "ابتداءً من",
		"pre.title": "أجهزة جاهزة",
		"pre.desc": "فلتر بالميزانية، الكرت، المتجر أو الحالة.",
		"pre.all": "شوف الأجهزة الجاهزة",
		"trust.title": "الثقة مكتوبة",
		"trust.1": "تقارير فحص بصور و حرارة و حكم نهائي",
		"trust.2": "أسعار مصنّفة مباشر / حديث / تجريبي",
		"trust.3": "توافق القطع قبل ما تصرف",
		"trust.4": "الإعلان المدفوع و العمولات معلنة",
		"cta.title": "لقيتي PC مستعمل فـ Avito؟",
		"cta.sub": "متحولش الفلوس حتى يتفتح الجهاز.",
		"cta.btn": "طلب فحص",
		"foot.tag": "شراء و تجميع و فحص PC فالمغرب.",
		"foot.platform": "المنصة",
		"foot.services": "الخدمات",
		"foot.cities": "المدن",
		"foot.legal": "الأسعار بيانات تجريبية إلا إذا ذُكر أنها مباشرة. الفحص لا يعوّض ضمان الشركة.",
		"ui.filters": "تصفية",
		"ui.close": "إغلاق",
		"ui.stores": "متاجر",
		"ui.search": "بحث",
		"ui.minAgo": "د",
		"ui.hAgo": "س",
		"ui.dAgo": "ي",
		"ui.lowest": "أقل سعر",
		"ui.viewOffer": "شوف العرض",
		"ui.addBuild": "زيد للتجميع",
		"ui.inBuild": "فالتجميع",
		"ui.watch": "نبّهني",
		"ui.watching": "متتبَّع",
		"ui.demo": "بيانات تجريبية",
		"ui.live": "تفقد < ساعة",
		"ui.recent": "تفقد حديث",
		"ui.stale": "إعلان قديم",
		"ui.stock.in": "متوفر",
		"ui.stock.low": "كمية قليلة",
		"ui.stock.out": "غير متوفر",
		"ui.sort.priceAsc": "السعر تصاعدي",
		"ui.sort.priceDesc": "السعر تنازلي",
		"ui.sort.stores": "أكثر متاجر",
		"ui.sort.name": "الاسم",
		"ui.results": "نتائج",
		"ui.noResults": "ما كاين حتى قطعة بهاد الفيلتر.",
		"ui.budget": "أقصى ميزانية",
		"ui.brand": "العلامة",
		"ui.category": "الفئة",
		"ui.allCats": "كل الفئات",
		"ui.new": "جديد",
		"ui.used": "مستعمل",
		"ui.systems": "أجهزة",
		"ui.noSystem": "ما كاين حتى جهاز بهاد الميزانية.",
		"ui.choose": "اختار قطعة",
		"ui.browse": "تصفح",
		"ui.copied": "تم نسخ الرابط",
		"ui.pickParts": "اختار القطع باش تشوف التوافق.",
		"ui.share": "شارك التجميع",
		"ui.clear": "مسح",
		"ui.assembleCta": "بغيتي نجمعوه ليك؟",
		"ui.requestAssembly": "طلب التجميع",
		"ui.total": "المجموع",
		"ui.usedEst": "تقدير المستعمل",
		"ui.power": "استهلاك مقدَّر",
		"ui.psu": "PSU مقترح",
		"ui.parts": "القطع",
		"ui.compat": "التوافق",
		"ui.offers": "عروض المتاجر",
		"ui.specs": "المواصفات",
		"ui.history": "تاريخ السعر",
		"ui.best": "أفضل سعر مدرج",
		"ui.msrp": "السعر المعلن",
		"ui.usedPrice": "تقدير المستعمل",
		"book.name": "سميتك",
		"book.phone": "رقم واتساب",
		"book.city": "المدينة",
		"book.notes": "ملاحظات",
		"book.submit": "صيفط الطلب",
		"book.sent": "تسجّل الطلب. غادي نأكدوه على واتساب.",
		"book.package": "الباقة",
		"book.listing": "رابط الإعلان (Avito / فيسبوك)",
		"book.machine": "نوع الجهاز",
		"book.desktop": "طاولة",
		"book.laptop": "محمول",
		"theme.light": "فاتح",
		"theme.dark": "غامق",
		"search.empty": "اكتب اسم القطعة أو الكرت.",
		"search.placeholder": "RTX 4060, Ryzen 5, Kingston…",
		"est": "تقدير"
	}
};
var LANG_KEY = "cmp.lang.v1";
var THEME_KEY = "cmp.theme.v1";
var Ctx = (0, import_react.createContext)(null);
function applyDom(lang, theme) {
	const root = document.documentElement;
	root.lang = lang;
	root.dir = lang === "ar" ? "rtl" : "ltr";
	root.classList.toggle("dark", theme === "dark");
	root.dataset.theme = theme;
}
function I18nProvider({ children }) {
	const [lang, setLangState] = (0, import_react.useState)("en");
	const [theme, setThemeState] = (0, import_react.useState)("dark");
	(0, import_react.useEffect)(() => {
		const storedL = localStorage.getItem(LANG_KEY);
		const storedT = localStorage.getItem(THEME_KEY);
		const nextLang = storedL === "en" || storedL === "fr" || storedL === "ar" ? storedL : "en";
		const nextTheme = storedT === "light" || storedT === "dark" ? storedT : window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
		setLangState(nextLang);
		setThemeState(nextTheme);
		applyDom(nextLang, nextTheme);
	}, []);
	const setLang = (l) => {
		setLangState(l);
		localStorage.setItem(LANG_KEY, l);
	};
	const setTheme = (th) => {
		setThemeState(th);
		localStorage.setItem(THEME_KEY, th);
	};
	(0, import_react.useEffect)(() => {
		applyDom(lang, theme);
	}, [lang, theme]);
	const t = (key) => DICT[lang][key] ?? DICT.en[key] ?? key;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ctx.Provider, {
		value: {
			lang,
			setLang,
			t,
			theme,
			setTheme
		},
		children
	});
}
function useI18n() {
	const ctx = (0, import_react.useContext)(Ctx);
	if (!ctx) throw new Error("useI18n outside provider");
	return ctx;
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/utils-CVPo95Jw.js
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function dh(n) {
	return `${Number(n || 0).toLocaleString("fr-MA")} DH`;
}
function ago(minutes, t) {
	if (minutes < 60) return `${minutes} ${t("ui.minAgo")}`;
	if (minutes < 1440) return `${Math.round(minutes / 60)} ${t("ui.hAgo")}`;
	return `${Math.round(minutes / 1440)} ${t("ui.dAgo")}`;
}
function freshness(minutes) {
	if (minutes <= 60) return "live";
	if (minutes <= 1440) return "recent";
	return "stale";
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/button-C9qc2-pL.js
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[transform,background-color,box-shadow,opacity] duration-150 ease-out disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] min-h-11 px-4", {
	variants: {
		variant: {
			default: "bg-primary text-primary-fg shadow-[var(--shadow-border)] hover:opacity-90",
			secondary: "bg-surface text-fg shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]",
			outline: "bg-transparent text-fg shadow-[var(--shadow-border)] hover:bg-surface-2",
			ghost: "bg-transparent text-muted hover:bg-surface-2 hover:text-fg",
			soft: "bg-surface-2 text-primary shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]",
			danger: "bg-danger text-primary-fg hover:opacity-90"
		},
		size: {
			default: "h-11",
			sm: "h-9 min-h-9 px-3 text-xs",
			lg: "h-12 px-5 text-base",
			icon: "size-11 p-0"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = (0, import_react.forwardRef)(({ className, variant, size, asChild, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		ref,
		...props
	});
});
Button.displayName = "Button";
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/store-Bolen4WN.js
var BUILD_KEY = "cmp.build.v2";
function readBuild() {
	try {
		const raw = localStorage.getItem(BUILD_KEY);
		if (!raw) return {};
		return JSON.parse(raw);
	} catch {
		return {};
	}
}
function writeBuild(slots) {
	localStorage.setItem(BUILD_KEY, JSON.stringify(slots));
	window.dispatchEvent(new Event("cmp:build"));
}
function buildItems(slots) {
	return BUILDER_SLOTS.flatMap((slot) => {
		const s = slots[slot];
		if (!s) return [];
		const product = productById(s.id);
		if (!product) return [];
		return [{
			product,
			qty: s.qty || 1
		}];
	});
}
function buildTotal(items, used = false) {
	return items.reduce((a, i) => a + (used ? i.product.used_price : i.product.best_price) * i.qty, 0);
}
function compatibility(items) {
	const by = {};
	items.forEach((i) => {
		by[i.product.category] = i.product;
	});
	const out = [];
	const cpu = by.cpu;
	const mb = by.motherboard;
	const ram = by.ram;
	const psu = by.psu;
	const gpu = by.gpu;
	const cs = by.case;
	const cl = by.cooler;
	if (cpu && mb) {
		const ok = cpu.specs.Socket === mb.specs.Socket;
		out.push({
			level: ok ? "pass" : "fail",
			title: "CPU ↔ Motherboard",
			detail: ok ? `Both on ${cpu.specs.Socket}` : `${cpu.specs.Socket} CPU in a ${mb.specs.Socket} board`
		});
	}
	if (ram && mb) {
		const ok = ram.specs["Memory type"] === mb.specs["Memory type"];
		out.push({
			level: ok ? "pass" : "fail",
			title: "RAM ↔ Motherboard",
			detail: ok ? `${mb.specs["Memory type"]} on both` : `${ram.specs["Memory type"]} kit in a ${mb.specs["Memory type"]} board`
		});
	}
	if (cl && cpu) {
		const ok = (cl.specs.Socket || "").includes(cpu.specs.Socket);
		out.push({
			level: ok ? "pass" : "warn",
			title: "Cooler ↔ CPU socket",
			detail: ok ? `Bracket included for ${cpu.specs.Socket}` : `Check bracket availability for ${cpu.specs.Socket}`
		});
	}
	if (gpu && cs) {
		const len = parseInt(gpu.specs.Length, 10);
		const max = parseInt(cs.specs["Max GPU length"], 10);
		const ok = !(len && max) || len <= max;
		out.push({
			level: ok ? "pass" : "fail",
			title: "GPU ↔ Case clearance",
			detail: `${len || "?"} mm card, ${max || "?"} mm available`
		});
	}
	if (cl && cs && cl.specs.Height && cl.specs.Height !== "—") {
		const h = parseInt(cl.specs.Height, 10);
		const max = parseInt(cs.specs["Max cooler height"], 10);
		if (h && max) out.push({
			level: h <= max ? "pass" : "fail",
			title: "Cooler ↔ Case height",
			detail: `${h} mm cooler, ${max} mm clearance`
		});
	}
	const draw = items.reduce((a, i) => a + (i.product.power_draw || 0) * i.qty, 0);
	const rec = Math.ceil(draw * 1.4 / 50) * 50 || 0;
	if (psu) {
		const w = parseInt(psu.specs.Wattage, 10);
		out.push({
			level: w >= rec ? "pass" : "warn",
			title: "PSU headroom",
			detail: `${w}W supply, ${rec}W recommended for ~${draw}W load`
		});
	}
	return {
		checks: out,
		draw,
		rec
	};
}
function encodeBuild(slots) {
	return btoa(JSON.stringify(slots));
}
function decodeBuild(raw) {
	try {
		return JSON.parse(atob(raw));
	} catch {
		return null;
	}
}
var useBuild = create((set, get) => ({
	slots: {},
	alerts: [],
	hydrate: () => {
		set({
			slots: readBuild(),
			alerts: readAlerts()
		});
	},
	add: (id, category, qty = 1) => {
		const next = {
			...get().slots,
			[category]: {
				id,
				qty
			}
		};
		writeBuild(next);
		set({ slots: next });
	},
	remove: (category) => {
		const next = { ...get().slots };
		delete next[category];
		writeBuild(next);
		set({ slots: next });
	},
	clear: () => {
		writeBuild({});
		set({ slots: {} });
	},
	replace: (slots) => {
		writeBuild(slots);
		set({ slots });
	},
	toggleWatch: (id) => set({ alerts: toggleAlert(id) })
}));
function partCount(slots) {
	return Object.keys(slots).length;
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-fA54dPWS.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: errorMessage(error)
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
function DataBanner() {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "border-b border-border bg-surface-2 px-4 py-2 text-center text-xs text-muted",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-medium text-fg",
				children: t("ui.demo")
			}),
			" · ",
			t("data.banner"),
			" ",
			t("data.last"),
			" ",
			DATA_GENERATED,
			"."
		]
	});
}
function Mark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 32 32",
		className: cn("size-8 shrink-0", className),
		"aria-hidden": true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "3",
				y: "6",
				width: "26",
				height: "18",
				rx: "3",
				className: "fill-surface-2 stroke-fg/40",
				strokeWidth: "1.4"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "6",
				y: "9",
				width: "20",
				height: "12",
				rx: "1.2",
				className: "fill-navy"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M11.2 15.1 14.1 18l6.7-6.6",
				fill: "none",
				stroke: "currentColor",
				className: "text-primary",
				strokeWidth: "2.2",
				strokeLinecap: "round",
				strokeLinejoin: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "12",
				y: "25",
				width: "8",
				height: "1.6",
				rx: "0.8",
				className: "fill-fg/40"
			})
		]
	});
}
function Logo({ compact = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "inline-flex items-center gap-2 text-fg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, {}), !compact && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "font-display text-[1.15rem] font-semibold tracking-tight",
			children: [
				"CHECK",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-primary",
					children: "MY"
				}),
				"PC",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-muted",
					children: ".MA"
				})
			]
		})]
	});
}
var CITIES = [
	"Casablanca",
	"Rabat",
	"Agadir"
];
var INSPECTION = {
	basePrice: 250,
	agadirPrice: 200,
	travelNote: "Travel outside the city ring is quoted after the listing address is confirmed (estimate 50–150 DH).",
	radiusKm: 25,
	turnaround: "Same day in Casablanca & Rabat if booked before 14:00. Next day in Agadir.",
	checklist: [
		"CPU identity, temperatures, stability",
		"GPU identity, artifacts, 3D stress",
		"RAM size/speed and memtest pass",
		"SSD/HDD health (SMART, reallocated sectors)",
		"Motherboard visual + POST + BIOS",
		"PSU rails / coil whine / smell",
		"Cooling, fans, dust, noise",
		"USB, display outputs, Wi-Fi, Bluetooth",
		"Physical condition, screws, missing parts",
		"Fair-value estimate vs catalogue"
	],
	verdicts: [
		{
			id: "BUY",
			label: "BUY",
			hint: "Hardware matches the listing. Fair price."
		},
		{
			id: "NEGOTIATE",
			label: "NEGOTIATE / CHECK FURTHER",
			hint: "Issues or overpricing. We suggest a number."
		},
		{
			id: "DONT",
			label: "DON'T BUY",
			hint: "Hidden faults, fake parts, or unsafe PSU."
		}
	],
	packages: [{
		id: "inspect-standard",
		name: "Standard inspection",
		price: 250,
		duration: "45–70 min on site",
		includes: [
			"On-site visit to the seller",
			"Hardware verification + photos/videos",
			"Temps, stress, SMART, RAM test",
			"Written report + BUY / NEGOTIATE / DON'T BUY",
			"Fair-value estimate"
		],
		excludes: [
			"Purchase of the PC",
			"Repair",
			"Guarantee of future failures"
		]
	}, {
		id: "inspect-plus",
		name: "Inspection + gaming bench",
		price: 350,
		duration: "70–90 min",
		includes: [
			"Everything in Standard",
			"Game / synthetic FPS snapshot",
			"Thermal paste condition note",
			"WhatsApp walkthrough of the report"
		],
		excludes: ["Overnight soak test unless agreed"]
	}]
};
var ASSEMBLY = {
	packages: [
		{
			id: "asm-basic",
			name: "Basic",
			price: 250,
			duration: "1–2 working days",
			includes: [
				"Compatibility check",
				"Assembly + cable routing",
				"BIOS defaults, RAM XMP/EXPO if stable",
				"POST confirmation"
			],
			excludes: [
				"OS licence",
				"RGB software setup",
				"Water-cooling custom loops"
			]
		},
		{
			id: "asm-standard",
			name: "Standard",
			price: 400,
			duration: "1–2 working days",
			includes: [
				"Everything in Basic",
				"Driver pack + Windows install with customer-supplied licence",
				"30 min CPU+GPU stress + temps",
				"Photo report of the finished build"
			],
			excludes: ["OS licence purchase", "Data migration"]
		},
		{
			id: "asm-premium",
			name: "Premium",
			price: 650,
			duration: "2–3 working days",
			includes: [
				"Everything in Standard",
				"Custom cable management",
				"Undervolt / fan curve if requested",
				"2-hour combined stress",
				"30-day assembly workmanship cover"
			],
			excludes: ["Component warranty (stays with retailer)", "Liquid-metal applications"]
		}
	],
	note: "Customer-supplied parts are inspected on arrival. Damaged-on-arrival photos are taken before assembly starts."
};
var CLEANING = {
	packages: [
		{
			id: "cln-basic",
			name: "Basic cleaning",
			price: 150,
			duration: "45 min",
			includes: [
				"Exterior wipe",
				"Compressed-air dust-out of fans and filters",
				"Cable tidy"
			],
			excludes: [
				"Thermal paste",
				"Pad replacement",
				"Disassembly of GPU cooler"
			]
		},
		{
			id: "cln-deep",
			name: "Deep cleaning",
			price: 250,
			duration: "90 min",
			includes: [
				"Full interior dust removal",
				"Fan and radiator pass (air-only, no liquids on PCBs)",
				"Case and glass",
				"Before/after photos + idle temps"
			],
			excludes: ["Paste unless added as Thermal service"]
		},
		{
			id: "cln-thermal",
			name: "Thermal service",
			price: 350,
			duration: "2 h",
			includes: [
				"Deep cleaning",
				"CPU paste replacement (quality paste)",
				"GPU paste only if the cooler is a standard air cooler we can reseat safely",
				"Load temperature comparison"
			],
			excludes: ["Laptop vapour-chamber work", "Custom loop drain"]
		},
		{
			id: "cln-full",
			name: "Full maintenance",
			price: 450,
			duration: "half day",
			includes: [
				"Thermal service",
				"Pad replacement when original pads are compressed",
				"Fan check / replace if customer supplies fans",
				"Cable management",
				"Written maintenance card"
			],
			excludes: ["New fans unless quoted", "Data backup"]
		}
	],
	safety: "No household liquids, no vacuum-on-fan, no high-PSI compressors on bearings. ESD strap on every open chassis."
};
var CONTACT = {
	email: "hello@checkmypc.ma",
	hours: "Mon–Sat 10:00–19:00",
	cities: CITIES,
	instagram: "https://instagram.com/checkmypc.ma",
	tiktok: "https://www.tiktok.com/@checkmypc.ma",
	facebook: "https://facebook.com/checkmypc.ma"
};
var STEPS = [
	{
		id: "check",
		label: "CHECK",
		hint: "Specs vs listing"
	},
	{
		id: "compare",
		label: "COMPARE",
		hint: "Lowest listed DH"
	},
	{
		id: "build",
		label: "BUILD",
		hint: "Compatible parts"
	},
	{
		id: "clean",
		label: "CLEAN",
		hint: "Temps back to spec"
	},
	{
		id: "inspect",
		label: "INSPECT",
		hint: "Used, verified"
	},
	{
		id: "buy",
		label: "BUY",
		hint: "Decide with a report"
	}
];
function SiteFooter() {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "mt-16 border-t border-border bg-surface",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-xs text-sm text-muted",
						children: t("foot.tag")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-display text-sm text-primary",
						children: t("brand.darija")
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "mb-3 text-xs font-semibold tracking-wider text-muted uppercase",
					children: t("foot.platform")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/products",
							className: "hover:text-primary",
							children: t("nav.components")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/compare",
							className: "hover:text-primary",
							children: t("nav.compare")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/builder",
							className: "hover:text-primary",
							children: t("nav.builder")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/prebuilts",
							className: "hover:text-primary",
							children: t("nav.prebuilts")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/used",
							className: "hover:text-primary",
							children: t("nav.used")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/deals",
							className: "hover:text-primary",
							children: t("nav.deals")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/guides",
							className: "hover:text-primary",
							children: t("nav.guides")
						})
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "mb-3 text-xs font-semibold tracking-wider text-muted uppercase",
					children: t("foot.services")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/inspection",
							className: "hover:text-primary",
							children: t("nav.inspection")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/assembly",
							className: "hover:text-primary",
							children: t("nav.assembly")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/cleaning",
							className: "hover:text-primary",
							children: t("nav.cleaning")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "hover:text-primary",
							children: t("nav.contact")
						})
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "mb-3 text-xs font-semibold tracking-wider text-muted uppercase",
					children: t("foot.cities")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "flex flex-col gap-2 text-sm text-fg",
					children: CITIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: c }, c))
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border px-4 py-5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mx-auto max-w-6xl text-xs text-muted",
				children: t("foot.legal")
			})
		})]
	});
}
var LINKS = [
	{
		to: "/products",
		key: "nav.components"
	},
	{
		to: "/compare",
		key: "nav.compare"
	},
	{
		to: "/builder",
		key: "nav.builder"
	},
	{
		to: "/prebuilts",
		key: "nav.prebuilts"
	},
	{
		to: "/used",
		key: "nav.used"
	},
	{
		to: "/inspection",
		key: "nav.inspection"
	},
	{
		to: "/guides",
		key: "nav.guides"
	}
];
function SiteHeader() {
	const { t, lang, setLang, theme, setTheme } = useI18n();
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const [open, setOpen] = (0, import_react.useState)(false);
	const n = partCount(useBuild((s) => s.slots));
	(0, import_react.useEffect)(() => {
		setOpen(false);
	}, [pathname]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 border-b border-border bg-bg/90 backdrop-blur-md",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-6xl items-center gap-3 px-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "shrink-0",
					"aria-label": "CHECKMYPC home",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden min-w-0 flex-1 items-center justify-center gap-0.5 lg:flex",
					children: LINKS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: l.to,
						className: cn("rounded-md px-2.5 py-2 text-[13px] font-medium text-muted hover:bg-surface-2 hover:text-fg", pathname === l.to && "bg-surface-2 text-primary"),
						children: t(l.key)
					}, l.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "ms-auto flex items-center gap-1.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/search",
							className: "grid size-11 place-items-center rounded-md text-muted hover:bg-surface-2 hover:text-fg",
							"aria-label": t("nav.search"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/builder",
							className: "relative hidden size-11 place-items-center rounded-md text-muted hover:bg-surface-2 hover:text-fg sm:grid",
							"aria-label": t("nav.mybuild"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-xs font-semibold",
								children: "PC"
							}), n > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute top-1.5 end-1.5 grid size-4 place-items-center rounded-full bg-primary text-[10px] text-primary-fg",
								children: n
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "grid size-11 place-items-center rounded-md text-muted hover:bg-surface-2 hover:text-fg",
							onClick: () => setTheme(theme === "dark" ? "light" : "dark"),
							"aria-label": theme === "dark" ? t("theme.light") : t("theme.dark"),
							children: theme === "dark" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "size-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							className: "hidden h-11 rounded-md bg-surface px-2 text-xs font-medium text-fg shadow-[var(--shadow-border)] sm:block",
							value: lang,
							onChange: (e) => setLang(e.target.value),
							"aria-label": "Language",
							children: LANGS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: l.id,
								children: l.label
							}, l.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "sm",
							className: "hidden md:inline-flex",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/inspection",
								children: t("nav.book")
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "grid size-11 place-items-center rounded-md text-fg hover:bg-surface-2 lg:hidden",
							onClick: () => setOpen((v) => !v),
							"aria-label": t("nav.menu"),
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
						})
					]
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border bg-surface px-4 py-3 lg:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-1",
				children: [
					LINKS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: l.to,
						className: cn("rounded-md px-3 py-3 text-sm font-medium text-fg hover:bg-surface-2", pathname === l.to && "bg-surface-2 text-primary"),
						children: t(l.key)
					}, l.to)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/assembly",
						className: "rounded-md px-3 py-3 text-sm font-medium hover:bg-surface-2",
						children: t("nav.assembly")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/cleaning",
						className: "rounded-md px-3 py-3 text-sm font-medium hover:bg-surface-2",
						children: t("nav.cleaning")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/deals",
						className: "rounded-md px-3 py-3 text-sm font-medium hover:bg-surface-2",
						children: t("nav.deals")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "rounded-md px-3 py-3 text-sm font-medium hover:bg-surface-2",
						children: t("nav.contact")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							className: "h-11 flex-1 rounded-md bg-bg px-2 text-sm shadow-[var(--shadow-border)]",
							value: lang,
							onChange: (e) => setLang(e.target.value),
							children: LANGS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: l.id,
								children: l.label
							}, l.id))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							className: "flex-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/inspection",
								children: t("nav.book")
							})
						})]
					})
				]
			})
		})]
	});
}
var styles_default = "/assets/styles-Bu37OQJe.css";
var APP_NAME = "CHECKMYPC";
function HydrateBuild() {
	const hydrate = useBuild((s) => s.hydrate);
	(0, import_react.useEffect)(() => {
		hydrate();
		const on = () => hydrate();
		window.addEventListener("cmp:build", on);
		return () => window.removeEventListener("cmp:build", on);
	}, [hydrate]);
	return null;
}
var Route$18 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "description",
				content: "CHECKMYPC.MA — Moroccan PC price comparison, builder, used inspection, assembly and cleaning. Check before you buy."
			},
			{
				name: "theme-color",
				content: "#0a1823"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@500;600&family=IBM+Plex+Sans:wght@400;500;600;700&family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&family=Outfit:wght@500;600;700&display=swap"
			}
		]
	}),
	component: RootLayout
});
function RootLayout() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		className: "dark antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("head", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", { dangerouslySetInnerHTML: { __html: `(function(){try{var t=localStorage.getItem("cmp.theme.v1");if(t!=="dark"&&t!=="light"){t=window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark";}var l=localStorage.getItem("cmp.lang.v1");document.documentElement.classList.toggle("dark",t==="dark");document.documentElement.setAttribute("data-theme",t);if(l==="en"||l==="fr"||l==="ar"){document.documentElement.lang=l;document.documentElement.dir=l==="ar"?"rtl":"ltr";}}catch(e){}})();` } })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "min-h-screen bg-bg text-fg",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(I18nProvider, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HydrateBuild, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataBanner, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
						theme: "system",
						position: "bottom-center"
					})
				] }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
			]
		})]
	});
}
var $$splitComponentImporter$16 = () => import("./routes-DLFWTc0r.mjs");
var Route$17 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$16, "component") });
var $$splitComponentImporter$15 = () => import("./admin-kvQpDa9I.mjs");
var Route$16 = createFileRoute("/admin")({ component: lazyRouteComponent($$splitComponentImporter$15, "component") });
var $$splitComponentImporter$14 = () => import("./assembly-DvAaDXra.mjs");
var Route$15 = createFileRoute("/assembly")({
	validateSearch: (s) => ({
		from: typeof s.from === "string" ? s.from : void 0,
		total: typeof s.total === "string" ? s.total : void 0
	}),
	component: lazyRouteComponent($$splitComponentImporter$14, "component")
});
var $$splitComponentImporter$13 = () => import("./builder-C1n37vzG.mjs");
var Route$14 = createFileRoute("/builder")({
	validateSearch: (s) => ({ build: typeof s.build === "string" ? s.build : void 0 }),
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
var $$splitComponentImporter$12 = () => import("./cleaning-w3VAxONF.mjs");
var Route$13 = createFileRoute("/cleaning")({ component: lazyRouteComponent($$splitComponentImporter$12, "component") });
var $$splitComponentImporter$11 = () => import("./compare-NihSXXyw.mjs");
var Route$12 = createFileRoute("/compare")({
	validateSearch: (s) => ({ category: typeof s.category === "string" ? s.category : "gpu" }),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./contact-C80nqu-p.mjs");
var Route$11 = createFileRoute("/contact")({ component: lazyRouteComponent($$splitComponentImporter$10, "component") });
var $$splitComponentImporter$9 = () => import("./deals-CXv-GWa5.mjs");
var Route$10 = createFileRoute("/deals")({ component: lazyRouteComponent($$splitComponentImporter$9, "component") });
var $$splitComponentImporter$8 = () => import("./inspection-CQgQOnS1.mjs");
var Route$9 = createFileRoute("/inspection")({ component: lazyRouteComponent($$splitComponentImporter$8, "component") });
var $$splitComponentImporter$7 = () => import("./search-YrqwImkb.mjs");
var Route$8 = createFileRoute("/search")({
	validateSearch: (s) => ({ q: typeof s.q === "string" ? s.q : "" }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./used-B8fm_BsA.mjs");
var Route$7 = createFileRoute("/used")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("./guides.index-C1x_p9ql.mjs");
var Route$6 = createFileRoute("/guides/")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./guides._slug-DDoP1GmF.mjs");
var Route$5 = createFileRoute("/guides/$slug")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./prebuilts.index-nomqeUyM.mjs");
var Route$4 = createFileRoute("/prebuilts/")({
	validateSearch: (s) => ({
		budget: typeof s.budget === "string" ? s.budget : void 0,
		city: typeof s.city === "string" ? s.city : void 0
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./prebuilts._id-D8H2nQsW.mjs");
var Route$3 = createFileRoute("/prebuilts/$id")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
function PageHero({ eyebrow, title, description, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-b border-border bg-surface-2/60",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 py-10 sm:py-14",
			children: [
				eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-3 text-xs font-semibold tracking-[0.16em] text-primary uppercase",
					children: eyebrow
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "max-w-3xl font-display text-3xl font-semibold tracking-tight sm:text-5xl",
					children: title
				}),
				description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-2xl text-base text-muted",
					children: description
				}),
				children && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children
				})
			]
		})
	});
}
function Badge({ className, tone = "neutral", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-semibold tracking-wide", tone === "neutral" && "bg-surface-2 text-muted", tone === "primary" && "bg-primary/15 text-primary", tone === "ok" && "bg-ok/15 text-ok", tone === "warn" && "bg-warn/15 text-warn", tone === "danger" && "bg-danger/15 text-danger", className),
		...props
	});
}
function ProductRow({ product }) {
	const { t } = useI18n();
	const add = useBuild((s) => s.add);
	const inBuild = useBuild((s) => s.slots)[product.category]?.id === product.id;
	const offer = lowestOffer(product);
	const spec = Object.entries(product.specs).slice(0, 3).map(([, v]) => v).join(" · ");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "grid grid-cols-[56px_1fr] items-center gap-3 border-b border-border px-3 py-3 last:border-0 sm:grid-cols-[56px_1fr_auto_auto] sm:gap-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/products/$id",
				params: { id: product.id },
				className: "grid size-14 place-items-center rounded-md bg-surface-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: product.image,
					alt: "",
					className: "size-9 object-contain"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/products/$id",
						params: { id: product.id },
						className: "block truncate font-medium hover:text-primary",
						children: product.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-0.5 truncate text-xs text-muted ltr-isolate",
						children: [
							product.brand,
							" · ",
							spec
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-[11px] text-ok sm:hidden",
						children: [
							dh(product.best_price),
							" · ",
							product.store_count,
							" ",
							t("ui.stores")
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hidden text-end sm:block",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display text-base font-semibold tabular-nums ltr-isolate",
						children: dh(product.best_price)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-[11px] text-muted",
						children: [
							product.store_count,
							" ",
							t("ui.stores"),
							offer ? ` · ${offer.city}` : ""
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						tone: "primary",
						className: "mt-1",
						children: t("ui.lowest")
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "col-span-2 flex gap-2 sm:col-span-1 sm:flex-col",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "sm",
					variant: inBuild ? "soft" : "default",
					onClick: () => add(product.id, product.category),
					children: inBuild ? t("ui.inBuild") : t("ui.addBuild")
				})
			})
		]
	});
}
var Route$2 = createFileRoute("/products/")({
	validateSearch: (s) => ({
		category: typeof s.category === "string" ? s.category : void 0,
		q: typeof s.q === "string" ? s.q : void 0
	}),
	component: ProductsPage
});
function ProductsPage() {
	const { t } = useI18n();
	const { category, q } = Route$2.useSearch();
	const [budget, setBudget] = (0, import_react.useState)(8e3);
	const [brand, setBrand] = (0, import_react.useState)("");
	const [sort, setSort] = (0, import_react.useState)("price-asc");
	const [filtersOpen, setFiltersOpen] = (0, import_react.useState)(false);
	const brands = (0, import_react.useMemo)(() => {
		return [...new Set(catalog.products.filter((p) => !category || p.category === category).map((p) => p.brand))].sort();
	}, [category]);
	const rows = (0, import_react.useMemo)(() => {
		let list = catalog.products.filter((p) => {
			if (category && p.category !== category) return false;
			if (p.best_price > budget) return false;
			if (brand && p.brand !== brand) return false;
			if (q && !`${p.name} ${p.brand}`.toLowerCase().includes(q.toLowerCase())) return false;
			return true;
		});
		list = [...list].sort((a, b) => {
			if (sort === "price-desc") return b.best_price - a.best_price;
			if (sort === "stores") return b.store_count - a.store_count;
			if (sort === "name") return a.name.localeCompare(b.name);
			return a.best_price - b.best_price;
		});
		return list;
	}, [
		category,
		budget,
		brand,
		sort,
		q
	]);
	const sidebar = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mb-3 text-xs font-semibold tracking-wider text-muted uppercase",
				children: t("ui.category")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-5 flex flex-col gap-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/products",
					search: {},
					className: `rounded-md px-2 py-2 text-sm ${!category ? "bg-surface-2 text-primary" : "text-fg hover:bg-surface-2"}`,
					children: t("ui.allCats")
				}), CATEGORY_ORDER.map((slug) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/products",
					search: { category: slug },
					className: `rounded-md px-2 py-2 text-sm ${category === slug ? "bg-surface-2 text-primary" : "hover:bg-surface-2"}`,
					children: categoryLabel(slug)
				}, slug))]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mb-2 text-xs font-semibold tracking-wider text-muted uppercase",
				children: t("ui.budget")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mb-1 font-display text-sm font-semibold tabular-nums text-primary ltr-isolate",
				children: [budget.toLocaleString("fr-MA"), " DH"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				type: "range",
				min: 300,
				max: 8e3,
				step: 50,
				value: budget,
				onChange: (e) => setBudget(Number(e.target.value)),
				className: "mb-5 w-full accent-[var(--primary)]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mb-2 text-xs font-semibold tracking-wider text-muted uppercase",
				children: t("ui.brand")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
				className: "h-11 w-full rounded-md bg-bg px-2 text-sm shadow-[var(--shadow-border)]",
				value: brand,
				onChange: (e) => setBrand(e.target.value),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
					value: "",
					children: t("ui.allCats")
				}), brands.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: b }, b))]
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: t("nav.components"),
		title: category ? categoryLabel(category) : t("nav.components"),
		description: t("cat.desc")
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid max-w-6xl gap-6 px-4 py-8 lg:grid-cols-[240px_1fr]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "secondary",
					className: "w-full",
					onClick: () => setFiltersOpen((v) => !v),
					children: t("ui.filters")
				}), filtersOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3",
					children: sidebar
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "hidden lg:block",
				children: sidebar
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-3 flex items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", {
					className: "text-sm",
					children: [
						rows.length,
						" ",
						t("ui.results")
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					className: "h-11 rounded-md bg-surface px-2 text-sm shadow-[var(--shadow-border)]",
					value: sort,
					onChange: (e) => setSort(e.target.value),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "price-asc",
							children: t("ui.sort.priceAsc")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "price-desc",
							children: t("ui.sort.priceDesc")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "stores",
							children: t("ui.sort.stores")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "name",
							children: t("ui.sort.name")
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-border)]",
				children: rows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "p-10 text-center text-sm text-muted",
					children: t("ui.noResults")
				}) : rows.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductRow, { product: p }, p.id))
			})] })
		]
	})] });
}
var $$splitComponentImporter$1 = () => import("./products._id-Cl8Qshuh.mjs");
var Route$1 = createFileRoute("/products/$id")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./reports._id-C0X44fHO.mjs");
var Route = createFileRoute("/reports/$id")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var IndexRoute = Route$17.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$18
});
var AdminRoute = Route$16.update({
	id: "/admin",
	path: "/admin",
	getParentRoute: () => Route$18
});
var AssemblyRoute = Route$15.update({
	id: "/assembly",
	path: "/assembly",
	getParentRoute: () => Route$18
});
var BuilderRoute = Route$14.update({
	id: "/builder",
	path: "/builder",
	getParentRoute: () => Route$18
});
var CleaningRoute = Route$13.update({
	id: "/cleaning",
	path: "/cleaning",
	getParentRoute: () => Route$18
});
var CompareRoute = Route$12.update({
	id: "/compare",
	path: "/compare",
	getParentRoute: () => Route$18
});
var ContactRoute = Route$11.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$18
});
var DealsRoute = Route$10.update({
	id: "/deals",
	path: "/deals",
	getParentRoute: () => Route$18
});
var InspectionRoute = Route$9.update({
	id: "/inspection",
	path: "/inspection",
	getParentRoute: () => Route$18
});
var SearchRoute = Route$8.update({
	id: "/search",
	path: "/search",
	getParentRoute: () => Route$18
});
var UsedRoute = Route$7.update({
	id: "/used",
	path: "/used",
	getParentRoute: () => Route$18
});
var GuidesIndexRoute = Route$6.update({
	id: "/guides/",
	path: "/guides/",
	getParentRoute: () => Route$18
});
var GuidesSlugRoute = Route$5.update({
	id: "/guides/$slug",
	path: "/guides/$slug",
	getParentRoute: () => Route$18
});
var PrebuiltsIndexRoute = Route$4.update({
	id: "/prebuilts/",
	path: "/prebuilts/",
	getParentRoute: () => Route$18
});
var PrebuiltsIdRoute = Route$3.update({
	id: "/prebuilts/$id",
	path: "/prebuilts/$id",
	getParentRoute: () => Route$18
});
var ProductsIndexRoute = Route$2.update({
	id: "/products/",
	path: "/products/",
	getParentRoute: () => Route$18
});
var rootRouteChildren = {
	IndexRoute,
	AdminRoute,
	AssemblyRoute,
	BuilderRoute,
	CleaningRoute,
	CompareRoute,
	ContactRoute,
	DealsRoute,
	InspectionRoute,
	SearchRoute,
	UsedRoute,
	GuidesSlugRoute,
	PrebuiltsIdRoute,
	ProductsIdRoute: Route$1.update({
		id: "/products/$id",
		path: "/products/$id",
		getParentRoute: () => Route$18
	}),
	ReportsIdRoute: Route.update({
		id: "/reports/$id",
		path: "/reports/$id",
		getParentRoute: () => Route$18
	}),
	GuidesIndexRoute,
	PrebuiltsIndexRoute,
	ProductsIndexRoute
};
var routeTree = Route$18._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { freshness as A, searchProducts as B, decodeBuild as C, ago as D, Button as E, categoryImage as F, saveBooking as H, categoryLabel as I, lowestOffer as L, BUILDER_SLOTS as M, CATEGORY_ORDER as N, cn as O, catalog as P, productById as R, compatibility as S, useBuild as T, whatsappHref as U, readBookings as V, CONTACT as _, Badge as a, buildItems as b, Route$4 as c, Route$12 as d, Route$14 as f, CLEANING as g, CITIES as h, ProductRow as i, useI18n as j, dh as k, Route$5 as l, ASSEMBLY as m, Route as n, PageHero as o, Route$15 as p, Route$1 as r, Route$3 as s, router_exports as t, Route$8 as u, INSPECTION as v, encodeBuild as w, buildTotal as x, STEPS as y, productsByCategory as z };

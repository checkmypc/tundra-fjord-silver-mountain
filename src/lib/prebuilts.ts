import { productById } from "./catalog";
import type { Product } from "./types";

export type Prebuilt = {
  id: string;
  title: string;
  parts: Product[];
  price: number;
  condition: "new" | "used";
  store: string;
  gpu: string;
  cpu: string;
  ram: string;
  storage: string;
  motherboard: string;
  psu: string;
  format: string;
  image: string;
  city: string;
};

const RECIPES: Array<{
  id: string;
  title: string;
  parts: string[];
  condition: "new" | "used";
  store: string;
  city: string;
}> = [
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
      "dp-ak400",
    ],
    condition: "new",
    store: "Setup Game",
    city: "Casablanca",
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
      "dp-ak400",
    ],
    condition: "new",
    store: "PC Gamer Maroc",
    city: "Rabat",
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
      "dp-ls520",
    ],
    condition: "new",
    store: "UltraPC",
    city: "Casablanca",
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
      "corsair-h100i",
    ],
    condition: "new",
    store: "Matrix Informatique",
    city: "Marrakech",
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
      "dp-ak400",
    ],
    condition: "used",
    store: "Iris Tech",
    city: "Tanger",
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
      "dp-matrexx-40",
    ],
    condition: "used",
    store: "Avito listing",
    city: "Casablanca",
  },
];

function pick(parts: Product[], cat: string) {
  return parts.find((p) => p.category === cat);
}

export const BUDGET_BRACKETS = [
  { id: "under5", label: "< 5,000 DH", min: 0, max: 4999 },
  { id: "5to7", label: "5,000 – 7,000 DH", min: 5000, max: 6999 },
  { id: "7to10", label: "7,000 – 10,000 DH", min: 7000, max: 9999 },
  { id: "10plus", label: "10,000 DH+", min: 10000, max: 999999 },
];

export function prebuilts(): Prebuilt[] {
  return RECIPES.map((r) => {
    const parts = r.parts.map((id) => productById(id)).filter((p): p is Product => Boolean(p));
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
      gpu: gpu ? (gpu.specs.Chipset || gpu.name) : "Integrated",
      cpu: cpu?.name ?? "—",
      ram: pick(parts, "ram")?.name ?? "—",
      storage: pick(parts, "storage")?.name ?? "—",
      motherboard: pick(parts, "motherboard")?.name ?? "—",
      psu: pick(parts, "psu")?.name ?? "—",
      format: cs?.specs["Form factor"] === "ATX" ? "Mid Tower" : "Micro-ATX",
      image: (gpu || parts[0])?.image ?? "/parts/gpu.svg",
    };
  });
}

export function prebuiltById(id: string) {
  return prebuilts().find((p) => p.id === id);
}

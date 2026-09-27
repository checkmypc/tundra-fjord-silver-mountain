import raw from "@/data/catalog.json";
import type { CatalogFile, CategorySlug, Product } from "./types";

export const catalog = raw as unknown as CatalogFile;

export const CATEGORY_ORDER: CategorySlug[] = [
  "cpu",
  "cooler",
  "motherboard",
  "ram",
  "storage",
  "gpu",
  "psu",
  "case",
  "display",
  "peripheral",
];

export const BUILDER_SLOTS: CategorySlug[] = [
  "cpu",
  "cooler",
  "motherboard",
  "ram",
  "storage",
  "gpu",
  "psu",
  "case",
];

const byIdMap = new Map(catalog.products.map((p) => [p.id, p]));

export function productById(id: string): Product | undefined {
  return byIdMap.get(id);
}

export function productsByCategory(slug: CategorySlug): Product[] {
  return catalog.products.filter((p) => p.category === slug);
}

export function categoryLabel(slug: string): string {
  return catalog.categories.find((c) => c.slug === slug)?.label ?? slug;
}

export function categoryImage(slug: string): string {
  const c = catalog.categories.find((x) => x.slug === slug);
  return c?.image || `/parts/${slug === "storage" ? "ssd" : slug}.svg`;
}

export function lowestOffer(p: Product) {
  const inStock = p.offers.filter((o) => o.stock !== "out_of_stock");
  const pool = inStock.length ? inStock : p.offers;
  return [...pool].sort((a, b) => a.price - b.price)[0];
}

export function searchProducts(q: string): Product[] {
  const s = q.trim().toLowerCase();
  if (!s) return [];
  return catalog.products.filter((p) => {
    const blob = `${p.name} ${p.brand} ${p.category} ${Object.values(p.specs).join(" ")}`.toLowerCase();
    return blob.includes(s);
  });
}

export const DATA_GENERATED = catalog.generated;
export const DATA_NOTE =
  catalog.dataNote ??
  "Sample Moroccan store prices for demonstration. Not a live feed.";

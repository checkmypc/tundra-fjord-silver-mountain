export type Stock = "in_stock" | "low_stock" | "out_of_stock";

export type CategorySlug =
  | "cpu"
  | "cooler"
  | "motherboard"
  | "ram"
  | "storage"
  | "gpu"
  | "psu"
  | "case"
  | "display"
  | "peripheral";

export type Offer = {
  store: string;
  city: string;
  price: number;
  stock: Stock;
  checked_minutes_ago: number;
  url: string;
};

export type PricePoint = { d: string; p: number };

export type Product = {
  id: string;
  category: CategorySlug;
  name: string;
  brand: string;
  image: string;
  msrp: number;
  best_price: number;
  used_price: number;
  in_stock: boolean;
  store_count: number;
  power_draw: number;
  specs: Record<string, string>;
  offers: Offer[];
  history: PricePoint[];
};

export type Store = { name: string; city: string };

export type CatalogCategory = {
  slug: CategorySlug;
  label: string;
  icon?: string;
  image?: string;
};

export type CatalogFile = {
  currency: string;
  currency_symbol: string;
  generated: string;
  dataStatus?: "demo" | "live";
  dataNote?: string;
  categories: CatalogCategory[];
  stores: Store[];
  products: Product[];
};

export type Lang = "en" | "fr" | "ar";
export type Theme = "light" | "dark";

export type BuilderSlots = Partial<Record<CategorySlug, { id: string; qty: number }>>;

export type CompatLevel = "pass" | "warn" | "fail";
export type CompatCheck = { level: CompatLevel; title: string; detail: string };

export type ServiceKind = "inspection" | "assembly" | "cleaning";

export type Booking = {
  id: string;
  kind: ServiceKind;
  createdAt: string;
  name: string;
  phone: string;
  city: string;
  packageId?: string;
  notes: string;
  listingUrl?: string;
  machineType?: string;
};

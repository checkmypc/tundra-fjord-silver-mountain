import { create } from "zustand";
import { catalog, recomputeProduct, bindLiveProducts } from "./catalog";
import { readBookings } from "./bookings";
import { RECIPES, bindLiveRecipes, type PrebuiltRecipe } from "./prebuilts";
import { ALL_PACKAGES, CONTACT, bindLivePrices, livePackagePrice } from "./services";
import { bindLiveUsed, type InspectionReport, type UsedListing } from "./used";
import type {
  ActivityItem,
  Booking,
  BookingStatus,
  CategorySlug,
  Offer,
  OpsSettings,
  Product,
  ServiceKind,
  Stock,
  Technician,
} from "./types";
import { DEFAULT_PIN, SEED_BOOKINGS, SEED_REPORTS, SEED_TEAM, seedActivity, seedListings } from "./ops-seed";

const KEY = "cmp.ops.v1";
const SESSION = "cmp.admin.session";

export const STATUSES: BookingStatus[] = [
  "new",
  "confirmed",
  "scheduled",
  "in_progress",
  "done",
  "cancelled",
];

export const STATUS_LABEL: Record<BookingStatus, string> = {
  new: "New",
  confirmed: "Confirmed",
  scheduled: "Scheduled",
  in_progress: "In progress",
  done: "Done",
  cancelled: "Cancelled",
};

export type OpsSnapshot = {
  pin: string;
  bookings: Booking[];
  products: Product[];
  listings: UsedListing[];
  reports: InspectionReport[];
  recipes: PrebuiltRecipe[];
  packagePrices: Record<string, number>;
  team: Technician[];
  settings: OpsSettings;
  activity: ActivityItem[];
};

const defaultPrices = (): Record<string, number> =>
  Object.fromEntries(ALL_PACKAGES.map((p) => [p.id, p.price]));

const defaultSettings = (): OpsSettings => ({
  pin: DEFAULT_PIN,
  email: CONTACT.email,
  phone: "0661000000",
  hours: CONTACT.hours,
  whatsapp: "212661000000",
});

function seedSnapshot(): OpsSnapshot {
  return {
    pin: DEFAULT_PIN,
    bookings: SEED_BOOKINGS.map((b) => ({ ...b })),
    products: catalog.products.map((p) => structuredClone(p)),
    listings: seedListings(),
    reports: SEED_REPORTS.map((r) => ({ ...r, hardware: r.hardware.map((h) => [...h] as [string, string, string]) })),
    recipes: RECIPES.map((r) => ({ ...r, parts: [...r.parts] })),
    packagePrices: defaultPrices(),
    team: SEED_TEAM.map((t) => ({ ...t, skills: [...t.skills] })),
    settings: defaultSettings(),
    activity: seedActivity(),
  };
}

function loadSnapshot(): OpsSnapshot {
  const seeded = seedSnapshot();
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) {
      const incoming = readBookings().filter((b) => !seeded.bookings.some((s) => s.id === b.id));
      if (incoming.length) seeded.bookings = [...incoming.map(normalizeBooking), ...seeded.bookings];
      return seeded;
    }
    const parsed = JSON.parse(raw) as Partial<OpsSnapshot>;
    const bookings = (parsed.bookings?.length ? parsed.bookings : seeded.bookings).map(normalizeBooking);
    const extra = readBookings().filter((b) => !bookings.some((s) => s.id === b.id));
    return {
      pin: parsed.pin || DEFAULT_PIN,
      bookings: [...extra.map(normalizeBooking), ...bookings],
      products: parsed.products?.length ? parsed.products : seeded.products,
      listings: parsed.listings?.length ? parsed.listings : seeded.listings,
      reports: parsed.reports?.length ? parsed.reports : seeded.reports,
      recipes: parsed.recipes?.length ? parsed.recipes : seeded.recipes,
      packagePrices: { ...seeded.packagePrices, ...parsed.packagePrices },
      team: parsed.team?.length ? parsed.team : seeded.team,
      settings: { ...seeded.settings, ...parsed.settings, pin: parsed.pin || parsed.settings?.pin || DEFAULT_PIN },
      activity: parsed.activity?.length ? parsed.activity : seeded.activity,
    };
  } catch {
    return seeded;
  }
}

function normalizeBooking(b: Booking): Booking {
  return {
    ...b,
    status: b.status ?? "new",
    quotedPrice: b.quotedPrice ?? livePackagePrice(b.packageId, 0),
  };
}

export type OpsState = OpsSnapshot & {
  hydrated: boolean;
  unlocked: boolean;
  hydrate: () => void;
  persist: () => void;
  log: (text: string) => void;
  unlock: (pin: string) => boolean;
  lock: () => void;
  setPin: (pin: string) => void;
  ingestBooking: (b: Booking) => void;
  upsertBooking: (b: Booking) => void;
  patchBooking: (id: string, patch: Partial<Booking>) => void;
  deleteBooking: (id: string) => void;
  upsertProduct: (p: Product) => void;
  patchProduct: (id: string, patch: Partial<Product>) => void;
  setOffers: (id: string, offers: Offer[]) => void;
  deleteProduct: (id: string) => void;
  touchPrices: () => void;
  upsertListing: (l: UsedListing) => void;
  deleteListing: (id: string) => void;
  upsertReport: (r: InspectionReport) => void;
  deleteReport: (id: string) => void;
  upsertRecipe: (r: PrebuiltRecipe) => void;
  deleteRecipe: (id: string) => void;
  setPackagePrice: (id: string, price: number) => void;
  upsertTech: (t: Technician) => void;
  deleteTech: (id: string) => void;
  patchSettings: (patch: Partial<OpsSettings>) => void;
  resetDemo: () => void;
  exportJson: () => string;
  importJson: (raw: string) => boolean;
};

function persistState(s: OpsSnapshot) {
  const { ...data } = s;
  localStorage.setItem(KEY, JSON.stringify(data));
}

export const useOps = create<OpsState>((set, get) => {
  const apply = (patch: Partial<OpsSnapshot>, activity?: string) => {
    set((s) => {
      const next = { ...s, ...patch };
      if (activity) {
        next.activity = [{ id: `act-${Date.now()}`, at: new Date().toISOString(), text: activity }, ...s.activity].slice(
          0,
          60,
        );
      }
      persistState(next);
      return next;
    });
  };

  return {
    ...seedSnapshot(),
    hydrated: false,
    unlocked: false,
    hydrate: () => {
      if (typeof window === "undefined") return;
      const snap = loadSnapshot();
      const unlocked = sessionStorage.getItem(SESSION) === "1";
      set({ ...snap, hydrated: true, unlocked });
    },
    persist: () => persistState(get()),
    log: (text) => apply({}, text),
    unlock: (pin) => {
      const ok = pin.trim() === get().settings.pin || pin.trim() === get().pin;
      if (ok) {
        sessionStorage.setItem(SESSION, "1");
        set({ unlocked: true });
      }
      return ok;
    },
    lock: () => {
      sessionStorage.removeItem(SESSION);
      set({ unlocked: false });
    },
    setPin: (pin) => apply({ pin, settings: { ...get().settings, pin } }, "Admin PIN updated"),
    ingestBooking: (b) => {
      const n = normalizeBooking(b);
      if (get().bookings.some((x) => x.id === n.id)) return;
      apply({ bookings: [n, ...get().bookings] }, `New ${n.kind} request — ${n.name}, ${n.city}`);
    },
    upsertBooking: (b) => {
      const n = normalizeBooking(b);
      const list = get().bookings;
      const i = list.findIndex((x) => x.id === n.id);
      const bookings = i >= 0 ? list.map((x, idx) => (idx === i ? n : x)) : [n, ...list];
      apply({ bookings }, i >= 0 ? `Booking updated — ${n.name}` : `Booking created — ${n.name}`);
    },
    patchBooking: (id, patch) => {
      const bookings = get().bookings.map((b) => (b.id === id ? { ...b, ...patch } : b));
      const row = bookings.find((b) => b.id === id);
      apply({ bookings }, row ? `${row.name} → ${STATUS_LABEL[row.status ?? "new"]}` : undefined);
    },
    deleteBooking: (id) => {
      const row = get().bookings.find((b) => b.id === id);
      apply(
        { bookings: get().bookings.filter((b) => b.id !== id) },
        row ? `Deleted booking — ${row.name}` : "Deleted booking",
      );
    },
    upsertProduct: (p) => {
      const next = recomputeProduct(p);
      const list = get().products;
      const i = list.findIndex((x) => x.id === next.id);
      const products = i >= 0 ? list.map((x, idx) => (idx === i ? next : x)) : [next, ...list];
      apply({ products }, `Catalogue — ${next.name}`);
    },
    patchProduct: (id, patch) => {
      const products = get().products.map((p) => (p.id === id ? recomputeProduct({ ...p, ...patch }) : p));
      apply({ products });
    },
    setOffers: (id, offers) => {
      const products = get().products.map((p) => (p.id === id ? recomputeProduct({ ...p, offers }) : p));
      apply({ products }, "Offers updated");
    },
    deleteProduct: (id) => {
      const row = get().products.find((p) => p.id === id);
      apply({ products: get().products.filter((p) => p.id !== id) }, row ? `Removed SKU — ${row.name}` : "Removed SKU");
    },
    touchPrices: () => {
      const products = get().products.map((p) =>
        recomputeProduct({
          ...p,
          offers: p.offers.map((o) => ({ ...o, checked_minutes_ago: 0 })),
        }),
      );
      apply({ products }, "All listed prices marked as just checked");
    },
    upsertListing: (l) => {
      const list = get().listings;
      const i = list.findIndex((x) => x.id === l.id);
      const listings = i >= 0 ? list.map((x, idx) => (idx === i ? l : x)) : [l, ...list];
      apply({ listings }, `Listing — ${l.title}`);
    },
    deleteListing: (id) => apply({ listings: get().listings.filter((l) => l.id !== id) }, "Listing removed"),
    upsertReport: (r) => {
      const list = get().reports;
      const i = list.findIndex((x) => x.id === r.id);
      const reports = i >= 0 ? list.map((x, idx) => (idx === i ? r : x)) : [r, ...list];
      apply({ reports }, `Report ${r.published ? "published" : "saved"} — ${r.title}`);
    },
    deleteReport: (id) => apply({ reports: get().reports.filter((r) => r.id !== id) }, "Report removed"),
    upsertRecipe: (r) => {
      const list = get().recipes;
      const i = list.findIndex((x) => x.id === r.id);
      const recipes = i >= 0 ? list.map((x, idx) => (idx === i ? r : x)) : [r, ...list];
      apply({ recipes }, `Prebuilt — ${r.title}`);
    },
    deleteRecipe: (id) => apply({ recipes: get().recipes.filter((r) => r.id !== id) }, "Prebuilt removed"),
    setPackagePrice: (id, price) =>
      apply({ packagePrices: { ...get().packagePrices, [id]: price } }, "Service price updated"),
    upsertTech: (t) => {
      const list = get().team;
      const i = list.findIndex((x) => x.id === t.id);
      const team = i >= 0 ? list.map((x, idx) => (idx === i ? t : x)) : [t, ...list];
      apply({ team }, `Technician — ${t.name}`);
    },
    deleteTech: (id) => apply({ team: get().team.filter((t) => t.id !== id) }, "Technician removed"),
    patchSettings: (patch) => apply({ settings: { ...get().settings, ...patch } }, "Settings saved"),
    resetDemo: () => {
      const snap = seedSnapshot();
      persistState(snap);
      set({ ...snap, hydrated: true, unlocked: true });
    },
    exportJson: () => {
      const s = get();
      const data: OpsSnapshot = {
        pin: s.pin,
        bookings: s.bookings,
        products: s.products,
        listings: s.listings,
        reports: s.reports,
        recipes: s.recipes,
        packagePrices: s.packagePrices,
        team: s.team,
        settings: s.settings,
        activity: s.activity,
      };
      return JSON.stringify(data, null, 2);
    },
    importJson: (raw) => {
      try {
        const parsed = JSON.parse(raw) as Partial<OpsSnapshot>;
        if (!parsed || typeof parsed !== "object") return false;
        const snap = seedSnapshot();
        const next: OpsSnapshot = {
          ...snap,
          ...parsed,
          settings: { ...snap.settings, ...parsed.settings },
          packagePrices: { ...snap.packagePrices, ...parsed.packagePrices },
        };
        persistState(next);
        set({ ...next, hydrated: true, unlocked: true });
        return true;
      } catch {
        return false;
      }
    },
  };
});

bindLiveProducts(() => (useOps.getState().hydrated ? useOps.getState().products : undefined));
bindLiveRecipes(() => (useOps.getState().hydrated ? useOps.getState().recipes : undefined));
bindLiveUsed(
  () => (useOps.getState().hydrated ? useOps.getState().listings : undefined),
  () => (useOps.getState().hydrated ? useOps.getState().reports : undefined),
);
bindLivePrices(() => (useOps.getState().hydrated ? useOps.getState().packagePrices : undefined));

export function ingestPublicBooking(b: Booking) {
  useOps.getState().ingestBooking(b);
}

export function slugify(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 48);
}

export function emptyProduct(category: CategorySlug): Product {
  return {
    id: `sku-${Date.now()}`,
    category,
    name: "",
    brand: "",
    image: `/parts/${category === "storage" ? "ssd" : category}.svg`,
    msrp: 0,
    best_price: 0,
    used_price: 0,
    in_stock: true,
    store_count: 1,
    power_draw: 0,
    specs: {},
    offers: [
      {
        store: catalog.stores[0]?.name ?? "Shop",
        city: catalog.stores[0]?.city ?? "Casablanca",
        price: 0,
        stock: "in_stock" as Stock,
        checked_minutes_ago: 0,
        url: "https://",
      },
    ],
    history: [],
  };
}

export function emptyListing(): UsedListing {
  return {
    id: `used-${Date.now()}`,
    title: "",
    city: "Casablanca",
    asking: 0,
    fairValue: 0,
    condition: "Used",
    cpu: "",
    gpu: "",
    ram: "",
    storage: "",
    inspected: false,
    risk: "medium",
    notes: "",
  };
}

export function emptyReport(): InspectionReport {
  const today = new Date().toISOString().slice(0, 10);
  return {
    id: `rep-${Date.now()}`,
    title: "",
    date: today,
    city: "Casablanca",
    technician: "",
    verdict: "NEGOTIATE",
    risk: "medium",
    asking: 0,
    fairValue: 0,
    suggestOffer: 0,
    hardware: [
      ["CPU", "", ""],
      ["GPU", "", ""],
      ["RAM", "", ""],
      ["Storage", "", ""],
      ["Motherboard", "", ""],
      ["PSU", "", ""],
    ],
    temps: { cpuIdle: 0, cpuLoad: 0, gpuIdle: 0, gpuLoad: 0 },
    issues: [""],
    published: false,
  };
}

export function emptyOffer(): Offer {
  return {
    store: catalog.stores[0]?.name ?? "Shop",
    city: catalog.stores[0]?.city ?? "Casablanca",
    price: 0,
    stock: "in_stock",
    checked_minutes_ago: 0,
    url: "https://",
  };
}

export const OPEN_STATUSES: BookingStatus[] = ["new", "confirmed", "scheduled", "in_progress"];

export function bookingRevenue(rows: Booking[]) {
  return rows
    .filter((b) => b.status === "done")
    .reduce((a, b) => a + (b.paidAmount || b.quotedPrice || 0), 0);
}

export const KIND_LABEL: Record<ServiceKind, string> = {
  inspection: "Inspection",
  assembly: "Assembly",
  cleaning: "Cleaning",
};

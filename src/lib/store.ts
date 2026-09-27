import { create } from "zustand";
import { BUILD_KEY, readBuild, writeBuild } from "./builder";
import type { BuilderSlots, CategorySlug } from "./types";
import { readAlerts, toggleAlert } from "./bookings";

type BuildStore = {
  slots: BuilderSlots;
  hydrate: () => void;
  add: (id: string, category: CategorySlug, qty?: number) => void;
  remove: (category: CategorySlug) => void;
  clear: () => void;
  replace: (slots: BuilderSlots) => void;
  alerts: string[];
  toggleWatch: (id: string) => void;
};

export const useBuild = create<BuildStore>((set, get) => ({
  slots: {},
  alerts: [],
  hydrate: () => {
    set({ slots: readBuild(), alerts: readAlerts() });
  },
  add: (id, category, qty = 1) => {
    const next = { ...get().slots, [category]: { id, qty } };
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
  toggleWatch: (id) => set({ alerts: toggleAlert(id) }),
}));

export function partCount(slots: BuilderSlots) {
  return Object.keys(slots).length;
}

export { BUILD_KEY };

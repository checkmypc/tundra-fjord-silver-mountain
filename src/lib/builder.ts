import { BUILDER_SLOTS, productById } from "./catalog";
import type { BuilderSlots, CompatCheck, Product } from "./types";

export const BUILD_KEY = "cmp.build.v2";

export type BuildItem = { product: Product; qty: number };

export function readBuild(): BuilderSlots {
  try {
    const raw = localStorage.getItem(BUILD_KEY);
    if (!raw) return {};
    return JSON.parse(raw) as BuilderSlots;
  } catch {
    return {};
  }
}

export function writeBuild(slots: BuilderSlots) {
  localStorage.setItem(BUILD_KEY, JSON.stringify(slots));
  window.dispatchEvent(new Event("cmp:build"));
}

export function buildItems(slots: BuilderSlots): BuildItem[] {
  return BUILDER_SLOTS.flatMap((slot) => {
    const s = slots[slot];
    if (!s) return [];
    const product = productById(s.id);
    if (!product) return [];
    return [{ product, qty: s.qty || 1 }];
  });
}

export function buildTotal(items: BuildItem[], used = false) {
  return items.reduce((a, i) => a + (used ? i.product.used_price : i.product.best_price) * i.qty, 0);
}

export function compatibility(items: BuildItem[]): {
  checks: CompatCheck[];
  draw: number;
  rec: number;
} {
  const by: Record<string, Product> = {};
  items.forEach((i) => {
    by[i.product.category] = i.product;
  });
  const out: CompatCheck[] = [];
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
      detail: ok
        ? `Both on ${cpu.specs.Socket}`
        : `${cpu.specs.Socket} CPU in a ${mb.specs.Socket} board`,
    });
  }
  if (ram && mb) {
    const ok = ram.specs["Memory type"] === mb.specs["Memory type"];
    out.push({
      level: ok ? "pass" : "fail",
      title: "RAM ↔ Motherboard",
      detail: ok
        ? `${mb.specs["Memory type"]} on both`
        : `${ram.specs["Memory type"]} kit in a ${mb.specs["Memory type"]} board`,
    });
  }
  if (cl && cpu) {
    const ok = (cl.specs.Socket || "").includes(cpu.specs.Socket);
    out.push({
      level: ok ? "pass" : "warn",
      title: "Cooler ↔ CPU socket",
      detail: ok
        ? `Bracket included for ${cpu.specs.Socket}`
        : `Check bracket availability for ${cpu.specs.Socket}`,
    });
  }
  if (gpu && cs) {
    const len = parseInt(gpu.specs.Length, 10);
    const max = parseInt(cs.specs["Max GPU length"], 10);
    const ok = !(len && max) || len <= max;
    out.push({
      level: ok ? "pass" : "fail",
      title: "GPU ↔ Case clearance",
      detail: `${len || "?"} mm card, ${max || "?"} mm available`,
    });
  }
  if (cl && cs && cl.specs.Height && cl.specs.Height !== "—") {
    const h = parseInt(cl.specs.Height, 10);
    const max = parseInt(cs.specs["Max cooler height"], 10);
    if (h && max) {
      out.push({
        level: h <= max ? "pass" : "fail",
        title: "Cooler ↔ Case height",
        detail: `${h} mm cooler, ${max} mm clearance`,
      });
    }
  }
  const draw = items.reduce((a, i) => a + (i.product.power_draw || 0) * i.qty, 0);
  const rec = Math.ceil((draw * 1.4) / 50) * 50 || 0;
  if (psu) {
    const w = parseInt(psu.specs.Wattage, 10);
    out.push({
      level: w >= rec ? "pass" : "warn",
      title: "PSU headroom",
      detail: `${w}W supply, ${rec}W recommended for ~${draw}W load`,
    });
  }
  return { checks: out, draw, rec };
}

export function encodeBuild(slots: BuilderSlots) {
  return btoa(JSON.stringify(slots));
}

export function decodeBuild(raw: string): BuilderSlots | null {
  try {
    return JSON.parse(atob(raw)) as BuilderSlots;
  } catch {
    return null;
  }
}

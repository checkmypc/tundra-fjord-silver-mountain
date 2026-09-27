import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function dh(n: number) {
  return `${Number(n || 0).toLocaleString("fr-MA")} DH`;
}

export function ago(minutes: number, t: (k: string) => string) {
  if (minutes < 60) return `${minutes} ${t("ui.minAgo")}`;
  if (minutes < 1440) return `${Math.round(minutes / 60)} ${t("ui.hAgo")}`;
  return `${Math.round(minutes / 1440)} ${t("ui.dAgo")}`;
}

export function freshness(minutes: number): "live" | "recent" | "stale" {
  if (minutes <= 60) return "live";
  if (minutes <= 24 * 60) return "recent";
  return "stale";
}

import type { Booking } from "./types";

const KEY = "cmp.bookings.v1";
const ALERT_KEY = "cmp.alerts.v1";

export function readBookings(): Booking[] {
  try {
    return JSON.parse(localStorage.getItem(KEY) || "[]") as Booking[];
  } catch {
    return [];
  }
}

export function saveBooking(b: Omit<Booking, "id" | "createdAt">): Booking {
  const full: Booking = {
    ...b,
    id: `bk-${Date.now()}`,
    createdAt: new Date().toISOString(),
  };
  const all = [full, ...readBookings()];
  localStorage.setItem(KEY, JSON.stringify(all));
  return full;
}

export function readAlerts(): string[] {
  try {
    return JSON.parse(localStorage.getItem(ALERT_KEY) || "[]") as string[];
  } catch {
    return [];
  }
}

export function toggleAlert(id: string): string[] {
  const cur = readAlerts();
  const next = cur.includes(id) ? cur.filter((x) => x !== id) : [...cur, id];
  localStorage.setItem(ALERT_KEY, JSON.stringify(next));
  return next;
}

export function whatsappHref(phone: string, text: string) {
  const digits = phone.replace(/[^\d]/g, "");
  const msg = encodeURIComponent(text);
  if (digits.length >= 9) return `https://wa.me/${digits}?text=${msg}`;
  return `https://wa.me/?text=${msg}`;
}

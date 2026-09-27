import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { saveBooking, whatsappHref } from "@/lib/bookings";
import { useI18n } from "@/lib/i18n";
import { CITIES, type Package } from "@/lib/services";
import type { ServiceKind } from "@/lib/types";

export function BookingForm({
  kind,
  packages,
  extra,
}: {
  kind: ServiceKind;
  packages?: Package[];
  extra?: "listing" | "machine";
}) {
  const { t } = useI18n();
  const [sent, setSent] = useState<string | null>(null);
  const [wa, setWa] = useState<string | null>(null);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const booking = saveBooking({
      kind,
      name: String(fd.get("name") || ""),
      phone: String(fd.get("phone") || ""),
      city: String(fd.get("city") || ""),
      packageId: String(fd.get("package") || packages?.[0]?.id || ""),
      notes: String(fd.get("notes") || ""),
      listingUrl: String(fd.get("listing") || ""),
      machineType: String(fd.get("machine") || ""),
    });
    const text = [
      `CHECKMYPC — ${kind}`,
      `${booking.name} · ${booking.city}`,
      booking.packageId,
      booking.listingUrl,
      booking.notes,
    ]
      .filter(Boolean)
      .join("\n");
    setWa(whatsappHref(booking.phone, text));
    setSent(booking.id);
  }

  if (sent) {
    return (
      <div className="rounded-xl bg-surface p-6 shadow-[var(--shadow-border)]">
        <p className="font-display text-lg font-semibold">{t("book.sent")}</p>
        <p className="mt-1 text-sm text-muted">Ref {sent}</p>
        {wa && (
          <Button asChild className="mt-4">
            <a href={wa} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </Button>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 rounded-xl bg-surface p-5 shadow-[var(--shadow-border)] sm:grid-cols-2">
      <div>
        <Label htmlFor="name">{t("book.name")}</Label>
        <Input id="name" name="name" required autoComplete="name" />
      </div>
      <div>
        <Label htmlFor="phone">{t("book.phone")}</Label>
        <Input id="phone" name="phone" required inputMode="tel" placeholder="06…" />
      </div>
      <div>
        <Label htmlFor="city">{t("book.city")}</Label>
        <select
          id="city"
          name="city"
          className="flex h-11 w-full rounded-md bg-bg px-3 text-sm shadow-[var(--shadow-border)]"
          defaultValue={CITIES[0]}
        >
          {CITIES.map((c) => (
            <option key={c}>{c}</option>
          ))}
          <option>Other (quote travel)</option>
        </select>
      </div>
      {packages && (
        <div>
          <Label htmlFor="package">{t("book.package")}</Label>
          <select
            id="package"
            name="package"
            className="flex h-11 w-full rounded-md bg-bg px-3 text-sm shadow-[var(--shadow-border)]"
            defaultValue={packages[0]?.id}
          >
            {packages.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name} — {p.price} DH
              </option>
            ))}
          </select>
        </div>
      )}
      {extra === "machine" && (
        <div>
          <Label htmlFor="machine">{t("book.machine")}</Label>
          <select
            id="machine"
            name="machine"
            className="flex h-11 w-full rounded-md bg-bg px-3 text-sm shadow-[var(--shadow-border)]"
          >
            <option value="desktop">{t("book.desktop")}</option>
            <option value="laptop">{t("book.laptop")}</option>
          </select>
        </div>
      )}
      {extra === "listing" && (
        <div className="sm:col-span-2">
          <Label htmlFor="listing">{t("book.listing")}</Label>
          <Input id="listing" name="listing" placeholder="https://" />
        </div>
      )}
      <div className="sm:col-span-2">
        <Label htmlFor="notes">{t("book.notes")}</Label>
        <Textarea id="notes" name="notes" />
      </div>
      <div className="sm:col-span-2">
        <Button type="submit">{t("book.submit")}</Button>
        <p className="mt-2 text-xs text-muted">{t("est")} · Casablanca / Rabat / Agadir</p>
      </div>
    </form>
  );
}

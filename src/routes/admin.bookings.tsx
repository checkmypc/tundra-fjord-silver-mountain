import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { toast } from "sonner";
import { KindBadge, StatusBadge } from "@/components/admin/status-badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { whatsappHref } from "@/lib/bookings";
import {
  KIND_LABEL,
  STATUSES,
  STATUS_LABEL,
  useOps,
} from "@/lib/ops";
import { ALL_PACKAGES, CITIES, livePackagePrice } from "@/lib/services";
import type { Booking, BookingStatus, ServiceKind, Technician } from "@/lib/types";
import { cn, dh, fieldClass } from "@/lib/utils";

export const Route = createFileRoute("/admin/bookings")({ component: AdminBookings });

function AdminBookings() {
  const bookings = useOps((s) => s.bookings);
  const team = useOps((s) => s.team);
  const upsert = useOps((s) => s.upsertBooking);
  const patch = useOps((s) => s.patchBooking);
  const remove = useOps((s) => s.deleteBooking);
  const [filter, setFilter] = useState<"all" | BookingStatus | ServiceKind>("all");
  const [q, setQ] = useState("");
  const [sel, setSel] = useState<string | "new" | null>(bookings[0]?.id ?? null);

  const rows = useMemo(() => {
    return bookings.filter((b) => {
      if (filter !== "all" && b.status !== filter && b.kind !== filter) return false;
      if (q) {
        const blob = `${b.name} ${b.phone} ${b.city} ${b.notes} ${b.listingUrl}`.toLowerCase();
        if (!blob.includes(q.toLowerCase())) return false;
      }
      return true;
    });
  }, [bookings, filter, q]);

  const current =
    sel === "new"
      ? null
      : rows.find((b) => b.id === sel) || bookings.find((b) => b.id === sel);

  function save(b: Booking) {
    upsert(b);
    setSel(b.id);
    toast.success("Booking saved");
  }

  return (
    <div className="mx-auto grid max-w-6xl gap-4 px-4 py-6 lg:grid-cols-[minmax(0,1fr)_minmax(280px,380px)] lg:px-6">
      <div>
        <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-xs font-semibold tracking-[0.14em] text-muted uppercase">Pipeline</p>
            <h1 className="font-display text-3xl font-semibold">Bookings</h1>
          </div>
          <Button size="sm" onClick={() => setSel("new")}>
            New request
          </Button>
        </div>
        <div className="mb-3 flex flex-wrap gap-2">
          {(["all", "new", "confirmed", "scheduled", "in_progress", "done", "cancelled"] as const).map((k) => (
            <button
              key={k}
              type="button"
              onClick={() => setFilter(k)}
              className={cn(
                "min-h-9 rounded-full px-3 text-xs font-semibold",
                filter === k ? "bg-primary text-primary-fg" : "bg-surface text-muted shadow-[var(--shadow-border)]",
              )}
            >
              {k === "all" ? "All" : STATUS_LABEL[k]}
            </button>
          ))}
        </div>
        <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search name, phone, city…" className="mb-3" />
        <div className="overflow-x-auto rounded-2xl bg-surface shadow-[var(--shadow-border)]">
          <table className="w-full min-w-[640px] text-sm">
            <thead className="text-left text-xs text-muted">
              <tr className="border-b border-border">
                <th className="px-4 py-3 font-medium">Customer</th>
                <th className="px-2 py-3 font-medium">Service</th>
                <th className="px-2 py-3 font-medium">Status</th>
                <th className="px-2 py-3 font-medium">Quote</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((b) => (
                <tr
                  key={b.id}
                  className={cn(
                    "cursor-pointer border-b border-border last:border-0 hover:bg-surface-2",
                    sel === b.id && "bg-surface-2",
                  )}
                  onClick={() => setSel(b.id)}
                >
                  <td className="px-4 py-3">
                    <p className="font-medium">{b.name}</p>
                    <p className="text-xs text-muted">
                      {b.city} · {new Date(b.createdAt).toLocaleDateString("fr-MA")}
                    </p>
                  </td>
                  <td className="px-2 py-3">
                    <KindBadge kind={b.kind} />
                  </td>
                  <td className="px-2 py-3">
                    <StatusBadge status={b.status ?? "new"} />
                  </td>
                  <td className="px-2 py-3 font-mono tabular-nums">{dh(b.quotedPrice || 0)}</td>
                </tr>
              ))}
              {rows.length === 0 && (
                <tr>
                  <td colSpan={4} className="px-4 py-8 text-center text-muted">
                    No bookings match.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <BookingEditor
        key={sel === "new" ? "new" : current?.id ?? "none"}
        booking={sel === "new" ? null : current ?? null}
        team={team}
        onSave={save}
        onPatch={patch}
        onDelete={(id) => {
          remove(id);
          setSel(bookings.find((b) => b.id !== id)?.id ?? "new");
          toast.success("Deleted");
        }}
      />
    </div>
  );
}

function BookingEditor({
  booking,
  team,
  onSave,
  onPatch,
  onDelete,
}: {
  booking: Booking | null;
  team: Technician[];
  onSave: (b: Booking) => void;
  onPatch: (id: string, patch: Partial<Booking>) => void;
  onDelete: (id: string) => void;
}) {
  const isNew = !booking;
  const [form, setForm] = useState<Booking>(
    booking ?? {
      id: `bk-${Date.now()}`,
      kind: "inspection",
      createdAt: new Date().toISOString(),
      name: "",
      phone: "",
      city: "Casablanca",
      notes: "",
      status: "new",
      quotedPrice: livePackagePrice("inspect-standard", 250),
      packageId: "inspect-standard",
    },
  );

  function set<K extends keyof Booking>(key: K, value: Booking[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  const wa = whatsappHref(
    form.phone,
    `CHECKMYPC — ${KIND_LABEL[form.kind]}\n${form.name} · ${form.city}\nRef ${form.id}`,
  );

  return (
    <Card className="h-fit rounded-2xl p-5">
      <h2 className="font-display text-lg font-semibold">{isNew ? "New request" : form.name || "Booking"}</h2>
      <p className="mb-4 font-mono text-xs text-muted">{form.id}</p>
      <div className="grid gap-3">
        <div>
          <Label htmlFor="bk-name">Name</Label>
          <Input id="bk-name" value={form.name} onChange={(e) => set("name", e.target.value)} />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <Label htmlFor="bk-phone">Phone</Label>
            <Input id="bk-phone" value={form.phone} onChange={(e) => set("phone", e.target.value)} />
          </div>
          <div>
            <Label htmlFor="bk-city">City</Label>
            <select id="bk-city" className={fieldClass} value={form.city} onChange={(e) => set("city", e.target.value)}>
              {CITIES.map((c) => (
                <option key={c}>{c}</option>
              ))}
              <option>Other</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <Label htmlFor="bk-kind">Service</Label>
            <select
              id="bk-kind"
              className={fieldClass}
              value={form.kind}
              onChange={(e) => set("kind", e.target.value as ServiceKind)}
            >
              {(Object.keys(KIND_LABEL) as ServiceKind[]).map((k) => (
                <option key={k} value={k}>
                  {KIND_LABEL[k]}
                </option>
              ))}
            </select>
          </div>
          <div>
            <Label htmlFor="bk-status">Status</Label>
            <select
              id="bk-status"
              className={fieldClass}
              value={form.status ?? "new"}
              onChange={(e) => {
                const status = e.target.value as BookingStatus;
                set("status", status);
                if (booking) onPatch(booking.id, { status });
              }}
            >
              {STATUSES.map((s) => (
                <option key={s} value={s}>
                  {STATUS_LABEL[s]}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <Label htmlFor="bk-pkg">Package</Label>
          <select
            id="bk-pkg"
            className={fieldClass}
            value={form.packageId ?? ""}
            onChange={(e) => {
              const packageId = e.target.value;
              set("packageId", packageId);
              set("quotedPrice", livePackagePrice(packageId, form.quotedPrice || 0));
            }}
          >
            {ALL_PACKAGES.filter((p) => p.id.startsWith(form.kind === "inspection" ? "inspect" : form.kind === "assembly" ? "asm" : "cln")).map(
              (p) => (
                <option key={p.id} value={p.id}>
                  {p.name} — {p.price} DH
                </option>
              ),
            )}
          </select>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <Label htmlFor="bk-quote">Quoted DH</Label>
            <Input
              id="bk-quote"
              type="number"
              value={form.quotedPrice ?? 0}
              onChange={(e) => set("quotedPrice", Number(e.target.value))}
            />
          </div>
          <div>
            <Label htmlFor="bk-paid">Paid DH</Label>
            <Input
              id="bk-paid"
              type="number"
              value={form.paidAmount ?? 0}
              onChange={(e) => set("paidAmount", Number(e.target.value))}
            />
          </div>
        </div>
        <div>
          <Label htmlFor="bk-tech">Technician</Label>
          <select
            id="bk-tech"
            className={fieldClass}
            value={form.assignedTo ?? ""}
            onChange={(e) => set("assignedTo", e.target.value)}
          >
            <option value="">Unassigned</option>
            {team
              .filter((t) => t.active)
              .map((t) => (
                <option key={t.id} value={t.id}>
                  {t.name} · {t.city}
                </option>
              ))}
          </select>
        </div>
        <div>
          <Label htmlFor="bk-when">Scheduled</Label>
          <Input id="bk-when" type="date" value={form.scheduledAt ?? ""} onChange={(e) => set("scheduledAt", e.target.value)} />
        </div>
        <div>
          <Label htmlFor="bk-url">Listing URL</Label>
          <Input id="bk-url" value={form.listingUrl ?? ""} onChange={(e) => set("listingUrl", e.target.value)} />
        </div>
        <div>
          <Label htmlFor="bk-notes">Customer notes</Label>
          <Textarea id="bk-notes" value={form.notes} onChange={(e) => set("notes", e.target.value)} />
        </div>
        <div>
          <Label htmlFor="bk-int">Internal notes</Label>
          <Textarea id="bk-int" value={form.internalNotes ?? ""} onChange={(e) => set("internalNotes", e.target.value)} />
        </div>
        <div className="flex flex-wrap gap-2 pt-1">
          <Button type="button" onClick={() => onSave(form)}>
            Save
          </Button>
          <Button type="button" variant="secondary" asChild>
            <a href={wa} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </Button>
          {!isNew && (
            <Button type="button" variant="danger" onClick={() => onDelete(form.id)}>
              Delete
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
}

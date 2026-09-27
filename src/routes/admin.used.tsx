import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { VerdictBadge } from "@/components/admin/status-badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CITIES } from "@/lib/services";
import { emptyListing, emptyReport, useOps } from "@/lib/ops";
import type { InspectionReport, UsedListing, Verdict } from "@/lib/used";
import { cn, dh, fieldClass } from "@/lib/utils";

export const Route = createFileRoute("/admin/used")({ component: AdminUsed });

function AdminUsed() {
  const [tab, setTab] = useState<"listings" | "reports">("listings");
  return (
    <div className="mx-auto max-w-6xl px-4 py-6 lg:px-6">
      <div className="mb-4">
        <p className="text-xs font-semibold tracking-[0.14em] text-muted uppercase">Inspection</p>
        <h1 className="font-display text-3xl font-semibold">Used PCs & reports</h1>
      </div>
      <div className="mb-5 flex gap-2">
        {(["listings", "reports"] as const).map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTab(t)}
            className={cn(
              "min-h-11 rounded-full px-4 text-sm font-semibold capitalize",
              tab === t ? "bg-primary text-primary-fg" : "bg-surface text-muted shadow-[var(--shadow-border)]",
            )}
          >
            {t}
          </button>
        ))}
      </div>
      {tab === "listings" ? <ListingsPanel /> : <ReportsPanel />}
    </div>
  );
}

function ListingsPanel() {
  const listings = useOps((s) => s.listings);
  const upsert = useOps((s) => s.upsertListing);
  const remove = useOps((s) => s.deleteListing);
  const [sel, setSel] = useState<string | "new" | null>(null);
  const current = sel === "new" ? null : listings.find((l) => l.id === sel);

  return (
    <div className="grid gap-4 lg:grid-cols-[1fr_380px]">
      <div className="space-y-3">
        <Button size="sm" onClick={() => setSel("new")}>
          Add listing
        </Button>
        {listings.map((l) => (
          <button
            key={l.id}
            type="button"
            onClick={() => setSel(l.id)}
            className={cn(
              "w-full rounded-2xl bg-surface p-4 text-start shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]",
              sel === l.id && "shadow-[var(--shadow-border-hover)]",
            )}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-display font-semibold">{l.title}</p>
                <p className="text-xs text-muted">
                  {l.city} · {l.condition}
                </p>
              </div>
              <VerdictBadge verdict={l.inspected ? l.verdict : undefined} />
            </div>
            <p className="mt-2 font-mono tabular-nums">{dh(l.asking)}</p>
          </button>
        ))}
      </div>
      {sel && (
        <ListingEditor
          key={sel === "new" ? "new" : current?.id}
          listing={sel === "new" ? emptyListing() : (current ?? emptyListing())}
          onSave={(l) => {
            upsert(l);
            setSel(l.id);
            toast.success("Listing saved");
          }}
          onDelete={
            sel === "new"
              ? undefined
              : () => {
                  if (current) remove(current.id);
                  setSel(null);
                }
          }
        />
      )}
    </div>
  );
}

function ListingEditor({
  listing,
  onSave,
  onDelete,
}: {
  listing: UsedListing;
  onSave: (l: UsedListing) => void;
  onDelete?: () => void;
}) {
  const [form, setForm] = useState(listing);
  function set<K extends keyof UsedListing>(k: K, v: UsedListing[K]) {
    setForm((f) => ({ ...f, [k]: v }));
  }
  return (
    <Card className="h-fit rounded-2xl p-5">
      <h2 className="mb-3 font-display font-semibold">Listing</h2>
      <div className="grid gap-3">
        <div>
          <Label>Title</Label>
          <Input value={form.title} onChange={(e) => set("title", e.target.value)} />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <Label>City</Label>
            <select className={fieldClass} value={form.city} onChange={(e) => set("city", e.target.value)}>
              {CITIES.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </div>
          <div>
            <Label>Condition</Label>
            <Input value={form.condition} onChange={(e) => set("condition", e.target.value)} />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <Label>Asking DH</Label>
            <Input type="number" value={form.asking} onChange={(e) => set("asking", Number(e.target.value))} />
          </div>
          <div>
            <Label>Fair value DH</Label>
            <Input type="number" value={form.fairValue} onChange={(e) => set("fairValue", Number(e.target.value))} />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <Label>CPU</Label>
            <Input value={form.cpu} onChange={(e) => set("cpu", e.target.value)} />
          </div>
          <div>
            <Label>GPU</Label>
            <Input value={form.gpu} onChange={(e) => set("gpu", e.target.value)} />
          </div>
          <div>
            <Label>RAM</Label>
            <Input value={form.ram} onChange={(e) => set("ram", e.target.value)} />
          </div>
          <div>
            <Label>Storage</Label>
            <Input value={form.storage} onChange={(e) => set("storage", e.target.value)} />
          </div>
        </div>
        <label className="flex min-h-11 items-center gap-2 text-sm">
          <input type="checkbox" checked={form.inspected} onChange={(e) => set("inspected", e.target.checked)} />
          Inspected
        </label>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <Label>Verdict</Label>
            <select
              className={fieldClass}
              value={form.verdict ?? ""}
              onChange={(e) => set("verdict", (e.target.value || undefined) as Verdict | undefined)}
            >
              <option value="">None</option>
              <option value="BUY">BUY</option>
              <option value="NEGOTIATE">NEGOTIATE</option>
              <option value="DONT">DON'T BUY</option>
            </select>
          </div>
          <div>
            <Label>Risk</Label>
            <select className={fieldClass} value={form.risk} onChange={(e) => set("risk", e.target.value as UsedListing["risk"])}>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
        </div>
        <div>
          <Label>Notes</Label>
          <Textarea value={form.notes} onChange={(e) => set("notes", e.target.value)} />
        </div>
        <div className="flex flex-wrap gap-2">
          <Button type="button" onClick={() => onSave(form)}>
            Save listing
          </Button>
          {onDelete && (
            <Button type="button" variant="danger" onClick={onDelete}>
              Delete
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
}

function ReportsPanel() {
  const reports = useOps((s) => s.reports);
  const listings = useOps((s) => s.listings);
  const team = useOps((s) => s.team);
  const upsert = useOps((s) => s.upsertReport);
  const remove = useOps((s) => s.deleteReport);
  const [sel, setSel] = useState<string | "new" | null>(reports[0]?.id ?? null);
  const current = sel === "new" ? null : reports.find((r) => r.id === sel);

  return (
    <div className="grid gap-4 lg:grid-cols-[1fr_minmax(280px,420px)]">
      <div className="space-y-3">
        <Button size="sm" onClick={() => setSel("new")}>
          New report
        </Button>
        {reports.map((r) => (
          <button
            key={r.id}
            type="button"
            onClick={() => setSel(r.id)}
            className={cn(
              "w-full rounded-2xl bg-surface p-4 text-start shadow-[var(--shadow-border)]",
              sel === r.id && "shadow-[var(--shadow-border-hover)]",
            )}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-display font-semibold">{r.title || r.id}</p>
                <p className="text-xs text-muted">
                  {r.city} · {r.date} · {r.published ? "Published" : "Draft"}
                </p>
              </div>
              <VerdictBadge verdict={r.verdict} />
            </div>
          </button>
        ))}
      </div>
      {sel && (
        <ReportEditor
          key={sel === "new" ? "new" : current?.id}
          report={sel === "new" ? emptyReport() : (current ?? emptyReport())}
          listings={listings}
          techs={team.map((t) => t.name)}
          onSave={(r) => {
            upsert(r);
            setSel(r.id);
            toast.success(r.published ? "Report published" : "Draft saved");
          }}
          onDelete={
            sel === "new"
              ? undefined
              : () => {
                  if (current) remove(current.id);
                  setSel(null);
                }
          }
        />
      )}
    </div>
  );
}

function ReportEditor({
  report,
  listings,
  techs,
  onSave,
  onDelete,
}: {
  report: InspectionReport;
  listings: UsedListing[];
  techs: string[];
  onSave: (r: InspectionReport) => void;
  onDelete?: () => void;
}) {
  const [form, setForm] = useState(report);
  function set<K extends keyof InspectionReport>(k: K, v: InspectionReport[K]) {
    setForm((f) => ({ ...f, [k]: v }));
  }
  return (
    <Card className="h-fit rounded-2xl p-5">
      <h2 className="mb-3 font-display font-semibold">Report</h2>
      <div className="grid gap-3">
        <div>
          <Label>Title</Label>
          <Input value={form.title} onChange={(e) => set("title", e.target.value)} />
        </div>
        <div>
          <Label>Linked listing</Label>
          <select
            className={fieldClass}
            value={form.listingId ?? ""}
            onChange={(e) => {
              const listingId = e.target.value;
              const l = listings.find((x) => x.id === listingId);
              setForm((f) => ({
                ...f,
                listingId,
                title: f.title || l?.title || "",
                city: l?.city || f.city,
                asking: l?.asking ?? f.asking,
                fairValue: l?.fairValue ?? f.fairValue,
              }));
            }}
          >
            <option value="">None</option>
            {listings.map((l) => (
              <option key={l.id} value={l.id}>
                {l.title}
              </option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <Label>Date</Label>
            <Input type="date" value={form.date} onChange={(e) => set("date", e.target.value)} />
          </div>
          <div>
            <Label>City</Label>
            <select className={fieldClass} value={form.city} onChange={(e) => set("city", e.target.value)}>
              {CITIES.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <Label>Technician</Label>
          <Input list="tech-names" value={form.technician} onChange={(e) => set("technician", e.target.value)} />
          <datalist id="tech-names">
            {techs.map((t) => (
              <option key={t} value={t} />
            ))}
          </datalist>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <Label>Verdict</Label>
            <select className={fieldClass} value={form.verdict} onChange={(e) => set("verdict", e.target.value as Verdict)}>
              <option value="BUY">BUY</option>
              <option value="NEGOTIATE">NEGOTIATE</option>
              <option value="DONT">DON'T BUY</option>
            </select>
          </div>
          <div>
            <Label>Risk</Label>
            <select
              className={fieldClass}
              value={form.risk}
              onChange={(e) => set("risk", e.target.value as InspectionReport["risk"])}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div>
            <Label>Asking</Label>
            <Input type="number" value={form.asking} onChange={(e) => set("asking", Number(e.target.value))} />
          </div>
          <div>
            <Label>Fair</Label>
            <Input type="number" value={form.fairValue} onChange={(e) => set("fairValue", Number(e.target.value))} />
          </div>
          <div>
            <Label>Offer</Label>
            <Input type="number" value={form.suggestOffer} onChange={(e) => set("suggestOffer", Number(e.target.value))} />
          </div>
        </div>
        <div>
          <Label>Hardware (part / found / note)</Label>
          <div className="space-y-2">
            {form.hardware.map((row, i) => (
              <div key={i} className="grid grid-cols-3 gap-1">
                {row.map((cell, j) => (
                  <Input
                    key={j}
                    value={cell}
                    onChange={(e) => {
                      const hardware = form.hardware.map((r, ri) =>
                        ri === i ? ([...r.slice(0, j), e.target.value, ...r.slice(j + 1)] as [string, string, string]) : r,
                      );
                      set("hardware", hardware);
                    }}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {(
            [
              ["cpuIdle", "CPU idle"],
              ["cpuLoad", "CPU load"],
              ["gpuIdle", "GPU idle"],
              ["gpuLoad", "GPU load"],
            ] as const
          ).map(([k, lab]) => (
            <div key={k}>
              <Label>{lab}</Label>
              <Input
                type="number"
                value={form.temps[k]}
                onChange={(e) => set("temps", { ...form.temps, [k]: Number(e.target.value) })}
              />
            </div>
          ))}
        </div>
        <div>
          <Label>Issues (one per line)</Label>
          <Textarea value={form.issues.join("\n")} onChange={(e) => set("issues", e.target.value.split("\n"))} />
        </div>
        <label className="flex min-h-11 items-center gap-2 text-sm">
          <input type="checkbox" checked={form.published} onChange={(e) => set("published", e.target.checked)} />
          Publish on the public report URL
        </label>
        <div className="flex flex-wrap gap-2">
          <Button type="button" onClick={() => onSave(form)}>
            Save report
          </Button>
          {form.published && (
            <Button asChild variant="secondary">
              <Link to="/reports/$id" params={{ id: form.id }}>
                View public
              </Link>
            </Button>
          )}
          {onDelete && (
            <Button type="button" variant="danger" onClick={onDelete}>
              Delete
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
}

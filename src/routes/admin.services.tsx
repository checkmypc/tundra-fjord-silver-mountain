import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ASSEMBLY, CLEANING, INSPECTION, livePackages } from "@/lib/services";
import { KIND_LABEL, useOps } from "@/lib/ops";
import type { ServiceKind, Technician } from "@/lib/types";
import { cn, dh } from "@/lib/utils";

export const Route = createFileRoute("/admin/services")({ component: AdminServices });

function AdminServices() {
  const [tab, setTab] = useState<"prices" | "team">("prices");
  return (
    <div className="mx-auto max-w-6xl px-4 py-6 lg:px-6">
      <div className="mb-4">
        <p className="text-xs font-semibold tracking-[0.14em] text-muted uppercase">Operations</p>
        <h1 className="font-display text-3xl font-semibold">Services & team</h1>
      </div>
      <div className="mb-5 flex gap-2">
        {(["prices", "team"] as const).map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTab(t)}
            className={cn(
              "min-h-11 rounded-full px-4 text-sm font-semibold capitalize",
              tab === t ? "bg-primary text-primary-fg" : "bg-surface text-muted shadow-[var(--shadow-border)]",
            )}
          >
            {t === "prices" ? "Packages" : "Technicians"}
          </button>
        ))}
      </div>
      {tab === "prices" ? <PricesPanel /> : <TeamPanel />}
    </div>
  );
}

function PricesPanel() {
  const prices = useOps((s) => s.packagePrices);
  const setPrice = useOps((s) => s.setPackagePrice);
  const groups = [
    { title: "Inspection", items: livePackages(INSPECTION.packages) },
    { title: "Assembly", items: livePackages(ASSEMBLY.packages) },
    { title: "Cleaning", items: livePackages(CLEANING.packages) },
  ];
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {groups.map((g) => (
        <Card key={g.title} className="rounded-2xl p-5">
          <h2 className="mb-4 font-display font-semibold">{g.title}</h2>
          <ul className="space-y-4">
            {g.items.map((p) => (
              <li key={p.id}>
                <Label htmlFor={p.id}>{p.name}</Label>
                <div className="flex items-center gap-2">
                  <Input
                    id={p.id}
                    type="number"
                    value={prices[p.id] ?? p.price}
                    onChange={(e) => setPrice(p.id, Number(e.target.value))}
                  />
                  <span className="text-xs text-muted">DH</span>
                </div>
                <p className="mt-1 text-xs text-muted">{p.duration}</p>
              </li>
            ))}
          </ul>
        </Card>
      ))}
      <p className="text-xs text-muted md:col-span-3">
        Public service pages pick up these numbers in this browser. Base inspection still listed from{" "}
        {dh(INSPECTION.basePrice)} Casablanca / Rabat.
      </p>
    </div>
  );
}

function TeamPanel() {
  const team = useOps((s) => s.team);
  const upsert = useOps((s) => s.upsertTech);
  const remove = useOps((s) => s.deleteTech);
  const [sel, setSel] = useState<string | "new" | null>(team[0]?.id ?? null);
  const current = sel === "new" ? null : team.find((t) => t.id === sel);

  return (
    <div className="grid gap-4 lg:grid-cols-[1fr_360px]">
      <div className="space-y-3">
        <Button size="sm" onClick={() => setSel("new")}>
          Add technician
        </Button>
        {team.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setSel(t.id)}
            className="flex w-full items-center justify-between rounded-2xl bg-surface p-4 text-start shadow-[var(--shadow-border)]"
          >
            <div>
              <p className="font-display font-semibold">{t.name}</p>
              <p className="text-xs text-muted">
                {t.city} · {t.skills.map((s) => KIND_LABEL[s]).join(" · ")}
              </p>
            </div>
            <span className={cn("text-xs font-semibold", t.active ? "text-ok" : "text-muted")}>
              {t.active ? "Active" : "Off"}
            </span>
          </button>
        ))}
      </div>
      {sel && (
        <TechEditor
          key={sel === "new" ? "new" : current?.id}
          tech={
            sel === "new"
              ? {
                  id: `tech-${Date.now()}`,
                  name: "",
                  city: "Casablanca",
                  phone: "",
                  skills: ["inspection"],
                  active: true,
                }
              : (current as Technician)
          }
          onSave={(t) => {
            upsert(t);
            setSel(t.id);
            toast.success("Technician saved");
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

function TechEditor({
  tech,
  onSave,
  onDelete,
}: {
  tech: Technician;
  onSave: (t: Technician) => void;
  onDelete?: () => void;
}) {
  const [form, setForm] = useState(tech);
  const skills: ServiceKind[] = ["inspection", "assembly", "cleaning"];
  return (
    <Card className="h-fit rounded-2xl p-5">
      <h2 className="mb-3 font-display font-semibold">Technician</h2>
      <div className="grid gap-3">
        <div>
          <Label>Name</Label>
          <Input value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} />
        </div>
        <div>
          <Label>City</Label>
          <Input value={form.city} onChange={(e) => setForm((f) => ({ ...f, city: e.target.value }))} />
        </div>
        <div>
          <Label>Phone</Label>
          <Input value={form.phone} onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))} />
        </div>
        <fieldset>
          <legend className="mb-1.5 text-sm font-medium">Skills</legend>
          <div className="flex flex-col gap-2">
            {skills.map((s) => (
              <label key={s} className="flex min-h-11 items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={form.skills.includes(s)}
                  onChange={(e) =>
                    setForm((f) => ({
                      ...f,
                      skills: e.target.checked ? [...f.skills, s] : f.skills.filter((x) => x !== s),
                    }))
                  }
                />
                {KIND_LABEL[s]}
              </label>
            ))}
          </div>
        </fieldset>
        <label className="flex min-h-11 items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={form.active}
            onChange={(e) => setForm((f) => ({ ...f, active: e.target.checked }))}
          />
          Active
        </label>
        <div className="flex flex-wrap gap-2">
          <Button type="button" onClick={() => onSave(form)}>
            Save
          </Button>
          {onDelete && (
            <Button type="button" variant="danger" onClick={onDelete}>
              Remove
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
}

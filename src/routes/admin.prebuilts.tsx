import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BUILDER_SLOTS, categoryLabel, productsByCategory } from "@/lib/catalog";
import { useOps } from "@/lib/ops";
import { CITIES } from "@/lib/services";
import type { PrebuiltRecipe } from "@/lib/prebuilts";
import { prebuilts } from "@/lib/prebuilts";
import { dh, fieldClass } from "@/lib/utils";

export const Route = createFileRoute("/admin/prebuilts")({ component: AdminPrebuilts });

function AdminPrebuilts() {
  const recipes = useOps((s) => s.recipes);
  const upsert = useOps((s) => s.upsertRecipe);
  const remove = useOps((s) => s.deleteRecipe);
  const [sel, setSel] = useState<string | "new" | null>(recipes[0]?.id ?? null);
  const built = prebuilts();
  const current = sel === "new" ? null : recipes.find((r) => r.id === sel);

  return (
    <div className="mx-auto grid max-w-6xl gap-4 px-4 py-6 lg:grid-cols-[1fr_420px] lg:px-6">
      <div>
        <div className="mb-4 flex items-end justify-between gap-3">
          <div>
            <p className="text-xs font-semibold tracking-[0.14em] text-muted uppercase">Ready-made</p>
            <h1 className="font-display text-3xl font-semibold">Prebuilt PCs</h1>
          </div>
          <Button size="sm" onClick={() => setSel("new")}>
            New build
          </Button>
        </div>
        <div className="space-y-3">
          {built.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setSel(p.id)}
              className="flex w-full items-center justify-between gap-3 rounded-2xl bg-surface p-4 text-start shadow-[var(--shadow-border)]"
            >
              <div>
                <p className="font-display font-semibold">{p.title}</p>
                <p className="text-xs text-muted">
                  {p.store} · {p.city} · {p.condition}
                </p>
              </div>
              <p className="font-mono tabular-nums">{dh(p.price)}</p>
            </button>
          ))}
        </div>
      </div>
      {sel && (
        <RecipeEditor
          key={sel === "new" ? "new" : current?.id}
          recipe={
            sel === "new"
              ? {
                  id: `pb-${Date.now()}`,
                  title: "",
                  parts: [],
                  condition: "new",
                  store: "CHECKMYPC",
                  city: "Casablanca",
                }
              : (current ?? recipes[0])
          }
          onSave={(r) => {
            upsert(r);
            setSel(r.id);
            toast.success("Prebuilt saved");
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

function RecipeEditor({
  recipe,
  onSave,
  onDelete,
}: {
  recipe: PrebuiltRecipe;
  onSave: (r: PrebuiltRecipe) => void;
  onDelete?: () => void;
}) {
  const [form, setForm] = useState<PrebuiltRecipe>(recipe);
  function partFor(cat: (typeof BUILDER_SLOTS)[number]) {
    const options = productsByCategory(cat);
    return options.find((p) => form.parts.includes(p.id))?.id ?? "";
  }
  function setPart(cat: (typeof BUILDER_SLOTS)[number], id: string) {
    const others = productsByCategory(cat).map((p) => p.id);
    const next = form.parts.filter((x) => !others.includes(x));
    if (id) next.push(id);
    setForm((f) => ({ ...f, parts: next }));
  }
  return (
    <Card className="h-fit rounded-2xl p-5">
      <h2 className="mb-3 font-display font-semibold">Build recipe</h2>
      <div className="grid gap-3">
        <div>
          <Label>Title</Label>
          <Input value={form.title} onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))} />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <Label>Store</Label>
            <Input value={form.store} onChange={(e) => setForm((f) => ({ ...f, store: e.target.value }))} />
          </div>
          <div>
            <Label>City</Label>
            <select className={fieldClass} value={form.city} onChange={(e) => setForm((f) => ({ ...f, city: e.target.value }))}>
              {CITIES.map((c) => (
                <option key={c}>{c}</option>
              ))}
              <option>Marrakech</option>
              <option>Tanger</option>
            </select>
          </div>
        </div>
        <div>
          <Label>Condition</Label>
          <select
            className={fieldClass}
            value={form.condition}
            onChange={(e) => setForm((f) => ({ ...f, condition: e.target.value as "new" | "used" }))}
          >
            <option value="new">New</option>
            <option value="used">Used</option>
          </select>
        </div>
        {BUILDER_SLOTS.map((cat) => (
          <div key={cat}>
            <Label>{categoryLabel(cat)}</Label>
            <select className={fieldClass} value={partFor(cat)} onChange={(e) => setPart(cat, e.target.value)}>
              <option value="">—</option>
              {productsByCategory(cat).map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name} · {p.best_price} DH
                </option>
              ))}
            </select>
          </div>
        ))}
        <div className="flex flex-wrap gap-2">
          <Button type="button" onClick={() => onSave(form)}>
            Save build
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

import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { catalog, CATEGORY_ORDER, categoryImage, categoryLabel } from "@/lib/catalog";
import { emptyOffer, emptyProduct, useOps } from "@/lib/ops";
import type { CategorySlug, Offer, Product, Stock } from "@/lib/types";
import { cn, fieldClass } from "@/lib/utils";

export const Route = createFileRoute("/admin/catalog")({ component: AdminCatalog });

const STOCKS: Stock[] = ["in_stock", "low_stock", "out_of_stock"];

function AdminCatalog() {
  const products = useOps((s) => s.products);
  const upsert = useOps((s) => s.upsertProduct);
  const remove = useOps((s) => s.deleteProduct);
  const touch = useOps((s) => s.touchPrices);
  const patch = useOps((s) => s.patchProduct);
  const [cat, setCat] = useState<CategorySlug | "all">("all");
  const [q, setQ] = useState("");
  const [sel, setSel] = useState<string | "new" | null>(null);

  const rows = useMemo(() => {
    return products.filter((p) => {
      if (cat !== "all" && p.category !== cat) return false;
      if (q && !`${p.name} ${p.brand} ${p.id}`.toLowerCase().includes(q.toLowerCase())) return false;
      return true;
    });
  }, [products, cat, q]);

  const current = sel === "new" ? null : products.find((p) => p.id === sel);

  return (
    <div className="mx-auto max-w-6xl px-4 py-6 lg:px-6">
      <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs font-semibold tracking-[0.14em] text-muted uppercase">Prices</p>
          <h1 className="font-display text-3xl font-semibold">Catalogue</h1>
          <p className="mt-1 text-sm text-muted">
            Edits land on the public comparison pages in this browser. Lowest offer is recalculated live.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button
            variant="secondary"
            size="sm"
            onClick={() => {
              touch();
              toast.success("Timestamps reset to now");
            }}
          >
            Mark prices checked
          </Button>
          <Button size="sm" onClick={() => setSel("new")}>
            Add SKU
          </Button>
        </div>
      </div>
      <div className="mb-3 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setCat("all")}
          className={cn(
            "min-h-9 rounded-full px-3 text-xs font-semibold",
            cat === "all" ? "bg-primary text-primary-fg" : "bg-surface text-muted shadow-[var(--shadow-border)]",
          )}
        >
          All
        </button>
        {CATEGORY_ORDER.map((slug) => (
          <button
            key={slug}
            type="button"
            onClick={() => setCat(slug)}
            className={cn(
              "min-h-9 rounded-full px-3 text-xs font-semibold",
              cat === slug ? "bg-primary text-primary-fg" : "bg-surface text-muted shadow-[var(--shadow-border)]",
            )}
          >
            {categoryLabel(slug)}
          </button>
        ))}
      </div>
      <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search SKU…" className="mb-4 max-w-md" />

      {sel && (
        <div className="mb-4">
          <ProductEditor
            key={sel === "new" ? "new" : current?.id ?? "x"}
            product={
              sel === "new" ? emptyProduct(cat === "all" ? "gpu" : cat) : (current ?? emptyProduct("gpu"))
            }
            isNew={sel === "new"}
            onSave={(p) => {
              upsert(p);
              setSel(p.id);
              toast.success("SKU saved");
            }}
            onCancel={() => setSel(null)}
            onDelete={
              sel === "new"
                ? undefined
                : () => {
                    if (current) remove(current.id);
                    setSel(null);
                    toast.success("Removed");
                  }
            }
          />
        </div>
      )}

      <div className="overflow-x-auto rounded-2xl bg-surface shadow-[var(--shadow-border)]">
        <table className="w-full min-w-[720px] text-sm">
          <thead className="text-left text-xs text-muted">
            <tr className="border-b border-border">
              <th className="px-4 py-3 font-medium">Product</th>
              <th className="px-2 py-3 font-medium">Best</th>
              <th className="px-2 py-3 font-medium">MSRP</th>
              <th className="px-2 py-3 font-medium">Used</th>
              <th className="px-2 py-3 font-medium">Stock</th>
              <th className="px-2 py-3 font-medium">Stores</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((p) => (
              <tr key={p.id} className="border-b border-border last:border-0 hover:bg-surface-2">
                <td className="px-4 py-2">
                  <button type="button" className="flex items-center gap-3 text-start" onClick={() => setSel(p.id)}>
                    <img src={p.image || categoryImage(p.category)} alt="" className="part-art size-10 object-contain" />
                    <span>
                      <span className="block font-medium">{p.name}</span>
                      <span className="text-xs text-muted">
                        {p.brand} · {categoryLabel(p.category)}
                      </span>
                    </span>
                  </button>
                </td>
                <td className="px-2 py-2">
                  <input
                    className="h-10 w-24 rounded-md bg-bg px-2 font-mono text-sm tabular-nums shadow-[var(--shadow-border)]"
                    type="number"
                    value={p.best_price}
                    onChange={(e) => patch(p.id, { best_price: Number(e.target.value) })}
                    aria-label={`${p.name} best price`}
                  />
                </td>
                <td className="px-2 py-2">
                  <input
                    className="h-10 w-24 rounded-md bg-bg px-2 font-mono text-sm tabular-nums shadow-[var(--shadow-border)]"
                    type="number"
                    value={p.msrp}
                    onChange={(e) => patch(p.id, { msrp: Number(e.target.value) })}
                    aria-label={`${p.name} MSRP`}
                  />
                </td>
                <td className="px-2 py-2">
                  <input
                    className="h-10 w-24 rounded-md bg-bg px-2 font-mono text-sm tabular-nums shadow-[var(--shadow-border)]"
                    type="number"
                    value={p.used_price}
                    onChange={(e) => patch(p.id, { used_price: Number(e.target.value) })}
                    aria-label={`${p.name} used price`}
                  />
                </td>
                <td className="px-2 py-2">
                  <button
                    type="button"
                    className="text-xs font-semibold text-primary"
                    onClick={() => patch(p.id, { in_stock: !p.in_stock })}
                  >
                    {p.in_stock ? "In stock" : "Out"}
                  </button>
                </td>
                <td className="px-2 py-2 text-muted">{p.store_count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ProductEditor({
  product,
  isNew,
  onSave,
  onCancel,
  onDelete,
}: {
  product: Product;
  isNew: boolean;
  onSave: (p: Product) => void;
  onCancel: () => void;
  onDelete?: () => void;
}) {
  const [form, setForm] = useState<Product>(product);
  function set<K extends keyof Product>(key: K, value: Product[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }
  function setOffer(i: number, patch: Partial<Offer>) {
    setForm((f) => ({
      ...f,
      offers: f.offers.map((o, idx) => (idx === i ? { ...o, ...patch } : o)),
    }));
  }

  return (
    <Card className="rounded-2xl p-5">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h2 className="font-display text-lg font-semibold">{isNew ? "New SKU" : form.name || "Edit SKU"}</h2>
        <Button variant="ghost" size="sm" onClick={onCancel}>
          Close
        </Button>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <Label htmlFor="p-name">Name</Label>
          <Input id="p-name" value={form.name} onChange={(e) => set("name", e.target.value)} />
        </div>
        <div>
          <Label htmlFor="p-brand">Brand</Label>
          <Input id="p-brand" value={form.brand} onChange={(e) => set("brand", e.target.value)} />
        </div>
        <div>
          <Label htmlFor="p-cat">Category</Label>
          <select
            id="p-cat"
            className={fieldClass}
            value={form.category}
            onChange={(e) => set("category", e.target.value as CategorySlug)}
          >
            {CATEGORY_ORDER.map((c) => (
              <option key={c} value={c}>
                {categoryLabel(c)}
              </option>
            ))}
          </select>
        </div>
        <div>
          <Label htmlFor="p-msrp">MSRP DH</Label>
          <Input id="p-msrp" type="number" value={form.msrp} onChange={(e) => set("msrp", Number(e.target.value))} />
        </div>
        <div>
          <Label htmlFor="p-used">Used DH</Label>
          <Input id="p-used" type="number" value={form.used_price} onChange={(e) => set("used_price", Number(e.target.value))} />
        </div>
        <div>
          <Label htmlFor="p-power">Power draw W</Label>
          <Input id="p-power" type="number" value={form.power_draw} onChange={(e) => set("power_draw", Number(e.target.value))} />
        </div>
        <div>
          <Label htmlFor="p-img">Image path</Label>
          <Input id="p-img" value={form.image} onChange={(e) => set("image", e.target.value)} />
        </div>
      </div>
      <h3 className="mt-5 mb-2 text-xs font-semibold tracking-wider text-muted uppercase">Store offers</h3>
      <div className="space-y-3">
        {form.offers.map((o, i) => (
          <div key={`${o.store}-${i}`} className="grid gap-2 rounded-xl bg-surface-2 p-3 sm:grid-cols-5">
            <select
              className={fieldClass}
              value={o.store}
              onChange={(e) => {
                const store = catalog.stores.find((s) => s.name === e.target.value);
                setOffer(i, { store: e.target.value, city: store?.city ?? o.city });
              }}
            >
              {catalog.stores.map((s) => (
                <option key={s.name}>{s.name}</option>
              ))}
              {!catalog.stores.some((s) => s.name === o.store) && <option>{o.store}</option>}
            </select>
            <Input type="number" value={o.price} onChange={(e) => setOffer(i, { price: Number(e.target.value) })} />
            <select className={fieldClass} value={o.stock} onChange={(e) => setOffer(i, { stock: e.target.value as Stock })}>
              {STOCKS.map((s) => (
                <option key={s} value={s}>
                  {s.replace("_", " ")}
                </option>
              ))}
            </select>
            <Input value={o.url} onChange={(e) => setOffer(i, { url: e.target.value })} placeholder="https://" />
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => setForm((f) => ({ ...f, offers: f.offers.filter((_, idx) => idx !== i) }))}
            >
              Remove
            </Button>
          </div>
        ))}
      </div>
      <Button type="button" variant="secondary" size="sm" className="mt-3" onClick={() => setForm((f) => ({ ...f, offers: [...f.offers, emptyOffer()] }))}>
        Add offer
      </Button>
      <div className="mt-5 flex flex-wrap gap-2">
        <Button type="button" onClick={() => onSave(form)}>
          Save SKU
        </Button>
        {onDelete && (
          <Button type="button" variant="danger" onClick={onDelete}>
            Delete SKU
          </Button>
        )}
      </div>
    </Card>
  );
}

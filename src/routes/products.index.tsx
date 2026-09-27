import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHero } from "@/components/page-hero";
import { ProductRow } from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { catalog, CATEGORY_ORDER, categoryLabel } from "@/lib/catalog";
import { useI18n } from "@/lib/i18n";
import type { CategorySlug } from "@/lib/types";

type Search = { category?: CategorySlug; q?: string };

export const Route = createFileRoute("/products/")({
  validateSearch: (s: Record<string, unknown>): Search => {
    const next: Search = {};
    if (typeof s.category === "string") next.category = s.category as CategorySlug;
    if (typeof s.q === "string") next.q = s.q;
    return next;
  },
  component: ProductsPage,
});

export function ProductsPage() {
  const { t } = useI18n();
  const { category, q } = Route.useSearch();
  const [budget, setBudget] = useState(8000);
  const [brand, setBrand] = useState("");
  const [sort, setSort] = useState("price-asc");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const brands = useMemo(() => {
    const set = new Set(
      catalog.products
        .filter((p) => !category || p.category === category)
        .map((p) => p.brand),
    );
    return [...set].sort();
  }, [category]);

  const rows = useMemo(() => {
    let list = catalog.products.filter((p) => {
      if (category && p.category !== category) return false;
      if (p.best_price > budget) return false;
      if (brand && p.brand !== brand) return false;
      if (q && !`${p.name} ${p.brand}`.toLowerCase().includes(q.toLowerCase())) return false;
      return true;
    });
    list = [...list].sort((a, b) => {
      if (sort === "price-desc") return b.best_price - a.best_price;
      if (sort === "stores") return b.store_count - a.store_count;
      if (sort === "name") return a.name.localeCompare(b.name);
      return a.best_price - b.best_price;
    });
    return list;
  }, [category, budget, brand, sort, q]);

  const sidebar = (
    <aside className="rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]">
      <h3 className="mb-3 text-xs font-semibold tracking-wider text-muted uppercase">{t("ui.category")}</h3>
      <div className="mb-5 flex flex-col gap-1">
        <Link
          to="/products"
          search={{}}
          className={`rounded-md px-2 py-2 text-sm ${!category ? "bg-surface-2 text-primary" : "text-fg hover:bg-surface-2"}`}
        >
          {t("ui.allCats")}
        </Link>
        {CATEGORY_ORDER.map((slug) => (
          <Link
            key={slug}
            to="/products"
            search={{ category: slug }}
            className={`rounded-md px-2 py-2 text-sm ${category === slug ? "bg-surface-2 text-primary" : "hover:bg-surface-2"}`}
          >
            {categoryLabel(slug)}
          </Link>
        ))}
      </div>
      <h3 className="mb-2 text-xs font-semibold tracking-wider text-muted uppercase">{t("ui.budget")}</h3>
      <p className="mb-1 font-display text-sm font-semibold tabular-nums text-primary ltr-isolate">{budget.toLocaleString("fr-MA")} DH</p>
      <input
        type="range"
        min={300}
        max={8000}
        step={50}
        value={budget}
        onChange={(e) => setBudget(Number(e.target.value))}
        className="mb-5 w-full accent-[var(--primary)]"
      />
      <h3 className="mb-2 text-xs font-semibold tracking-wider text-muted uppercase">{t("ui.brand")}</h3>
      <select
        className="h-11 w-full rounded-md bg-bg px-2 text-sm shadow-[var(--shadow-border)]"
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
      >
        <option value="">{t("ui.allCats")}</option>
        {brands.map((b) => (
          <option key={b}>{b}</option>
        ))}
      </select>
    </aside>
  );

  return (
    <main>
      <PageHero
        eyebrow={t("nav.components")}
        title={category ? categoryLabel(category) : t("nav.components")}
        description={t("cat.desc")}
      />
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 lg:grid-cols-[240px_1fr]">
        <div className="lg:hidden">
          <Button variant="secondary" className="w-full" onClick={() => setFiltersOpen((v) => !v)}>
            {t("ui.filters")}
          </Button>
          {filtersOpen && <div className="mt-3">{sidebar}</div>}
        </div>
        <div className="hidden lg:block">{sidebar}</div>
        <section>
          <div className="mb-3 flex items-center justify-between gap-3">
            <strong className="text-sm">
              {rows.length} {t("ui.results")}
            </strong>
            <select
              className="h-11 rounded-md bg-surface px-2 text-sm shadow-[var(--shadow-border)]"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="price-asc">{t("ui.sort.priceAsc")}</option>
              <option value="price-desc">{t("ui.sort.priceDesc")}</option>
              <option value="stores">{t("ui.sort.stores")}</option>
              <option value="name">{t("ui.sort.name")}</option>
            </select>
          </div>
          <div className="overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-border)]">
            {rows.length === 0 ? (
              <p className="p-10 text-center text-sm text-muted">{t("ui.noResults")}</p>
            ) : (
              rows.map((p) => <ProductRow key={p.id} product={p} />)
            )}
          </div>
        </section>
      </div>
    </main>
  );
}

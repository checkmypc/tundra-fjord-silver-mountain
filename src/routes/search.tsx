import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHero } from "@/components/page-hero";
import { Input } from "@/components/ui/input";
import { ProductRow } from "@/components/product-card";
import { searchProducts } from "@/lib/catalog";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/search")({
  validateSearch: (s: Record<string, unknown>): { q?: string } =>
    typeof s.q === "string" ? { q: s.q } : {},
  component: SearchPage,
});

function SearchPage() {
  const { t } = useI18n();
  const { q: initial = "" } = Route.useSearch();
  const [q, setQ] = useState(initial);
  const rows = useMemo(() => searchProducts(q), [q]);

  return (
    <main>
      <PageHero eyebrow={t("ui.search")} title={t("nav.search")}>
        <Input
          autoFocus
          value={q}
          placeholder={t("search.placeholder")}
          onChange={(e) => setQ(e.target.value)}
          className="max-w-lg"
        />
      </PageHero>
      <div className="mx-auto max-w-6xl px-4 py-8">
        {q.trim() === "" ? (
          <p className="text-sm text-muted">{t("search.empty")}</p>
        ) : (
          <div className="overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-border)]">
            {rows.length === 0 ? (
              <p className="p-10 text-center text-sm text-muted">{t("ui.noResults")}</p>
            ) : (
              rows.map((p) => <ProductRow key={p.id} product={p} />)
            )}
          </div>
        )}
      </div>
    </main>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo } from "react";
import { PageHero } from "@/components/page-hero";
import { Badge } from "@/components/ui/badge";
import { catalog, CATEGORY_ORDER, categoryLabel, lowestOffer, productsByCategory } from "@/lib/catalog";
import { useI18n } from "@/lib/i18n";
import type { CategorySlug } from "@/lib/types";
import { dh } from "@/lib/utils";

type Search = { category?: CategorySlug };

export const Route = createFileRoute("/compare")({
  validateSearch: (s: Record<string, unknown>): Search =>
    typeof s.category === "string" ? { category: s.category as CategorySlug } : {},
  component: ComparePage,
});

function ComparePage() {
  const { t } = useI18n();
  const { category = "gpu" } = Route.useSearch();
  const rows = useMemo(() => {
    const list = productsByCategory(category);
    return [...list].sort((a, b) => a.best_price - b.best_price);
  }, [category]);

  return (
    <main>
      <PageHero
        eyebrow={t("nav.compare")}
        title={t("ui.lowest")}
        description={t("cat.desc")}
      />
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="mb-5 flex flex-wrap gap-2">
          {CATEGORY_ORDER.map((slug) => (
            <Link
              key={slug}
              to="/compare"
              search={{ category: slug }}
              className={`rounded-full px-3 py-2 text-sm ${
                slug === category ? "bg-primary text-primary-fg" : "bg-surface shadow-[var(--shadow-border)]"
              }`}
            >
              {categoryLabel(slug)}
            </Link>
          ))}
        </div>
        <div className="overflow-x-auto rounded-xl bg-surface shadow-[var(--shadow-border)]">
          <table className="w-full min-w-[640px] text-sm">
            <thead className="text-start text-xs tracking-wider text-muted uppercase">
              <tr className="border-b border-border">
                <th className="px-4 py-3 text-start">Product</th>
                <th className="px-4 py-3 text-start">Store</th>
                <th className="px-4 py-3 text-start">City</th>
                <th className="px-4 py-3 text-end">{t("ui.lowest")}</th>
                <th className="px-4 py-3" />
              </tr>
            </thead>
            <tbody>
              {rows.map((p) => {
                const o = lowestOffer(p);
                return (
                  <tr key={p.id} className="border-b border-border last:border-0">
                    <td className="px-4 py-3">
                      <Link to="/products/$id" params={{ id: p.id }} className="font-medium hover:text-primary">
                        {p.name}
                      </Link>
                    </td>
                    <td className="px-4 py-3">{o?.store ?? "—"}</td>
                    <td className="px-4 py-3 text-muted">{o?.city ?? "—"}</td>
                    <td className="px-4 py-3 text-end">
                      <span className="font-display font-semibold tabular-nums ltr-isolate">{dh(p.best_price)}</span>
                      <Badge tone="primary" className="ms-2">
                        {t("ui.lowest")}
                      </Badge>
                    </td>
                    <td className="px-4 py-3 text-end">
                      <Link to="/products/$id" params={{ id: p.id }} className="text-primary">
                        {t("ui.viewOffer")}
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-muted">
          {t("data.banner")} {catalog.stores.length} {t("ui.stores")}.
        </p>
      </div>
    </main>
  );
}

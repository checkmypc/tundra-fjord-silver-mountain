import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { catalog } from "@/lib/catalog";
import { useI18n } from "@/lib/i18n";
import { dh } from "@/lib/utils";

export const Route = createFileRoute("/deals")({ component: DealsPage });

function DealsPage() {
  const { t } = useI18n();
  const deals = [...catalog.products]
    .map((p) => ({ ...p, save: p.msrp - p.best_price }))
    .filter((p) => p.save > 0)
    .sort((a, b) => b.save - a.save);

  return (
    <main>
      <PageHero eyebrow={t("nav.deals")} title={t("nav.deals")} description={t("data.banner")} />
      <div className="mx-auto grid max-w-6xl gap-4 px-4 py-8 sm:grid-cols-2 lg:grid-cols-3">
        {deals.map((p) => (
          <Link key={p.id} to="/products/$id" params={{ id: p.id }}>
            <Card className="h-full rounded-2xl p-4 transition-[box-shadow] hover:shadow-[var(--shadow-border-hover)]">
              <div className="flex items-start justify-between">
                <img src={p.image} alt="" className="part-art h-16 object-contain" />
                <Badge tone="ok">-{dh(p.save)}</Badge>
              </div>
              <h3 className="mt-3 font-medium">{p.name}</h3>
              <p className="text-xs text-muted line-through ltr-isolate">{dh(p.msrp)}</p>
              <p className="font-display text-xl font-semibold tabular-nums ltr-isolate">{dh(p.best_price)}</p>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  );
}

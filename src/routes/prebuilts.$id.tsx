import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useI18n } from "@/lib/i18n";
import { prebuiltById } from "@/lib/prebuilts";
import { useBuild } from "@/lib/store";
import { dh } from "@/lib/utils";

export const Route = createFileRoute("/prebuilts/$id")({
  component: PrebuiltDetail,
});

function PrebuiltDetail() {
  const { id } = Route.useParams();
  const listing = prebuiltById(id);
  const { t } = useI18n();
  const add = useBuild((s) => s.add);
  if (!listing) throw notFound();
  const item = listing;

  function loadBuild() {
    item.parts.forEach((p) => add(p.id, p.category));
  }

  return (
    <main>
      <PageHero eyebrow={item.store} title={item.title} description={`${item.city} · ${item.format}`}>
        <div className="flex flex-wrap items-center gap-3">
          <p className="font-display text-4xl font-semibold tabular-nums ltr-isolate">{dh(item.price)}</p>
          <Badge tone={item.condition === "used" ? "warn" : "ok"}>
            {item.condition === "used" ? t("ui.used") : t("ui.new")}
          </Badge>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          <Button onClick={loadBuild}>{t("nav.builder")}</Button>
          {item.condition === "used" ? (
            <Button asChild variant="soft">
              <Link to="/inspection">{t("nav.inspection")}</Link>
            </Button>
          ) : (
            <Button asChild variant="soft">
              <Link to="/assembly">{t("ui.requestAssembly")}</Link>
            </Button>
          )}
        </div>
      </PageHero>
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 lg:grid-cols-[1fr_1.1fr]">
        <Card className="grid place-items-center rounded-2xl p-8">
          <img src={item.image} alt="" className="part-art h-56 object-contain" />
        </Card>
        <Card className="rounded-2xl p-5">
          <h2 className="mb-3 font-display text-lg font-semibold">Parts</h2>
          <ul className="divide-y divide-border">
            {item.parts.map((p) => (
              <li key={p.id} className="flex items-center justify-between gap-3 py-2.5">
                <Link to="/products/$id" params={{ id: p.id }} className="text-sm hover:text-primary">
                  {p.name}
                </Link>
                <span className="text-sm tabular-nums text-muted ltr-isolate">
                  {dh(item.condition === "used" ? p.used_price : p.best_price)}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-muted">{t("data.banner")}</p>
        </Card>
      </div>
    </main>
  );
}

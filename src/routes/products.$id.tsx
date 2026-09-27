import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Bell, BellOff } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { lowestOffer, productById } from "@/lib/catalog";
import { useI18n } from "@/lib/i18n";
import { useBuild } from "@/lib/store";
import { ago, dh, freshness } from "@/lib/utils";

export const Route = createFileRoute("/products/$id")({
  component: ProductPage,
});

function sparkPath(history: { d: string; p: number }[]) {
  if (history.length < 2) return "";
  const w = 560;
  const h = 160;
  const prices = history.map((x) => x.p);
  const min = Math.min(...prices);
  const max = Math.max(...prices);
  const span = max - min || 1;
  return history
    .map((pt, i) => {
      const x = (i / (history.length - 1)) * w;
      const y = h - ((pt.p - min) / span) * (h - 16) - 8;
      return `${i === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(" ");
}

function ProductPage() {
  const { id } = Route.useParams();
  const p = productById(id);
  const { t } = useI18n();
  const add = useBuild((s) => s.add);
  const slots = useBuild((s) => s.slots);
  const alerts = useBuild((s) => s.alerts);
  const toggleWatch = useBuild((s) => s.toggleWatch);
  if (!p) throw notFound();
  const offer = lowestOffer(p);
  const inBuild = slots[p.category]?.id === p.id;
  const watching = alerts.includes(p.id);
  const path = sparkPath(p.history);
  const sorted = [...p.offers].sort((a, b) => a.price - b.price);

  return (
    <main>
      <PageHero eyebrow={p.brand} title={p.name} description={`${p.store_count} ${t("ui.stores")} · ${t("ui.demo")}`}>
        <div className="flex flex-wrap items-end gap-6">
          <div>
            <p className="text-xs text-muted">{t("ui.best")}</p>
            <p className="font-display text-4xl font-semibold tabular-nums ltr-isolate">{dh(p.best_price)}</p>
          </div>
          <div className="text-sm text-muted">
            {t("ui.msrp")} <span className="ltr-isolate">{dh(p.msrp)}</span>
            <br />
            {t("ui.usedPrice")} <span className="ltr-isolate">{dh(p.used_price)}</span>
          </div>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          <Button onClick={() => add(p.id, p.category)}>{inBuild ? t("ui.inBuild") : t("ui.addBuild")}</Button>
          <Button variant="secondary" onClick={() => toggleWatch(p.id)}>
            {watching ? <BellOff className="size-4" /> : <Bell className="size-4" />}
            {watching ? t("ui.watching") : t("ui.watch")}
          </Button>
          <Button asChild variant="soft">
            <Link to="/compare" search={{ category: p.category }}>
              {t("nav.compare")}
            </Link>
          </Button>
        </div>
      </PageHero>
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 lg:grid-cols-[1fr_1.15fr]">
        <Card className="grid place-items-center rounded-2xl p-8">
          <img src={p.image} alt="" className="part-art h-64 w-full object-contain" />
        </Card>
        <Card className="rounded-2xl p-0">
          <div className="flex items-center justify-between border-b border-border px-5 py-4">
            <h2 className="font-display text-lg font-semibold">{t("ui.offers")}</h2>
            <Badge tone="primary">{t("ui.lowest")}</Badge>
          </div>
          <ul>
            {sorted.map((o, i) => {
              const fresh = freshness(o.checked_minutes_ago);
              const isLow = offer && o.store === offer.store && o.price === offer.price;
              return (
                <li
                  key={`${o.store}-${i}`}
                  className="grid grid-cols-[1fr_auto] items-center gap-3 border-b border-border px-5 py-3 last:border-0 sm:grid-cols-[1fr_auto_auto]"
                >
                  <div>
                    <p className="font-medium">{o.store}</p>
                    <p className="text-xs text-muted">
                      {o.city} · {ago(o.checked_minutes_ago, t)}
                    </p>
                    <Badge tone={fresh === "live" ? "ok" : fresh === "recent" ? "primary" : "warn"} className="mt-1">
                      {t(`ui.${fresh === "stale" ? "stale" : fresh === "live" ? "live" : "recent"}`)}
                    </Badge>
                  </div>
                  <div className="text-end">
                    <p className="font-display font-semibold tabular-nums ltr-isolate">{dh(o.price)}</p>
                    {isLow && <p className="text-[11px] font-semibold text-primary">{t("ui.lowest")}</p>}
                    <p className="text-[11px] text-muted">{t(`ui.stock.${o.stock.replace("in_stock", "in").replace("low_stock", "low").replace("out_of_stock", "out")}`)}</p>
                  </div>
                  <a
                    className="col-span-2 inline-flex h-11 items-center justify-center rounded-md bg-surface-2 px-3 text-sm font-medium sm:col-span-1"
                    href={o.url.startsWith("http") ? o.url : undefined}
                    onClick={(e) => {
                      if (!o.url.startsWith("http")) e.preventDefault();
                    }}
                    aria-disabled={!o.url.startsWith("http")}
                  >
                    {t("ui.viewOffer")}
                  </a>
                </li>
              );
            })}
          </ul>
          <p className="px-5 py-3 text-xs text-muted">{t("data.banner")}</p>
        </Card>
      </div>
      <div className="mx-auto grid max-w-6xl gap-6 px-4 pb-12 lg:grid-cols-2">
        <Card className="rounded-2xl p-5">
          <h2 className="mb-3 font-display text-lg font-semibold">{t("ui.specs")}</h2>
          <table className="w-full text-sm">
            <tbody>
              {Object.entries(p.specs).map(([k, v]) => (
                <tr key={k} className="border-b border-border last:border-0">
                  <th className="py-2 pe-4 text-start font-medium text-muted">{k}</th>
                  <td className="py-2 ltr-isolate">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
        <Card className="rounded-2xl p-5">
          <h2 className="mb-3 font-display text-lg font-semibold">{t("ui.history")}</h2>
          <svg viewBox="0 0 560 160" className="w-full" role="img" aria-label="Price history">
            <path d={path} fill="none" stroke="var(--primary)" strokeWidth="2.4" />
          </svg>
          <div className="mt-2 flex justify-between text-xs text-muted">
            <span>{p.history[0]?.d}</span>
            <span>{p.history.at(-1)?.d}</span>
          </div>
        </Card>
      </div>
    </main>
  );
}

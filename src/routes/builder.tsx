import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { toast } from "sonner";
import { PageHero } from "@/components/page-hero";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BUILDER_SLOTS, categoryLabel, productsByCategory } from "@/lib/catalog";
import { buildItems, buildTotal, compatibility, decodeBuild, encodeBuild } from "@/lib/builder";
import { useI18n } from "@/lib/i18n";
import { useBuild } from "@/lib/store";
import { dh } from "@/lib/utils";
import type { CategorySlug } from "@/lib/types";

export const Route = createFileRoute("/builder")({
  validateSearch: (s: Record<string, unknown>): { build?: string } =>
    typeof s.build === "string" ? { build: s.build } : {},
  component: BuilderPage,
});

function BuilderPage() {
  const { t } = useI18n();
  const { build } = Route.useSearch();
  const slots = useBuild((s) => s.slots);
  const add = useBuild((s) => s.add);
  const remove = useBuild((s) => s.remove);
  const clear = useBuild((s) => s.clear);
  const replace = useBuild((s) => s.replace);

  useEffect(() => {
    if (!build) return;
    const decoded = decodeBuild(build);
    if (decoded) replace(decoded);
  }, [build, replace]);

  const items = buildItems(slots);
  const total = buildTotal(items);
  const used = buildTotal(items, true);
  const c = compatibility(items);

  function share() {
    const url = `${window.location.origin}/builder?build=${encodeURIComponent(encodeBuild(slots))}`;
    navigator.clipboard?.writeText(url).then(
      () => toast.success(t("ui.copied")),
      () => toast.message(url),
    );
  }

  return (
    <main>
      <PageHero eyebrow={t("nav.builder")} title={t("hero.builder")} description={t("ui.pickParts")} />
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 lg:grid-cols-[1.25fr_.75fr]">
        <Card className="rounded-2xl p-2 sm:p-4">
          {BUILDER_SLOTS.map((slot) => {
            const selected = slots[slot]?.id ?? "";
            const parts = productsByCategory(slot);
            return (
              <div
                key={slot}
                className="grid gap-2 border-b border-border px-2 py-4 last:border-0 sm:grid-cols-[140px_1fr_auto] sm:items-center"
              >
                <label className="text-sm font-medium" htmlFor={`slot-${slot}`}>
                  {categoryLabel(slot)}
                </label>
                <select
                  id={`slot-${slot}`}
                  className="h-11 w-full rounded-md bg-bg px-2 text-sm shadow-[var(--shadow-border)]"
                  value={selected}
                  onChange={(e) => {
                    if (!e.target.value) remove(slot);
                    else add(e.target.value, slot as CategorySlug);
                  }}
                >
                  <option value="">{t("ui.choose")}</option>
                  {parts.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name} — {dh(p.best_price)}
                    </option>
                  ))}
                </select>
                <Link to="/products" search={{ category: slot }} className="text-sm font-medium text-primary">
                  {t("ui.browse")}
                </Link>
              </div>
            );
          })}
          <div className="flex flex-wrap gap-2 p-3">
            <Button onClick={share}>{t("ui.share")}</Button>
            <Button variant="secondary" onClick={clear}>
              {t("ui.clear")}
            </Button>
          </div>
        </Card>
        <aside className="h-max lg:sticky lg:top-24">
          <Card className="rounded-2xl p-5">
            <p className="text-xs font-semibold tracking-wider text-muted uppercase">{t("ui.total")}</p>
            <p className="font-display text-3xl font-semibold tabular-nums ltr-isolate">{dh(total)}</p>
            <div className="mt-4 grid grid-cols-2 gap-2">
              <div className="rounded-lg bg-surface-2 p-3">
                <p className="text-[11px] text-muted">{t("ui.usedEst")}</p>
                <p className="font-semibold tabular-nums ltr-isolate">{dh(used)}</p>
              </div>
              <div className="rounded-lg bg-surface-2 p-3">
                <p className="text-[11px] text-muted">{t("ui.power")}</p>
                <p className="font-semibold tabular-nums">{c.draw}W</p>
              </div>
              <div className="rounded-lg bg-surface-2 p-3">
                <p className="text-[11px] text-muted">{t("ui.psu")}</p>
                <p className="font-semibold tabular-nums">{c.rec ? `${c.rec}W+` : "—"}</p>
              </div>
              <div className="rounded-lg bg-surface-2 p-3">
                <p className="text-[11px] text-muted">{t("ui.parts")}</p>
                <p className="font-semibold">
                  {items.length} / {BUILDER_SLOTS.length}
                </p>
              </div>
            </div>
            <h3 className="mt-5 mb-2 font-display font-semibold">{t("ui.compat")}</h3>
            {c.checks.length === 0 ? (
              <p className="text-sm text-muted">{t("ui.pickParts")}</p>
            ) : (
              <ul className="space-y-2">
                {c.checks.map((k) => (
                  <li key={k.title} className="flex items-start justify-between gap-2 text-sm">
                    <span>{k.title}</span>
                    <Badge tone={k.level === "pass" ? "ok" : k.level === "warn" ? "warn" : "danger"}>{k.detail}</Badge>
                  </li>
                ))}
              </ul>
            )}
            {total >= 3000 && (
              <div className="mt-6 rounded-lg bg-surface-2 p-4">
                <p className="font-medium">{t("ui.assembleCta")}</p>
                <Button asChild className="mt-3 w-full">
                  <Link to="/assembly" search={{ from: "builder", total: String(total) }}>
                    {t("ui.requestAssembly")}
                  </Link>
                </Button>
              </div>
            )}
          </Card>
        </aside>
      </div>
    </main>
  );
}



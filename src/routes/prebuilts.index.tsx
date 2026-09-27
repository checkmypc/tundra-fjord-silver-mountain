import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHero } from "@/components/page-hero";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { useI18n } from "@/lib/i18n";
import { BUDGET_BRACKETS, prebuilts } from "@/lib/prebuilts";
import { dh } from "@/lib/utils";

type Search = { budget?: string; city?: string };

export const Route = createFileRoute("/prebuilts/")({
  validateSearch: (s: Record<string, unknown>): Search => {
    const next: Search = {};
    if (typeof s.budget === "string") next.budget = s.budget;
    if (typeof s.city === "string") next.city = s.city;
    return next;
  },
  component: PrebuiltsPage,
});

function PrebuiltsPage() {
  const { t } = useI18n();
  const search = Route.useSearch();
  const all = prebuilts();
  const [bracket, setBracket] = useState<string | null>(search.budget ?? null);
  const [store, setStore] = useState("");
  const [gpu, setGpu] = useState("");
  const [condition, setCondition] = useState("");
  const [sort, setSort] = useState("price-asc");

  const stores = [...new Set(all.map((b) => b.store))];
  const gpus = [...new Set(all.map((b) => b.gpu))];

  const rows = useMemo(() => {
    return all
      .filter((b) => {
        if (bracket) {
          const br = BUDGET_BRACKETS.find((x) => x.id === bracket);
          if (br && (b.price < br.min || b.price > br.max)) return false;
        }
        if (search.city && b.city !== search.city) return false;
        if (store && b.store !== store) return false;
        if (gpu && b.gpu !== gpu) return false;
        if (condition && b.condition !== condition) return false;
        return true;
      })
      .sort((a, b) => (sort === "price-desc" ? b.price - a.price : a.price - b.price));
  }, [all, bracket, store, gpu, condition, sort, search.city]);

  return (
    <main>
      <PageHero eyebrow={t("nav.prebuilts")} title={t("pre.title")} description={t("pre.desc")} />
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="mb-3 flex flex-wrap gap-2">
          {BUDGET_BRACKETS.map((b) => (
            <button
              key={b.id}
              type="button"
              onClick={() => setBracket((cur) => (cur === b.id ? null : b.id))}
              className={`rounded-full px-3 py-2 text-sm ${
                bracket === b.id ? "bg-primary text-primary-fg" : "bg-surface shadow-[var(--shadow-border)]"
              }`}
            >
              {b.label}
            </button>
          ))}
        </div>
        <div className="mb-6 grid grid-cols-2 gap-2 sm:grid-cols-4">
          <select className="h-11 rounded-md bg-surface px-2 text-sm shadow-[var(--shadow-border)]" value={store} onChange={(e) => setStore(e.target.value)}>
            <option value="">Stores</option>
            {stores.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
          <select className="h-11 rounded-md bg-surface px-2 text-sm shadow-[var(--shadow-border)]" value={gpu} onChange={(e) => setGpu(e.target.value)}>
            <option value="">GPU</option>
            {gpus.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
          <select className="h-11 rounded-md bg-surface px-2 text-sm shadow-[var(--shadow-border)]" value={condition} onChange={(e) => setCondition(e.target.value)}>
            <option value="">{t("ui.new")} & {t("ui.used")}</option>
            <option value="new">{t("ui.new")}</option>
            <option value="used">{t("ui.used")}</option>
          </select>
          <select className="h-11 rounded-md bg-surface px-2 text-sm shadow-[var(--shadow-border)]" value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="price-asc">{t("ui.sort.priceAsc")}</option>
            <option value="price-desc">{t("ui.sort.priceDesc")}</option>
          </select>
        </div>
        <p className="mb-4 text-sm font-medium">
          {rows.length} {t("ui.systems")}
        </p>
        {rows.length === 0 ? (
          <p className="rounded-xl bg-surface p-10 text-center text-muted">{t("ui.noSystem")}</p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {rows.map((b) => (
              <Link key={b.id} to="/prebuilts/$id" params={{ id: b.id }}>
                <Card className="h-full rounded-2xl p-3 transition-[box-shadow] hover:shadow-[var(--shadow-border-hover)]">
                  <div className="relative grid h-40 place-items-center rounded-lg bg-surface-2">
                    <img src={b.image} alt="" className="part-art h-28 object-contain" />
                    <Badge className="absolute start-2 top-2" tone={b.condition === "used" ? "warn" : "ok"}>
                      {b.condition === "used" ? t("ui.used") : t("ui.new")}
                    </Badge>
                    <span className="absolute end-2 top-2 rounded-md bg-surface px-2 py-1 text-[11px] font-semibold">
                      {b.store}
                    </span>
                  </div>
                  <h3 className="mt-3 font-medium">{b.title}</h3>
                  <p className="text-xs text-muted ltr-isolate">
                    {b.cpu}
                    <br />
                    {b.gpu} · {b.ram}
                  </p>
                  <p className="mt-2 font-display text-xl font-semibold tabular-nums ltr-isolate">{dh(b.price)}</p>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

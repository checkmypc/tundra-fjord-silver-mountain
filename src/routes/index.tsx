import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Search, Shield, Sparkles, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { catalog, categoryImage, CATEGORY_ORDER } from "@/lib/catalog";
import { useI18n } from "@/lib/i18n";
import { prebuilts } from "@/lib/prebuilts";
import { ASSEMBLY, CLEANING, INSPECTION, STEPS } from "@/lib/services";
import { dh } from "@/lib/utils";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const { t } = useI18n();
  const featured = prebuilts().filter((p) => p.condition === "new").slice(0, 3);
  const hot = [...catalog.products].sort((a, b) => b.msrp - b.best_price - (a.msrp - a.best_price)).slice(0, 4);

  return (
    <main>
      <section className="relative overflow-hidden border-b border-border">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,color-mix(in_oklab,var(--primary)_18%,transparent),transparent_55%)]" />
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:py-20 lg:grid-cols-2">
          <div>
            <p className="mb-4 inline-flex rounded-full bg-surface-2 px-3 py-1 text-xs font-semibold text-primary">
              {t("hero.eyebrow")}
            </p>
            <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-6xl">{t("hero.title")}</h1>
            <p className="mt-2 font-display text-xl text-muted">{t("brand.darija")}</p>
            <p className="mt-5 max-w-xl text-base text-muted">{t("hero.sub")}</p>
            <div className="mt-7 flex flex-wrap gap-2">
              <Button asChild>
                <Link to="/builder">{t("hero.builder")}</Link>
              </Button>
              <Button asChild variant="secondary">
                <Link to="/compare">{t("hero.compare")}</Link>
              </Button>
              <Button asChild variant="soft">
                <Link to="/inspection">{t("hero.inspect")}</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <Card className="rounded-2xl p-5">
              <p className="mb-4 text-[11px] font-semibold tracking-[0.14em] text-muted uppercase">{t("hero.badge")}</p>
              <div className="grid grid-cols-3 gap-2">
                {STEPS.map((s) => (
                  <div key={s.id} className="rounded-lg bg-surface-2 px-3 py-3">
                    <div className="font-display text-sm font-semibold text-primary">{s.label}</div>
                    <div className="mt-1 text-[11px] text-muted">{s.hint}</div>
                  </div>
                ))}
              </div>
              <img src="/brand/hero-pc.svg" alt="" className="part-art mt-4 h-36 w-full object-contain" />
            </Card>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-2xl font-semibold sm:text-3xl">{t("cat.title")}</h2>
            <p className="mt-1 text-sm text-muted">{t("cat.desc")}</p>
          </div>
          <Button asChild variant="ghost" size="sm">
            <Link to="/products">
              {t("cat.all")} <ArrowRight className="size-4 rtl-flip" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {CATEGORY_ORDER.map((slug) => {
            const c = catalog.categories.find((x) => x.slug === slug);
            const n = catalog.products.filter((p) => p.category === slug).length;
            return (
              <Link
                key={slug}
                to="/products"
                search={{ category: slug }}
                className="rounded-xl bg-surface p-4 shadow-[var(--shadow-border)] transition-[box-shadow] hover:shadow-[var(--shadow-border-hover)]"
              >
                <div className="mb-3 grid size-11 place-items-center rounded-md bg-surface-2">
                  <img src={categoryImage(slug)} alt="" className="part-art size-6 object-contain" />
                </div>
                <h3 className="text-sm font-medium">{c?.label}</h3>
                <p className="text-xs text-muted">
                  {n} · DH
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border bg-surface-2/40">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">{t("svc.title")}</h2>
          <p className="mt-1 max-w-xl text-sm text-muted">{t("svc.desc")}</p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                to: "/inspection" as const,
                icon: Shield,
                title: t("svc.inspect"),
                desc: t("svc.inspectDesc"),
                price: INSPECTION.basePrice,
              },
              {
                to: "/assembly" as const,
                icon: Wrench,
                title: t("svc.assemble"),
                desc: t("svc.assembleDesc"),
                price: ASSEMBLY.packages[0].price,
              },
              {
                to: "/cleaning" as const,
                icon: Sparkles,
                title: t("svc.clean"),
                desc: t("svc.cleanDesc"),
                price: CLEANING.packages[0].price,
              },
            ].map((s) => (
              <Link key={s.to} to={s.to} className="group">
                <Card className="h-full rounded-2xl p-5 transition-[box-shadow] group-hover:shadow-[var(--shadow-border-hover)]">
                  <s.icon className="size-5 text-primary" />
                  <h3 className="mt-4 font-display text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted">{s.desc}</p>
                  <p className="mt-4 text-sm font-medium text-primary">
                    {t("svc.from")} {dh(s.price)}
                  </p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <h2 className="font-display text-2xl font-semibold sm:text-3xl">{t("pre.title")}</h2>
            <p className="mt-1 text-sm text-muted">{t("pre.desc")}</p>
          </div>
          <Button asChild variant="ghost" size="sm">
            <Link to="/prebuilts">{t("pre.all")}</Link>
          </Button>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {featured.map((b) => (
            <Link key={b.id} to="/prebuilts/$id" params={{ id: b.id }} className="group">
              <Card className="h-full rounded-2xl p-3 transition-[box-shadow] group-hover:shadow-[var(--shadow-border-hover)]">
                <div className="grid h-36 place-items-center rounded-lg bg-surface-2">
                  <img src={b.image} alt="" className="part-art h-24 object-contain" />
                </div>
                <h3 className="mt-3 font-medium">{b.title}</h3>
                <p className="text-xs text-muted ltr-isolate">
                  {b.cpu} · {b.gpu}
                </p>
                <p className="mt-2 font-display text-lg font-semibold tabular-nums ltr-isolate">{dh(b.price)}</p>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-6">
        <h2 className="mb-4 font-display text-2xl font-semibold">{t("nav.deals")}</h2>
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {hot.map((p) => (
            <Link key={p.id} to="/products/$id" params={{ id: p.id }} className="rounded-xl bg-surface p-3 shadow-[var(--shadow-border)]">
              <img src={p.image} alt="" className="part-art mx-auto h-16 object-contain" />
              <p className="mt-2 line-clamp-2 text-sm font-medium">{p.name}</p>
              <p className="font-display tabular-nums ltr-isolate">{dh(p.best_price)}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="font-display text-2xl font-semibold">{t("trust.title")}</h2>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {(["trust.1", "trust.2", "trust.3", "trust.4"] as const).map((k) => (
            <li key={k} className="flex gap-3 rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]">
              <Check className="mt-0.5 size-4 shrink-0 text-primary" />
              <span className="text-sm">{t(k)}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-border bg-navy">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-12 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-display text-2xl font-semibold text-on-navy">{t("cta.title")}</h2>
            <p className="mt-2 max-w-lg text-sm text-on-navy-muted">{t("cta.sub")}</p>
          </div>
          <Button asChild>
            <Link to="/inspection">
              {t("cta.btn")} <Search className="size-4" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}

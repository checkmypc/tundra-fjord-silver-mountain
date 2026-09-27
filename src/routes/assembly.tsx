import { createFileRoute } from "@tanstack/react-router";
import { BookingForm } from "@/components/booking-form";
import { PageHero } from "@/components/page-hero";
import { Card } from "@/components/ui/card";
import { useI18n } from "@/lib/i18n";
import { ASSEMBLY } from "@/lib/services";
import { dh } from "@/lib/utils";

export const Route = createFileRoute("/assembly")({
  validateSearch: (s: Record<string, unknown>): { from?: string; total?: string } => {
    const next: { from?: string; total?: string } = {};
    if (typeof s.from === "string") next.from = s.from;
    if (typeof s.total === "string") next.total = s.total;
    return next;
  },
  component: AssemblyPage,
});

function AssemblyPage() {
  const { t } = useI18n();
  const { total } = Route.useSearch();
  return (
    <main>
      <PageHero eyebrow={t("nav.assembly")} title={t("svc.assemble")} description={t("svc.assembleDesc")}>
        {total && (
          <p className="text-sm">
            Builder total <span className="font-display font-semibold tabular-nums ltr-isolate">{Number(total).toLocaleString("fr-MA")} DH</span>
          </p>
        )}
      </PageHero>
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 lg:grid-cols-2">
        <div className="space-y-3">
          {ASSEMBLY.packages.map((p) => (
            <Card key={p.id} className="rounded-2xl p-5">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-display text-lg font-semibold">{p.name}</h3>
                <p className="font-display text-xl font-semibold tabular-nums">{dh(p.price)}</p>
              </div>
              <p className="text-xs text-muted">{p.duration}</p>
              <ul className="mt-3 space-y-1 text-sm">
                {p.includes.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
              <p className="mt-3 text-xs text-muted">Not included: {p.excludes.join(" · ")}</p>
            </Card>
          ))}
          <p className="text-xs text-muted">{ASSEMBLY.note}</p>
        </div>
        <div>
          <h2 className="mb-3 font-display text-lg font-semibold">{t("ui.requestAssembly")}</h2>
          <BookingForm kind="assembly" packages={ASSEMBLY.packages} extra="machine" />
        </div>
      </div>
    </main>
  );
}

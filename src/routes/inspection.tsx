import { createFileRoute, Link } from "@tanstack/react-router";
import { BookingForm } from "@/components/booking-form";
import { PageHero } from "@/components/page-hero";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useI18n } from "@/lib/i18n";
import { INSPECTION } from "@/lib/services";
import { dh } from "@/lib/utils";

export const Route = createFileRoute("/inspection")({ component: InspectionPage });

function InspectionPage() {
  const { t } = useI18n();
  return (
    <main>
      <PageHero
        eyebrow={t("nav.inspection")}
        title={t("svc.inspect")}
        description={t("svc.inspectDesc")}
      >
        <p className="text-sm text-muted">
          {t("svc.from")} {dh(INSPECTION.agadirPrice)} Agadir · {dh(INSPECTION.basePrice)} Casablanca / Rabat. {INSPECTION.travelNote}
        </p>
      </PageHero>
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 lg:grid-cols-[1.1fr_.9fr]">
        <div className="space-y-4">
          <div className="grid gap-3 sm:grid-cols-3">
            {INSPECTION.verdicts.map((v) => (
              <Card key={v.id} className="rounded-xl p-4">
                <Badge tone={v.id === "BUY" ? "ok" : v.id === "DONT" ? "danger" : "warn"}>{v.label}</Badge>
                <p className="mt-2 text-sm text-muted">{v.hint}</p>
              </Card>
            ))}
          </div>
          <Card className="rounded-2xl p-5">
            <h2 className="font-display text-lg font-semibold">Checklist</h2>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {INSPECTION.checklist.map((c) => (
                <li key={c} className="text-sm text-muted">
                  {c}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-muted">{INSPECTION.turnaround}</p>
            <Button asChild variant="soft" className="mt-4">
              <Link to="/reports/$id" params={{ id: "rep-4060" }}>
                Sample report
              </Link>
            </Button>
          </Card>
          <div className="grid gap-3 sm:grid-cols-2">
            {INSPECTION.packages.map((p) => (
              <Card key={p.id} className="rounded-xl p-4">
                <h3 className="font-medium">{p.name}</h3>
                <p className="font-display text-xl font-semibold tabular-nums">{dh(p.price)}</p>
                <p className="text-xs text-muted">{p.duration}</p>
                <ul className="mt-2 space-y-1 text-sm text-muted">
                  {p.includes.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
        <div>
          <h2 className="mb-3 font-display text-lg font-semibold">{t("nav.book")}</h2>
          <BookingForm kind="inspection" packages={INSPECTION.packages} extra="listing" />
        </div>
      </div>
    </main>
  );
}

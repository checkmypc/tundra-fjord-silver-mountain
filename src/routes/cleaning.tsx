import { createFileRoute } from "@tanstack/react-router";
import { BookingForm } from "@/components/booking-form";
import { PageHero } from "@/components/page-hero";
import { Card } from "@/components/ui/card";
import { useI18n } from "@/lib/i18n";
import { CLEANING } from "@/lib/services";
import { dh } from "@/lib/utils";

export const Route = createFileRoute("/cleaning")({ component: CleaningPage });

function CleaningPage() {
  const { t } = useI18n();
  return (
    <main>
      <PageHero eyebrow={t("nav.cleaning")} title={t("svc.clean")} description={t("svc.cleanDesc")} />
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 lg:grid-cols-2">
        <div className="grid gap-3 sm:grid-cols-2">
          {CLEANING.packages.map((p) => (
            <Card key={p.id} className="rounded-2xl p-5">
              <h3 className="font-display font-semibold">{p.name}</h3>
              <p className="font-display text-xl font-semibold tabular-nums">{dh(p.price)}</p>
              <p className="text-xs text-muted">{p.duration}</p>
              <ul className="mt-3 space-y-1 text-sm text-muted">
                {p.includes.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </Card>
          ))}
          <p className="sm:col-span-2 text-xs text-muted">{CLEANING.safety}</p>
        </div>
        <div>
          <h2 className="mb-3 font-display text-lg font-semibold">{t("nav.book")}</h2>
          <BookingForm kind="cleaning" packages={CLEANING.packages} extra="machine" />
        </div>
      </div>
    </main>
  );
}

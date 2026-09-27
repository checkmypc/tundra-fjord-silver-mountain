import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useI18n } from "@/lib/i18n";
import { USED_LISTINGS, type Verdict } from "@/lib/used";
import { dh } from "@/lib/utils";

export const Route = createFileRoute("/used")({ component: UsedPage });

function tone(v?: Verdict): "ok" | "warn" | "danger" | "neutral" {
  if (v === "BUY") return "ok";
  if (v === "NEGOTIATE") return "warn";
  if (v === "DONT") return "danger";
  return "neutral";
}

function UsedPage() {
  const { t } = useI18n();
  return (
    <main>
      <PageHero
        eyebrow={t("nav.used")}
        title={t("nav.used")}
        description="Sample used listings with inspection status. Always request a check before transferring money."
      >
        <Button asChild>
          <Link to="/inspection">{t("cta.btn")}</Link>
        </Button>
      </PageHero>
      <div className="mx-auto grid max-w-6xl gap-4 px-4 py-8 md:grid-cols-2">
        {USED_LISTINGS.map((u) => (
          <Card key={u.id} className="rounded-2xl p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-display text-lg font-semibold">{u.title}</h3>
                <p className="text-xs text-muted">
                  {u.city} · {u.condition}
                </p>
              </div>
              <Badge tone={u.inspected ? tone(u.verdict) : "neutral"}>
                {u.inspected ? u.verdict : "Not inspected"}
              </Badge>
            </div>
            <p className="mt-3 font-display text-2xl font-semibold tabular-nums ltr-isolate">{dh(u.asking)}</p>
            {u.fairValue > 0 && (
              <p className="text-xs text-muted">
                Fair value (estimate) <span className="ltr-isolate">{dh(u.fairValue)}</span>
              </p>
            )}
            <ul className="mt-3 space-y-1 text-sm text-muted ltr-isolate">
              <li>{u.cpu}</li>
              <li>{u.gpu}</li>
              <li>
                {u.ram} · {u.storage}
              </li>
            </ul>
            <p className="mt-3 text-sm">{u.notes}</p>
            {u.temps && (
              <p className="mt-2 text-xs text-muted">
                CPU load {u.temps.cpu}° · GPU {u.temps.gpu}°
                {u.ssdHealth != null ? ` · SSD ${u.ssdHealth}%` : ""}
              </p>
            )}
            <div className="mt-4 flex gap-2">
              {u.inspected && u.id === "used-casa-4060" && (
                <Button asChild variant="secondary" size="sm">
                  <Link to="/reports/$id" params={{ id: "rep-4060" }}>
                    Report
                  </Link>
                </Button>
              )}
              <Button asChild size="sm">
                <Link to="/inspection">{t("nav.inspection")}</Link>
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </main>
  );
}

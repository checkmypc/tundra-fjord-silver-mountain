import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Card } from "@/components/ui/card";
import { GUIDES } from "@/lib/guides";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/guides/")({ component: GuidesPage });

function GuidesPage() {
  const { t, lang } = useI18n();
  return (
    <main>
      <PageHero eyebrow={t("nav.guides")} title={t("nav.guides")} description="Short, Morocco-specific buying notes — not generic Reddit recaps." />
      <div className="mx-auto grid max-w-6xl gap-4 px-4 py-8 sm:grid-cols-2">
        {GUIDES.map((g) => (
          <Link key={g.slug} to="/guides/$slug" params={{ slug: g.slug }}>
            <Card className="h-full rounded-2xl p-5 transition-[box-shadow] hover:shadow-[var(--shadow-border-hover)]">
              <p className="text-[11px] font-semibold tracking-wider text-primary uppercase">{g.pillar}</p>
              <h2 className="mt-2 font-display text-lg font-semibold">{g.title[lang]}</h2>
              <p className="mt-2 text-sm text-muted">{g.excerpt[lang]}</p>
              <p className="mt-3 text-xs text-muted">{g.minutes} min</p>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  );
}

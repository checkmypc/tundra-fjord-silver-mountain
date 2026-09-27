import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { guideBySlug } from "@/lib/guides";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/guides/$slug")({ component: GuidePage });

function GuidePage() {
  const { slug } = Route.useParams();
  const g = guideBySlug(slug);
  const { lang, t } = useI18n();
  if (!g) throw notFound();
  return (
    <main>
      <PageHero eyebrow={g.pillar} title={g.title[lang]} description={g.excerpt[lang]} />
      <article className="mx-auto max-w-2xl px-4 py-10">
        {g.body[lang].map((p) => (
          <p key={p.slice(0, 24)} className="mb-4 text-base leading-7 text-fg">
            {p}
          </p>
        ))}
        <div className="mt-8 flex flex-wrap gap-2">
          <Button asChild>
            <Link to="/inspection">{t("cta.btn")}</Link>
          </Button>
          <Button asChild variant="secondary">
            <Link to="/guides">{t("nav.guides")}</Link>
          </Button>
        </div>
      </article>
    </main>
  );
}

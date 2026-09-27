import { createFileRoute } from "@tanstack/react-router";
import { BookingForm } from "@/components/booking-form";
import { PageHero } from "@/components/page-hero";
import { Card } from "@/components/ui/card";
import { useI18n } from "@/lib/i18n";
import { CONTACT } from "@/lib/services";

export const Route = createFileRoute("/contact")({ component: ContactPage });

function ContactPage() {
  const { t } = useI18n();
  return (
    <main>
      <PageHero eyebrow={t("nav.contact")} title={t("nav.contact")} description={`${CONTACT.hours} · ${CONTACT.cities.join(" · ")}`} />
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 lg:grid-cols-2">
        <div className="space-y-3">
          <Card className="rounded-2xl p-5">
            <p className="text-xs font-semibold tracking-wider text-muted uppercase">Email</p>
            <a className="text-primary" href={`mailto:${CONTACT.email}`}>
              {CONTACT.email}
            </a>
            <p className="mt-4 text-xs font-semibold tracking-wider text-muted uppercase">Social</p>
            <div className="mt-1 flex flex-col gap-1 text-sm">
              <a href={CONTACT.instagram} className="hover:text-primary">
                Instagram
              </a>
              <a href={CONTACT.tiktok} className="hover:text-primary">
                TikTok
              </a>
              <a href={CONTACT.facebook} className="hover:text-primary">
                Facebook
              </a>
            </div>
          </Card>
          <p className="text-sm text-muted">{t("foot.legal")}</p>
        </div>
        <BookingForm kind="inspection" extra="listing" />
      </div>
    </main>
  );
}

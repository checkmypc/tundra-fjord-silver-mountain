import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SAMPLE_REPORT } from "@/lib/used";
import { dh } from "@/lib/utils";

export const Route = createFileRoute("/reports/$id")({ component: ReportPage });

function ReportPage() {
  const { id } = Route.useParams();
  if (id !== SAMPLE_REPORT.id) throw notFound();
  const r = SAMPLE_REPORT;
  return (
    <main>
      <PageHero eyebrow="Verified inspection" title="Sample report · RTX 4060 tower" description={`${r.city} · ${r.date} · Tech ${r.technician}`}>
        <div className="flex flex-wrap items-center gap-3">
          <Badge tone="warn">{r.verdict}</Badge>
          <span className="text-sm text-muted">
            Asking {dh(r.asking)} · Fair {dh(r.fairValue)} · Offer {dh(r.suggestOffer)}
          </span>
        </div>
      </PageHero>
      <div className="mx-auto grid max-w-6xl gap-4 px-4 py-8 lg:grid-cols-2">
        <Card className="rounded-2xl p-5">
          <h2 className="mb-3 font-display font-semibold">Hardware</h2>
          <table className="w-full text-sm">
            <tbody>
              {r.hardware.map(([k, v, n]) => (
                <tr key={k} className="border-b border-border last:border-0">
                  <th className="py-2 pe-3 text-start text-muted">{k}</th>
                  <td className="py-2 ltr-isolate">{v}</td>
                  <td className="py-2 text-end text-xs text-muted">{n}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
        <div className="space-y-4">
          <Card className="rounded-2xl p-5">
            <h2 className="mb-3 font-display font-semibold">Temperatures</h2>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="rounded-lg bg-surface-2 p-3">CPU idle {r.temps.cpuIdle}°</div>
              <div className="rounded-lg bg-surface-2 p-3">CPU load {r.temps.cpuLoad}°</div>
              <div className="rounded-lg bg-surface-2 p-3">GPU idle {r.temps.gpuIdle}°</div>
              <div className="rounded-lg bg-surface-2 p-3">GPU load {r.temps.gpuLoad}°</div>
            </div>
          </Card>
          <Card className="rounded-2xl p-5">
            <h2 className="mb-3 font-display font-semibold">Issues</h2>
            <ul className="list-disc ps-4 text-sm text-muted">
              {r.issues.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </Card>
          <Button asChild>
            <Link to="/inspection">Book the same check</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}

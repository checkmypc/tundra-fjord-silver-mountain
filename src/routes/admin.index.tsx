import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ClipboardList, ShieldCheck, Wallet, Wrench } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { KindBadge, StatusBadge } from "@/components/admin/status-badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { KIND_LABEL, OPEN_STATUSES, STATUS_LABEL, bookingRevenue, useOps } from "@/lib/ops";
import { dh } from "@/lib/utils";
import type { BookingStatus, ServiceKind } from "@/lib/types";

export const Route = createFileRoute("/admin/")({ component: AdminHome });

function AdminHome() {
  const bookings = useOps((s) => s.bookings);
  const products = useOps((s) => s.products);
  const listings = useOps((s) => s.listings);
  const reports = useOps((s) => s.reports);
  const activity = useOps((s) => s.activity);
  const team = useOps((s) => s.team);

  const open = bookings.filter((b) => OPEN_STATUSES.includes(b.status ?? "new"));
  const done = bookings.filter((b) => b.status === "done");
  const revenue = bookingRevenue(bookings);
  const pendingListings = listings.filter((l) => !l.inspected).length;

  const byKind = (["inspection", "assembly", "cleaning"] as ServiceKind[]).map((k) => ({
    name: KIND_LABEL[k],
    count: bookings.filter((b) => b.kind === k).length,
    done: bookings.filter((b) => b.kind === k && b.status === "done").length,
  }));

  const byStatus = (Object.keys(STATUS_LABEL) as BookingStatus[]).map((s) => ({
    name: STATUS_LABEL[s],
    n: bookings.filter((b) => (b.status ?? "new") === s).length,
  }));

  const kpis = [
    { label: "Open jobs", value: String(open.length), hint: `${bookings.length} total requests`, icon: ClipboardList },
    { label: "Completed", value: String(done.length), hint: "Paid / closed inspections & builds", icon: ShieldCheck },
    { label: "Closed revenue", value: dh(revenue), hint: "Sum of done jobs (quoted / paid)", icon: Wallet },
    { label: "Live SKUs", value: String(products.length), hint: `${listings.length} used · ${reports.length} reports`, icon: Wrench },
  ];

  return (
    <div className="mx-auto max-w-6xl space-y-6 px-4 py-6 lg:px-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs font-semibold tracking-[0.14em] text-muted uppercase">Dashboard</p>
          <h1 className="font-display text-3xl font-semibold">Full access desk</h1>
          <p className="mt-1 max-w-xl text-sm text-muted">
            Every booking, price and inspection report for CHECKMYPC. Casablanca, Rabat, Agadir.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button asChild size="sm">
            <Link to="/admin/bookings">New job</Link>
          </Button>
          <Button asChild variant="secondary" size="sm">
            <Link to="/admin/used">Write report</Link>
          </Button>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {kpis.map((k) => {
          const Icon = k.icon;
          return (
            <Card key={k.label} className="rounded-2xl p-4">
              <div className="flex items-start justify-between gap-3">
                <p className="text-xs font-semibold tracking-wide text-muted uppercase">{k.label}</p>
                <span className="grid size-9 place-items-center rounded-lg bg-surface-2 text-primary">
                  <Icon className="size-4" />
                </span>
              </div>
              <p className="mt-3 font-display text-3xl font-semibold tabular-nums tracking-tight">{k.value}</p>
              <p className="mt-1 text-xs text-muted">{k.hint}</p>
            </Card>
          );
        })}
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card className="rounded-2xl p-5">
          <h2 className="font-display font-semibold">Jobs by service</h2>
          <p className="mb-4 text-xs text-muted">All-time in this console</p>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={byKind} barCategoryGap="28%">
                <CartesianGrid stroke="var(--border)" vertical={false} />
                <XAxis dataKey="name" tick={{ fill: "var(--muted)", fontSize: 12 }} axisLine={false} tickLine={false} />
                <YAxis allowDecimals={false} tick={{ fill: "var(--muted)", fontSize: 12 }} axisLine={false} tickLine={false} width={28} />
                <Tooltip
                  contentStyle={{
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    borderRadius: 12,
                    color: "var(--fg)",
                  }}
                />
                <Bar dataKey="count" name="All" fill="var(--primary)" radius={[6, 6, 0, 0]} />
                <Bar dataKey="done" name="Done" fill="var(--ok)" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
        <Card className="rounded-2xl p-5">
          <h2 className="font-display font-semibold">Pipeline</h2>
          <p className="mb-4 text-xs text-muted">{pendingListings} used listing{pendingListings === 1 ? "" : "s"} waiting for a check</p>
          <ul className="space-y-2">
            {byStatus.map((row) => (
              <li key={row.name} className="flex items-center gap-3 text-sm">
                <span className="w-28 text-muted">{row.name}</span>
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-surface-2">
                  <div
                    className="h-full rounded-full bg-primary"
                    style={{ width: `${bookings.length ? (row.n / bookings.length) * 100 : 0}%` }}
                  />
                </div>
                <span className="w-6 text-end font-mono tabular-nums">{row.n}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-muted">{team.filter((t) => t.active).length} active technicians</p>
        </Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.2fr_.8fr]">
        <Card className="rounded-2xl p-0">
          <div className="flex items-center justify-between px-5 py-4">
            <h2 className="font-display font-semibold">Latest requests</h2>
            <Link to="/admin/bookings" className="text-sm text-primary hover:underline">
              All bookings
            </Link>
          </div>
          <div className="divide-y divide-border">
            {bookings.slice(0, 6).map((b) => (
              <div key={b.id} className="flex flex-wrap items-center gap-3 px-5 py-3 text-sm">
                <div className="min-w-0 flex-1">
                  <p className="font-medium">{b.name}</p>
                  <p className="text-xs text-muted">
                    {b.city} · {new Date(b.createdAt).toLocaleString("fr-MA")}
                  </p>
                </div>
                <KindBadge kind={b.kind} />
                <StatusBadge status={b.status ?? "new"} />
                <span className="font-mono text-xs tabular-nums text-muted">{dh(b.quotedPrice || 0)}</span>
              </div>
            ))}
          </div>
        </Card>
        <Card className="rounded-2xl p-5">
          <h2 className="font-display font-semibold">Activity</h2>
          <ul className="mt-3 space-y-3">
            {activity.slice(0, 8).map((a) => (
              <li key={a.id} className="text-sm">
                <p>{a.text}</p>
                <p className="text-xs text-muted">{new Date(a.at).toLocaleString("fr-MA")}</p>
              </li>
            ))}
          </ul>
          <Button asChild variant="ghost" size="sm" className="mt-4">
            <Link to="/admin/catalog">
              Edit catalogue <ArrowUpRight className="size-4" />
            </Link>
          </Button>
        </Card>
      </div>
    </div>
  );
}

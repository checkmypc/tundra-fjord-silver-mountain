import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { PageHero } from "@/components/page-hero";
import { Card } from "@/components/ui/card";
import { readBookings } from "@/lib/bookings";
import type { Booking } from "@/lib/types";

export const Route = createFileRoute("/admin")({ component: AdminPage });

function AdminPage() {
  const [rows, setRows] = useState<Booking[]>([]);
  useEffect(() => setRows(readBookings()), []);
  return (
    <main>
      <PageHero
        eyebrow="Ops"
        title="Local requests"
        description="Bookings stay in this browser (no backend). Export by copy. Replace with a real inbox before launch."
      />
      <div className="mx-auto max-w-6xl px-4 py-8">
        {rows.length === 0 ? (
          <p className="text-sm text-muted">No requests yet.</p>
        ) : (
          <div className="space-y-3">
            {rows.map((b) => (
              <Card key={b.id} className="rounded-xl p-4 text-sm">
                <div className="flex flex-wrap justify-between gap-2">
                  <strong className="uppercase">{b.kind}</strong>
                  <span className="text-muted">{new Date(b.createdAt).toLocaleString("fr-MA")}</span>
                </div>
                <p className="mt-1">
                  {b.name} · {b.phone} · {b.city}
                </p>
                {b.packageId && <p className="text-muted">{b.packageId}</p>}
                {b.listingUrl && <p className="break-all text-muted">{b.listingUrl}</p>}
                {b.notes && <p className="mt-1">{b.notes}</p>}
              </Card>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
